class PurchasesController < ApplicationController
  # route to create a new brew
  def index
    @purchases = Purchase.all
  end

  def new
    #Brew { blend_name, origin, strength, notes}
    @purchase = Purchase.new
  end

  def show
    @purchase = Purchase.find(params[:id])
  end

  def create
    params[:purchase][:price] = params[:purchase][:price].to_f
    @purchase = Purchase.new(strong_params)
    @purchase.save
    redirect_to @purchase
  end

  private
  def strong_params
    params.require(:purchase).permit(:customer_name, :price, :brew_id, :id)
  end
end
