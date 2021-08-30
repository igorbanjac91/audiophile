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
    @also_like = []
    while @also_like.length < 3
      random = rand(Product.count)
      @also_like = Product.where.not(name: "YX1 Wireless Earphones").limit(3).offset(random)
    end
  end
end