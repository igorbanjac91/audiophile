json.extract! product, :id, :name, :slug, :description, :features, :price, :new
json.images do 
  if product.mobile_image.attached?
    json.mobile_image_url product.mobile_image.url
  end
  if product.tablet_image.attached?
    json.tablet_image_url product.tablet_image.url
  end
  if product.desktop_image.attached?
    json.desktop_image_url product.desktop_image.url
  end
  if product.category_desktop_image.attached?
    json.category_desktop_image_url product.category_desktop_image.url
  end
  if product.category_tablet_image.attached?
    json.category_tablet_image_url product.category_tablet_image.url
  end
  if product.category_mobile_image.attached?
    json.category_mobile_image_url product.category_mobile_image.url
  end
  json.gallery do 
    json.mobile product.mobile_gallery_images do |mobile_image|
      json.id mobile_image.id
      json.url mobile_image.url
    end
    json.tablet product.tablet_gallery_images do |tablet_image|
      json.id tablet_image.id
      json.url tablet_image.url
    end
    json.desktop product.desktop_gallery_images do |desktop_image|
      json.id desktop_image.id
      json.url desktop_image.url
    end
  end
end
json.accessories do 
  json.array! product.accessories
end
