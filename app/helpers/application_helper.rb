module ApplicationHelper
    def render_json_api_partial(*args, **kwargs)
        controller.prepend_view_path(Rails.root.join('app', 'views', 'api', 'v1'))
        previous_formats = lookup_context.formats
        lookup_context.formats = [:json]
        result = JbuilderTemplate.new(self) do |json|
            json.partial!(*args, **kwargs)
        end.attributes!
        lookup_context.formats = previous_formats
        result
    end
end
