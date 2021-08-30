json.partial! "api/v1/products/product", product: @product
json.also_like @also_like do |also_like| 
  json.id also_like.id
  json.name also_like.name
  json.mobile_image_url also_like.also_like_mobile_image.url
  json.tablet_image_url also_like.also_like_tablet_image.url
  json.desktop_image_url also_like.also_like_desktop_image.url
end
