class MerbiesController < ApplicationController

  def index
    @merbies = Merby.all
  end

  def show
    @merby = Merby.find(params[:id])
  end

  def new
    @merby = Merby.new
  end

  def create
    @merby = Merby.create(merby_params)
    # @merby = Merby.create(name: params[:name],
    #              species: params[:species],
    #              kill_count: params[:kill_count],
    #              length: params[:length])
    byebug
    redirect_to merby_path(@merby)
  end

  def edit
    @merby = Merby.find(params[:id])
  end

  def update
    # byebug
    @merby = Merby.find(params[:id])
    @merby.update(merby_params)
    redirect_to merby_path(@merby)
  end

  private
    def merby_params
      byebug
      # params.require(:merby).permit
      params.require(:merby).permit!
    end
end
