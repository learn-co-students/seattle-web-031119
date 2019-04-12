class BrewsController < ApplicationController

    def index
        @brews = Brew.all
    end

    def new
        @brew = Brew.new
    end

    def create
        @brew = Brew.new(brews_params)
        @brew.save
        redirect_to @brew
    end

    def strongest
        @strongest = Brew.strongest
        redirect_to @strongest
    end

    def show
        @brew = Brew.find(params[:id])
        @purchases = @brew.purchases
    end

    def edit
        @brew = Brew.find(params[:id])
    end

    def update
        @brew = Brew.find(params[:id])
        @brew.update(brews_params)
        redirect_to @brew
    end

    def destroy
        @brew = Brew.find(params[:id])
        @brew.destroy
        redirect_to brews_path
    end

    private

    def brews_params
        params.require(:brew).permit!
    end

end
