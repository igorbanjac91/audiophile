json.partial! "api/v1/products/product", product: @product
json.also_like @also_like do |product| 
  json.id product.id
  json.slug product.slug
  json.also_name product.also_name
  json.mobile_image_url url_for(product.also_like_mobile_image)
  json.tablet_image_url url_for(product.also_like_tablet_image)
  json.desktop_image_url url_for(product.also_like_desktop_image)
end
