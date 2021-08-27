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
    @product = Product.find(params[:id])
  end
end