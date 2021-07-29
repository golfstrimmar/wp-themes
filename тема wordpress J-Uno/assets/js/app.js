!(function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (e, r, t) {
    "use strict";
    t.r(r);
    t(1);
  // ------------------
 

 
  $(document).ready(function () {
     	$(".header__slide").fadeOut(1);
      $(".icon-menu-1").on("click", function () {
        if ($(this).hasClass("act")) {
          $(this).removeClass("act");
          $(".header__slide").fadeOut();
        } else {
          $(this).addClass("act");
          $(".header__slide").fadeIn();
        }
      });
    }),
      $(document).on("mouseup", function (e) {
        if (
          !$(".icon-menu-1").is(e.target) &&
          $(".icon-menu-1").has(e.target).length === 0
        ) {
          $(".header__slide").fadeOut();
          $(".icon-menu-1").removeClass("act");
        }
      });

     
  $(document).ready(function () {
    $(".header1-1__slide").fadeOut(1);
    $(".icon-menu-1-1").on("click", function () {
      if ($(this).hasClass("act")) {
        $(this).removeClass("act");
        $(".header1-1__slide").fadeOut();
      } else {
        $(this).addClass("act");
        $(".header1-1__slide").fadeIn();
      }
    });
 }),

      $(document).on("mouseup", function (e) {
        if (
          !$(".icon-menu-1-1").is(e.target) &&
          $(".icon-menu-1-1").has(e.target).length === 0
        ) {
          $(".header1-1__slide").fadeOut();
          $(".icon-menu-1-1").removeClass("act");
        }
      });

   

    $(document).ready(function (e) {
      $(".projects__button").click(function () {
        $(".projects-galery-hidden").toggleClass(
          "projects-galery-hidden_active"
        );
      });
    }),
      // ==скроллинг====ЯКОРЯ==============
      $(document).ready(function (e) {
        $('a[href^="#calc"]').click(function () {
          var target = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
          return false;
        });
      }),
      $(document).ready(function (e) {
        $('a[href^="#pro"]').click(function () {
          var target = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
          return false;
        });
      }),
      $(document).ready(function (e) {
        $('a[href^="#invitation"]').click(function () {
          var target = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
          return false;
        });
      }),
      $(document).ready(function (e) {
        $('a[href^="#footer"]').click(function () {
          var target = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
          return false;
        });
      }),
      $(document).ready(function (e) {
        $('a[href^="#plaza-video"]').click(function () {
          var target = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
          return false;
        });
      }),
      // ============кнопка на начало
      $(document).ready(function (e) {
        $(".scrollup").click(function () {
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            1000
          );
        });
      }),
      $(document).ready(function (e) {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 200) {
            $(".scrollup").fadeIn();
          } else {
            $(".scrollup").fadeOut();
          }
        });
      }),
      // ===========попап с формой==============

      $(document).ready(function (e) {
        $(".js-button-campaign").click(function () {
          $(".js-overlay-campaign").fadeIn();
        });
      }),
      $(document).ready(function (e) {
        $(".js-close-campaign").click(function () {
          $(".js-overlay-campaign").fadeOut();
        });
      }),
      // добавление закрытия по overlay popup 7/09
      $(document).mouseup(function (e) {
        var modalctr = $(".overlay-popup");
        var modal = $(".popup-link");
        if (!modal.is(e.target) && modal.has(e.target).length === 0) {
          modalctr.fadeOut();
        }
      });

    // -----------------------коррекция ховера на тачскринах у стрелок слайдеров----------------------

    $(document)
      .on("touchstart", ".arrows-slider-work__arrow", function () {
        $(this).addClass("active-touch");
      })
      .on("touchend", ".arrows-slider-work__arrow", function () {
        $(this).removeClass("active-touch");
      });
    $(document)
      .on("touchstart", ".arrows-slider-confirm__arrow", function () {
        $(this).addClass("active-touch");
      })
      .on("touchend", ".arrows-slider-confirm__arrow", function () {
        $(this).removeClass("active-touch");
      });

    // -------------------------------------------------------------------------

    $(document).ready(function (e) {
      $(".slider-des-js").slick({
        arrows: !0,
        slidesToShow: 1,
        slideToscroll: 1,
        speed: 800,
        rows: 1,
        nextArrow: $(".arrows-slider-des__arrow_next"),
        prevArrow: $(".arrows-slider-des__arrow_prev"),
        responsive: [{ breakpoint: 960, settings: { slidesToShow: 1 } }],
      });
    }),
      $(document).ready(function (e) {
        $(".slider-invitation-js").slick({
          arrows: !0,
          dots: !0,
          slidesToShow: 1,
          slideToscroll: 1,
          speed: 800,
          easing: "ease",
          adapitveHeight: !0,
          rows: 1,
          nextArrow: $(".arrows-slider-invitation__arrow_next"),
          prevArrow: $(".arrows-slider-invitation__arrow_prev"),
        });
      }),
      $(document).ready(function (e) {
        $(".slider-confirm-js").slick({
          arrows: !0,
          dots: !0,
          slidesToShow: 1,
          slideToscroll: 1,
          speed: 800,
          easing: "ease",
          adapitveHeight: !0,
          rows: 1,
          nextArrow: $(".arrows-slider-confirm__arrow_next"),
          prevArrow: $(".arrows-slider-confirm__arrow_prev"),
        });
      }),
      $(document).ready(function (e) {
        $(".slider-work-js").slick({
          arrows: !0,
          dots: !0,
          slidesToShow: 1,
          slideToscroll: 1,
          speed: 800,
          easing: "ease",
          adaptiveHeight: !0,
          rows: 1,
          nextArrow: $(".arrows-slider-work__arrow_next"),
          prevArrow: $(".arrows-slider-work__arrow_prev"),
        });
      }),
      // ======gs-js===
      $(document).ready(function () {
        $("#gs-js").slick({
          arrows: !0,
          slidesToShow: 3,
          slideToscroll: 1,
          speed: 800,
          easing: "ease",
          rows: 1,
          nextArrow: $(".gs-js_next"),
          prevArrow: $(".gs-js_prev"),
          responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        });
      }),
	    
      // ============plyr========================
      // ============plyr========================

      $(document).ready(function (e) {
        const p1 = new Plyr("#player1");
        const p2 = new Plyr("#player2");
        const p3 = new Plyr("#player3");
        const p4 = new Plyr("#player4");
        const p5 = new Plyr("#player5");
        const p6 = new Plyr("#player6");
        const p7 = new Plyr("#player7");
        const p8 = new Plyr("#player8");
        const p9 = new Plyr("#player9");
        const p10 = new Plyr("#player10");
        const p11 = new Plyr("#player11");
        const p12 = new Plyr("#player12");
        const p13 = new Plyr("#player13");



        // -----------.js-button1------------

             $("#gs-js").on("breakpoint", function () {
               $(".js-button1").on("click", function () {
                $(".js-overlay-test1").fadeIn();
                p1.play();
               });
                $(".js-button2").on("click", function () {
                  $(".js-overlay-test2").fadeIn();
                  p2.play();
                });
  
	          $(".js-button3").on("click", function () {
              $(".js-overlay-test3").fadeIn();
              p3.play();
            });
            $(".js-button4").on("click", function () {
              $(".js-overlay-test4").fadeIn();
              p4.play();
            });
            $(".js-button5").on("click", function () {
              $(".js-overlay-test5").fadeIn();
              p5.play();
            });
            $(".js-button6").on("click", function () {
              $(".js-overlay-test6").fadeIn();
              p6.play();
            });
            $(".js-button7").on("click", function () {
              $(".js-overlay-test7").fadeIn();
              p7.play();
            });
            $(".js-button8").on("click", function () {
              $(".js-overlay-test8").fadeIn();
              p8.play();
            });
            $(".js-button9").on("click", function () {
              $(".js-overlay-test9").fadeIn();
              p9.play();
            });
            $(".js-button10").on("click", function () {
              $(".js-overlay-test10").fadeIn();
              p10.play();
            });
            $(".js-button11").on("click", function () {
              $(".js-overlay-test11").fadeIn();
              p11.play();
            });
            $(".js-button12").on("click", function () {
              $(".js-overlay-test12").fadeIn();
              p12.play();
            });
            $(".js-button13").on("click", function () {
              $(".js-overlay-test13").fadeIn();
              p13.play();
            });
            $(".js-button14").on("click", function () {
              $(".js-overlay-test14").fadeIn();
              p14.play();
            });
            $(".js-button15").on("click", function () {
              $(".js-overlay-test15").fadeIn();
              p15.play();
            });
  });

// -----------------------------------------------------

 $(".js-button1").on("click", function () {
   $(".js-overlay-test1").fadeIn();
   p1.play();
 });

	          $(".js-button2").on("click", function () {
            $(".js-overlay-test2").fadeIn();
            p2.play();
          });

	          $(".js-button3").on("click", function () {
            $(".js-overlay-test3").fadeIn();
            p3.play();
          });
	          $(".js-button4").on("click", function () {
            $(".js-overlay-test4").fadeIn();
            p4.play();
          });
	          $(".js-button5").on("click", function () {
            $(".js-overlay-test5").fadeIn();
            p5.play();
          });
	          $(".js-button6").on("click", function () {
            $(".js-overlay-test6").fadeIn();
            p6.play();
          });
	          $(".js-button7").on("click", function () {
            $(".js-overlay-test7").fadeIn();
            p7.play();
          });
	          $(".js-button8").on("click", function () {
            $(".js-overlay-test8").fadeIn();
            p8.play();
          });
	          $(".js-button9").on("click", function () {
            $(".js-overlay-test9").fadeIn();
            p9.play();
          });
	          $(".js-button10").on("click", function () {
            $(".js-overlay-test10").fadeIn();
            p10.play();
          });
	          $(".js-button11").on("click", function () {
            $(".js-overlay-test11").fadeIn();
            p11.play();
          });
	          $(".js-button12").on("click", function () {
            $(".js-overlay-test12").fadeIn();
            p12.play();
          });
	          $(".js-button13").on("click", function () {
            $(".js-overlay-test13").fadeIn();
            p13.play();
          });
	          $(".js-button14").on("click", function () {
            $(".js-overlay-test14").fadeIn();
            p14.play();
          });
	          $(".js-button15").on("click", function () {
            $(".js-overlay-test15").fadeIn();
            p15.play();
          });
	       	


        // // -----------.js-button2------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button2").on("click", function () {
        //     $(".js-overlay-test2").fadeIn();
        //     $(".popup-video2").fadeIn();
        //     $(".overlay-popup2 ").css("display", "block");
        //     p2.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button2").on("click", function () {
        //     $(".js-overlay-test2").fadeIn();
        //     $(".popup-video2").fadeIn();
        //     $(".overlay-popup2 ").css("display", "block");
        //     p2.play();
        //   });
        // });
        // // ---------------.js-button3------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button3").on("click", function () {
        //     $(".js-overlay-test3").fadeIn();
        //     $(".popup-video3").fadeIn();
        //     $(".overlay-popup3 ").css("display", "block");
        //     p3.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button3").on("click", function () {
        //     $(".js-overlay-test3").fadeIn();
        //     $(".popup-video3").fadeIn();
        //     $(".overlay-popup3 ").css("display", "block");
        //     p3.play();
        //   });
        // });
        // // --------------4------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button4").on("click", function () {
        //     $(".js-overlay-test4").fadeIn();
        //     $(".popup-video4").fadeIn();
        //     $(".overlay-popup4 ").css("display", "block");
        //     p4.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button4").on("click", function () {
        //     $(".js-overlay-test4").fadeIn();
        //     $(".popup-video4").fadeIn();
        //     $(".overlay-popup4 ").css("display", "block");
        //     p4.play();
        //   });
        // });
        // // --------------5------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button5").on("click", function () {
        //     $(".js-overlay-test5").fadeIn();
        //     $(".popup-video5").fadeIn();
        //     $(".overlay-popup5 ").css("display", "block");
        //     p5.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button5").on("click", function () {
        //     $(".js-overlay-test5").fadeIn();
        //     $(".popup-video5").fadeIn();
        //     $(".overlay-popup5 ").css("display", "block");
        //     p5.play();
        //   });
        // });
        // // ------------6--------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button6").on("click", function () {
        //     $(".js-overlay-test6").fadeIn();
        //     $(".popup-video6").fadeIn();
        //     $(".overlay-popup6 ").css("display", "block");
        //     p6.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button6").on("click", function () {
        //     $(".js-overlay-test6").fadeIn();
        //     $(".popup-video6").fadeIn();
        //     $(".overlay-popup6 ").css("display", "block");
        //     p6.play();
        //   });
        // });
        // // --------------7------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button7").on("click", function () {
        //     $(".js-overlay-test7").fadeIn();
        //     $(".popup-video7").fadeIn();
        //     $(".overlay-popup7 ").css("display", "block");
        //     p7.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button7").on("click", function () {
        //     $(".js-overlay-test7").fadeIn();
        //     $(".popup-video7").fadeIn();
        //     $(".overlay-popup7 ").css("display", "block");
        //     p7.play();
        //   });
        // });
        // // -------------8-------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button8").on("click", function () {
        //     $(".js-overlay-test8").fadeIn();
        //     $(".popup-video8").fadeIn();
        //     $(".overlay-popup8 ").css("display", "block");
        //     p8.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button8").on("click", function () {
        //     $(".js-overlay-test8").fadeIn();
        //     $(".popup-video8").fadeIn();
        //     $(".overlay-popup8 ").css("display", "block");
        //     p8.play();
        //   });
        // });
        // // --------------9------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button9").on("click", function () {
        //     $(".js-overlay-test9").fadeIn();
        //     $(".popup-video9").fadeIn();
        //     $(".overlay-popup9 ").css("display", "block");
        //     p9.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button9").on("click", function () {
        //     $(".js-overlay-test9").fadeIn();
        //     $(".popup-video9").fadeIn();
        //     $(".overlay-popup9 ").css("display", "block");
        //     p9.play();
        //   });
        // });
        // // --------------10------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button10").on("click", function () {
        //     $(".js-overlay-test10").fadeIn();
        //     $(".popup-video10").fadeIn();
        //     $(".overlay-popup10 ").css("display", "block");
        //     p10.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button10").on("click", function () {
        //     $(".js-overlay-test10").fadeIn();
        //     $(".popup-video10").fadeIn();
        //     $(".overlay-popup10 ").css("display", "block");
        //     p10.play();
        //   });
        // });
        // // -------------11-------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button11").on("click", function () {
        //     $(".js-overlay-test11").fadeIn();
        //     $(".popup-video11").fadeIn();
        //     $(".overlay-popup11 ").css("display", "block");
        //     p11.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button11").on("click", function () {
        //     $(".js-overlay-test11").fadeIn();
        //     $(".popup-video11").fadeIn();
        //     $(".overlay-popup11 ").css("display", "block");
        //     p11.play();
        //   });
        // });
        // // -------------12-------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button12").on("click", function () {
        //     $(".js-overlay-test12").fadeIn();
        //     $(".popup-video12").fadeIn();
        //     $(".overlay-popup12 ").css("display", "block");
        //     p12.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button12").on("click", function () {
        //     $(".js-overlay-test12").fadeIn();
        //     $(".popup-video12").fadeIn();
        //     $(".overlay-popup12 ").css("display", "block");
        //     p12.play();
        //   });
        // });
        // // --------------13------------------
        // $("#gs-js").on("setPosition", function () {
        //   $(".js-button13").on("click", function () {
        //     $(".js-overlay-test13").fadeIn();
        //     $(".popup-video13").fadeIn();
        //     $(".overlay-popup13 ").css("display", "block");
        //     p13.play();
        //   });
        // });

        // $("#gs-js").on("breakpoint", function () {
        //   $(".js-button13").on("click", function () {
        //     $(".js-overlay-test13").fadeIn();
        //     $(".popup-video13").fadeIn();
        //     $(".overlay-popup13 ").css("display", "block");
        //     p13.play();
        //   });
        // });

        // ---------------------------------

        $(".js-close").on("click", function (e) {
          p1.stop();
          p2.stop();
          p3.stop();
          p4.stop();
          p5.stop();
          p6.stop();
          p7.stop();
          p8.stop();
          p9.stop();
          p10.stop();
          p11.stop();
          p12.stop();
          p13.stop();
           $(".popup-video").fadeOut();
        
        });

        // ---------------popup cabinet --------------------------
        const playercabinet1 = new Plyr("#player-popup-cabinet1");
        $(".js-button-cabinet1").on("click", function (e) {
          $(".js-overlay-cabinet1").fadeIn();
          $(".overlay-popup-cabinet").fadeIn();
          playercabinet1.play();
        });

        $(".js-close-cabinet1").on("click", function (e) {
          $(".js-overlay-cabinet1").fadeOut();
          playercabinet1.stop();
        });
       
        $(".overlay-popup-cabinet ").click(function (e) {
            if (
              !$(".video-frame").is(e.target) 	
            ) {
                  $(".js-overlay-cabinet1").fadeOut();
                  playercabinet1.stop();
                   $(".js-overlay-cabinet2").fadeOut();
                   playercabinet2.stop();
            }
        });

        // -------
        const playercabinet2 = new Plyr("#player-popup-cabinet2");
        $(".js-button-cabinet2").on("click", function (e) {
          $(".js-overlay-cabinet2").fadeIn();
          $(".overlay-popup-cabinet").fadeIn();
          playercabinet2.play();
        });

        $(".js-close-cabinet2").on("click", function (e) {
          $(".js-overlay-cabinet2").fadeOut();
          playercabinet2.stop();

        });




        //----------  popup шапка
        const player = new Plyr("#player-popup-high");
        $(".js-button-high").on("click", function (e) {
          $(".js-overlay-high").fadeIn();
          player.play();
        });

        $(".js-close-high").on("click", function (e) {
          $(".js-overlay-high").fadeOut();
          player.stop();
        });
      
 
 
 $(".overlay-popup ").click(function (e) {
  
    if (!$(".video-frame").is(e.target)) {
            player.stop();
            playerProduction.stop();
            confirm1.stop();
            pс2.stop();
            pс3.stop();
            pс4.stop();
            pс5.stop();
            pс6.stop();
            pс7.stop();
            pс8.stop();
            pс9.stop();

      p1.stop();
      p2.stop();
      p3.stop();
      p4.stop();
      p5.stop();
      p6.stop();
      p7.stop();
      p8.stop();
      p9.stop();
      p10.stop();
      p11.stop();
      p12.stop();
      p13.stop();
    

      $(".popup-video").fadeOut();
   
    }
      });
 
 
	    //-----------popup  production
        const playerProduction = new Plyr("#player-popup-production");
        $(".js-button-production").click(function (e) {
          $(".js-overlay-production").fadeIn();
          playerProduction.play();
        });

        $(".js-close-production").on("click", function () {
          $(".js-overlay-production").fadeOut();
          playerProduction.stop();
        });


        // =====================plyr====confirm===================

        const confirm1 = new Plyr("#player-confirm1");
        const pс2 = new Plyr("#player-confirm2");
        const pс3 = new Plyr("#player-confirm3");
        const pс4 = new Plyr("#player-confirm4");
        const pс5 = new Plyr("#player-confirm5");
        const pс6 = new Plyr("#player-confirm6");
        const pс7 = new Plyr("#player-confirm7");
        const pс8 = new Plyr("#player-confirm8");
        const pс9 = new Plyr("#player-confirm9");

        // ----------------1---------------------
        $(".js-button-confirm1").click(function () {
          $(".js-overlay-confirm1").fadeIn();
          confirm1.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm1").fadeOut();
          confirm1.stop();
        });
        // // // ----------------2---------------------
        $(".js-button-confirm2").click(function () {
          $(".js-overlay-confirm2").fadeIn();
          pс2.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm2").fadeOut();
          pс2.stop();
        });
        // // ----------------3---------------------
        $(".js-button-confirm3").click(function () {
          $(".js-overlay-confirm3").fadeIn();
          pс3.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm3").fadeOut();
          pс3.stop();
        });
        // // ----------------4---------------------
        $(".js-button-confirm4").click(function () {
          $(".js-overlay-confirm4").fadeIn();
          pс4.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm4").fadeOut();
          pс4.stop();
        });
        // // ----------------5---------------------
        $(".js-button-confirm5").click(function () {
          $(".js-overlay-confirm5").fadeIn();
          pс5.play();
        });

        $(".js-close-confirm").click(function () {
          6;
          $(".js-overlay-confirm5").fadeOut();
          pс5.stop();
        });
        // // ----------------6---------------------
        $(".js-button-confirm6").click(function () {
          $(".js-overlay-confirm6").fadeIn();
          pс6.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm6").fadeOut();
          pс6.stop();
        });
        // // ----------------7---------------------
        $(".js-button-confirm7").click(function () {
          $(".js-overlay-confirm7").fadeIn();
          pс7.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm7").fadeOut();
          pс7.stop();
        });
        // // ----------------8---------------------
        $(".js-button-confirm8").click(function () {
          $(".js-overlay-confirm8").fadeIn();
          pс8.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm8").fadeOut();
          pс8.stop();
        });
        // // ----------------9---------------------
        $(".js-button-confirm9").click(function () {
          $(".js-overlay-confirm9").fadeIn();
          pс9.play();
        });

        $(".js-close-confirm").click(function () {
          $(".js-overlay-confirm9").fadeOut();
          pс9.stop();
        });

      //   // --
      }),
      // =========================================

      // ==============================
      $(document).ready(function ibg(e) {
        $.each($(".ibg"), function () {
          if ($(this).find("img").length > 0) {
            $(this).css(
              "background-image",
              'url("' + $(this).find("img").attr("src") + '")'
            );
          }
        });
      }),
      // ibg(e);
      // --------------добавление по кнопке в избранное в браузере
      function addFav() {
        var title = document.title,
          url = document.location,
          UA = navigator.userAgent.toLowerCase(),
          isFF = UA.indexOf("firefox") != -1,
          isMac = UA.indexOf("mac") != -1,
          isWebkit = UA.indexOf("webkit") != -1,
          isIE = UA.indexOf(".net") != -1;

        if ((isIE || isFF) && window.external) {
          // IE, Firefox
          window.external.AddFavorite(url, title);
          return false;
        }

        if (isMac || isWebkit) {
          // Webkit (Chrome, Opera), Mac
          document.getElementById("AddFavViaSheens").innerHTML =
            'Нажмите "' +
            (isMac ? "Command/Cmd" : "Ctrl") +
            ' + D" для добавления страницы в закладки';
          return false;
        }
      };
    // -------------------------

    
      $(document).ready(function () {
        // $(".gallery").fancybox();
        // $(".gallery").fancybox({
          // padding: 20,
          // frameWidth: 700,
          // frameHeight: 600,
        // });
      });
      // -------------

      window.onscroll = function () {
        let header = $("#header-project");

        if (window.pageYOffset > 50) {
          header.css({
            "background-color": "rgba(38,43,63, 0.9)",
            "padding": "10px 7.8% 10px",
            "opacity": "1",
            "z-index":"50"
          });
        } else {
          header.css({
            "background-color": "transparent",
            "padding": "40px 7.8% 0px",
            "opacity": "1",
          });
        }
      };

      // ---------------------

    	
  },

  function (e, r, t) {
    var n = t(2),
      o = t(3);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    n(o, i);
    e.exports = o.locals || {};
  },
  function (e, r, t) {
    "use strict";
    var n,
      o = function () {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      i = (function () {
        var e = {};
        return function (r) {
          if (void 0 === e[r]) {
            var t = document.querySelector(r);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[r] = t;
          }
          return e[r];
        };
      })(),
      s = [];
    function a(e) {
      for (var r = -1, t = 0; t < s.length; t++)
        if (s[t].identifier === e) {
          r = t;
          break;
        }
      return r;
    }
    function c(e, r) {
      for (var t = {}, n = [], o = 0; o < e.length; o++) {
        var i = e[o],
          c = r.base ? i[0] + r.base : i[0],
          l = t[c] || 0,
          d = "".concat(c, " ").concat(l);
        t[c] = l + 1;
        var u = a(d),
          f = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== u
          ? (s[u].references++, s[u].updater(f))
          : s.push({ identifier: d, updater: m(f, r), references: 1 }),
          n.push(d);
      }
      return n;
    }
    function l(e) {
      var r = document.createElement("style"),
        n = e.attributes || {};
      if (void 0 === n.nonce) {
        var o = t.nc;
        o && (n.nonce = o);
      }
      if (
        (Object.keys(n).forEach(function (e) {
          r.setAttribute(e, n[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(r);
      else {
        var s = i(e.insert || "head");
        if (!s)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        s.appendChild(r);
      }
      return r;
    }
    var d,
      u =
        ((d = []),
        function (e, r) {
          return (d[e] = r), d.filter(Boolean).join("\n");
        });
    function f(e, r, t, n) {
      var o = t
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (e.styleSheet) e.styleSheet.cssText = u(r, o);
      else {
        var i = document.createTextNode(o),
          s = e.childNodes;
        s[r] && e.removeChild(s[r]),
          s.length ? e.insertBefore(i, s[r]) : e.appendChild(i);
      }
    }
    function p(e, r, t) {
      var n = t.css,
        o = t.media,
        i = t.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var v = null,
      w = 0;
    function m(e, r) {
      var t, n, o;
      if (r.singleton) {
        var i = w++;
        (t = v || (v = l(r))),
          (n = f.bind(null, t, i, !1)),
          (o = f.bind(null, t, i, !0));
      } else
        (t = l(r)),
          (n = p.bind(null, t, r)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        n(e),
        function (r) {
          if (r) {
            if (
              r.css === e.css &&
              r.media === e.media &&
              r.sourceMap === e.sourceMap
            )
              return;
            n((e = r));
          } else o();
        }
      );
    }
    e.exports = function (e, r) {
      (r = r || {}).singleton ||
        "boolean" == typeof r.singleton ||
        (r.singleton = o());
      var t = c((e = e || []), r);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < t.length; n++) {
            var o = a(t[n]);
            s[o].references--;
          }
          for (var i = c(e, r), l = 0; l < t.length; l++) {
            var d = a(t[l]);
            0 === s[d].references && (s[d].updater(), s.splice(d, 1));
          }
          t = i;
        }
      };
    };
  },
  function (e, r, t) {},
]);
