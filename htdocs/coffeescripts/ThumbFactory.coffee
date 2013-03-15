class ThumbFactory

	sections: [
		
		{
			url: "roomfordebate"
			icon: "http://graphics8.nytimes.com/images/2010/07/09/opinion/09rfd-image/09rfd-image-custom4.jpg"
		}

		{
			url: "takingnote.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/takingnote/takingnote75.gif"
		}

		{
			url: "latitude.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/latitude/latitude75.png"
		}

		{
			url: "kristof.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/kristof/kristof75.gif"
		}

		{
			url: "krugman.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/krugman/krugman75.jpg"
		}

		{
			url: "dotearth.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/dotearth/dotearth75.gif"
		}

		{
			url: "bruni.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/bruni/bruni75.jpg"
		}

		{
			url: "douthat.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/douthat/douthat75.jpg"
		}

		{
			url: "bittman.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/bittman/bittman75.jpg"
		}

		{
			url: "campaignstops.blogs.nytimes.com"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/campaignstops/campaignstops75.png"
		}

	]

	opinionator: [

		{
			category: "Anxiety"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/anxiety/anxiety75.gif"
		}

		{
			category: "Doug Glanville"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/glanville/glanville75.jpg"
		}

		{
			category: "Allison Arieff"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Arieff_New/Arieff_New-thumbStandard.jpg"
		}

		{
			category: "Mark Bittman"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/bittman/mark-bittman75.jpg"
		}

		{
			category: "Dick Cavett"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Cavett_New/Cavett_New-thumbStandard.jpg"
		}

		{
			category: "Timothy Egan"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Egan_New/Egan_New-thumbStandard.jpg"
		}

		{
			category: "Stanley Fish"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Fish_New/Fish_New-thumbStandard.jpg"
		}

		{
			category: "Linda Greenhouse"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Greenhouse_New/Greenhouse_New-thumbStandard.jpg"
		}

		{
			category: "Errol Morris"
			icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Morris_New/Morris_New-thumbStandard.jpg"
		}

		{
			category: "Fixes"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/fixes75.gif"
		}

		{
			category: "Disunion"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/disunion/disunion75.gif"
		}

		{
			category: "The Score"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/thescore75.gif"
		}

		{
			category: "Draft"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/draft/draft75.gif"
		}

		{
			category: "Ezekiel J. Emanuel"
			icon: "http://graphics8.nytimes.com/images/2011/10/27/opinion/Emanuel_New/Emanuel_New-thumbStandard.jpg"
		}

		{
			category: "Diane Ackerman"
			icon: "http://www.nytimes.com/images/2011/11/10/opinion/ackerman_new/ackerman_new-thumbStandard.jpg"
		}

		{
			category: "Things I Saw"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/things-i-saw/things-i-saw75.png"
		}

		{
			category: "Bedside"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/bedside/bedside75.gif"
		}

		{
			category: "Me, Myself and Math"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/me-myself-and-math/me-myself-and-math75.gif"
		}

		{
			category: "The Conversation"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/theconversation75.gif"
		}

		{
			category: "Townies"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/townies75.gif"
		}

		{
			category: "Home Fires"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/homefires75.gif"
		}

		{
			category: "The Stone"
			icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/thestone75.gif"
		}
		

	]

	constructor: ->

	get: (url = null, categories = null) ->
		
		icon = null

		for item in @.sections
			if url.match "/" + item.url + "/"
				icon = item.icon

		if icon == null && categories != null
			for item in @.opinionator
				for category in categories
					if item.category == category
						icon = item.icon

		return icon