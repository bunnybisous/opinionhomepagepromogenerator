
String.prototype.toTitleCase = function() {
  var smallWords;
  smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;
  return this.replace(/([^\W_]+[^\s-]*) */g, function(match, p1, index, title) {
    if (index > 0 && index + p1.length !== title.length && p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }
    if (p1.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };
}

var ThumbFactory;

ThumbFactory = (function() {

  ThumbFactory.prototype.sections = [
    {
      url: "roomfordebate",
      icon: "http://graphics8.nytimes.com/images/2010/07/09/opinion/09rfd-image/09rfd-image-custom4.jpg"
    }, {
      url: "takingnote.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/takingnote/takingnote75.gif"
    }, {
      url: "latitude.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/latitude/latitude75.png"
    }, {
      url: "kristof.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/kristof/kristof75.gif"
    }, {
      url: "krugman.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/krugman/krugman75.jpg"
    }, {
      url: "dotearth.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/dotearth/dotearth75.gif"
    }, {
      url: "bruni.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/bruni/bruni75.jpg"
    }, {
      url: "douthat.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/douthat/douthat75.jpg"
    }, {
      url: "bittman.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/bittman/bittman75.jpg"
    }, {
      url: "campaignstops.blogs.nytimes.com",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/campaignstops/campaignstops75.png"
    }
  ];

  ThumbFactory.prototype.opinionator = [
    {
      category: "Anxiety",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/anxiety/anxiety75.gif"
    }, {
      category: "Doug Glanville",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/glanville/glanville75.jpg"
    }, {
      category: "Allison Arieff",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Arieff_New/Arieff_New-thumbStandard.jpg"
    }, {
      category: "Mark Bittman",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/bittman/mark-bittman75.jpg"
    }, {
      category: "Dick Cavett",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Cavett_New/Cavett_New-thumbStandard.jpg"
    }, {
      category: "Timothy Egan",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Egan_New/Egan_New-thumbStandard.jpg"
    }, {
      category: "Stanley Fish",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Fish_New/Fish_New-thumbStandard.jpg"
    }, {
      category: "Linda Greenhouse",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Greenhouse_New/Greenhouse_New-thumbStandard.jpg"
    }, {
      category: "Errol Morris",
      icon: "http://graphics8.nytimes.com/images/2010/09/16/opinion/Morris_New/Morris_New-thumbStandard.jpg"
    }, {
      category: "Fixes",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/fixes75.gif"
    }, {
      category: "Disunion",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/disunion/disunion75.gif"
    }, {
      category: "The Score",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/thescore75.gif"
    }, {
      category: "Draft",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/draft/draft75.gif"
    }, {
      category: "Ezekiel J. Emanuel",
      icon: "http://graphics8.nytimes.com/images/2011/10/27/opinion/Emanuel_New/Emanuel_New-thumbStandard.jpg"
    }, {
      category: "Diane Ackerman",
      icon: "http://www.nytimes.com/images/2011/11/10/opinion/ackerman_new/ackerman_new-thumbStandard.jpg"
    }, {
      category: "Things I Saw",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/things-i-saw/things-i-saw75.png"
    }, {
      category: "Bedside",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/bedside/bedside75.gif"
    }, {
      category: "Me, Myself and Math",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/me-myself-and-math/me-myself-and-math75.gif"
    }, {
      category: "The Conversation",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/theconversation75.gif"
    }, {
      category: "Townies",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/townies75.gif"
    }, {
      category: "Home Fires",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/homefires75.gif"
    }, {
      category: "The Stone",
      icon: "http://graphics8.nytimes.com/images/blogs_v3/opinionator/pogs/thestone75.gif"
    }
  ];

  function ThumbFactory() {}

  ThumbFactory.prototype.get = function(url, categories) {
    var category, icon, item, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
    if (url == null) {
      url = null;
    }
    if (categories == null) {
      categories = null;
    }
    icon = null;
    _ref = this.sections;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      if (url.match("/" + item.url + "/")) {
        icon = item.icon;
      }
    }
    if (icon === null && categories !== null) {
      _ref1 = this.opinionator;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        item = _ref1[_j];
        for (_k = 0, _len2 = categories.length; _k < _len2; _k++) {
          category = categories[_k];
          if (item.category === category) {
            icon = item.icon;
          }
        }
      }
    }
    return icon;
  };

  return ThumbFactory;

})();

var JsonManager;

JsonManager = (function() {

  function JsonManager() {}

  JsonManager.prototype.jsonPhp = "./php/json.php?url=";

  JsonManager.prototype.openPhp = "./php/open.php?url=";

  return JsonManager;

})();

var PositionsManager,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PositionsManager = (function(_super) {

  __extends(PositionsManager, _super);

  function PositionsManager() {
    return PositionsManager.__super__.constructor.apply(this, arguments);
  }

  PositionsManager.prototype.top = "top";

  PositionsManager.prototype.left = "left";

  PositionsManager.prototype.right = "right";

  PositionsManager.prototype.bottom = "bottom";

  return PositionsManager;

})(JsonManager);

var ElementsManager,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ElementsManager = (function(_super) {

  __extends(ElementsManager, _super);

  ElementsManager.prototype.$ElementsManager = null;

  ElementsManager.prototype.elements = [];

  function ElementsManager(data) {
    var elem, that, _i, _len, _ref;
    if (data == null) {
      data = null;
    }
    if (data === null) {
      this.elements.push(new ElementTheOpinionPages(this.elements.length));
      this.elements.push(new ElementSundayReview(this.elements.length));
      this.elements.push(new ElementKicker(this.elements.length, "More in Opinion"));
      this.elements.push(new ElementKicker(this.elements.length, "Op-Ed Columnists"));
    } else {
      _ref = data.elements;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (elem["class"] === "ElementTheOpinionPages") {
          this.elements.push(new ElementTheOpinionPages(elem.id, elem));
        } else if (elem["class"] === "ElementSundayReview") {
          this.elements.push(new ElementSundayReview(elem.id, elem));
        } else if (elem["class"] === "ElementKicker") {
          this.elements.push(new ElementKicker(elem.id, elem.text));
        }
      }
    }
    that = this;
    $(".addKicker").on("click", function() {
      return that.addKicker();
    });
  }

  ElementsManager.prototype.addKicker = function() {
    return this.elements.push(new ElementKicker(this.elements.length));
  };

  ElementsManager.prototype.html = function($child, position) {
    var html, id;
    id = $child.attr("id").split("_")[1];
    html = this.elements[id].html(position);
    return html;
  };

  ElementsManager.prototype.save = function() {
    var element, save, _i, _len, _ref;
    save = [];
    _ref = this.elements;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      save.push(element.save());
    }
    return save;
  };

  return ElementsManager;

})(PositionsManager);

