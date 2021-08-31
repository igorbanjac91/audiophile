json.extract! order, :id
json.line_items order.line_items do |line_item| 
  json.qunatity line_item.quantity
  json.product do 
    json.name line_item.product.name
    json.price line_item.product.price
  end
end