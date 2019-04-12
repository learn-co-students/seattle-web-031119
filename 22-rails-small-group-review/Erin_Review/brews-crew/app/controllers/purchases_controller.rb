class PurchasesController < ApplicationController
  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.new(purchase_params)
    @purchase.save
    redirect_to purchase_path(@purchase)
  end

  def show
    @purchase = Purchase.find(params[:id])
    @brews = @purchase.brews
  end

  def index
    @purchases = Purchase.all
  end

  private

  def purchase_params
    # At the end of the review session, it looked like this:
    # params.require(:purchase).permit(:customer_id, :price, :brew_ids => [])
    params.require(:purchase).permit(:customer_id, :price, :size, :brew_ids => [])
  end
end