var LayoutManager,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LayoutManager = (function(_super) {

  __extends(LayoutManager, _super);

  LayoutManager.prototype.divider = true;

  function LayoutManager() {
    var filename, that;
    filename = String(window.location).split("#")[1];
    if (filename) {
      $("#saveFileName").val(filename);
      $.getJSON(this.openPhp + ("../savedData/" + filename + ".json"), function(data) {
        return that.handleLoadEvent(data);
      });
    } else {
      this.storiesManager = new StoriesManager;
      this.elementsManager = new ElementsManager;
    }
    this.$OpinionModule = $("#OpinionModule");
    this.$Html = $("#Html");
    this.$RegionTop = $("#RegionTop");
    this.$RegionLeft = $("#RegionLeft");
    this.$RegionRight = $("#RegionRight");
    this.$RegionBottom = $("#RegionBottom");
    this.$sortables = $("#StoriesManager, ._region, ._elements");
    this.$regions = $("._region");
    this.$sortables.sortable({
      connectWith: "._connectedSortable"
    }).disableSelection();
    that = this;
    this.$regions.bind("sortupdate", function() {
      return that.handleUpdate();
    });
    $.subscribe("LayoutManager/updateLayout", function() {
      return that.handleUpdate();
    });
    $("#Input_Divider").on("click", function() {
      return that.handleDivider();
    });
    $(".saveToFile").on("click", function(event) {
      return $("#dialogConfirmSave").dialog({
        resizable: false,
        height: 220,
        modal: true,
        buttons: {
          Save: function() {
            return that.handleSaveEvent();
          },
          Cancel: function() {
            return $(this).dialog("close");
          }
        }
      });
    });
    $(".openFile").on("click", function(event) {
      return $.getJSON('./php/files.php', function(data) {
        var files, href, html, _i, _len;
        files = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          filename = data[_i];
          filename = filename.split(".")[0];
          href = window.location.href.split("#")[0];
          files.push("<p><a data-href=\"" + href + "#" + filename + "\">" + filename + "</a></p>");
        }
        html = files.join("");
        $("#dialogOpenFile .fileList").html(html);
        $("#dialogOpenFile .fileList").find("a").click(function(event) {
          var anchor;
          anchor = $(event.target);
          href = anchor.data("href");
          return document.location = href;
        });
        return $("#dialogOpenFile").dialog({
          height: 220,
          modal: true
        });
      });
    });
    $(window).on("hashchange", function(event) {
      return document.location.reload(true);
    });
  }

  LayoutManager.prototype.handleDivider = function() {
    this.divider = $("#Input_Divider").is(':checked');
    return this.updateLayout();
  };

  LayoutManager.prototype.handleUpdate = function() {
    return this.updateLayout();
  };

  LayoutManager.prototype.updateLayout = function() {
    var fixed, html, match, matches, style, _i, _len;
    html = "";
    if (this.$RegionTop.children().length || this.$RegionLeft.children().length || this.$RegionRight.children().length || this.$RegionBottom.children().length) {
      html += "<div class=\"opinionModule\">";
    }
    if (this.$RegionTop.children().length) {
      html += this.layout(this.$RegionTop, this.top);
    }
    if (this.$RegionLeft.children().length || this.$RegionRight.children().length) {
      style = "";
      if (this.divider === false) {
        style = "noBackground";
      }
      html += "<div class=\"subColumn-2 wrap layout " + style + "\">\n	<div class=\"column\">\n		<div class=\"insetH\">";
      if (this.$RegionLeft.children().length) {
        html += this.layout(this.$RegionLeft, this.left);
      }
      html += "</div>\n	</div>\n	<div class=\"column lastColumn\">\n<div class=\"insetH\">";
      if (this.$RegionRight.children().length) {
        html += this.layout(this.$RegionRight, this.right);
      }
      html += "		</div>\n	</div>\n</div>";
    }
    if (this.$RegionBottom.children().length) {
      html += this.layout(this.$RegionBottom, this.bottom);
    }
    if (this.$RegionTop.children().length || this.$RegionLeft.children().length || this.$RegionRight.children().length || this.$RegionBottom.children().length) {
      html += "</div>";
    }
    this.$OpinionModule.html(html);
    $('li.headlineOnly').each(function() {
      if ($(this.parentNode).hasClass('headlinesOnly')) {
        return;
      }
      return $(this).nextUntil(':not(li.headlineOnly)').andSelf().wrapAll('<ul class="headlinesOnly">');
    });
    $('li.headlineOnly').removeAttr("class");
    html = this.$OpinionModule.html();
    /*
    		images must contain a closing slash for scoop to validate the generated html
    */

    matches = html.match(/(<img.*?>)/g);
    if (matches !== null) {
      for (_i = 0, _len = matches.length; _i < _len; _i++) {
        match = matches[_i];
        if (match.indexOf("/>" === -1)) {
          fixed = match.slice(0, -1) + " />";
          html = html.replace(match, fixed);
        }
      }
    }
    this.$Html.html(this.style(html));
    return this.$OpinionModule.find("a").attr("target", "_blank");
  };

  LayoutManager.prototype.style = function(html) {
    return style_html(html, {
			'indent_size': 2,
			'indent_char': ' ',
			'max_char': 78,
			'brace_style': 'expand',
			'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u']
		});;
  };

  LayoutManager.prototype.layout = function($region, position) {
    var child, children, html, _i, _len;
    html = "";
    children = $region.children();
    for (_i = 0, _len = children.length; _i < _len; _i++) {
      child = children[_i];
      html += this.layoutChild($(child), position);
    }
    return html;
  };

  LayoutManager.prototype.layoutChild = function($child, position) {
    var html;
    html = "";
    if ($child.hasClass("_element")) {
      html += this.elementsManager.html($child, position);
    }
    if ($child.hasClass("_story")) {
      html += this.storiesManager.html($child);
    }
    return html;
  };

  LayoutManager.prototype.handleSaveEvent = function() {
    var filename;
    filename = $("#saveFileName").val().trim();
    if (/^[\w-]*$/i.test(filename)) {
      this.save();
      return $("#dialogConfirmSave").dialog("close");
    } else {
      return $("#dialogConfirmSave .error").css("display", "block");
    }
  };

  LayoutManager.prototype.save = function() {
    var save;
    save = {};
    save.includeDivider = $("#Input_Divider").is(':checked');
    save.stories = this.storiesManager.save();
    save.elements = this.elementsManager.save();
    save.regions = {};
    save.regions.top = this.saveRegion(this.$RegionTop);
    save.regions.left = this.saveRegion(this.$RegionLeft);
    save.regions.right = this.saveRegion(this.$RegionRight);
    save.regions.bottom = this.saveRegion(this.$RegionBottom);
    return $.post("./php/save.php", {
      filename: $("#saveFileName").val(),
      content: JSON.stringify(save)
    }).success(function() {
      var href;
      href = String(window.location).split("#")[0];
      return history.pushState(null, null, href + "#" + $("#saveFileName").val());
    });
  };

  LayoutManager.prototype.saveRegion = function($region) {
    var child, children, region, _i, _len;
    region = [];
    children = $region.children();
    for (_i = 0, _len = children.length; _i < _len; _i++) {
      child = children[_i];
      region.push(child.id);
    }
    return region;
  };

  LayoutManager.prototype.handleLoadEvent = function(data) {
    $("#Input_Divider").attr("checked", data.includeDivider);
    this.divider = data.includeDivider;
    this.storiesManager = new StoriesManager(data);
    this.elementsManager = new ElementsManager(data);
    this.loadRegion(this.$RegionTop, data.regions.top);
    this.loadRegion(this.$RegionLeft, data.regions.left);
    this.loadRegion(this.$RegionRight, data.regions.right);
    this.loadRegion(this.$RegionBottom, data.regions.bottom);
    return $.publish("LayoutManager/updateLayout");
  };

  LayoutManager.prototype.loadRegion = function($region, data) {
    var id, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      id = data[_i];
      _results.push($("#" + id).detach().appendTo($region));
    }
    return _results;
  };

  return LayoutManager;

})(PositionsManager);


