class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # byebug
    @user = User.find_or_create_by(user_params)
    session[:user_id] = @user.id
    redirect_to students_path
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end
