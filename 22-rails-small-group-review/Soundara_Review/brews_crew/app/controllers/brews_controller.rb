class BrewsController < ApplicationController
  #route for '/brews' that displays all of your coffees as links to their show pages
  def index
    @brews = Brew.all
  end

  def show
    @brew = Brew.find(params[:id])
    @purchases = Purchase.all.select{|purchase| purchase.brew_id == @brew.id}
  end

  # route to create a new brew
  def new
    #Brew { blend_name, origin, strength, notes}
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(strong_params)
    if @brew.save
      redirect_to @brew
    else
      render :new
    end
  end

  # route to edit a brew
  def edit
    @brew = Brew.find(params[:id])
  end

  def update
    @brew = Brew.find(params[:id])
    @brew.update(strong_params)
    redirect_to @brew
  end

  # route to '/brews/strongest' find the brews with the highest strength
  def strongest
    @brews = Brew.all.select {|m| m.strength == 5}
  end

  private
  def strong_params
    params.require(:brew).permit(:blend_name, :origin, :strength, :notes)
  end
end
