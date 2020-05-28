class Api::V1::ApiV1Controller < ApplicationController
    def render_errors_for(model)
        render status: :unprocessable_entity, partial: 'errors/errors', locals: { errors: model.errors }
    end
end
