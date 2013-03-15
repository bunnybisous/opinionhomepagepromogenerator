class ValueThumb extends Value

	setValue: (v) ->
		@.value = v.trim( )

	generateRow: (iter) ->

		[name, src, display] = @.get( )

		if(name == "ThumbStandard")
			size = 'width="50" height="50"'
		else if(name == "163")
			size = 'width="163"'

		checked = ""
		if display
			checked = "checked"

		html = ""
		html += """<tr>"""
		html += """<td><input id="Display_Thumb" name="Display_Thumb" type="radio" #{checked} value="#{iter}" /></td>"""
		html += """<td>"""
		html += """<p>#{name}</p>"""
		html += """<img src="#{src}" #{size} />"""
		html += """</td>"""
		html += """</tr>"""
		return html