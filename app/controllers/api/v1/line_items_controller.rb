class Api::V1::LineItemsController < ApplicationController 

  def create
    @order = Order.find_or_initialize_by(id: session[:order_id])

    respond_to do |format|
      if @order.new_record?
        @order.save
        session[:order_id] = @order.id
      end
      format.json { render json: { order_id: session[:order_id] }, status: :ok }
    end

    @order.line_items.create(line_item_params)
  end

  def destroy
    LineItem.destroy(params[:id])
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  protected 

    def line_item_params
      params.require(:line_item).permit(:quantity, :product_id)
    end
end