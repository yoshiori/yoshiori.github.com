module Jekyll
  class HatenaIdTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      attrs = markup.strip.split
      @hatena_id = attrs.first
      @detail = attrs.last == "detail"
    end

    def render(context)
      result = "<a href=\"http://d.hatena.ne.jp/#{@hatena_id}/\">"
      if @detail
        result << "<img width=\"16\" alt=\"id:#{@hatena_id}\" src=\"http://www.hatena.ne.jp/users/#{@hatena_id}/profile_s.gif\" height=\"16\" style=\"border: none; vertical-align: middle;margin-right: 4px; margin-left: 2px; margin-bottom: 2px;\" />"
      end
      result << "id:#{@hatena_id}</a>"
      result
    end
  end
end

Liquid::Template.register_tag("id", Jekyll::HatenaIdTag)
