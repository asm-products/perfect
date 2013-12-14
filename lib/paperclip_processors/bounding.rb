module Paperclip
  class Bounding < Thumbnail
    def transformation_command
      if bounding_command
        bounding_command
      else
        super
      end
    end
    
    def bounding_command
      target = @attachment.instance
      if target.bounding?
        
        " -crop '#{target.crop_w.to_i}x#{target.crop_h.to_i}+#{target.crop_x.to_i}+#{target.crop_y.to_i}'"
      end
    end
  end
end