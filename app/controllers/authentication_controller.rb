class AuthenticationController < ApplicationController

  def new    
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
    end
  end

end
