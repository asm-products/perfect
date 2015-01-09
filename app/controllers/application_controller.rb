class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :expire_hsts

  private
  
  def expire_hsts
    response.headers["Strict-Transport-Security"] = 'max-age=0'
  end


end
