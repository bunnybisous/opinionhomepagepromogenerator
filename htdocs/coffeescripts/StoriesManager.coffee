class StoriesManager extends JsonManager
	
	stories: [ ]
	$StoriesManager: null

	constructor: (data = null) ->
		@.$StoriesManager = $ "#StoriesManager" if @.$StoriesManager == null
		
		if(data == null)
			@.loadJson( )
		else
			@.handleLoadedData(data)

		that = @
		$(".addArticle").on "click", (event) -> that.handleAddClick event
	
	loadJson: ->
		jsonFeed = "http://cms-service.prd.nytimes.com/data/feeds/outgoing/mobile/v1/json/full/opinion.json"
		that = @
		$.getJSON @.jsonPhp + jsonFeed, (data) -> that.handleJson(data)

	handleJson: (data) ->
		@.$StoriesManager.empty( )
		@.stories.push story = new Story item.url, item.type, @.stories.length, item for item in data.assets

	addWordpress: (url) ->
		@.stories.push story = new Story url, "blog", @.stories.length

	addScoop: (url) ->
		@.stories.push story = new Story url, "article", @.stories.length

	handleAddClick: (event) ->
		$articleUrl = $("#articleUrl")
		articleUrl = $articleUrl.val( )
		articleUrl = articleUrl.split("?")[0]
		$articleUrl.val ""

		if $(event.target).hasClass "scoop"
			@.addScoop articleUrl
		else if $(event.target).hasClass "wordpress"
			@.addWordpress articleUrl

	html: ($child) ->
		id = $child.attr("id").split("_")[1]
		return @.stories[id].html( )

	save: ->
		save = [ ]
		for story in @.stories
			save.push story.save( ) 
		return save

	handleLoadedData: (data) ->
		@.$StoriesManager.empty( )
		for storyData in data.stories
			@.stories.push new Story(storyData)