class ResponsesController < ApplicationController

    before_action :define_question, :define_response

    def new

    end

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
        # @number_correct = 0
        #if nil then set to 0 otherwise set session[:number_correct] to value;
        session[:number_correct] ||= 0
        # byebug
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            session[:number_correct] = session[:number_correct] +1
            # @number_correct = @number_correct + 1
            # puts "Correct"
            flash[:message] = "Correct" + response.question.correct_answer.to_s
        else
            # puts "Incorrect"
            flash[:message] = "Incorrect" +response.question.correct_answer.to_s
        end
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end