$(function() {
  var layoutManager;
  $.fx.speeds._default = 200;
  return layoutManager = new LayoutManager;
});

var StoriesManager,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StoriesManager = (function(_super) {

  __extends(StoriesManager, _super);

  StoriesManager.prototype.stories = [];

  StoriesManager.prototype.$StoriesManager = null;

  function StoriesManager(data) {
    var that;
    if (data == null) {
      data = null;
    }
    if (this.$StoriesManager === null) {
      this.$StoriesManager = $("#StoriesManager");
    }
    if (data === null) {
      this.loadJson();
    } else {
      this.handleLoadedData(data);
    }
    that = this;
    $(".addArticle").on("click", function(event) {
      return that.handleAddClick(event);
    });
  }

  StoriesManager.prototype.loadJson = function() {
    var jsonFeed, that;
    jsonFeed = "http://cms-service.prd.nytimes.com/data/feeds/outgoing/mobile/v1/json/full/opinion.json";
    that = this;
    return $.getJSON(this.jsonPhp + jsonFeed, function(data) {
      return that.handleJson(data);
    });
  };

  StoriesManager.prototype.handleJson = function(data) {
    var item, story, _i, _len, _ref, _results;
    this.$StoriesManager.empty();
    _ref = data.assets;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      _results.push(this.stories.push(story = new Story(item.url, item.type, this.stories.length, item)));
    }
    return _results;
  };

  StoriesManager.prototype.addWordpress = function(url) {
    var story;
    return this.stories.push(story = new Story(url, "blog", this.stories.length));
  };

  StoriesManager.prototype.addScoop = function(url) {
    var story;
    return this.stories.push(story = new Story(url, "article", this.stories.length));
  };

  StoriesManager.prototype.handleAddClick = function(event) {
    var $articleUrl, articleUrl;
    $articleUrl = $("#articleUrl");
    articleUrl = $articleUrl.val();
    articleUrl = articleUrl.split("?")[0];
    $articleUrl.val("");
    if ($(event.target).hasClass("scoop")) {
      return this.addScoop(articleUrl);
    } else if ($(event.target).hasClass("wordpress")) {
      return this.addWordpress(articleUrl);
    }
  };

  StoriesManager.prototype.html = function($child) {
    var id;
    id = $child.attr("id").split("_")[1];
    return this.stories[id].html();
  };

  StoriesManager.prototype.save = function() {
    var save, story, _i, _len, _ref;
    save = [];
    _ref = this.stories;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      story = _ref[_i];
      save.push(story.save());
    }
    return save;
  };

  StoriesManager.prototype.handleLoadedData = function(data) {
    var storyData, _i, _len, _ref, _results;
    this.$StoriesManager.empty();
    _ref = data.stories;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      storyData = _ref[_i];
      _results.push(this.stories.push(new Story(storyData)));
    }
    return _results;
  };

  return StoriesManager;

})(JsonManager);

var Story;

Story = (function() {

  Story.prototype.jsonPhp = "./php/json.php?url=";

  Story.prototype.id = null;

  Story.prototype.url = null;

  Story.prototype.type = null;

  Story.prototype.data = null;

  Story.prototype.$div = null;

  Story.prototype.$StoriesManager = null;

  Story.prototype.storyClass = "_story";

  Story.prototype.loadingClass = "_loading";

  Story.prototype.loadedClass = "_loaded";

  Story.prototype.template = null;

  Story.prototype.$Errors = null;

  function Story() {
    var data, headline, html, id, jsonUrl, savedData, that, type, url;
    that = this;
    this.$StoriesManager = $("#StoriesManager");
    this.$Errors = $("#Errors");
    if (arguments.length === 4 || arguments.length === 3) {
      url = arguments[0], type = arguments[1], id = arguments[2], data = arguments[3];
      this.url = url;
      this.type = type;
      this.id = "Story_" + id;
      if (data) {
        this.template = new TemplateSkimmer(data);
      }
    } else if (arguments.length === 1) {
      savedData = arguments[0];
      this.url = savedData.url;
      this.type = savedData.type;
      this.id = savedData.id;
      this.template = new Template;
      this.template.load(savedData.template);
    }
    if (arguments.length !== 3) {
      headline = this.template.getHeadline();
    }
    html = "<div id='" + this.id + "' class='" + this.storyClass + " " + this.loadingClass + "'>\n	<table>\n		<tr>\n			<td><span class=\"cutHeadline\" id='" + this.id + "_HeadlineOnly'>✄</span></td>\n			<td><span class=\"headline\">" + headline + "</span></td>\n		</tr>\n	</table>\n</div>";
    this.$StoriesManager.append(html);
    this.$div = $("#" + this.id);
    this.$headlineOnly = this.$div.find("input");
    if (arguments.length === 1) {
      this.$div.attr("class", savedData.classes);
    } else if (arguments.length === 4 || arguments.length === 3) {
      jsonUrl = null;
      if (this.type === "article") {
        jsonUrl = encodeURIComponent("http://glass-output.prd.use1.nytimes.com/glass/outputmanager/v1/add.json?source=scoop&type=article&hbst=article-baseline&refer=glass-output.prd.use1.nytimes.com&url=");
      } else if (this.type === "blog") {
        jsonUrl = encodeURIComponent("http://glass-output.prd.use1.nytimes.com/glass/outputmanager/v1/add.json?source=wordpress&type=blogpost&url=");
      }
      if (jsonUrl !== null) {
        this.getData(jsonUrl);
      }
    }
    this.$div.on("dblclick", function(event) {
      return that.handleDblclick(event);
    });
    this.$div.find(".cutHeadline").on("click", function(event) {
      return that.handleCutHeadline(event);
    });
    $.subscribe("Story/updateHeadlineOnly", function() {
      return that.updateHeadlineOnly();
    });
  }

  Story.prototype.save = function() {
    return {
      id: this.id,
      url: this.url,
      type: this.type,
      template: this.template.save(),
      classes: $("#" + this.id).attr("class")
    };
  };

  Story.prototype.getData = function(jsonUrl) {
    var that;
    that = this;
    return $.getJSON(this.jsonPhp + jsonUrl + this.url).success(function(data) {
      return that.handleSuccess(data);
    }).error(function(jqXHR, textStatus) {
      return that.handleError(jqXHR, textStatus);
    });
  };

  Story.prototype.handleSuccess = function(data) {
    this.data = data;
    return this.processData(this.data);
  };

  Story.prototype.processData = function(data) {
    var headline;
    if (this.type === "article") {
      this.template = new TemplateScoop(data);
    } else if (this.type === "blog") {
      this.template = new TemplateWordpress(data);
    }
    headline = this.template.getHeadline();
    this.$div.find(".headline").html(headline);
    return this.loaded();
  };

  Story.prototype.handleError = function(jqXHR, textStatus) {
    return this.$Errors.append(jqXHR.responseText);
  };

  Story.prototype.loaded = function() {
    this.$div.removeClass(this.loadingClass);
    return this.$div.addClass(this.loadedClass);
  };

  Story.prototype.html = function() {
    return this.template.html();
  };

  Story.prototype.handleDblclick = function(event) {
    this.template.generateEdit();
    return $("#LayoutManager").fadeOut(function() {
      return $("#Edit").fadeIn();
    });
  };

  Story.prototype.handleCutHeadline = function(event) {
    return this.template.setHeadlineOnly(true);
  };

  Story.prototype.updateHeadlineOnly = function() {
    var bool;
    bool = this.template.isHeadlineOnly();
    return this.$headlineOnly.attr('checked', bool);
  };

  return Story;

})();

