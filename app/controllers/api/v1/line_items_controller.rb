class Api::V1::LineItemsController < ApplicationController 

  def create
    @order = Order.find_or_initialize_by(id: session[:order_id])

    if @order.new_record?
      @order.save
      session[:order_id] = @order.id
    end

    @order.line_items.create(line_item_params)
  end

  protected 

    def line_item_params
      params.require(:line_item).permit(:quantity, :product_id)
    end
end