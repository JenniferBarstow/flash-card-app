class GamesController < ApplicationController

  def new
    @game = Game.new
  end

  def create
    @game = Game.new
    # if  @game.user_id = current_user.id
    #   @game.save
    #   redirect_to game_path(@game)
    # else
      @game.save
      redirect_to game_path(@game)
    # end
  end

  def show
    @questions_array = [{number_1: 1, number_2: 9, operator: "+" },
                     {number_1: 4, number_2: 2, operator: "-" },
                     {number_1: 5, number_2: 3, operator: "*" },
                     {number_1: 3, number_2: 6, operator: "+" },
                     {number_1: 7, number_2: 2, operator: "-" },
                     {number_1: 2, number_2: 5, operator: "*" },
                     {number_1: 8, number_2: 3, operator: "+" },
                     {number_1: 3, number_2: 1, operator: "-" },
                     {number_1: 10, number_2: 2, operator: "*" },
                     {number_1: 6, number_2: 4, operator: "+" }
                   ].to_json

  end


end
