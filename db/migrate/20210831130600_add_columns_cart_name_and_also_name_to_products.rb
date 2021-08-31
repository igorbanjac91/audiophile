class AddColumnsCartNameAndAlsoNameToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :cart_name, :string
    add_column :products, :also_name, :string
  end
end
