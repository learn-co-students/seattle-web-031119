class PurchasesController < ApplicationController

    def index
        @purchases = Purchase.all
    end

    def new
        @purchase = Purchase.new
    end

    def create
        @purchase = Purchase.new(purchase_params)
        @purchase.save
        redirect_to @purchase
    end

    def show
        @purchase = Purchase.find(params[:id])
    end

    private

    def purchase_params
        params.require(:purchase).permit!
    end

end
