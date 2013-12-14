class Postcard < ActiveRecord::Base
  include Magick

  attr_accessible :address_id, :message, :photo_chosen, :stripe_customer_id, :width, :height, :offset_top, :offset_left, :frame_width, :frame_height, :image
  has_attached_file :image

  after_post_process :save_image_dimensions

  belongs_to :address

  def save_image_dimensions
    geo = Paperclip::Geometry.from_file(image.queued_for_write[:original])
    self.image_width = geo.width
    self.image_height = geo.height
  end

  def front(params)
    if params[:photo_chosen]
      return params[:photo_chosen].gsub(".png", ".pdf")
    else
      # image.crop(x,y, width height)
      # File.new("/path/to/file.pdf") 
      # desired x = (editor x * desired width)/editor frame width
      # (offset_left * optimal_lob_width) / params[:frame_height]
      # .crop()

      # image_width
      # image_height
      # width
      # height
      # offset_top
      # offset_left
      # {"postcard"=>{"message"=>"Hello World!\r\n\r\nHfewifwi", "width"=>"879", "height"=>"585", "offset_top"=>"-53", "offset_left"=>"-109", "frame_width"=>"602", "frame_height"=>"589"}, "address"=>{"name"=>"Zachary Feldman", "line1"=>"191 Humboldt St, Apt 5", "line2"=>"", "city"=>"Brooklyn", "subregion"=>"NY", "country"=>"US", "zip"=>"11206"}, "state"=>"NY", "authenticity_token"=>"39mEUEdO9SpPqLxDQ8jpABMcCDhxXQdwunoRsexP5bA=", "payment_token"=>"tok_3BhytHCQ6AJuVN"}

      optimal_lob_width = 1800
      optimal_lob_height = 1200
      width_in_editor = width
      height_in_editor = height
      canvas = Image.new(1800,1200){self.density = 300}
      offset_x = offset_left.to_f * (optimal_lob_width.to_f/frame_width.to_f)
      offset_y = offset_top.to_f * (optimal_lob_height.to_f/frame_height.to_f)
      puts offset_y
      puts offset_x
      image_file = ImageList.new(image.path)

      width_calc = optimal_lob_width.to_f/frame_width.to_f
      height_calc = optimal_lob_height.to_f/frame_height.to_f
      ratio = [width_calc, height_calc].min
      resized_file = image_file.resize(width_in_editor*ratio, height_in_editor*ratio)
      final_image = canvas.composite(resized_file, offset_x, offset_y, AddCompositeOp)
      file_name = Rails.root + "tmp/temp_file_#{Time.now.to_i.to_s}.pdf"
      final_image.write(file_name){
        self.density = '300'
      }
      # modified_image = ImageList.new(image.path)
      # resized_image = modified_image.resize(((optimal_lob_width * width_in_editor)/ frame_width), ((optimal_lob_height * height_in_editor)/ frame_height))
      # extented_image = resized_image.extent(1800, 1200, )
      # file_name = Rails.root + "tmp/temp_file_#{Time.now.to_i.to_s}"
      # modified_image.write("#{Time.now.to_i.to_s}modified.pdf"){
      #   self.density = '300'
      # }
      # resized_image.write("#{Time.now.to_i.to_s}resized.pdf"){
      #   self.density = '300'
      # }
      # extented_image.write("#{Time.now.to_i.to_s}extented.pdf"){
      #   self.density = '300'
      # }
      return File.open(file_name)
    end
  end

  def bounding?
    bounding.nil? ? false : bounding
  end
end