var Template;

Template = (function() {

  Template.prototype.data = null;

  Template.prototype.url = null;

  Template.prototype.values = ["kicker", "headline", "byline", "summary"];

  Template.prototype.refers = null;

  Template.prototype.thumbs = null;

  Template.prototype.refersBackup = null;

  Template.prototype.thumbsBackup = null;

  Template.prototype.getHeadline = function() {
    return this.headline.getValue();
  };

  Template.prototype.setUrl = function(url) {
    return this.url = url + "?hp";
  };

  function Template(data) {
    var value, _i, _len, _ref;
    this.data = data;
    this.refers = [];
    this.thumbs = [];
    this.refersBackup = [];
    this.thumbsBackup = [];
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      this[value] = new Value(value);
      this[value + "Backup"] = new Value(value);
    }
  }

  Template.prototype.save = function() {
    var refer, template, thumb, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
    template = {
      url: this.url
    };
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      template[value] = this[value].save();
    }
    template.refers = [];
    _ref1 = this.refers;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      refer = _ref1[_j];
      template.refers.push(refer.save());
    }
    template.thumbs = [];
    _ref2 = this.thumbs;
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      thumb = _ref2[_k];
      template.thumbs.push(thumb.save());
    }
    return template;
  };

  Template.prototype.load = function(data) {
    var it, r, t, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
    this.data = data;
    this.url = this.data.url;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      it = this.data[value];
      this[value] = new Value;
      this[value].set(it.name, it.value, it.display);
    }
    _ref1 = this.data.refers;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      it = _ref1[_j];
      r = new ValueRefer;
      r.set(it.name, it.text, it.href, it.display, it.icon);
      this.refers.push(r);
    }
    _ref2 = this.data.thumbs;
    _results = [];
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      it = _ref2[_k];
      t = new ValueThumb;
      t.set(it.name, it.value, it.display);
      _results.push(this.thumbs.push(t));
    }
    return _results;
  };

  Template.prototype.thumbHtml = function(name, size) {
    var html, src, thumb, thumbs, _i, _len;
    html = "";
    thumbs = (function() {
      var _i, _len, _ref, _results;
      _ref = this.thumbs;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        thumb = _ref[_i];
        if (thumb.getName() === name) {
          _results.push(thumb);
        }
      }
      return _results;
    }).call(this);
    for (_i = 0, _len = thumbs.length; _i < _len; _i++) {
      thumb = thumbs[_i];
      if (thumb.getDisplay()) {
        src = thumb.getValue();
        html += "<div class=\"runaroundRight\">";
        html += "<div class=\"thumbnail\">";
        html += "<a href=\"" + this.url + "\"><img src=\"" + src + "\" " + size + " /></a>";
        html += "</div>";
        html += "</div>";
      }
    }
    return html;
  };

  Template.prototype.htmlStory = function() {
    var html, refer, _i, _len, _ref;
    html = "";
    html += "<div class=\"story\">";
    html += this.thumbHtml("163", 'width="163"');
    if (this.kicker.test()) {
      html += "<h6 class=\"kicker\">" + this.kicker.value + "</h6>";
    }
    if (this.headline.test()) {
      html += "<h5><a href=\"" + this.url + "\" >" + this.headline.value + "</a></h5>";
    }
    html += this.thumbHtml("ThumbStandard", 'width="50" height="50"');
    if (this.byline.test()) {
      html += "<h6 class=\"byline\">" + this.byline.value + "</h6>";
    }
    if (this.summary.test()) {
      html += "<p class=\"summary flushBottom\">" + this.summary.value + "</p>";
    }
    if (this.refers && this.refers.length) {
      html += "<ul class=\"refer\">";
      _ref = this.refers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        refer = _ref[_i];
        if (refer.test()) {
          html += "<li>" + refer.getValue() + "</li>";
        }
      }
      html += "</ul>";
    }
    return html += "</div>";
  };

  Template.prototype.htmlHeadlineOnly = function() {
    var html;
    return html = "<li class=\"headlineOnly\"><a href=\"" + this.url + "\">" + this.headline.value + "</a></li>";
  };

  Template.prototype.html = function() {
    var html;
    html = "";
    if (this.isHeadlineOnly()) {
      return html += this.htmlHeadlineOnly();
    } else {
      return html += this.htmlStory();
    }
  };

  Template.prototype.cloneArrayOfValues = function(alpha) {
    var elem, omega, v, _i, _len;
    omega = [];
    for (_i = 0, _len = alpha.length; _i < _len; _i++) {
      elem = alpha[_i];
      if (elem instanceof ValueRefer) {
        v = new ValueRefer(elem.getName());
      } else if (elem instanceof ValueThumb) {
        v = new ValueThumb(elem.getName());
      } else if (elem instanceof Value) {
        v = new Value(elem.getName());
      }
      if (v) {
        v.setValue(elem.getValue());
        v.setDisplay(elem.getDisplay());
        omega.push(v);
      }
    }
    return omega;
  };

  Template.prototype.backup = function() {
    var value, _i, _len, _ref;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      this[value + "Backup"] = jQuery.extend(true, {}, this[value]);
    }
    this.refersBackup = this.cloneArrayOfValues(this.refers);
    return this.thumbsBackup = this.cloneArrayOfValues(this.thumbs);
  };

  Template.prototype.restore = function() {
    var value, _i, _len, _ref;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      this[value] = jQuery.extend(true, {}, this[value + "Backup"]);
    }
    this.refers = this.cloneArrayOfValues(this.refersBackup);
    return this.thumbs = this.cloneArrayOfValues(this.thumbsBackup);
  };

  Template.prototype.generateEdit = function() {
    var $table, checked, display, html, i, name, that, thumb, value, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2, _ref3;
    this.backup();
    $table = $("#Edit table");
    html = "";
    html += "<tr>\n	<td colspan=\"2\">\n		<input type=\"submit\" value=\"Save\" id=\"EditSave\" class=\"editSave\" />\n		<input type=\"submit\" value=\"Cancel\" id=\"EditCancel\" class=\"editCancel\" />\n	</td>\n</tr>";
    checked = "";
    if (this.isHeadlineOnly()) {
      checked = "checked";
    }
    html += "<tr>";
    html += "<td><input id=\"Display_Headline_Only\" name=\"Display_Headline_Only\" type=\"checkbox\" " + checked + " /></td>";
    html += "<td>";
    html += "<p>Headline Only</p>";
    html += "</td>";
    html += "</tr>";
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      html += this[value].generateRow();
    }
    if (this.refers.length) {
      for (i = _j = 0, _ref1 = this.refers.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        html += this.refers[i].generateRow(i);
      }
    }
    html += "<tr>\n	<td>&nbsp;</td>\n	<td>\n		<input type=\"submit\" value=\"Add Refer\" id=\"AddRefer\" />\n	</td>\n</tr>";
    if (this.thumbs.length) {
      for (i = _k = 0, _ref2 = this.thumbs.length - 1; 0 <= _ref2 ? _k <= _ref2 : _k >= _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
        html += this.thumbs[i].generateRow(i);
      }
      display = true;
      _ref3 = this.thumbs;
      for (_l = 0, _len1 = _ref3.length; _l < _len1; _l++) {
        thumb = _ref3[_l];
        if (thumb.getDisplay()) {
          display = false;
        }
      }
      checked = "";
      if (display) {
        checked = "checked";
      }
      name = "No Thumb";
      html += "<tr>";
      html += "<td><input id=\"Display_Thumb\" name=\"Display_Thumb\" type=\"radio\" " + checked + " value=\"-1\" /></td>";
      html += "<td>";
      html += "<p>" + name + "</p>";
      html += "</td>";
      html += "</tr>";
    }
    html += "<tr>\n	<td>&nbsp;</td>\n	<td>\n		<p><input type=\"radio\" id=\"AddImageType\" name=\"AddImageType\" checked value=\"ThumbStandard\" /> ThumbStandard\n		<input type=\"radio\" id=\"AddImageType\" name=\"AddImageType\" value=\"163\" /> 163</p>\n		<textarea id=\"AddImageUrl\"></textarea>\n		<input type=\"submit\" value=\"Add Image\" id=\"AddImage\" />\n	</td>\n</tr>";
    html += "<tr>\n	<td colspan=\"2\">\n		<input type=\"submit\" value=\"Save\" id=\"EditSave\" class=\"editSave\" />\n		<input type=\"submit\" value=\"Cancel\" id=\"EditCancel\" class=\"editCancel\" />\n	</td>\n</tr>";
    $table.empty().append(html);
    that = this;
    $table.find(".editCancel").on("click", function(event) {
      return that.handleCancel();
    });
    $table.find(".editSave").on("click", function(event) {
      return that.handleSave();
    });
    $table.find("#AddRefer").on("click", function(event) {
      return that.handleAddRefer();
    });
    $table.find("#AddImage").on("click", function(event) {
      return that.handleAddImage();
    });
    $table.find("input:not(#Display_Headline_Only), textarea, select").on("change", function(event) {
      return that.handleChange();
    });
    $table.find("input:not(#Display_Headline_Only), textarea, select").on("keyup", function(event) {
      return that.handleChange();
    });
    $table.find("#Display_Headline_Only").on("change", function(event) {
      return that.handleHeadlineOnly();
    });
    $table.find("#Display_Headline_Only").on("keyup", function(event) {
      return that.handleHeadlineOnly();
    });
    $table.find("#AddKicker").on("click", function(event) {
      return that.handleAddKicker();
    });
    return $table.find("#AddLastName").on("click", function(event) {
      return that.handleAddLastName();
    });
  };

  Template.prototype.handleAddRefer = function() {
    var tr;
    tr = new ValueRefer;
    tr.setValue("<a href=\"http://wwww.nytimes.com/\">New Refer</a>");
    this.refers.push(tr);
    this.generateEdit();
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.handleAddImage = function() {
    var name, v;
    name = $('input[name=AddImageType]:checked').val();
    v = new ValueThumb(name);
    v.setValue($("#AddImageUrl").val());
    v.setDisplay(false);
    this.thumbs.push(v);
    this.generateEdit();
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.closeEdit = function() {
    $.publish("Story/updateHeadlineOnly");
    return $("#Edit").fadeOut(function() {
      return $("#LayoutManager").fadeIn();
    });
  };

  Template.prototype.handleCancel = function() {
    this.closeEdit();
    this.restore();
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.handleHeadlineOnly = function() {
    $("#Edit table input:not(#Display_Headline_Only)").attr('checked', false);
    return this.handleChange();
  };

  Template.prototype.setHeadlineOnly = function(bool) {
    var i, thumb, value, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      if (value === "headline") {
        continue;
      }
      this[value].setDisplay(false);
    }
    if (this.refers.length) {
      for (i = _j = 0, _ref1 = this.refers.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        this.refers[i].setDisplay(false);
      }
    }
    _ref2 = this.thumbs;
    for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
      thumb = _ref2[_k];
      thumb.setDisplay(false);
    }
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.isHeadlineOnly = function() {
    var headlineOnly, i, thumb, value, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2;
    headlineOnly = true;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      if (value === "headline") {
        continue;
      }
      if (this[value].getDisplay()) {
        headlineOnly = false;
      }
    }
    if (this.refers.length) {
      for (i = _j = 0, _ref1 = this.refers.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        if (this.refers[i].getDisplay()) {
          headlineOnly = false;
        }
      }
    }
    _ref2 = this.thumbs;
    for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
      thumb = _ref2[_k];
      if (thumb.getDisplay()) {
        headlineOnly = false;
      }
    }
    return headlineOnly;
  };

  Template.prototype.handleChange = function() {
    var i, selector, thumb, v, value, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      this[value].update();
      selector = this[value].getName();
      if ($("#Display_" + selector).is(':checked')) {
        $("#Display_Headline_Only").attr('checked', false);
      }
    }
    if (this.isHeadlineOnly()) {
      $("#Display_Headline_Only").attr('checked', true);
    }
    if (this.refers.length) {
      for (i = _j = 0, _ref1 = this.refers.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        this.refers[i].update(i);
      }
    }
    v = $('input[name=Display_Thumb]:checked').val();
    _ref2 = this.thumbs;
    for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
      thumb = _ref2[_k];
      thumb.setDisplay(false);
    }
    if (v >= 0) {
      this.thumbs[v].setDisplay(true);
    }
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.handleSave = function() {
    this.closeEdit();
    return $.publish("LayoutManager/updateLayout");
  };

  Template.prototype.handleAddKicker = function() {
    var $hed, kicker;
    kicker = $("#Value_Kicker").val();
    $("#Display_Kicker").attr('checked', false);
    $hed = $("#Value_Headline");
    $hed.val(kicker + ": " + $hed.val());
    return this.handleChange();
  };

  Template.prototype.handleAddLastName = function() {
    var $hed, byline, lastName, pieces;
    byline = $("#Value_Byline").val();
    $("#Display_Byline").attr('checked', false);
    $hed = $("#Value_Headline");
    pieces = byline.split(" ");
    lastName = pieces[pieces.length - 1];
    lastName = lastName.toLowerCase();
    lastName = lastName.capitalize();
    $hed.val(lastName + ": " + $hed.val());
    return this.handleChange();
  };

  return Template;

})();

