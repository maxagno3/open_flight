module Api
  module V1
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session
  
      def index
        airlines = Airline.all

        render json: airlines.to_json(only: [:id, :name, :image_url, :slug], include: [:reviews])
      end


      def show
        airline = Airline.find_by(slug: params[:slug])

        render json: airline.to_json(only: [:id, :name, :image_url, :slug], include: [:reviews])
      end

      def create
        airline = Airline.new(airline_params)

        if airline.save
          render json: airline.to_json
        else
          render json: { error: airline.errors.messages }
        end
      end

      def update
        airline = Airline.find_by(slug: params[:slug])

        if airline.update(airline_params)
          render json: airline.to_json(only: [:id, :name, :image_url, :slug], include: [:reviews])
        else
          render json: { error: airline.errors.messages }
        end
      end

      def destroy
        airline = Airline.find_by(slug: params[:slug])

        if airline.destroy
          head :no_content
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      private

      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end

      # def options
      #   @options ||= Review.where(id: airline.id)
      # end
    end
  end
end
