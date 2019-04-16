class AuthController < ApplicationController

  def login
  end

  def create
    # byebug
    @user = User.find_by(username: params[:username])
    if @user
      session[:user_id] = @user.id # if @user
      redirect_to students_path
    else
      flash[:message] = "Incorrect Login information"
      redirect_to login_path
    end
  end
  # def create
  #   byebug
  #   @user = User.find_or_create_by(user_params)
  #   session[:user_id] = @user.id
  #   redirect_to students_path
  # end

  private
  # def user_params
  #   params.require(:user).permit(:username)
  # end
end
