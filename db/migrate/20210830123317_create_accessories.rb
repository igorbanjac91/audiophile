class CreateAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :accessories do |t|
      t.integer :quantity
      t.string :name
      t.integer :product_id

      t.timestamps
    end
  end
end
