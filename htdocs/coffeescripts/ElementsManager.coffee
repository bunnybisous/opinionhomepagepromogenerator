class ElementsManager extends PositionsManager
	
	$ElementsManager: null
	elements: [ ]

	constructor: (data = null) ->
		
		if data == null
			@.elements.push new ElementTheOpinionPages @.elements.length
			@.elements.push new ElementSundayReview @.elements.length
			@.elements.push new ElementKicker @.elements.length, "More in Opinion"
			@.elements.push new ElementKicker @.elements.length, "Op-Ed Columnists"
		else
			for elem in data.elements
				if elem.class == "ElementTheOpinionPages"
					@.elements.push new ElementTheOpinionPages elem.id, elem
				else if elem.class == "ElementSundayReview"
					@.elements.push new ElementSundayReview elem.id, elem
				else if elem.class == "ElementKicker"
					@.elements.push new ElementKicker elem.id, elem.text

		that = @
		$(".addKicker").on "click", ->
			that.addKicker( )

	addKicker: ->
		@.elements.push new ElementKicker @.elements.length

	html: ($child, position) ->
		id = $child.attr("id").split("_")[1]
		html = @.elements[id].html position
		return html

	save: ->
		save = [ ]
		for element in @.elements
			save.push element.save( ) 
		return save