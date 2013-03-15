module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON("package.json")

    coffeeFiles: [
      "htdocs/coffeescripts/String.coffee"
      "htdocs/coffeescripts/ThumbFactory.coffee"
      "htdocs/coffeescripts/JsonManager.coffee"
      "htdocs/coffeescripts/PositionsManager.coffee"
      "htdocs/coffeescripts/ElementsManager.coffee"
      "htdocs/coffeescripts/LayoutManager.coffee"
      "htdocs/coffeescripts/OpinionPromoGenerator.coffee"
      "htdocs/coffeescripts/StoriesManager.coffee"
      "htdocs/coffeescripts/Story.coffee"
      "htdocs/coffeescripts/Template.coffee"
      "htdocs/coffeescripts/TemplateScoop.coffee"
      "htdocs/coffeescripts/TemplateWordpress.coffee"
      "htdocs/coffeescripts/TemplateSkimmer.coffee"
      "htdocs/coffeescripts/Value.coffee"
      "htdocs/coffeescripts/ValueRefer.coffee"
      "htdocs/coffeescripts/ValueThumb.coffee"
      "htdocs/coffeescripts/Element.coffee"
      "htdocs/coffeescripts/ElementCenterable.coffee"
      "htdocs/coffeescripts/ElementKicker.coffee"
      "htdocs/coffeescripts/ElementSundayReview.coffee"
      "htdocs/coffeescripts/ElementTheOpinionPages.coffee"
    ]

    jsFiles: ["htdocs/js_/lib/*.js", "htdocs/js_/*.js"]

    sassFiles: ["htdocs/sass/styles.scss"]

    phpFiles: ["htdocs/php/**"]

    watchFiles: ["htdocs/js_/lib/*", "htdocs/coffeescripts/*", "htdocs/coffeescripts/articles/*", "htdocs/sass/*"]

    coffee:
      options:
        bare: true
      compile:
        files:
          "htdocs/js_/<%= pkg.name %>.js": ["<%= coffeeFiles %>"]

    sass:
      dist:
        files:
          "htdocs/css/styles.css": ["<%= sassFiles %>"]

    concat:
      options:
        banner: """/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %>
          * Copyright (c) <%= grunt.template.today(\"yyyy\") %> */


          """
      dist:
        src: ["<%= jsFiles %>"]
        dest: "htdocs/js/<%= pkg.name %>.js"

    uglify:
      options:
        mangle: false
      dist:
        files:
          "htdocs/js/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]

    clean:
      clean: ["prod", "preview"]

    copy:
      prod:
        files: [
          src: ["htdocs/js/**", "htdocs/css/**", "htdocs/images/**", "htdocs/*.html", "htdocs/php/**"]
          dest: "prod/"
        ]
      preview:
        files: [
          src: ["htdocs/js/**", "htdocs/css/**", "htdocs/images/**", "htdocs/*.html", "htdocs/php/**"]
          dest: "preview/"
        ]

    #watch:
    #  files: ["<%= watchFiles %>"]
    #  tasks: ["default"]

    regarde:
      coffee:
        files: ["htdocs/js_/lib/**", "htdocs/coffeescripts/**"]
        #tasks: ["coffee", "concat", "uglify", "clean", "copy"]
        tasks: ["coffee", "concat", "clean", "copy"]
        spawn: true
      sass:
        files: ["htdocs/sass/**"]
        tasks: ["sass", "clean", "copy"]
        spawn: true
      images:
        files: ["htdocs/images/**"]
        tasks: ["clean", "copy"]
        spawn: true
      html:
        files: ["htdocs/*.html"]
        tasks: ["clean", "copy"]
        spawn: true
      php:
        files: ["htdocs/php/**"]
        tasks: ["clean", "copy"]
        spawn: true


  grunt.loadNpmTasks "grunt-contrib"
  grunt.loadNpmTasks "grunt-regarde"
  
  # Default task.
  grunt.registerTask "default", ["coffee", "concat", "uglify", "sass", "clean", "copy"]