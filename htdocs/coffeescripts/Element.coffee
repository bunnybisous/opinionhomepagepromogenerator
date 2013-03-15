class Element extends PositionsManager
	
	id: null
	$ElementsManager: null
	values: [ ]

	constructor: (id) ->
		if isNaN(id) then @.id = id else @.id = "Element_" + id
		@.$ElementsManager = $("#ElementsManager")

		for value in @.values
			@[value] = null
			@[value + "Backup"] = null

	save: ->
		save = { id: @.id }
		for value in @.values
			save[value] = @[value]
		save.class = @constructor.name
		return save

	append: (html) ->
		@.$ElementsManager.append html

		@.$div = $ "#" + @.id

		that = @
		@.$div.on "dblclick", (event) -> that.handleDblclick(event)

	handleDblclick: (event) ->
		@.generateEdit( )
		$("#LayoutManager").fadeOut(
			-> $("#Edit").fadeIn( )
		)

	generateEdit: (html) ->
		@.backup( )

		$table = $ "#Edit table"

		html += """
				<tr>
					<td>
						<input type="submit" value="Save" id="EditSave" />
						<input type="submit" value="Cancel" id="EditCancel" />
					</td>
				</tr>
				"""

		$table.empty( ).append(html)

		that = @
		$table.find("#EditCancel").on "click", (event) -> that.handleCancel( )
		$table.find("#EditSave").on "click", (event) -> that.handleSave( )
		$table.find("input, textarea").on "change", (event) -> that.handleChange( )
		$table.find("input, textarea").on "keyup", (event) -> that.handleChange( )

	backup: ->
		for value in @.values
			@[value + "Backup"] = @[value]

	restore: ->
		for value in @.values
			@[value] = @[value + "Backup"]

	closeEdit: ->
		$("#Edit").fadeOut(
			-> $("#LayoutManager").fadeIn( )
		)

	handleCancel: ->
		@.closeEdit( )
		@.restore( )
		$.publish "LayoutManager/updateLayout"

	handleChange: ->
		for value in @.values
			selector = value.capitalize( )
			$value = $("#Value_" + selector)
			@[value] = $value.val( ) if $value.length

		$.publish "LayoutManager/updateLayout"

	handleSave: ->
		@.closeEdit( )
		$.publish "LayoutManager/updateLayout"