class TemplateWordpress extends Template

	thumbFactory: new ThumbFactory

	constructor: (data) ->
		super

		@.setUrl @.data.blogpost.url
		
		@.headline.setValue @.data.blogpost.post_title
		@.byline.setValue @.data.blogpost.byline
		@.summary.setValue @.data.blogpost.post_excerpt
		@.kicker.setValue @.data.blogpost.kicker
		
		icon = @.thumbFactory.get(data.blogpost.url, data.blogpost.post_categories)
		if icon != null
			v = new ValueThumb("thumbStandard")
			v.setValue icon
			@.thumbs.push v