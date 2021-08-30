json.partial! "api/v1/products/product", product: @product
json.also_like do 
  json.array! @also_like
end
