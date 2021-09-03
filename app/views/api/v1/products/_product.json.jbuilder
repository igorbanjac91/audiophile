json.extract! product, :id, :name, :also_name, :cart_name, :slug, :description, :features, :price, :new
json.images do 
  if product.mobile_image.attached?
    json.mobile_image_url url_for(product.mobile_image)
  end
  if product.tablet_image.attached?
    json.tablet_image_url url_for(product.tablet_image)
  end
  if product.desktop_image.attached?
    json.desktop_image_url url_for(product.desktop_image)
  end
  if product.category_desktop_image.attached?
    json.category_desktop_image_url url_for(product.category_desktop_image)
  end
  if product.category_tablet_image.attached?
    json.category_tablet_image_url url_for(product.category_tablet_image)
  end
  if product.category_mobile_image.attached?
    json.category_mobile_image_url url_for(product.category_mobile_image)
  end
  json.gallery do 
    json.mobile product.mobile_gallery_images do |mobile_image|
      json.id mobile_image.id
      json.url url_for(mobile_image)
    end
    json.tablet product.tablet_gallery_images do |tablet_image|
      json.id tablet_image.id
      json.url url_for(tablet_image)
    end
    json.desktop product.desktop_gallery_images do |desktop_image|
      json.id desktop_image.id
      json.url url_for(desktop_image)
    end
  end
end
json.accessories do 
  json.array! product.accessories
end