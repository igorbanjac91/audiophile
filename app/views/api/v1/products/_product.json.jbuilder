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
end
