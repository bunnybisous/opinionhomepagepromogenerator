class Template

	data: null
	url: null
	values: [
		"kicker"
		"headline",
		"byline",
		"summary",
	]
	refers: null
	thumbs: null
	refersBackup: null
	thumbsBackup: null

	getHeadline: ->
		return @.headline.getValue( )

	setUrl: (url) ->
		@.url = url + "?hp"

	constructor: (data) ->
		@.data = data

		@.refers = [ ]
		@.thumbs = [ ]
		@.refersBackup = [ ]
		@.thumbsBackup = [ ]

		for value in @.values
			@[value] = new Value(value)
			@[value + "Backup"] = new Value(value)
	
	save: ->
		template = {
			url: @.url
		}

		for value in @.values
			template[value] = @[value].save( )

		template.refers = [ ]
		for refer in @.refers
			template.refers.push refer.save( )

		template.thumbs = [ ]
		for thumb in @.thumbs
			template.thumbs.push thumb.save( )
		
		return template

	load: (data) ->
		@.data = data
		@.url = @.data.url

		for value in @.values
			it = @.data[value]
			@[value] = new Value
			@[value].set it.name, it.value, it.display

		for it in @.data.refers
			r = new ValueRefer
			r.set(it.name, it.text, it.href, it.display, it.icon)
			@.refers.push r

		for it in @.data.thumbs
			t = new ValueThumb
			t.set it.name, it.value, it.display
			@.thumbs.push t

	thumbHtml: (name, size) ->
		html = ""
		thumbs = (thumb for thumb in @.thumbs when thumb.getName( ) == name)
		for thumb in thumbs
			if thumb.getDisplay( )
				src = thumb.getValue( )
				html += """<div class="runaroundRight">"""
				html += """<div class="thumbnail">"""
				html += """<a href="#{@.url}"><img src="#{src}" #{size} /></a>"""
				html += """</div>"""
				html += """</div>"""
		return html

	htmlStory: ->
		html = ""
		html += """<div class="story">"""
		html += @.thumbHtml "163", 'width="163"'

		html += """<h6 class="kicker">#{@.kicker.value}</h6>""" if do @.kicker.test
		html += """<h5><a href="#{@.url}" >#{@.headline.value}</a></h5>""" if do @.headline.test

		html += @.thumbHtml "ThumbStandard", 'width="50" height="50"'

		html += """<h6 class="byline">#{@.byline.value}</h6>""" if do @.byline.test
		html += """<p class="summary flushBottom">#{@.summary.value}</p>""" if do @.summary.test
		
		if @.refers && @.refers.length
			html += """<ul class="refer">"""
			for refer in @.refers
			    html += "<li>" + refer.getValue( ) +  "</li>" if do refer.test
			html += """</ul>"""

		html += """</div>"""

	htmlHeadlineOnly: ->
		html = """<li class="headlineOnly"><a href="#{@.url}">#{@.headline.value}</a></li>"""

	html: ->
		html = ""
		if @.isHeadlineOnly( )
			html += @.htmlHeadlineOnly( )
		else
			html += @.htmlStory( )
	
	cloneArrayOfValues: (alpha) ->
		omega = [ ]
		for elem in alpha
			if elem instanceof ValueRefer
				v = new ValueRefer elem.getName( )
			else if elem instanceof ValueThumb
				v = new ValueThumb elem.getName( )
			else if elem instanceof Value
				v = new Value elem.getName( )
			if v
				v.setValue elem.getValue( )
				v.setDisplay elem.getDisplay( )
				omega.push v
		return omega

	backup: ->
		for value in @.values
			@[value + "Backup"] = jQuery.extend(true, { }, @[value])
		@.refersBackup = @.cloneArrayOfValues @.refers
		@.thumbsBackup = @.cloneArrayOfValues @.thumbs


	restore: ->
		for value in @.values
			@[value] = jQuery.extend(true, { }, @[value + "Backup"])
		@.refers = @.cloneArrayOfValues @.refersBackup
		@.thumbs = @.cloneArrayOfValues @.thumbsBackup

	generateEdit: ->

		@.backup( )

		$table = $ "#Edit table"

		html = ""

		html += """
			<tr>
				<td colspan="2">
					<input type="submit" value="Save" id="EditSave" class="editSave" />
					<input type="submit" value="Cancel" id="EditCancel" class="editCancel" />
				</td>
			</tr>
			"""

		checked = ""
		if @.isHeadlineOnly( )
			checked = "checked"

		html += """<tr>"""
		html += """<td><input id="Display_Headline_Only" name="Display_Headline_Only" type="checkbox" #{checked} /></td>"""
		html += """<td>"""
		html += """<p>Headline Only</p>"""
		html += """</td>"""
		html += """</tr>"""

		for value in @.values
			html += @[value].generateRow( )

		if @.refers.length
			for i in [0..@.refers.length - 1]
				html += @.refers[i].generateRow(i)

		html += """
				<tr>
					<td>&nbsp;</td>
					<td>
						<input type="submit" value="Add Refer" id="AddRefer" />
					</td>
				</tr>
				"""

		if @.thumbs.length
			for i in [0..@.thumbs.length - 1]
				html += @.thumbs[i].generateRow(i)

			display = true
			for thumb in @.thumbs
				if thumb.getDisplay( )
					display = false

			checked = ""
			if display
				checked = "checked"

			name = "No Thumb"
			html += """<tr>"""
			html += """<td><input id="Display_Thumb" name="Display_Thumb" type="radio" #{checked} value="-1" /></td>"""
			html += """<td>"""
			html += """<p>#{name}</p>"""
			html += """</td>"""
			html += """</tr>"""

		html += """
				<tr>
					<td>&nbsp;</td>
					<td>
						<p><input type="radio" id="AddImageType" name="AddImageType" checked value="ThumbStandard" /> ThumbStandard
						<input type="radio" id="AddImageType" name="AddImageType" value="163" /> 163</p>
						<textarea id="AddImageUrl"></textarea>
						<input type="submit" value="Add Image" id="AddImage" />
					</td>
				</tr>
				"""

		html += """
				<tr>
					<td colspan="2">
						<input type="submit" value="Save" id="EditSave" class="editSave" />
						<input type="submit" value="Cancel" id="EditCancel" class="editCancel" />
					</td>
				</tr>
				"""

		$table.empty( ).append(html)

		that = @
		$table.find(".editCancel").on "click", (event) -> that.handleCancel( )
		$table.find(".editSave").on "click", (event) -> that.handleSave( )
		$table.find("#AddRefer").on "click", (event) -> that.handleAddRefer( )
		$table.find("#AddImage").on "click", (event) -> that.handleAddImage( )
		$table.find("input:not(#Display_Headline_Only), textarea, select").on "change", (event) -> that.handleChange( )
		$table.find("input:not(#Display_Headline_Only), textarea, select").on "keyup", (event) -> that.handleChange( )
		$table.find("#Display_Headline_Only").on "change", (event) -> that.handleHeadlineOnly( )
		$table.find("#Display_Headline_Only").on "keyup", (event) -> that.handleHeadlineOnly( )
		$table.find("#AddKicker").on "click", (event) -> that.handleAddKicker( )
		$table.find("#AddLastName").on "click", (event) -> that.handleAddLastName( )

	handleAddRefer: ->
		tr = new ValueRefer
		tr.setValue """<a href="http://wwww.nytimes.com/">New Refer</a>"""
		@.refers.push tr
		@.generateEdit( )
		$.publish "LayoutManager/updateLayout"

	handleAddImage: ->
		name = $('input[name=AddImageType]:checked').val( )
		v = new ValueThumb(name)
		v.setValue $("#AddImageUrl").val( )
		v.setDisplay false
		@.thumbs.push v
		@.generateEdit( )
		$.publish "LayoutManager/updateLayout"

	closeEdit: ->
		$.publish "Story/updateHeadlineOnly"
		$("#Edit").fadeOut(
			-> $("#LayoutManager").fadeIn( )
		)

	handleCancel: ->
		@.closeEdit( )
		@.restore( )
		$.publish "LayoutManager/updateLayout"

	handleHeadlineOnly: ->
		$("#Edit table input:not(#Display_Headline_Only)").attr('checked', false)
		@.handleChange( )

	setHeadlineOnly: (bool) ->
		for value in @.values
			continue if value == "headline"
			@[value].setDisplay false

		if @.refers.length
			for i in [0..@.refers.length - 1]
				@.refers[i].setDisplay false

		for thumb in @.thumbs
			thumb.setDisplay false

		$.publish "LayoutManager/updateLayout"

	isHeadlineOnly: ->
		headlineOnly = true

		for value in @.values
			continue if value == "headline"
			if @[value].getDisplay( )
				headlineOnly = false

		if @.refers.length
			for i in [0..@.refers.length - 1]
				if @.refers[i].getDisplay( )
					headlineOnly = false

		for thumb in @.thumbs
			if thumb.getDisplay( )
				headlineOnly = false

		return headlineOnly

	handleChange: ->
		for value in @.values
			@[value].update( )
			selector = @[value].getName( )
			$("#Display_Headline_Only").attr('checked', false) if $("#Display_" + selector).is(':checked')

		$("#Display_Headline_Only").attr('checked', true) if @.isHeadlineOnly( )

		if @.refers.length
			for i in [0..@.refers.length - 1]
				@.refers[i].update(i)

		v = $('input[name=Display_Thumb]:checked').val( )
		for thumb in @.thumbs
			thumb.setDisplay false
		@.thumbs[v].setDisplay true if v >= 0

		$.publish "LayoutManager/updateLayout"

	handleSave: ->
		@.closeEdit( )
		$.publish "LayoutManager/updateLayout"

	handleAddKicker: ->
		kicker = $("#Value_Kicker").val( )
		$("#Display_Kicker").attr 'checked', false
		$hed = $("#Value_Headline")
		$hed.val(kicker + ": " + $hed.val( ))
		@.handleChange( )

	handleAddLastName: ->
		byline = $("#Value_Byline").val( )
		$("#Display_Byline").attr 'checked', false
		$hed = $("#Value_Headline")
		pieces = byline.split(" ")
		lastName = pieces[pieces.length - 1]
		lastName = lastName.toLowerCase( )
		lastName = lastName.capitalize( )
		$hed.val(lastName + ": " + $hed.val( ))
		@.handleChange( )