class ElementTheOpinionPages extends ElementCenterable
	
	constructor: (id) ->
		super id
		html = """<div id="#{@.id}" class="_element _elementTheOpinonPages">The Opinion Pages</div>"""
		@.append html

	html: (position) ->
		if position == @.top || position == @.bottom
			return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpC337.png" /></a></h4>'
		else if position == @.left || position == @.right
			if @.isCentered
				return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpC163.png" border="0" /></a></h4>'
			else
				return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpL163.png" border="0" /></a></h4>'
		else
			return ""