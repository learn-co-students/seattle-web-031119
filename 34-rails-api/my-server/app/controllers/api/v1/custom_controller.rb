class Api::V1::CustomController < ApplicationController
  def beef
    render json: [22, 33, 55]
  end

  def roulette
    choice = [*1..6].sample
    if choice == 1
      render json: 'BANG!'
    else
      render json: 'click'
    end
  end
end
