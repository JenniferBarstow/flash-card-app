class GamesController < ApplicationController

  def new
    @game = Game.new
  end

  def create
    @game = Game.new
    @game.save
    redirect_to game_path(@game)
  end

  def show
    @questions_array = Question.all.to_json
  end
end