var TemplateScoop,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TemplateScoop = (function(_super) {

  __extends(TemplateScoop, _super);

  function TemplateScoop(data) {
    var ArticleImages, i, item, match, matches, rawRefers, relatedAssets, tr, _i, _j, _len, _ref;
    TemplateScoop.__super__.constructor.apply(this, arguments);
    this.setUrl(this.data.cms.article.sub_domain + this.data.cms.article.publish_url);
    this.headline.setValue(this.data.cms.article.headline);
    this.byline.setValue(this.data.cms.article.byline);
    this.summary.setValue(this.data.cms.article.summary);
    this.kicker.setValue(this.data.cms.article.kicker);
    ArticleImages = (function() {
      var _i, _len, _ref, _results;
      _ref = this.data.cms.article.related;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item.name === "ArticleImages") {
          _results.push(item);
        }
      }
      return _results;
    }).call(this);
    ArticleImages = (function() {
      var _i, _len, _ref, _results;
      _ref = ArticleImages[0].collection;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item.name === "ArticleImages") {
          _results.push(item);
        }
      }
      return _results;
    })();
    relatedAssets = ArticleImages[0].relatedAssets;
    if ((relatedAssets != null) && relatedAssets.length) {
      this.crops = relatedAssets[0].crops;
    }
    if ((this.crops != null) && this.crops.length) {
      this.getThumb("type", "thumbStandard", "thumbStandard");
      this.getThumb("width", 163, "163");
    }
    if (this.thumbs.length > 1) {
      for (i = _i = 0, _ref = this.thumbs.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (i === 0) {
          this.thumbs[i].setDisplay(true);
        } else {
          this.thumbs[i].setDisplay(false);
        }
      }
    }
    rawRefers = this.data.cms.article.refers;
    if (rawRefers.length && (rawRefers[0].content != null)) {
      matches = rawRefers[0].content.match(/<[aA].*?>.*?<\/[aA]>/g);
      for (_j = 0, _len = matches.length; _j < _len; _j++) {
        match = matches[_j];
        tr = new ValueRefer;
        tr.setValue(match);
        this.refers.push(tr);
      }
    }
  }

  TemplateScoop.prototype.getThumb = function(property, expection, name) {
    var item, v;
    item = (function() {
      var _i, _len, _ref, _results;
      _ref = this.crops;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item[property] === expection) {
          _results.push(item);
        }
      }
      return _results;
    }).call(this);
    if (item.length && (item[0].content != null)) {
      v = new ValueThumb(name);
      v.setValue("http://i1.nyt.com/" + item[0].content);
      return this.thumbs.push(v);
    }
  };

  return TemplateScoop;

})(Template);

