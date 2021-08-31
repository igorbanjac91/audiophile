json.partial! "api/v1/products/product", product: @product
json.also_like @also_like do |product| 
  json.id product.id
  json.also_name product.also_name
  json.mobile_image_url product.also_like_mobile_image.url
  json.tablet_image_url product.also_like_tablet_image.url
  json.desktop_image_url product.also_like_desktop_image.url
end
