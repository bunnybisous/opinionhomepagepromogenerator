The OpinionHomepagePromoGenerator is a client-side application that generates HTML for the Opinion promo on the homepage.

This application was created using the grunt-nyt-template. <a href="http://gitlab.newsdev.net/lggarrison/grunt-nyt-template/tree/master">Click here for information about setting up grunt locally on your machine.</a>

Use the following command to watch the htdocs directory and compile the CoffeeScript and Sass files automatically.

	grunt regarde

The production version of this application is located at http://designdev.prvt.nytimes.com/apps/opinionHomepagePromoGenerator

There is a development / testing version located at http://designdev.prvt.nytimes.com/apps/ohpgTest

Gotchas
=======

When moving files from your local machine, be careful not to delete the *savedData* directory. The permissions on the *savedData* directory were modified by the Infrastructure department so that the directory is writeable by the webapps user.

See http://bugzilla.em.nytimes.com/show_bug.cgi?id=76989 for more information.