var TemplateWordpress,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TemplateWordpress = (function(_super) {

  __extends(TemplateWordpress, _super);

  TemplateWordpress.prototype.thumbFactory = new ThumbFactory;

  function TemplateWordpress(data) {
    var icon, v;
    TemplateWordpress.__super__.constructor.apply(this, arguments);
    this.setUrl(this.data.blogpost.url);
    this.headline.setValue(this.data.blogpost.post_title);
    this.byline.setValue(this.data.blogpost.byline);
    this.summary.setValue(this.data.blogpost.post_excerpt);
    this.kicker.setValue(this.data.blogpost.kicker);
    icon = this.thumbFactory.get(data.blogpost.url, data.blogpost.post_categories);
    if (icon !== null) {
      v = new ValueThumb("thumbStandard");
      v.setValue(icon);
      this.thumbs.push(v);
    }
  }

  return TemplateWordpress;

})(Template);

var TemplateSkimmer,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TemplateSkimmer = (function(_super) {

  __extends(TemplateSkimmer, _super);

  TemplateSkimmer.prototype.thumbFactory = new ThumbFactory;

  function TemplateSkimmer(data) {
    var icon, matches, v;
    TemplateSkimmer.__super__.constructor.apply(this, arguments);
    this.setUrl(this.data.url);
    this.headline.setValue(this.data.title);
    if (this.data.byline) {
      matches = this.data.byline.match(/(<.*?>)(.*)(<\/.*?>)/);
      if ((matches[2] != null) && matches[2]) {
        this.byline.setValue(matches[2]);
      } else {
        this.byline.setValue("");
        this.byline.setDisplay(false);
      }
    } else {
      this.byline.setValue("");
      this.byline.setDisplay(false);
    }
    this.summary.setValue(this.data.summary);
    this.kicker.setValue(this.data.sectionDisplayName);
    icon = this.thumbFactory.get(data.url);
    if (icon !== null) {
      v = new ValueThumb("thumbStandard");
      v.setValue(icon);
      this.thumbs.push(v);
    }
  }

  return TemplateSkimmer;

})(Template);

var Value;

Value = (function() {

  Value.prototype.name = null;

  Value.prototype.value = null;

  Value.prototype.display = null;

  function Value(name) {
    if (name == null) {
      name = null;
    }
    this.display = true;
    if (name) {
      this.setName(name.capitalize());
    }
  }

  Value.prototype.save = function() {
    return {
      name: escape(this.name),
      value: escape(this.value),
      display: this.display
    };
  };

  Value.prototype.test = function() {
    return this.value && this.display;
  };

  Value.prototype.set = function(n, v, d) {
    this.setName(unescape(n));
    this.setValue(unescape(v));
    return this.setDisplay(d);
  };

  Value.prototype.get = function() {
    return [this.getName(), this.getValue(), this.getDisplay()];
  };

  Value.prototype.setName = function(n) {
    return this.name = unescape(n);
  };

  Value.prototype.getName = function() {
    return this.name;
  };

  Value.prototype.setDisplay = function(d) {
    return this.display = d;
  };

  Value.prototype.getDisplay = function() {
    return this.display;
  };

  Value.prototype.setValue = function(v) {
    return this.value = unescape(jsprettify.prettifyStr(v));
  };

  Value.prototype.getValue = function() {
    return this.value;
  };

  Value.prototype.update = function() {
    var $value, selector;
    selector = this.getName();
    $value = $("#Value_" + selector);
    if ($value.length) {
      this.setValue($value.val());
    }
    if ($value.length && selector !== "Headline") {
      return this.setDisplay($("#Display_" + selector).is(':checked'));
    }
  };

  Value.prototype.generateRow = function() {
    var checked, display, html, name, value, _ref;
    _ref = this.get(), name = _ref[0], value = _ref[1], display = _ref[2];
    checked = "";
    if (display) {
      checked = "checked";
    }
    html = "";
    html += "<tr>";
    if (name !== "Headline") {
      html += "<td><input id=\"Display_" + name + "\" type=\"checkbox\" " + checked + " /></td>";
    } else {
      html += "<td>&nbsp;</td>";
    }
    html += "<td>";
    html += "<p>" + name + "</p>";
    html += "<textarea id=\"Value_" + name + "\">" + value + "</textarea>";
    if (name === "Headline") {
      html += "<p><input type=\"submit\" id=\"AddKicker\" value=\"Add Kicker\"> <input type=\"submit\" id=\"AddLastName\" value=\"Add Last Name\"></p>";
    }
    html += "</td>";
    html += "</tr>";
    return html;
  };

  return Value;

})();

