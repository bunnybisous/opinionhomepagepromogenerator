class TemplateScoop extends Template

	constructor: (data) ->
		super

		@.setUrl @.data.cms.article.sub_domain + @.data.cms.article.publish_url
		
		@.headline.setValue @.data.cms.article.headline
		@.byline.setValue @.data.cms.article.byline
		@.summary.setValue @.data.cms.article.summary
		@.kicker.setValue @.data.cms.article.kicker	

		ArticleImages = (item for item in @.data.cms.article.related when item.name is "ArticleImages")
		ArticleImages = (item for item in ArticleImages[0].collection when item.name is "ArticleImages")
		relatedAssets = ArticleImages[0].relatedAssets

		if relatedAssets? && relatedAssets.length
			@.crops = relatedAssets[0].crops

		if @.crops? && @.crops.length
			@.getThumb("type", "thumbStandard", "thumbStandard")
			@.getThumb("width", 163, "163")

		if @.thumbs.length > 1
			for i in [0..@.thumbs.length - 1]
				if i == 0
					@.thumbs[i].setDisplay true
				else
					@.thumbs[i].setDisplay false

		rawRefers = @.data.cms.article.refers
		if rawRefers.length && rawRefers[0].content?
			matches = rawRefers[0].content.match /<[aA].*?>.*?<\/[aA]>/g
			for match in matches
				tr = new ValueRefer
				tr.setValue match
				@.refers.push tr

	getThumb: (property, expection, name) ->
		item = (item for item in @.crops when item[property] is expection)
		if item.length && item[0].content?
			v = new ValueThumb(name)
			v.setValue "http://i1.nyt.com/" + item[0].content
			@.thumbs.push v
