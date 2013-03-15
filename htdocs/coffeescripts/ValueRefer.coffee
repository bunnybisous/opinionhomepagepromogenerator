class ValueRefer extends Value

	href: null
	text: null
	icons: [
		"audio",
		"document",
		"graphic",
		"interactive",
		"map",
		#"op_art",
		#"pdf",
		"photo",
		"slideshow"
		"trailer",
		"video"
	]
	icon: ""

	constructor: (name) ->
		name = "Refer" if !name?
		super(name)
		@.icon = ""

	save: ->
		saved = super( )
		saved.href = escape(@.href)
		saved.text = escape(@.text)
		saved.icon = @.icon
		return saved

	set: (n, t, h, d, i) ->
		@.setName unescape(n)
		@.setText unescape(t)
		@.setHref unescape(h)
		@.setDisplay d
		@.setIcon i

	get: ->
		[@.getName( ), @.getText( ), @.getHref( ), @.getDisplay( )]

	getValue: ->
		if @.icon == ""
			return """<a href="#{@.href}">#{@.text}</a>"""
		else
			label = @.icon.capitalize( )
			label = "Slide Show" if label == "Slideshow"
			"""<a href="#{@.href}"><span class="icon #{@.icon}">#{label}</span>: #{@.text}</a>"""

	setValue: (v) ->
		@.value = v
		matches = @.value.match /<a href="(.*?)">(.*)<\/.*?>/
		if matches
			@.href = matches[1]
			@.text = matches[2]

	setText: (t) ->
		@.text = jsprettify.prettifyStr t
		@.setValue """<a href="#{@.href}">#{@.text}</a>"""

	getText: ->
		@.text

	setHref: (h) ->
		@.href = h
		@.setValue """<a href="#{@.href}">#{@.text}</a>"""

	getHref: ->
		@.href

	setIcon: (i) ->
		@.icon = i

	getIcon: ->
		@.icon

	update: (iter) ->
		selector = @.getName( ) + "_" + iter

		$value = $("#Value_" + selector)
		$href = $("#Value_" + selector + "_Href")
		$select = $("#Select_" + selector)

		@.setText $value.val( ) if $value.length
		@.setHref $href.val( ) if $href.length
		@.setDisplay $("#Display_" + selector).is(':checked') if $value.length
		@.setIcon $select.find("option:selected").val( )


	generateRow: (iter) ->

		[name, value, href, display] = @.get( )

		name += "_" + iter

		checked = ""
		if display
			checked = "checked"

		html = ""
		html += """<tr>"""
		html += """<td><input id="Display_#{name}" type="checkbox" #{checked} /></td>"""
		html += """<td>"""
		html += """<p>#{name}</p>"""
		html += """<textarea id="Value_#{name}">#{value}</textarea>"""
		html += """<p>"""
		html += """<p>Icon</p>"""
		html += """<select id="Select_#{name}">"""
		html += """<option value=""></option>"""
		for icon in @.icons
			iconName = icon.capitalize( )
			html += """<option value="#{icon}">#{iconName}</option>"""
		html += """</select>"""
		html += """</p>"""
		html += """<p>Href</p>"""
		html += """<textarea id="Value_#{name}_Href">#{href}</textarea>"""
		html += """</td>"""
		html += """</tr>"""
		return html