var ValueRefer,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ValueRefer = (function(_super) {

  __extends(ValueRefer, _super);

  ValueRefer.prototype.href = null;

  ValueRefer.prototype.text = null;

  ValueRefer.prototype.icons = ["audio", "document", "graphic", "interactive", "map", "photo", "slideshow", "trailer", "video"];

  ValueRefer.prototype.icon = "";

  function ValueRefer(name) {
    if (!(name != null)) {
      name = "Refer";
    }
    ValueRefer.__super__.constructor.call(this, name);
    this.icon = "";
  }

  ValueRefer.prototype.save = function() {
    var saved;
    saved = ValueRefer.__super__.save.call(this);
    saved.href = escape(this.href);
    saved.text = escape(this.text);
    saved.icon = this.icon;
    return saved;
  };

  ValueRefer.prototype.set = function(n, t, h, d, i) {
    this.setName(unescape(n));
    this.setText(unescape(t));
    this.setHref(unescape(h));
    this.setDisplay(d);
    return this.setIcon(i);
  };

  ValueRefer.prototype.get = function() {
    return [this.getName(), this.getText(), this.getHref(), this.getDisplay()];
  };

  ValueRefer.prototype.getValue = function() {
    var label;
    if (this.icon === "") {
      return "<a href=\"" + this.href + "\">" + this.text + "</a>";
    } else {
      label = this.icon.capitalize();
      if (label === "Slideshow") {
        label = "Slide Show";
      }
      return "<a href=\"" + this.href + "\"><span class=\"icon " + this.icon + "\">" + label + "</span>: " + this.text + "</a>";
    }
  };

  ValueRefer.prototype.setValue = function(v) {
    var matches;
    this.value = v;
    matches = this.value.match(/<a href="(.*?)">(.*)<\/.*?>/);
    if (matches) {
      this.href = matches[1];
      return this.text = matches[2];
    }
  };

  ValueRefer.prototype.setText = function(t) {
    this.text = jsprettify.prettifyStr(t);
    return this.setValue("<a href=\"" + this.href + "\">" + this.text + "</a>");
  };

  ValueRefer.prototype.getText = function() {
    return this.text;
  };

  ValueRefer.prototype.setHref = function(h) {
    this.href = h;
    return this.setValue("<a href=\"" + this.href + "\">" + this.text + "</a>");
  };

  ValueRefer.prototype.getHref = function() {
    return this.href;
  };

  ValueRefer.prototype.setIcon = function(i) {
    return this.icon = i;
  };

  ValueRefer.prototype.getIcon = function() {
    return this.icon;
  };

  ValueRefer.prototype.update = function(iter) {
    var $href, $select, $value, selector;
    selector = this.getName() + "_" + iter;
    $value = $("#Value_" + selector);
    $href = $("#Value_" + selector + "_Href");
    $select = $("#Select_" + selector);
    if ($value.length) {
      this.setText($value.val());
    }
    if ($href.length) {
      this.setHref($href.val());
    }
    if ($value.length) {
      this.setDisplay($("#Display_" + selector).is(':checked'));
    }
    return this.setIcon($select.find("option:selected").val());
  };

  ValueRefer.prototype.generateRow = function(iter) {
    var checked, display, href, html, icon, iconName, name, value, _i, _len, _ref, _ref1;
    _ref = this.get(), name = _ref[0], value = _ref[1], href = _ref[2], display = _ref[3];
    name += "_" + iter;
    checked = "";
    if (display) {
      checked = "checked";
    }
    html = "";
    html += "<tr>";
    html += "<td><input id=\"Display_" + name + "\" type=\"checkbox\" " + checked + " /></td>";
    html += "<td>";
    html += "<p>" + name + "</p>";
    html += "<textarea id=\"Value_" + name + "\">" + value + "</textarea>";
    html += "<p>";
    html += "<p>Icon</p>";
    html += "<select id=\"Select_" + name + "\">";
    html += "<option value=\"\"></option>";
    _ref1 = this.icons;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      icon = _ref1[_i];
      iconName = icon.capitalize();
      html += "<option value=\"" + icon + "\">" + iconName + "</option>";
    }
    html += "</select>";
    html += "</p>";
    html += "<p>Href</p>";
    html += "<textarea id=\"Value_" + name + "_Href\">" + href + "</textarea>";
    html += "</td>";
    html += "</tr>";
    return html;
  };

  return ValueRefer;

})(Value);

var ValueThumb,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ValueThumb = (function(_super) {

  __extends(ValueThumb, _super);

  function ValueThumb() {
    return ValueThumb.__super__.constructor.apply(this, arguments);
  }

  ValueThumb.prototype.setValue = function(v) {
    return this.value = v.trim();
  };

  ValueThumb.prototype.generateRow = function(iter) {
    var checked, display, html, name, size, src, _ref;
    _ref = this.get(), name = _ref[0], src = _ref[1], display = _ref[2];
    if (name === "ThumbStandard") {
      size = 'width="50" height="50"';
    } else if (name === "163") {
      size = 'width="163"';
    }
    checked = "";
    if (display) {
      checked = "checked";
    }
    html = "";
    html += "<tr>";
    html += "<td><input id=\"Display_Thumb\" name=\"Display_Thumb\" type=\"radio\" " + checked + " value=\"" + iter + "\" /></td>";
    html += "<td>";
    html += "<p>" + name + "</p>";
    html += "<img src=\"" + src + "\" " + size + " />";
    html += "</td>";
    html += "</tr>";
    return html;
  };

  return ValueThumb;

})(Value);

