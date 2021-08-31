json.extract! order, :id
json.line_items order.line_items do |line_item| 
  json.quantity line_item.quantity
  json.product do 
    json.id line_item.product.id
    json.cart_name line_item.product.cart_name
    json.price line_item.product.price
    json.cart_image line_item.product.cart_image.url
  end
end