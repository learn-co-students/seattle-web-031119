class BrewsController < ApplicationController
  before_action :set_brew, only: [:destroy, :edit, :update, :show]

  def index
    @brews = Brew.all
  end

  def destroy
    @brew.destroy
    redirect_to brews_path
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    @brew.save
    redirect_to brews_path
  end

  def update
    @brew.update(brew_params)
    redirect_to brews_path
  end

  def strongest
    @brew = Brew.find_by(strength: Brew.maximum(:strength))
  end

  def show
    @customers = @brew.purchases.map(&:customer).uniq
    # This is equivalent (still doing the mapping in ruby)
    # @customers = @brew.purchases.map { |purchase|  purchase.customer}.uniq
    # This is a way to make ActiveRecord do the mapping in SQL
    # @customers = Customer.where(:id => @brew.purchases.pluck(:customer_id)).distinct
  end

  private

  def set_brew
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:strength, :blend_name, :origin, :notes)
  end
end