var Element,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Element = (function(_super) {

  __extends(Element, _super);

  Element.prototype.id = null;

  Element.prototype.$ElementsManager = null;

  Element.prototype.values = [];

  function Element(id) {
    var value, _i, _len, _ref;
    if (isNaN(id)) {
      this.id = id;
    } else {
      this.id = "Element_" + id;
    }
    this.$ElementsManager = $("#ElementsManager");
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      this[value] = null;
      this[value + "Backup"] = null;
    }
  }

  Element.prototype.save = function() {
    var save, value, _i, _len, _ref;
    save = {
      id: this.id
    };
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      save[value] = this[value];
    }
    save["class"] = this.constructor.name;
    return save;
  };

  Element.prototype.append = function(html) {
    var that;
    this.$ElementsManager.append(html);
    this.$div = $("#" + this.id);
    that = this;
    return this.$div.on("dblclick", function(event) {
      return that.handleDblclick(event);
    });
  };

  Element.prototype.handleDblclick = function(event) {
    this.generateEdit();
    return $("#LayoutManager").fadeOut(function() {
      return $("#Edit").fadeIn();
    });
  };

  Element.prototype.generateEdit = function(html) {
    var $table, that;
    this.backup();
    $table = $("#Edit table");
    html += "<tr>\n	<td>\n		<input type=\"submit\" value=\"Save\" id=\"EditSave\" />\n		<input type=\"submit\" value=\"Cancel\" id=\"EditCancel\" />\n	</td>\n</tr>";
    $table.empty().append(html);
    that = this;
    $table.find("#EditCancel").on("click", function(event) {
      return that.handleCancel();
    });
    $table.find("#EditSave").on("click", function(event) {
      return that.handleSave();
    });
    $table.find("input, textarea").on("change", function(event) {
      return that.handleChange();
    });
    return $table.find("input, textarea").on("keyup", function(event) {
      return that.handleChange();
    });
  };

  Element.prototype.backup = function() {
    var value, _i, _len, _ref, _results;
    _ref = this.values;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      _results.push(this[value + "Backup"] = this[value]);
    }
    return _results;
  };

  Element.prototype.restore = function() {
    var value, _i, _len, _ref, _results;
    _ref = this.values;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      _results.push(this[value] = this[value + "Backup"]);
    }
    return _results;
  };

  Element.prototype.closeEdit = function() {
    return $("#Edit").fadeOut(function() {
      return $("#LayoutManager").fadeIn();
    });
  };

  Element.prototype.handleCancel = function() {
    this.closeEdit();
    this.restore();
    return $.publish("LayoutManager/updateLayout");
  };

  Element.prototype.handleChange = function() {
    var $value, selector, value, _i, _len, _ref;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      selector = value.capitalize();
      $value = $("#Value_" + selector);
      if ($value.length) {
        this[value] = $value.val();
      }
    }
    return $.publish("LayoutManager/updateLayout");
  };

  Element.prototype.handleSave = function() {
    this.closeEdit();
    return $.publish("LayoutManager/updateLayout");
  };

  return Element;

})(PositionsManager);

var ElementCenterable,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ElementCenterable = (function(_super) {

  __extends(ElementCenterable, _super);

  ElementCenterable.prototype.values = ["isCentered"];

  function ElementCenterable(id) {
    ElementCenterable.__super__.constructor.call(this, id);
    this.isCentered = true;
  }

  ElementCenterable.prototype.html = function(position) {
    return "";
  };

  ElementCenterable.prototype.generateEdit = function() {
    var checked, html, name, value, _i, _len, _ref;
    html = "";
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      name = value.capitalize();
      value = this[value];
      checked = "";
      if (this.isCentered) {
        checked = "checked";
      }
      html = "";
      html += "<tr>";
      html += "<td>";
      html += "<p><input id=\"Display_" + name + "\" name=\"Display_" + name + "\" type=\"checkbox\" " + checked + "/> Center?</p>";
      html += "</td>";
      html += "</tr>";
    }
    return ElementCenterable.__super__.generateEdit.call(this, html);
  };

  ElementCenterable.prototype.handleChange = function() {
    var $value, selector, value, _i, _len, _ref;
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      selector = value.capitalize();
      $value = $("#Display_" + selector);
      this[value] = $value.is(':checked');
    }
    return $.publish("LayoutManager/updateLayout");
  };

  return ElementCenterable;

})(Element);

var ElementKicker,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ElementKicker = (function(_super) {

  __extends(ElementKicker, _super);

  ElementKicker.prototype.values = ["text"];

  function ElementKicker(id, text) {
    var html;
    ElementKicker.__super__.constructor.call(this, id);
    if (!text) {
      text = "Kicker";
    }
    this.text = text;
    html = "<div id=\"" + this.id + "\" class=\"_element _elementKicker\">Kicker: " + text + "</div>";
    this.append(html);
  }

  ElementKicker.prototype.html = function() {
    return "<h6 class=\"kicker\">" + this.text + "</h6>";
  };

  ElementKicker.prototype.closeEdit = function() {
    $("#" + this.id).html("Kicker: " + this.text);
    return ElementKicker.__super__.closeEdit.call(this);
  };

  ElementKicker.prototype.generateEdit = function() {
    var html, name, value, _i, _len, _ref;
    html = "";
    _ref = this.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      name = value.capitalize();
      value = this[value];
    }
    html = "";
    html += "<tr>";
    html += "<td>";
    html += "<p>" + name + "</p>";
    html += "<textarea id=\"Value_" + name + "\">" + value + "</textarea>";
    html += "</td>";
    html += "</tr>";
    return ElementKicker.__super__.generateEdit.call(this, html);
  };

  return ElementKicker;

})(Element);

var ElementSundayReview,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ElementSundayReview = (function(_super) {

  __extends(ElementSundayReview, _super);

  function ElementSundayReview(id, data) {
    var html;
    if (data == null) {
      data = null;
    }
    ElementSundayReview.__super__.constructor.call(this, id);
    html = "<div id=\"" + this.id + "\" class=\"_element _elementSundayReview\">Sunday Review</div>";
    this.append(html);
    if (data !== null) {
      this.isCentered = data.isCentered;
    }
  }

  ElementSundayReview.prototype.html = function(position) {
    if (position === this.top || position === this.bottom) {
      return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpC337.png" /></a></h4>';
    } else if (position === this.left || position === this.right) {
      if (this.isCentered) {
        return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpC163.png" border="0" /></a></h4>';
      } else {
        return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/sundayReviewHpL163.png" border="0" /></a></h4>';
      }
    } else {
      return "";
    }
  };

  return ElementSundayReview;

})(ElementCenterable);

var ElementTheOpinionPages,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ElementTheOpinionPages = (function(_super) {

  __extends(ElementTheOpinionPages, _super);

  function ElementTheOpinionPages(id) {
    var html;
    ElementTheOpinionPages.__super__.constructor.call(this, id);
    html = "<div id=\"" + this.id + "\" class=\"_element _elementTheOpinonPages\">The Opinion Pages</div>";
    this.append(html);
  }

  ElementTheOpinionPages.prototype.html = function(position) {
    if (position === this.top || position === this.bottom) {
      return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpC337.png" /></a></h4>';
    } else if (position === this.left || position === this.right) {
      if (this.isCentered) {
        return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpC163.png" border="0" /></a></h4>';
      } else {
        return '<h4 class="sectionHeaderHome"><a href="http://www.nytimes.com/pages/opinion/index.html" ><img src="http://graphics8.nytimes.com/images/opinion/homepage/opinionPagesHpL163.png" border="0" /></a></h4>';
      }
    } else {
      return "";
    }
  };

  return ElementTheOpinionPages;

})(ElementCenterable);
