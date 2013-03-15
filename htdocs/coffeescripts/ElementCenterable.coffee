class ElementCenterable extends Element

	values: [
		"isCentered"
	]

	constructor: (id) ->
		super id
		@.isCentered = true

	html: (position) ->
		return ""

	generateEdit: ->
		html = ""

		for value in @.values
			name = value.capitalize( )
			value = @[value]

			checked = ""
			if @.isCentered
				checked = "checked"

			html = ""
			html += """<tr>"""
			html += """<td>"""
			html += """<p><input id="Display_#{name}" name="Display_#{name}" type="checkbox" #{checked}/> Center?</p>"""
			html += """</td>"""
			html += """</tr>"""

		super(html)

	handleChange: ->
		for value in @.values
			selector = value.capitalize( )
			$value = $("#Display_" + selector)
			@[value] = $value.is(':checked')

		$.publish "LayoutManager/updateLayout"