class LayoutManager extends PositionsManager

	divider: true

	constructor: ->

		filename = String(window.location).split("#")[1]
		if filename
			$("#saveFileName").val(filename)
			$.getJSON @.openPhp + """../savedData/#{filename}.json""", (data) -> that.handleLoadEvent(data)

		else
			@.storiesManager = new StoriesManager
			@.elementsManager = new ElementsManager

		@.$OpinionModule = $("#OpinionModule")
		@.$Html = $("#Html")
		@.$RegionTop = $("#RegionTop")
		@.$RegionLeft = $("#RegionLeft")
		@.$RegionRight = $("#RegionRight")
		@.$RegionBottom = $("#RegionBottom")

		@.$sortables = $("#StoriesManager, ._region, ._elements")
		@.$regions = $("._region")

		@.$sortables.sortable({
			connectWith: "._connectedSortable"
		}).disableSelection( )

		that = @
		@.$regions.bind "sortupdate", ->
			that.handleUpdate( )

		$.subscribe "LayoutManager/updateLayout", ->
			that.handleUpdate( )

		$("#Input_Divider").on "click", ->
			that.handleDivider( )

		$(".saveToFile").on "click", (event) ->
			$("#dialogConfirmSave").dialog({
				resizable: false,
				height: 220,
				modal: true,
				buttons: {
					Save: ->
						that.handleSaveEvent( )
					Cancel: ->
						$(this).dialog("close")
				}
			})

		$(".openFile").on "click", (event) ->

			$.getJSON './php/files.php', (data) ->

				files = [ ]
				for filename in data
					filename = filename.split(".")[0]
					href = window.location.href.split("#")[0]
					files.push """<p><a data-href="#{href}##{filename}">#{filename}</a></p>"""

				html = files.join("")

				$("#dialogOpenFile .fileList").html(html)

				$("#dialogOpenFile .fileList").find("a").click (event) ->
					anchor = $(event.target)
					href = anchor.data("href")
					document.location = href

				$( "#dialogOpenFile" ).dialog({
					height: 220,
					modal: true
				})

		$(window).on "hashchange", (event) ->
			document.location.reload(true)

	handleDivider: ->
		@.divider = $("#Input_Divider").is(':checked')
		@.updateLayout( )

	handleUpdate: ->
		@.updateLayout( )

	updateLayout: ->
		html = ""

		html += """<div class="opinionModule">""" if @.$RegionTop.children( ).length || @.$RegionLeft.children( ).length || @.$RegionRight.children( ).length  || @.$RegionBottom.children( ).length

		html += @.layout @.$RegionTop, @.top if @.$RegionTop.children( ).length

		if @.$RegionLeft.children( ).length || @.$RegionRight.children( ).length

			style = ""
			style = """noBackground""" if @.divider == false

			html += """
					<div class="subColumn-2 wrap layout #{style}">
						<div class="column">
							<div class="insetH">
					"""

			html += @.layout @.$RegionLeft, @.left if @.$RegionLeft.children( ).length

			html += """
					</div>
						</div>
						<div class="column lastColumn">
					<div class="insetH">
					"""

			html += @.layout @.$RegionRight, @.right if @.$RegionRight.children( ).length

			html += """
							</div>
						</div>
					</div>
					"""
        

		html += @.layout @.$RegionBottom, @.bottom if @.$RegionBottom.children( ).length

		html += """</div>""" if @.$RegionTop.children( ).length || @.$RegionLeft.children( ).length || @.$RegionRight.children( ).length  || @.$RegionBottom.children( ).length
		
		@.$OpinionModule.html html

		$('li.headlineOnly').each ->
   			return if $(this.parentNode).hasClass('headlinesOnly')
   			$(this).nextUntil(':not(li.headlineOnly)').andSelf( ).wrapAll('<ul class="headlinesOnly">');
		$('li.headlineOnly').removeAttr "class"

		html = @.$OpinionModule.html( )

		###
		images must contain a closing slash for scoop to validate the generated html
		###
		
		matches = html.match /(<img.*?>)/g
		if matches != null
			for match in matches
				if match.indexOf "/>" == -1
					fixed = match.slice(0, -1) + " />"
					html = html.replace(match, fixed)


		@.$Html.html @.style(html)

		@.$OpinionModule.find("a").attr("target", "_blank")

	style: (html) ->
		return `style_html(html, {
			'indent_size': 2,
			'indent_char': ' ',
			'max_char': 78,
			'brace_style': 'expand',
			'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u']
		});`

	layout: ($region, position) ->
		html = ""
		children = $region.children( )
		for child in children
			html += @.layoutChild $(child), position
		return html

	layoutChild: ($child, position) ->
		html = ""
		html += @.elementsManager.html $child, position if $child.hasClass "_element"
		html += @.storiesManager.html $child if $child.hasClass "_story"
		return html

	handleSaveEvent: ->
		filename = $("#saveFileName").val( ).trim( )
		if /^[\w-]*$/i.test(filename)
			@.save( )
			$("#dialogConfirmSave").dialog("close")
		else
			$("#dialogConfirmSave .error").css("display", "block")

	save: ->
		save = { }
		save.includeDivider = $("#Input_Divider").is(':checked');
		save.stories = @.storiesManager.save( )
		save.elements = @.elementsManager.save( )
		save.regions = { }
		save.regions.top = @.saveRegion(@.$RegionTop)
		save.regions.left = @.saveRegion(@.$RegionLeft)
		save.regions.right = @.saveRegion(@.$RegionRight)
		save.regions.bottom = @.saveRegion(@.$RegionBottom)

		$.post("./php/save.php", {
			filename: $("#saveFileName").val( )
			content: JSON.stringify(save)
		}).success ->
			href = String(window.location).split("#")[0]
			history.pushState(null, null, href + "#" + $("#saveFileName").val( ))

	saveRegion: ($region) ->
		region = [ ]
		children = $region.children( )
		for child in children
			region.push child.id
		return region

	handleLoadEvent: (data) ->
		$("#Input_Divider").attr("checked", data.includeDivider);
		@.divider = data.includeDivider;
		@.storiesManager = new StoriesManager(data)
		@.elementsManager = new ElementsManager(data)
		@.loadRegion @.$RegionTop, data.regions.top
		@.loadRegion @.$RegionLeft, data.regions.left
		@.loadRegion @.$RegionRight, data.regions.right
		@.loadRegion @.$RegionBottom, data.regions.bottom
		$.publish "LayoutManager/updateLayout"

	loadRegion: ($region, data) ->
		for id in data
			$("#" + id).detach( ).appendTo($region)

