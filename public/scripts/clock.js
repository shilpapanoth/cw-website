/*function filterList(t) {
    var e = $(".more-customers .customer-block");
    $(e).hide(),
    "All" == t ? $(".more-customers").find(".customer-block").each(function(t) {
        $(this).show()
    }) : $(".more-customers").find("div[data-category*=" + t + "]").each(function(t) {
        $(this).show()
    })
}
function doCheck() {
    var t = $(".image-section");
    t.isVisible() ? $(".image-section").addClass("custom-animation") : $(".image-section").removeClass("custom-animation")
}*/
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

$(document).ready(function(){
    $("#aclock").each(function() {
        updateTime()
    }),
    $("#aclock-usa").each(function() {
        updateTimeUsa()
    }),
    $("#aclock-sp").each(function() {
        updateTimeSingapore()
    })
});
// $(document).on("ready", function() {
    /*var t = ($(document).scrollTop(),
    $(".navbar-fixed-top").outerHeight(),
    function(t) {
        return NProgress.start(),
        $.ajax({
            data: t,
            url: "/apply",
            method: "POST",
            success: function(t) {
                $("#submit-application-btn").prop("disabled", !1),
                NProgress.done(),
                window.location.href = "/thanks-for-applying/"
            },
            error: function(t) {
                $("#submit-application-btn").prop("disabled", !1),
                NProgress.done()
            }
        })
    }
    )
      , e = function(t) {
        return NProgress.start(),
        $.ajax({
            data: t,
            url: "/uploadfile",
            method: "POST",
            processData: !1,
            cache: !1,
            contentType: !1,
            success: function(t) {},
            error: function(t) {
                NProgress.done(),
                $("#submit-application-btn").prop("disabled", !1)
            }
        })
    };*/
    /*if ($("body").on("click", "#submit-application-btn", function(a) {
        a.preventDefault(),
        $("#submit-application-btn").prop("disabled", !0);
        var o = {};
        $("#submit-application-form .form-control").each(function(t, e) {
            if ("file" != $(this).attr("type")) {
                if ("" == $(this).val() || void 0 == $(this).val())
                    return;
                o[$(this).attr("name")] = $(this).val()
            }
        });
        var r = $("#resume").prop("files")[0]
          , n = $("#cover").prop("files")[0]
          , s = !1;
        if ("" == $.trim($("[name=resumeUrl]").val()) && (s = !0),
        0 == s)
            return void t(o);
        if (r && n) {
            var i = new FormData;
            i.append("file", r);
            var c = e(i);
            console.log(c),
            i = new FormData,
            i.append("file", n);
            var l = e(i);
            return void c.then(function(e) {
                o.resumeUrl = e.url,
                l.then(function(a) {
                    o.coverUrl = e.url;
                    var r = t(o);
                    r.then(function(t) {})
                })
            })
        }
        return o.resumeUrl = $("attach-link-resume").val(),
        o.coverUrl = $("attach-link-cover").val(),
        void t(o)
    }),
    $("body").on("click", "#contact-page-btn", function(t) {
        t.preventDefault();
        var e = {};
        $(".contact-form .form-control").each(function(t, a) {
            "" != $(this).val() && void 0 != $(this).val() && (e[$(this).attr("name")] = $(this).val())
        }),
        NProgress.start(),
        $.ajax({
            url: "/sendFeedback",
            method: "POST",
            data: e,
            success: function() {
                NProgress.done(),
                $("#contactUs").modal("toggle")
            },
            error: function(t) {
                NProgress.done(),
                $("#contactUs").modal("toggle")
            }
        })
    }),
    $("#sort-news button").click(function() {
        $("#sort-news button.active").removeClass("active"),
        $(this).addClass("active");
        var t = $(this).val();
        filterList(t)
    }),
    $(".navbar-toggle").click(function() {
        $("html").toggleClass("hamburger-open")
    }),
    $("#page-content").hasClass("flixster-animate") && doCheck(),
    $(".carousel-yatra-bg .carousel").carousel({
        interval: 1500
    }),
    $(".vertical").carousel({
        interval: 2500,
        pause: "none"
    }),
    $("#navbarScroll a").on("click", function(t) {
        if (t.preventDefault(),
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"),
            e.length)
                return console.log(e.length),
                $("html,body").animate({
                    scrollTop: e.offset().top - 50
                }, "slow"),
                !1
        }
    }),
    $(".arrowDown a,.btn-green").on("click", function(t) {
        if (t.preventDefault(),
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"),
            console.log(e),
            e.length)
                return $("html,body").animate({
                    scrollTop: e.offset().top
                }, "slow"),
                !1
        }
    }),
    $(".job-subheader-stick").hasClass("job")) {
        $("#navbarScroll").height(),
        $("#navbarScroll").offset().top
    }
    if ($(".service-subheader-stick").hasClass("all-services")) {
        $("#sevice-header").height(),
        $("#sevice-header").offset().top
    }
    $("#carousel-slide").carousel(),
    $(window).scroll(function() {
        var t = $(document).scrollTop();
        t > 100 ? $(".navbar").addClass("custom-navabar") : $(".navbar").removeClass("custom-navabar"),
        $("#page-content").hasClass("viewport-check") && doCheck(),
        $(window).width() >= 780 && ($(window).scrollTop() >= 620 ? $(".navbar").addClass("fixtop-enabled") : $(".navbar").removeClass("fixtop-enabled"))
    }),*/
    /*$("#aclock").each(function() {
        updateTime()
    }),
    $("#aclock-usa").each(function() {
        updateTimeUsa()
    }),
    $("#aclock-sp").each(function() {
        updateTimeSingapore()
    })*/
    /*$("#resume").change(function() {
        var t = $("#resume").val()
          , e = t.split("\\").pop();
        $("#uploadFile").attr("value", e)
    }),
    $("#cover").change(function() {
        var t = $("#cover").val()
          , e = t.split("\\").pop();
        $("#uploadCover").attr("value", e)
    })*/
// })
/*,
$.fn.isVisible = function() {
    var t = this[0].getBoundingClientRect();
    return (t.height > 0 || t.width > 0) && t.bottom >= 0 && t.right >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
}
;
var video = document.getElementById("video_player");
$(video).on({
    mouseenter: function() {
        video.setAttribute("controls", "controls")
    },
    mouseleave: function() {
        video.removeAttribute("controls")
    }
}),
$("#close_video").on("click", function() {
    $("#video_player")[0].pause()
});*/
