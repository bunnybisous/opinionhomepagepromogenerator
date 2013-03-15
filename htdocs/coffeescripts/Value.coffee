class Value

	name: null
	value: null
	display: null

	constructor: (name = null) ->
		@.display = true
		@.setName name.capitalize( ) if name

	save: ->
		return {
			name: escape(@.name)
			value: escape(@.value)
			display: @.display
		}

	test: ->
		@.value && @.display

	set: (n, v, d) ->
		@.setName unescape(n)
		@.setValue unescape(v)
		@.setDisplay d

	get: ->
		[@.getName( ), @.getValue( ), @.getDisplay( )]


	setName: (n) ->
		@.name = unescape(n)

	getName: ->
		@.name

	setDisplay: (d) ->
		@.display = d

	getDisplay: ->
		@.display

	setValue: (v) ->
		@.value = unescape(jsprettify.prettifyStr v)

	getValue: ->
		@.value

	update: ->
		selector = @.getName( )
		$value = $("#Value_" + selector)
		@.setValue $value.val( ) if $value.length
		@.setDisplay $("#Display_" + selector).is(':checked') if $value.length && selector != "Headline"

	generateRow: ->

		[name, value, display] = @.get( )

		checked = ""
		if display
			checked = "checked"

		html = ""
		html += """<tr>"""
		if name != "Headline"
			html += """<td><input id="Display_#{name}" type="checkbox" #{checked} /></td>"""
		else
			html += """<td>&nbsp;</td>"""
		html += """<td>"""
		html += """<p>#{name}</p>"""
		html += """<textarea id="Value_#{name}">#{value}</textarea>"""
		if name == "Headline"
			html += """<p><input type="submit" id="AddKicker" value="Add Kicker"> <input type="submit" id="AddLastName" value="Add Last Name"></p>"""
		html += """</td>"""
		html += """</tr>"""
		return html