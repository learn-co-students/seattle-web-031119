class PencilsController < ApplicationController
#before_action for params[:id]
before_action :set_pencil, only: [:show]
  def index
    @pencils = Pencil.all
  end

  def show
  end

  def new
    @pencil = Pencil.new
  end

  def create
    # @pencil = Pencil.new(params[:pencil])
    @pencil = Pencil.new(pencil_params)
    if @pencil.valid?
      @pencil.save
      redirect_to @pencil #pencil_path(@pencil)
    else
      @errors = @pencil.errors.full_messages
      render :new
    end
  end

private
  def set_pencil
    @pencil = Pencil.find(params[:id])
  end

  def pencil_params
    params.require(:pencil).permit(:owner_name, :lead_size, :color, :favorite)
  end
end
