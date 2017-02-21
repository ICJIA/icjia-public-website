// custom javascript here


//$('#renderTarget').load( "../includes/renderText.html" );


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

window.onload=function(){
  FusionCharts.ready(function() {
    var ARI2015 = new FusionCharts({
      type: 'maps/illinois',
      renderAt: 'chart-container',
      width: '98%',
      height: '650',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Adult Redeploy Illinois SFY2015 Sites",
          "captionFontSize":"18",
          "entityFillHoverColor": "#cccccc",
          "hoverOnEmpty" : "0",
          "useHoverColor" : "0",

          "showLabels": "0",
          "bgColor" : "f5f5f5",
          "fillColor" : "FFFFFF",
          "borderColor": "777777"

        },
        "colorrange": {
          "color": [
        {
          "minvalue": "0",
          "maxvalue": "500",
          "color": "#005ce6",
          "displayValue": "ARI SFY15 sites"
        },
      {
        "minvalue": "500",
        "maxvalue": "1000",
        "color": "#bee8ff",
        "displayValue": "Planning Sites"
      },
      ]
    },

    "data": [
  {
    "id": "001",
    "displayValue": " "
  },
{
  "id": "003",
  "displayValue": " "
},
{
  "id": "007",
  "displayValue": "Boone",
  "value": "10",
  "toolText": "Boone"
},
{ "id" : "009", "displayValue" : " "  },
{ "id" : "011", "displayValue" : " "  },
{ "id" : "013", "displayValue" : " "  },
{ "id" : "015", "displayValue" : " "  },
{ "id" : "017", "displayValue" : " "  },
{ "id" : "019", "displayValue" : " "  },
{ "id" : "021", "displayValue" : "Christian", "value" : "10", "toolText" : "Christian"  },
{ "id" : "023", "displayValue" : " "  },
{ "id" : "025", "displayValue" : " "  },
{ "id" : "027", "displayValue" : " "  },
{ "id" : "029", "displayValue" : " "  },
{ "id" : "031", "displayValue" : "Cook", "value" : "10", "toolText" : "Cook"},
{ "id" : "033", "displayValue" : "Crawford", "value" : "10", "toolText" : "Crawford" },
{ "id" : "035", "displayValue" : " "  },
{ "id" : "037", "displayValue" : " "  },
{ "id" : "039", "displayValue" : " "  },
{ "id" : "041", "displayValue" : " "  },
{ "id" : "043", "displayValue" : "DuPage", "value" : "10", "toolText" : "DuPage" },
{ "id" : "045", "displayValue" : " "  },
{ "id" : "047", "displayValue" : "Edwards", "value" : "10", "toolText" : "Edwards" },
{ "id" : "049", "displayValue" : "Effingham", "value" : "10", "toolText" : "Effingham" },
{ "id" : "051", "displayValue" : " "  },
{ "id" : "053", "displayValue" : " "  },
{ "id" : "055", "displayValue" : "Franklin", "value" : "10", "toolText" : "Franklin" },
{ "id" : "057", "displayValue" : "Fulton", "value" : "10", "toolText" : "Fulton" },
{ "id" : "059", "displayValue" : "Gallatin", "value" : "10", "toolText" : "Gallatin" },
{ "id" : "061", "displayValue" : " "  },
{ "id" : "063", "displayValue" : "Grundy", "value" : "515", "toolText" : "Grundy"},
{ "id" : "065", "displayValue" : "Hamilton", "value" : "10", "toolText" : "Hamilton" },
{ "id" : "067", "displayValue" : "Hancock", "value" : "10", "toolText" : "Hancock" },
{ "id" : "069", "displayValue" : "Hardin", "value" : "10", "toolText" : "Hardin" },
{ "id" : "071", "displayValue" : "Henderson", "value" : "10", "toolText" : "Henderson" },
{ "id" : "073", "displayValue" : " "  },
{ "id" : "075", "displayValue" : " "  },
{ "id" : "077", "displayValue" : " "  },
{ "id" : "079", "displayValue" : " "  },
{ "id" : "081", "displayValue" : "Jefferson", "value" : "10", "toolText" : "Jefferson" },
{ "id" : "083", "displayValue" : "Jersey", "value" : "10", "toolText" : "Jersey" },
{ "id" : "085", "displayValue" : " "  },
{ "id" : "087", "displayValue" : " "  },
{ "id" : "089", "displayValue" : "Kane", "value" : "10", "toolText" : "Kane" },
{ "id" : "091", "displayValue" : "Kankakee", "value" : "515", "toolText" : "Kankakee" },
{ "id" : "093", "displayValue" : " "  },
{ "id" : "095", "displayValue" : "Knox", "value" : "10", "toolText" : "Knox" },
{ "id" : "097", "displayValue" : "Lake", "value" : "10", "toolText" : "Lake" },
{ "id" : "099", "displayValue" : "LaSalle", "value" : "10", "toolText" : "LaSalle" },
{ "id" : "101", "displayValue" : "Lawrence", "value" : "10", "toolText" : "Lawrence" },
{ "id" : "103", "displayValue" : " "  },
{ "id" : "105", "displayValue" : " "  },
{ "id" : "107", "displayValue" : " "  },
{ "id" : "109", "displayValue" : "McDonough", "value" : "10", "toolText" : "McDonough" },
{ "id" : "111", "displayValue" : " "  },
{ "id" : "113", "displayValue" : "McLean", "value" : "10", "toolText" : "McLean" },
{ "id" : "115", "displayValue" : "Macon", "value" : "10", "toolText" : "Macon" },
{ "id" : "117", "displayValue" : " "  },
{ "id" : "119", "displayValue" : "Madison", "value" : "10", "toolText" : "Madison" },
{ "id" : "121", "displayValue" : " "  },
{ "id" : "123", "displayValue" : " "  },
{ "id" : "125", "displayValue" : " "  },
{ "id" : "127", "displayValue" : " "  },
{ "id" : "129", "displayValue" : " " },
{ "id" : "131", "displayValue" : " " },
{ "id" : "133", "displayValue" : "Monroe", "value" : "515", "toolText" : "Monroe"},
{ "id" : "135", "displayValue" : " " },
{ "id" : "137", "displayValue" : " " },
{ "id" : "139", "displayValue" : " " },
{ "id" : "141", "displayValue" : " " },
{ "id" : "143", "displayValue" : "Peoria", "value" : "10", "toolText" : "Peoria"},
{ "id" : "145", "displayValue" : " " },
{ "id" : "147", "displayValue" : " " },
{ "id" : "149", "displayValue" : " "  },
{ "id" : "151", "displayValue" : " " },
{ "id" : "153", "displayValue" : " " },
{ "id" : "155", "displayValue" : " " },
{ "id" : "157", "displayValue" : "Randolph", "value" : "515", "toolText" : "Randolph"},
{ "id" : "159", "displayValue" : "Richland", "value" : "10", "toolText" : "Richland"},
{ "id" : "161", "displayValue" : " " },
{ "id" : "163", "displayValue" : "St. Clair", "value" : "10", "toolText" : "St. Clair"},
{ "id" : "165", "displayValue" : " " },
{ "id" : "167", "displayValue" : "Sangamon", "value" : "10", "toolText" : "Sangamon"},
{ "id" : "169", "displayValue" : " " },
{ "id" : "171", "displayValue" : " " },
{ "id" : "173", "displayValue" : " " },
{ "id" : "175", "displayValue" : " " },
{ "id" : "177", "displayValue" : " " },
{ "id" : "179", "displayValue" : " " },
{ "id" : "181", "displayValue" : " " },
{ "id" : "183", "displayValue" : " " },
{ "id" : "185", "displayValue" : "Wabash", "value" : "10", "toolText" : "Wabash"},
{ "id" : "187", "displayValue" : "Warren", "value" : "10", "toolText" : "Warren"},
{ "id" : "189", "displayValue" : " " },
{ "id" : "191", "displayValue" : "Wayne", "value" : "10", "toolText" : "Wayne"},
{ "id" : "193" ,"displayValue" : "White", "value" : "10", "toolText" : "White"},
{ "id" : "195", "displayValue" : " " },
{ "id" : "197", "displayValue" : "Will", "value" : "515", "toolText" : "Will"},
{ "id" : "199", "displayValue" : " " },
{ "id" : "201", "displayValue" : "Winnebago", "value" : "10", "toolText" : "Winnebago"},
{ "id" : "203", "displayValue" : " " },

]
}
}).render();

});
}
