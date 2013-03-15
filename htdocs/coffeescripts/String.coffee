String::toTitleCase = ->

	smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

	this.replace /([^\W_]+[^\s-]*) */g, (match, p1, index, title) ->

		if index > 0 &&
		index + p1.length != title.length &&
		p1.search(smallWords) > -1 &&
		title.charAt(index - 2) != ":" &&
		title.charAt(index - 1).search(/[^\s-]/) < 0
			return match.toLowerCase( )


		if p1.substr(1).search(/[A-Z]|\../) > -1
			return match;
	    
		return match.charAt(0).toUpperCase() + match.substr(1)

String::capitalize = ->
	this.charAt(0).toUpperCase( ) + this.slice(1)

if !String::trim

	String::trim = ->
		this.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
