class ChatController < ApplicationController
  before_action :authenticate!

  # display last 20 messages
  def show
    @messages = Message.order(created_at: :asc).last(20)
  end

  private

  # redirect user to /login if they have not picked a username
  def authenticate!
    redirect_to login_path unless session[:username]
  end
end
