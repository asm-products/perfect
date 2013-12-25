class AddAttachmentImageToPostcards < ActiveRecord::Migration
  def self.up
    change_table :postcards do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :postcards, :image
  end
end
