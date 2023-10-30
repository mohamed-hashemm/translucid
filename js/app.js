! function(o, n, e, t) {
    "use strict";
    var i = {
        i: function(o) {
            i.s(), i.methods()
        },
        s: function(t) {
            this._window = e(o), this._document = e(n), this._body = e("body"), this._html = e("html")
        },
        methods: function(o) {
            i.w(), i.contactForm(), i.axilBackToTop(), i.stickyHeaderMenu(), i.mobileMenuActivation(), i.salActivation(), i.axilMasonary(), i.counterUp(), i.axilSlickActivation(), i.magnificPopupActivation(), i.countdownInit(".countdown", "2022/12/01"), i.tiltAnimation(), i.menuLinkActive(), i.audioPlayerActivation(), i.onePageNav(), i.pricingPlan(), i.marqueImages(), i.axilHover(), i.onePageTopFixed(), i.blogModalActivation(), i.portfolioModalActivation(), i.caseModalActivation(), i.themeColorSet()
        },
        w: function(o) {
            this._window.on("load", i.l).on("scroll", i.res)
        },
        contactForm: function() {
            e(".axil-contact-form").on("submit", (function(o) {
                o.preventDefault();
                var n = e(this);
                n.closest("input,textarea");
                n.closest("div").find("input,textarea").removeAttr("style"), n.find(".error-msg").remove(), n.closest("div").find('button[type="submit"]').attr("disabled", "disabled");
                var t = e(this).serialize();
                e.ajax({
                    url: "mail.php",
                    type: "post",
                    dataType: "json",
                    data: t,
                    success: function(o) {
                        n.closest("div").find('button[type="submit"]').removeAttr("disabled"), !1 === o.code ? (n.closest("div").find('[name="' + o.field + '"]'), n.find(".btn-primary").after('<div class="error-msg"><p>*' + o.err + "</p></div>")) : (e(".error-msg").hide(), e(".form-group").removeClass("focused"), n.find(".btn-primary").after('<div class="success-msg"><p>' + o.success + "</p></div>"), n.closest("div").find("input,textarea").val(""), setTimeout((function() {
                            e(".success-msg").fadeOut("slow")
                        }), 5e3))
                    }
                })
            }))
        },
        axilBackToTop: function() {
            var n = e("#backto-top");
            e(o).on("scroll", (function() {
                e(o).scrollTop() > 300 ? n.addClass("show") : n.removeClass("show")
            })), n.on("click", (function(o) {
                o.preventDefault(), e("html, body").animate({
                    scrollTop: 0
                }, "300")
            }))
        },
        themeColorSet: function() {
            e("body").hasClass("active-dark-mode") ? e("body").removeClass("active-light-mode") : e("body").hasClass("active-light-mode") ? e("body").removeClass("active-dark-mode") : e("body").addClass("active-light-mode")
        },
        stickyHeaderMenu: function() {
            e(o).on("scroll", (function() {
                if (e("body").hasClass("sticky-header")) {
                    var n = e("#axil-sticky-placeholder"),
                        t = e(".axil-mainmenu"),
                        i = t.outerHeight(),
                        a = (e(".axil-header-top").outerHeight() || 0) + 200;
                    e(o).scrollTop() > a ? (t.addClass("axil-sticky"), n.height(i)) : (t.removeClass("axil-sticky"), n.height(0))
                }
            }))
        },
        mobileMenuActivation: function(n) {
            function t() {
                o.matchMedia("(min-width: 992px)").matches ? (e("body").removeClass("mobilemenu-active"), e("#mobilemenu-popup").removeClass("offcanvas show").removeAttr("style"), e(".axil-mainmenu .offcanvas-backdrop").remove(), e(".axil-submenu").removeAttr("style")) : (e("body").addClass("mobilemenu-active"), e("#mobilemenu-popup").addClass("offcanvas"), e(".menu-item-has-children > a").on("click", (function(o) {
                    o.preventDefault()
                })))
            }
            e(".menu-item-has-children > a").append('<span class="submenu-toggle-btn"></span>'), e(".menu-item-has-children > a .submenu-toggle-btn").on("click", (function(o) {
                var n = e(this).parents(".mainmenu-nav"),
                    t = e(this).parent().siblings(".axil-submenu"),
                    i = e(this).parents(".menu-item-has-children").siblings().find(".axil-submenu");
                n.hasClass("offcanvas") && (e(t).slideToggle(400), e(i).slideUp(400), e(this).parents(".menu-item-has-children").toggleClass("open"), e(this).parents(".menu-item-has-children").siblings().removeClass("open"))
            })), e(o).on("resize", (function() {
                t()
            })), t()
        },
        salActivation: function() {
            sal({
                threshold: .1,
                once: !0
            })
        },
        axilMasonary: function() {
            e(".axil-isotope-wrapper").imagesLoaded((function() {
                e(".isotope-button").on("click", "button", (function() {
                    var n = e(this).attr("data-filter");
                    o.isotope({
                        filter: n
                    })
                }));
                var o = e(".isotope-list").isotope({
                    itemSelector: ".project",
                    percentPosition: !0,
                    transitionDuration: "0.7s",
                    layoutMode: "fitRows",
                    masonry: {
                        columnWidth: 1
                    }
                })
            })), e(".isotope-button button").on("click", (function(o) {
                e(this).siblings(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked"), o.preventDefault()
            }));
            var o = e("#no-equal-gallery");
            if (o.length) var n = o.imagesLoaded((function() {
                n.isotope({
                    itemSelector: ".no-equal-item",
                    masonry: {
                        columnWidth: ".no-equal-item"
                    }
                })
            }))
        },
        counterUp: function() {
            var o = e(".count");
            o.each((function() {
                o.appear((function(o) {
                    var n = e(this).attr("data-count");
                    new Odometer({
                        el: this,
                        format: "d",
                        duration: 2e3
                    }).update(n)
                }))
            }))
        },
        axilSlickActivation: function(o) {
            e(".slick-slider").slick()
        },
        magnificPopupActivation: function() {
            var o = e(".popup-youtube");
            o.length && o.magnificPopup({
                disableOn: 300,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            })
        },
        countdownInit: function(o, n) {
            var t = e(o);
            t.length && t.countdown(n, (function(o) {
                e(this).html(o.strftime("<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Seconds</div> </div></div>"))
            }))
        },
        tiltAnimation: function() {
            var o = e(".paralax-image");
            o.length && o.tilt({
                max: 12,
                speed: 1e3,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                transition: !1,
                perspective: 1e3,
                scale: 1
            })
        },
        menuLinkActive: function() {
            var o = location.pathname.split("/"),
                n = o[o.length - 1];
            e(".mainmenu li a, .main-navigation li a").each((function() {
                var o = e(this);
                o.attr("href") === n && (o.addClass("active"), o.parents(".menu-item-has-children").addClass("menu-item-open open"))
            }))
        },
        audioPlayerActivation: function() {
            GreenAudioPlayer.init({
                selector: ".green-player",
                stopOthersOnPlay: !0
            })
        },
        onePageNav: function() {
            e("#onepagenav").onePageNav({
                currentClass: "current",
                changeHash: !1,
                scrollSpeed: 500,
                scrollThreshold: .2,
                filter: "",
                easing: "swing"
            })
        },
        pricingPlan: function() {
            var o = e("#yearly-plan-btn"),
                n = e("#monthly-plan-btn"),
                t = e(".monthly-pricing"),
                i = e(".yearly-pricing");
            e(n).on("click", (function() {
                e(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active"), t.css("display", "block"), i.css("display", "none")
            })), e(o).on("click", (function() {
                e(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active"), t.css("display", "none"), i.css("display", "block")
            }))
        },
        marqueImages: function() {
            e(".marque-images").each((function() {
                var o = 0,
                    n = e(this);
                setInterval((function() {
                    o += 1, n.css("background-position-x", -o + "px")
                }), 10)
            }))
        },
        axilHover: function() {
            e(".services-grid, .counterup-progress, .testimonial-grid, .pricing-table, .brand-grid, .blog-list, .about-quality, .team-grid, .splash-hover-control").mouseenter((function() {
                var o = this;
                setTimeout((function() {
                    e(".services-grid.active, .counterup-progress.active, .testimonial-grid.active, .pricing-table.active, .brand-grid.active, .blog-list.active, .about-quality.active, .team-grid.active, .splash-hover-control.active").removeClass("active"), e(o).addClass("active")
                }), 0)
            }))
        },
        onePageTopFixed: function() {
            if (e(".onepagefixed").length) {
                var n = e(".onepagefixed"),
                    t = n.offset().top - 100,
                    i = e(o),
                    a = e(".service-scroll-navigation-area").outerHeight() + t;
                e(o).on("scroll", (function() {
                    i.scrollTop() >= t ? n.css({
                        position: "fixed",
                        left: "0",
                        right: "0",
                        top: "0",
                        zIndex: "5"
                    }) : n.removeAttr("style"), i.scrollTop() >= a && n.removeAttr("style")
                }))
            }
        },
        blogModalActivation: function() {
            var o = e(".op-blog-modal"),
                n = e(".blog-list"),
                t = o.find(".close");
            e("body").hasClass("onepage-template") && (n.each((function() {
                var n = e(this),
                    t = n.find(".post-thumbnail a, .title a, .more-btn"),
                    i = n.find(".modal-thumb"),
                    a = n.find(".title"),
                    s = n.find(".post-content p"),
                    l = n.find(".blog-share");
                t.on("click", (function(n) {
                    e("body").addClass("op-modal-open"), o.addClass("open"), i.clone().appendTo(".op-modal-content .post-thumbnail"), a.clone().appendTo(".op-modal-content .post-content"), s.clone().appendTo(".op-modal-content .post-content"), l.clone().appendTo(".op-modal-content .post-content"), n.preventDefault()
                }))
            })), t.on("click", (function(n) {
                e("body").removeClass("op-modal-open"), o.removeClass("open"), o.find(".op-modal-content .post-content").html(""), o.find(".op-modal-content .post-thumbnail").html(""), n.preventDefault()
            })), e("#onepagenav li a").on("click", (function() {
                var o = e("#mobilemenu-popup .mobile-menu-close, .header-offcanvasmenu .btn-close");
                e("#mobilemenu-popup, .header-offcanvasmenu").hasClass("offcanvas") && o.trigger("click")
            })))
        },
        portfolioModalActivation: function() {
            var o = e(".op-portfolio-modal"),
                n = e(".project-grid"),
                t = o.find(".close");
            e("body").hasClass("onepage-template") && (n.each((function() {
                var n = e(this),
                    t = n.find(".thumbnail a, .title a"),
                    i = n.find(".thumbnail .modal-thumb"),
                    a = n.find(".title"),
                    s = n.find(".content p"),
                    l = n.find(".project-share");
                t.on("click", (function(n) {
                    e("body").addClass("op-modal-open"), o.addClass("open"), i.clone().appendTo(".op-modal-content .portfolio-thumbnail"), a.clone().appendTo(".op-modal-content .portfolio-content"), s.clone().appendTo(".op-modal-content .portfolio-content"), l.clone().appendTo(".op-modal-content .portfolio-content"), n.preventDefault()
                }))
            })), t.on("click", (function(n) {
                e("body").removeClass("op-modal-open"), o.removeClass("open"), o.find(".op-modal-content .portfolio-content").html(""), o.find(".op-modal-content .portfolio-thumbnail").html(""), n.preventDefault()
            })))
        },
        caseModalActivation: function() {
            var o = e(".op-case-modal"),
                n = e(".case-study-featured"),
                t = o.find(".close");
            e("body").hasClass("onepage-template") && (n.each((function() {
                var n = e(this),
                    t = n.find(".axil-btn"),
                    i = n.find(".title"),
                    a = n.find(".section-heading p");
                t.on("click", (function(n) {
                    e("body").addClass("op-modal-open"), o.addClass("open"), i.clone().appendTo(".op-modal-content .case-content"), a.clone().appendTo(".op-modal-content .case-content"), n.preventDefault()
                }))
            })), t.on("click", (function(n) {
                e("body").removeClass("op-modal-open"), o.removeClass("open"), o.find(".op-modal-content .case-content").html(""), n.preventDefault()
            })))
        }
    };
    i.i()
}(window, document, jQuery);