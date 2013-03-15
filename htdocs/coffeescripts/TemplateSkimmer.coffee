class TemplateSkimmer extends Template

	thumbFactory: new ThumbFactory

	constructor: (data) ->
		super
		
		@.setUrl @.data.url

		@.headline.setValue @.data.title
		
		if @.data.byline
			matches = @.data.byline.match /(<.*?>)(.*)(<\/.*?>)/
			if matches[2]? && matches[2]
				@.byline.setValue matches[2]
			else
				@.byline.setValue ""
				@.byline.setDisplay false
		else
			@.byline.setValue ""
			@.byline.setDisplay false

		@.summary.setValue @.data.summary
		@.kicker.setValue @.data.sectionDisplayName

		icon = @.thumbFactory.get(data.url)
		if icon != null
			v = new ValueThumb("thumbStandard")
			v.setValue icon
			@.thumbs.push v