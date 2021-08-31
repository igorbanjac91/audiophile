class Api::V1::OrdersController < ApplicationController

  def show
    @order = Order.find(params[:id])
  end
end