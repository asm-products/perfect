class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :line2
      t.string :city
      t.string :subregion
      t.string :country
      t.integer :lob_id
      t.string :zip
      t.string :phone
      t.string :name

      t.timestamps
    end
  end
end
