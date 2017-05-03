(function(){

	angular
	.module('cwApp')
	.controller('contactController',contactController);
	contactController.$inject = ['$scope', '$rootScope'];

	function contactController ($scope, $rootScope){
		$("#aclock").each(function() {
        updateTime()
    }),
    $("#aclock-usa").each(function() {
        updateTimeUsa()
    }),
    $("#aclock-sp").each(function() {
        updateTimeSingapore()
    })

		function updateTime() {
		    var t = null
		      , e = moment().utcOffset();
		    t = e > 0 ? moment().subtract({
		        minute: e
		    }) : moment().add({
		        minute: Math.abs(e)
		    }),
		    t = t.add({
		        hours: 5,
		        minute: 30
		    }).format("hhmmssdA"),
		    rotateHands(t[4] + t[5], t[2] + t[3], t[0] + t[1], t[7] + t[8]),
		    setTimeout(updateTime, 1e3)
		}
		function rotateHands(t, e, a, o) {
		    var r = 6 * t
		      , n = 6 * e
		      , s = 30 * a;
		    s += e / 12 * 4.59;
		    var i = o
		      , c = $("#secondhand");
		    c.css({
		        "-webkit-transform": "rotate(" + r + "deg)",
		        "-moz-transform": "rotate(" + r + "deg)",
		        transform: "rotate(" + r + "deg)"
		    });
		    var l = $("#minutehand");
		    l.css({
		        "-webkit-transform": "rotate(" + n + "deg)",
		        "-moz-transform": "rotate(" + n + "deg)",
		        transform: "rotate(" + n + "deg)"
		    });
		    var d = $("#hourhand");
		    d.css({
		        "-webkit-transform": "rotate(" + s + "deg)",
		        "-moz-transform": "rotate(" + s + "deg)",
		        transform: "rotate(" + s + "deg)"
		    }),
		    $("#period").text(i);
		    var m = !1
		      , u = null;
		    a = parseInt(a),
		    "PM" == i ? 12 > a ? u = a + 12 : 12 == a && (u = a) : (u = a,
		    12 == a && (u = 0)),
		    (u > 18 || 6 > u) && (m = !0),
		    $("#aclock").removeClass(m ? "light" : "dark").addClass(m ? "dark" : "light")
		}
		function updateTimeUsa() {
		    var t = null
		      , e = moment().utcOffset();
		    t = e > 0 ? moment().subtract({
		        minute: e
		    }) : moment().add({
		        minute: Math.abs(e)
		    }),
		    t = t.subtract({
		        hours: 7
		    }).format("hhmmssdA"),
		    rotateHandsUsa(t[4] + t[5], t[2] + t[3], t[0] + t[1], t[7] + t[8]),
		    setTimeout(updateTimeUsa, 1e3)
		}
		function rotateHandsUsa(t, e, a, o) {
		    var r = 6 * t
		      , n = 6 * e
		      , s = 30 * a;
		    s += e / 12 * 4.59;
		    var i = o
		      , c = $("#second-hand-usa");
		    c.css({
		        "-webkit-transform": "rotate(" + r + "deg)",
		        "-moz-transform": "rotate(" + r + "deg)",
		        transform: "rotate(" + r + "deg)"
		    });
		    var l = $("#minute-hand-usa");
		    l.css({
		        "-webkit-transform": "rotate(" + n + "deg)",
		        "-moz-transform": "rotate(" + n + "deg)",
		        transform: "rotate(" + n + "deg)"
		    });
		    var d = $("#hour-hand-usa");
		    d.css({
		        "-webkit-transform": "rotate(" + s + "deg)",
		        "-moz-transform": "rotate(" + s + "deg)",
		        transform: "rotate(" + s + "deg)"
		    }),
		    $("#period-usa").text(i);
		    var m = !1
		      , u = null;
		    a = parseInt(a),
		    "PM" == i ? 12 > a ? u = a + 12 : 12 == a && (u = a) : (u = a,
		    12 == a && (u = 0)),
		    (u > 18 || 6 > u) && (m = !0),
		    $("#aclock-usa").removeClass(m ? "light" : "dark").addClass(m ? "dark" : "light")
		}
		function updateTimeSingapore() {
		    var t = null
		      , e = moment().utcOffset();
		    t = e > 0 ? moment().subtract({
		        minute: e
		    }) : moment().add({
		        minute: Math.abs(e)
		    }),
		    t = t.add({
		        hours: 8
		    }).format("hhmmssdA"),
		    rotateHandsSingapore(t[4] + t[5], t[2] + t[3], t[0] + t[1], t[7] + t[8]),
		    setTimeout(updateTimeSingapore, 1e3)
		}
		function rotateHandsSingapore(t, e, a, o) {
		    var r = 6 * t
		      , n = 6 * e
		      , s = 30 * a;
		    s += e / 12 * 4.59;
		    var i = o
		      , c = $("#second-hand-sp");
		    c.css({
		        "-webkit-transform": "rotate(" + r + "deg)",
		        "-moz-transform": "rotate(" + r + "deg)",
		        transform: "rotate(" + r + "deg)"
		    });
		    var l = $("#minute-hand-sp");
		    l.css({
		        "-webkit-transform": "rotate(" + n + "deg)",
		        "-moz-transform": "rotate(" + n + "deg)",
		        transform: "rotate(" + n + "deg)"
		    });
		    var d = $("#hour-hand-sp");
		    d.css({
		        "-webkit-transform": "rotate(" + s + "deg)",
		        "-moz-transform": "rotate(" + s + "deg)",
		        transform: "rotate(" + s + "deg)"
		    }),
		    $("#period-sp").text(i);
		    var m = !1
		      , u = null;
		    a = parseInt(a),
		    "PM" == i ? 12 > a ? u = a + 12 : 12 == a && (u = a) : (u = a,
		    12 == a && (u = 0)),
		    (u > 18 || 6 > u) && (m = !0),
		    $("#aclock-sp").removeClass(m ? "light" : "dark").addClass(m ? "dark" : "light")
		}

	}
})()

