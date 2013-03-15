class Story

	jsonPhp: "./php/json.php?url="
	id: null
	url: null
	type: null
	data: null
	$div: null
	$StoriesManager: null
	storyClass: "_story"
	loadingClass: "_loading"
	loadedClass: "_loaded"
	template: null
	$Errors: null

	constructor: ->

		that = @
		@.$StoriesManager = $ "#StoriesManager"
		@.$Errors = $ "#Errors"

		if arguments.length == 4 || arguments.length == 3
			[url, type, id, data] = arguments
			
			@.url = url
			@.type = type
			@.id = "Story_" + id

			@.template = new TemplateSkimmer(data) if data

		else if arguments.length == 1
			[savedData] = arguments

			#@.data = savedData.data
			@.url = savedData.url
			@.type = savedData.type
			@.id = savedData.id

			@.template = new Template
			@.template.load(savedData.template)

		if arguments.length != 3
			headline = @.template.getHeadline( )

		html = """
				<div id='#{@.id}' class='#{@.storyClass} #{@.loadingClass}'>
					<table>
						<tr>
							<td><span class="cutHeadline" id='#{@.id}_HeadlineOnly'>✄</span></td>
							<td><span class="headline">#{headline}</span></td>
						</tr>
					</table>
				</div>
			"""
		@.$StoriesManager.append html
		@.$div = $ "#" + @.id
		@.$headlineOnly = @.$div.find("input")

		if arguments.length == 1
			@.$div.attr("class", savedData.classes)
		else if arguments.length == 4 || arguments.length == 3
			jsonUrl = null
			if @.type == "article"
				jsonUrl = encodeURIComponent "http://glass-output.prd.use1.nytimes.com/glass/outputmanager/v1/add.json?source=scoop&type=article&hbst=article-baseline&refer=glass-output.prd.use1.nytimes.com&url="
			else if @.type == "blog"
				jsonUrl = encodeURIComponent "http://glass-output.prd.use1.nytimes.com/glass/outputmanager/v1/add.json?source=wordpress&type=blogpost&url="
			@.getData jsonUrl if jsonUrl != null

		@.$div.on "dblclick", (event) -> that.handleDblclick(event)
		@.$div.find(".cutHeadline").on "click", (event) -> that.handleCutHeadline(event)

		$.subscribe "Story/updateHeadlineOnly", ->
			that.updateHeadlineOnly( )

	save: ->
		return {
			id: @.id
			url: @.url
			type: @.type
			template: @.template.save( )
			classes: $("#" + @.id).attr("class")
		}

	getData: (jsonUrl) ->
		that = @
		$.getJSON(@.jsonPhp + jsonUrl + @.url)
		.success((data) -> that.handleSuccess(data))
		.error((jqXHR, textStatus) -> that.handleError(jqXHR, textStatus));

	handleSuccess: (data) ->
		@.data = data
		@.processData(@.data)

	processData: (data) ->
		
		if @.type == "article"
			@.template = new TemplateScoop(data)
		else if @.type == "blog"
			@.template = new TemplateWordpress(data)

		headline = @.template.getHeadline(  ) 
		@.$div.find(".headline").html headline

		@.loaded( )

	handleError: (jqXHR, textStatus) ->
		@.$Errors.append jqXHR.responseText

	loaded: ->
		@.$div.removeClass @.loadingClass
		@.$div.addClass @.loadedClass

	html: ->
		return @.template.html( )

	handleDblclick: (event) ->
		@.template.generateEdit( )
		$("#LayoutManager").fadeOut(
			-> $("#Edit").fadeIn( )
		)

	handleCutHeadline: (event) ->
		@.template.setHeadlineOnly(true)

	updateHeadlineOnly: ->
		bool = @.template.isHeadlineOnly( )
		@.$headlineOnly.attr('checked', bool)







