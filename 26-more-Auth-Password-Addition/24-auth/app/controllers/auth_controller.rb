class AuthController < ApplicationController

  def login
  end

  def create
    # byebug
    byebug
    @user = User.find_by(username: params[:username]).authenticate(params[:password])
    if @user
      session[:user_id] = @user.id # if @user
      redirect_to students_path
    else
      flash[:message] = "Incorrect Login information"
      redirect_to login_path
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
