class CreateDiscounts < ActiveRecord::Migration
  def change
    create_table :discounts do |t|
      t.string :code
      t.string :dtype
      t.float :amount
      t.integer :uses

      t.timestamps
    end
  end
end
