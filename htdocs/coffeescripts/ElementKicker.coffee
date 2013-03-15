class ElementKicker extends Element
	
	values: [
		"text"	
	]

	constructor: (id, text) ->
		super id
		text = "Kicker" if !text
		@.text = text
		html = """<div id="#{@.id}" class="_element _elementKicker">Kicker: #{text}</div>"""
		@.append html

	html: ->
		return """<h6 class="kicker">#{@.text}</h6>"""

	closeEdit: ->
		$("#" + @.id).html "Kicker: " + @.text
		super( )

	generateEdit: ->
		html = ""

		for value in @.values

			name = value.capitalize( )
			value = @[value]

		html = ""
		html += """<tr>"""
		html += """<td>"""
		html += """<p>#{name}</p>"""
		html += """<textarea id="Value_#{name}">#{value}</textarea>"""
		html += """</td>"""
		html += """</tr>"""

		super(html)