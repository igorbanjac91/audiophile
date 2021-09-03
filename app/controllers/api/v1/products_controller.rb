class Api::V1::ProductsController < ApplicationController 

  def index
    if params[:category]
      @category = Category.find_by(name: params[:category])
      @products = Product.where(category_id: @category.id)
    else
      @products = Product.all
    end

  end
  
  def show
    @product = Product.find_by(slug: params[:id])
    @also_like = Product.where.not(id: @product.id)
    .where.not(name: "YX1 Wireless Earphones")
    .limit(3)
  end
end