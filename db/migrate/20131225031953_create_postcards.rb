class CreatePostcards < ActiveRecord::Migration
  def change
    create_table :postcards do |t|
      t.integer :address_id
      t.integer :stripe_customer_id
      t.integer :lob_id
      t.text :message
      t.string :photo_chosen
      t.integer :width
      t.integer :height
      t.integer :offset_top
      t.integer :offset_left
      t.boolean :bounding
      t.integer :image_width
      t.integer :image_height
      t.integer :frame_width
      t.integer :frame_height

      t.timestamps
    end
  end
end
