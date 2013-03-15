class ElementSundayReview extends ElementCenterable

	constructor: (id, data = null) ->
		super id
		html = """<div id="#{@.id}" class="_element _elementSundayReview">Sunday Review</div>"""
		@.append html

		if data != null
			@.isCentered = data.isCentered

	html: (position) ->
		if position == @.top || position == @.bottom
			return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpC337.png" /></a></h4>'
		else if position == @.left || position == @.right
			if @.isCentered
				return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpC163.png" border="0" /></a></h4>'
			else
				return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpL163.png" border="0" /></a></h4>'
		else
			return ""