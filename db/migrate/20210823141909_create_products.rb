class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :slug
      t.text :description
      t.text :features
      t.integer :price
      t.boolean :new, default: false

      t.timestamps
    end
  end
end
