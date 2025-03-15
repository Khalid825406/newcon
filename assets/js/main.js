/***************************************************
==================== JS INDEX ======================
****************************************************
// Data Js
// Mobile Menu Js
// Sticky Js
// Search Bar Js
// Backtotop Js
// Fun Fact Js
// VenoBox Js
// Accordion Js
// Hero Slider Js
// Service Slider Js
// Marquee slider Js
// Project Slider Js
// Testimonial Slider Js
// Blog Slider Js
// Awards Slider Js
// Line Animation Js

****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// Data js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});

	////////////////////////////////////////////////////
	// Preloader
	$(window).on("load", function () {
		if ($("#preloader").length > 0) {
			setTimeout(() => {
				$("#preloader").addClass("tj-preloader--hidden");
			}, 100);
		}
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$(".menu_bar").on("click", function () {
		$(this).toggleClass("on");
	});

	// offcanvas
	$(".menu_bar.menu_offcanvas").on("click", function () {
		$(".tj-offcanvas-area").toggleClass("opened");
		$("body").toggleClass("overflow-hidden");
	});

	$(".main-mobile-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "10000",
		meanExpand: ['<i class="tji-drop-down"></i>'],
	});

	// Hamburger Menu Js
	$(".mobile_menu_bar").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".hamburger_close_btn").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});
	$(".body-overlay").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});

	////////////////////////////////////////////////////
	// Sticky Js
	$(window).scroll(function () {
		var Width = $(document).width();
		if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
			$(".header-sticky").addClass("sticky");
		} else {
			$(".header-sticky").removeClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	// Search Bar Js
	$(".header-search .search").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});
	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("search-popup-overlay-open");
	});

	////////////////////////////////////////////////////
	// Backtotop Js
	function back_to_top() {
		var btn = $("#back_to_top");
		var btn_wrapper = $(".back-to-top-wrapper");

		$(window).scroll(function () {
			if ($(window).scrollTop() > 300) {
				btn_wrapper.addClass("back-to-top-btn-show");
			} else {
				btn_wrapper.removeClass("back-to-top-btn-show");
			}
		});

		btn.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "300");
		});
	}
	back_to_top();

	////////////////////////////////////////////////////
	// Fun Fact Js
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	////////////////////////////////////////////////////
	// VenoBox Js
	if ($(".ig-gallery").length > 0) {
		new VenoBox({
			selector: ".ig-gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	////////////////////////////////////////////////////
	// Accordion Js
	if ($(".accordion-item").length > 0) {
		$(".accordion-item .faq-title").on("click", function () {
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	}

	/*
==============================  Smooth Scroll Js =====================================
*/

	function smoothSctoll() {
		$(".smooth a").on("click", function (event) {
			var target = $(this.getAttribute("href"));
			if (target.length) {
				event.preventDefault();
				$("html, body")
					.stop()
					.animate(
						{
							scrollTop: target.offset().top - 120,
						},
						1500
					);
			}
		});
	}
	smoothSctoll();
	/*****************************************************************
================================= GSAP ====================================
********************************************************************/

	// gsap.config({
	// 	nullTargetWarn: false,
	// });

	/*
============================== Animation Js =====================================
*/

	if ($("#smooth-wrapper").length && $("#smooth-content").length) {
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollSmoother,
			TweenMax,
			ScrollToPlugin
		);
		gsap.config({
			nullTargetWarn: false,
		});

		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}

	/*
============================== position sticky Js =====================================
*/
	function initStickySidebar() {
		if (window.innerWidth >= 992) {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			const startPoint = window.innerWidth >= 992 ? 100 : 120;
			gsap.to(".tj-sticky", {
				scrollTrigger: {
					trigger: ".tj-sticky",
					start: `top ${startPoint}`,
					end: `bottom ${startPoint}`,
					pin: true,
					scrub: 1,
				},
			});
		}
	}
	initStickySidebar();
	window.addEventListener("resize", () => {
		initStickySidebar();
	});
	/*
============================== Animation Js =====================================
*/
	// Text Invert
	// function initTextReveal() {
	// 	const tagetedElementContainer =
	// 		document.querySelectorAll(".tj-text-invert");
	// 	if (tagetedElementContainer?.length) {
	// 		tagetedElementContainer.forEach(e => {
	// 			var t = new SplitType(e, {
	// 				types: "chars",
	// 			});
	// 			gsap.from(t.chars, {
	// 				scrollTrigger: {
	// 					trigger: e,
	// 					start: "top 25%",
	// 					end: "top -10%",
	// 					scrub: !0,
	// 					pin: "#tj-about-section",
	// 					pinSpacing: !0,
	// 				},
	// 				opacity: 0.1,
	// 				stagger: 5,
	// 				ease: "back.out",
	// 			});
	// 		});
	// 	}
	// }
	// initTextReveal();
	// Image Reveal Animation

	function tiImgRevealController() {
		let tjIimgReveal = document.querySelectorAll(".tj-img-reveal");
		if (tjIimgReveal.length) {
			tjIimgReveal.forEach(img_reveal => {
				let image = img_reveal.querySelector("img");
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: img_reveal,
						start: "top 90%",
					},
				});

				tl.set(img_reveal, { autoAlpha: 1 });
				tl.from(img_reveal, 1.5, {
					xPercent: -100,
					ease: Power2.out,
				});
				tl.from(image, 1.5, {
					xPercent: 100,
					scale: 1.5,
					delay: -1.5,
					ease: Power2.out,
				});
			});
		}
	}
	tiImgRevealController();

	// fadein up common
	function fadeInUpCommonController(container) {
		// Reveal Animation
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-up")
			: document.querySelectorAll(".tj-fade-in-up");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 1;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ y: 100, opacity: 0 },
					{
						y: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										scroller: "body",
										start: "top 90%",
										end: "top -10%",
								  }
								: null,
					}
				);
			});
		}
	}
	fadeInUpCommonController();
	// fadein up
	function fadeInUpController(selector, isNotStagger) {
		// Reveal Animation

		// Parse animation attributes or set defaults
		const duration_value = 1;
		const onscroll_value = 1;
		const stagger_value = 0.3;

		// const data_delay = 0.05;
		if (document.querySelector(`.${selector}`)) {
			gsap.fromTo(
				`.${selector}`,
				{ y: 100, opacity: 0 },
				{
					y: 0,
					duration: duration_value,
					opacity: 1,
					stagger: stagger_value,
					// delay: data_delay,
					ease: "false",
					scrollTrigger: {
						trigger: `.${selector}`,
						scroller: "body",
						start: "top 90%",
						end: "top -10%",
					},
				}
			);
		}
	}

	fadeInUpController("tj-fade-in-up-3");
	fadeInUpController("tj-fade-in-up-4");
	fadeInUpController("tj-fade-in-up-5");
	fadeInUpController("tj-fade-in-up-6");

	// fadein down
	function fadeInDownController(container) {
		// Reveal Animation
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-down")
			: document.querySelectorAll(".tj-fade-in-down");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.5;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ y: -100, opacity: 0 },
					{
						y: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										scroller: "body",
										start: "top 60%",
										end: "top -10%",
								  }
								: null,
					}
				);
			});
		}
	}
	fadeInDownController();
	function fadeInBottomController3(container) {
		// Reveal Animation
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-up-3")
			: document.querySelectorAll(".tj-fade-in-up-3");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.5;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ y: 100, opacity: 0 },
					{
						y: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										scroller: "body",
										start: "top 100%",
										end: "top -10%",
								  }
								: null,
					}
				);
			});
		}
	}

	// fadein left
	function fadeInLeftController(container) {
		// Reveal Animation
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-left")
			: document.querySelectorAll(".tj-fade-in-left");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.5;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ x: 100, opacity: 0 },
					{
						x: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										scroller: "body",
										start: "top 90%",
										end: "top -10%",
								  }
								: null,
					}
				);
			});
		}
	}
	fadeInLeftController();
	// fadein right
	function fadeInRightController(container) {
		// Reveal Animation
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-right")
			: document.querySelectorAll(".tj-fade-in-right");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.5;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ x: -100, opacity: 0 },
					{
						x: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										scroller: "body",
										start: "top 90%",
										end: "top -10%",
								  }
								: null,
					}
				);
			});
		}
	}
	fadeInRightController();
	// Reveal Animation default
	//
	function revealAnimationController(container) {
		const revealAnimContainer = container
			? container.querySelectorAll(".tj-reveal-anim")
			: document.querySelectorAll(".tj-reveal-anim");
		if (revealAnimContainer?.length) {
			revealAnimContainer.forEach(areveal => {
				// Ensure SplitText is only initialized once per element
				if (!areveal.split || !areveal.split.chars) {
					areveal.split = new SplitText(areveal, {
						type: "lines,words,chars",
						linesClass: "tj-reveal-line",
					});
				}

				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(areveal.getAttribute("data-duration")) || 1;
				const onscroll_value =
					parseInt(areveal.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(areveal.getAttribute("data-stagger")) || 0.02;
				const data_delay =
					parseFloat(areveal.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (areveal.anim) {
					areveal.anim.kill();
				}

				areveal.anim = gsap.fromTo(
					areveal.split.chars,
					{ y: 200, opacity: 0 },
					{
						duration: duration_value,
						delay: data_delay,
						ease: "circ.out",
						y: 0,
						stagger: stagger_value,
						opacity: 1,
						scrollTrigger: {
							trigger: areveal,
							start: "top 85%",
						},
					}
				);
			});
		}
	}
	revealAnimationController();
	// reveal anim 3
	function revealAnimation3Controller(container) {
		if ($(".tj-reveal-anim-3").length > 0) {
			// 25. Title Animation
			let char_come = gsap.utils.toArray(".tj-reveal-anim-3");
			char_come.forEach(splitTextLine => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine,
						start: "top 90%",
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});

				const itemSplitted = new SplitText(splitTextLine, {
					type: "chars, words",
				});
				gsap.set(splitTextLine, { perspective: 300 });
				itemSplitted.split({ type: "chars, words" });
				tl.from(itemSplitted.chars, {
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05,
				});
			});
		}
	}
	revealAnimation3Controller();

	//  zoomout
	function zoomOut(container) {
		gsap.registerPlugin(ScrollTrigger);
		// Reveal Animation Hero
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-zoom-out")
			: document.querySelectorAll(".tj-zoom-out");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0.5;

				// Kill previous animation before creating a new one
				// if (tagetedElement.anim) {
				// 	tagetedElement.anim.kill();
				// }

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ scale: 1.5, opacity: 0 },
					{
						scale: 1,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										start: "top 85%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}
	zoomOut();
	//  zoomoin
	function zoomoIn(container) {
		// Reveal Animation Hero
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-zoom-in")
			: document.querySelectorAll(".tj-zoom-in");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						ease: "power1.inOut",
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										start: "top 85%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}
	zoomoIn();
	// Text Invert
	function stickyController() {
		const tagetedElementContainer = document.querySelectorAll(".tj-sticky");
		if (tagetedElementContainer?.length) {
			let sp = gsap.matchMedia();
			sp.add("(min-width: 1200px)", () => {
				if ($(".tj-service-section-two").length > 0) {
					ScrollTrigger.create({
						trigger: ".tj-service-section-two",
						start: "top -3%",
						end: "bottom 110.5%",
						pin: ".tj-sticky",
						pinSpacing: true,
					});
				}
			});
		}
	}
	stickyController();

	//  Animation Hero
	// fadein up
	function fadeInUpControllerHero(container) {
		// Reveal Animation Hero
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-fade-in-up-2")
			: document.querySelectorAll(".tj-fade-in-up-2");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ y: 100, opacity: 0 },
					{
						y: 0,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										start: "top 90%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}
	//  zoomin
	function zoomoInHero(container) {
		// Reveal Animation Hero
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-zoom-in-2")
			: document.querySelectorAll(".tj-zoom-in-2");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										start: "top 85%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}
	//  zoomout
	function zoomoOutHero(container) {
		// Reveal Animation Hero
		const tagetedElementContainer = container
			? container.querySelectorAll(".tj-zoom-out-2")
			: document.querySelectorAll(".tj-zoom-out-2");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(tagetedElement => {
				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(tagetedElement.getAttribute("data-duration")) || 1.5;
				const onscroll_value =
					parseInt(tagetedElement.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(tagetedElement.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(tagetedElement.getAttribute("data-delay")) || 0;

				// Kill previous animation before creating a new one
				if (tagetedElement.anim) {
					tagetedElement.anim.kill();
				}

				tagetedElement.anim = gsap.fromTo(
					tagetedElement,
					{ scale: 1.5, opacity: 0.9 },
					{
						scale: 1,
						duration: duration_value,
						opacity: 1,
						stagger: stagger_value,
						delay: data_delay,
						ease: "power1.inOut",
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: tagetedElement,
										start: "top 85%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}
	function revealAnimationHeroController(container) {
		// Reveal Animation Hero
		const revealAnimContainer = container
			? container.querySelectorAll(".tj-reveal-anim-2")
			: document.querySelectorAll(".tj-reveal-anim-2");
		if (revealAnimContainer?.length) {
			revealAnimContainer.forEach(areveal => {
				// Ensure SplitText is only initialized once per element
				if (!areveal.split || !areveal.split.chars) {
					areveal.split = new SplitText(areveal, {
						type: "lines,words,chars",
						linesClass: "tj-reveal-line",
					});
				}

				// Parse animation attributes or set defaults
				const duration_value =
					parseFloat(areveal.getAttribute("data-duration")) || 1;
				const onscroll_value =
					parseInt(areveal.getAttribute("data-on-scroll")) || 1;
				const stagger_value =
					parseFloat(areveal.getAttribute("data-stagger")) || 0.02;

				const data_delay =
					parseFloat(areveal.getAttribute("data-delay")) || 0.05;

				// Kill previous animation before creating a new one
				if (areveal.anim) {
					areveal.anim.kill();
				}

				areveal.anim = gsap.fromTo(
					areveal.split.chars,
					{ y: 200, opacity: 0 },
					{
						duration: duration_value,
						delay: data_delay,
						ease: "circ.out",
						y: 0,
						stagger: stagger_value,
						opacity: 1,
						scrollTrigger:
							onscroll_value === 1
								? {
										trigger: areveal,
										start: "top 85%",
										end: "bottom 15%",
								  }
								: null,
					}
				);
			});
		}
	}

	// Hero Slider JS
	if (document.querySelector(".hero-slider")) {
		var hero = new Swiper(".hero-slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			on: {
				init: function () {
					// Run animation on first visible slide

					const firstActiveSlide = document.querySelector(
						".hero-slider .swiper-slide-active"
					);
					if (firstActiveSlide) {
						fadeInUpControllerHero(firstActiveSlide);
						revealAnimationHeroController(firstActiveSlide);
						zoomoInHero(firstActiveSlide);
						zoomoOutHero(firstActiveSlide);
					}
				},
				slideChangeTransitionEnd: function () {
					// Run animation only on the active slide when the transition ends
					const activeSlide = document.querySelector(
						".hero-slider .swiper-slide-active"
					);
					if (activeSlide) {
						fadeInUpControllerHero(activeSlide);

						revealAnimationHeroController(activeSlide);
						zoomoInHero(activeSlide);
						zoomoOutHero(activeSlide);
					}
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Service Slider Js
	if ($(".service-slider").length > 0) {
		var service = new Swiper(".service-slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 9000,
			},
			speed: 600,
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			pagination: {
				el: ".service-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Marquee slider Js
	if ($(".marquee-slider").length > 0) {
		var marquee = new Swiper(".marquee-slider", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 1500,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	////////////////////////////////////////////////////
	// Project Slider Js
	if ($(".project-slider").length > 0) {
		var project = new Swiper(".project-slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 2000,
			},
			pagination: {
				el: ".project-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.2,
				},
				992: {
					slidesPerView: 1.5,
				},
				1200: {
					slidesPerView: 1.6,
				},
				1440: {
					slidesPerView: 1.9,
				},
			},
		});
	}

	// Project Slider Js
	if ($(".project-slider-two").length > 0) {
		var project = new Swiper(".project-slider-two", {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 9000,
			},
			speed: 600,
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			pagination: {
				el: ".project-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1.6,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Testimonial Slider Js
	if ($(".testimonial-slider").length > 0) {
		var testimonial = new Swiper(".testimonial-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			speed: 600,
			// autoplay: {
			// 	delay: 2000,
			// },
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
		});
	}

	////////////////////////////////////////////////////
	// Testimonial Slider Js
	if ($(".testimonial-slider-two").length > 0) {
		var testimonial = new Swiper(".testimonial-slider-two", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 2000,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1440: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Testimonial Slider Js
	if ($(".testimonial-slider-three").length > 0) {
		var testimonial = new Swiper(".testimonial-slider-three", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1440: {
					slidesPerView: 3,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Blog Slider Js
	if ($(".blog-standard-slider").length > 0) {
		var blog = new Swiper(".blog-standard-slider", {
			slidesPerView: 1,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 8500,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}

	////////////////////////////////////////////////////
	// Awards Slider Js
	if ($(".award-slider").length > 0) {
		var service = new Swiper(".award-slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 9000,
			},
			pagination: {
				el: ".award-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// Project Hover active change
	if ($(".project-wrapper-three").length) {
		$(".project_item").hover(function () {
			// Remove active class from all siblings
			$(this).siblings(".project_item").removeClass("active");

			// Add active class to hovered item
			$(this).addClass("active");

			// Update image dynamically
			const newSrc = $(this).data("src");
			const $image = $(".project_list_img img");

			// Animate zoom out, change image, then zoom back in
			$image
				.fadeOut(300)
				.css("transform", "scale(0.9)")
				.promise()
				.done(function () {
					$image.attr("src", newSrc).fadeIn(300).css("transform", "scale(1)");
				});
		});
	}
	// progress bar
	const progressBarController = () => {
		const progressContainers = document.querySelectorAll(".tj-progress");

		if (progressContainers?.length) {
			progressContainers.forEach(progressContainer => {
				const targetedProgressBar =
					progressContainer.querySelector(".tj-progress__bar");
				const completedPercent =
					parseInt(targetedProgressBar.getAttribute("data-perchant")) || 0;

				console.log("Target progress:", completedPercent + "%"); // Debugging log

				gsap.to(targetedProgressBar, {
					width: `${completedPercent}%`, // Correct width
					ease: "power2.out",
					duration: 1,
					scrollTrigger: {
						trigger: progressContainer, // Use container for better scroll handling
						start: "top 90%",
						end: "top 30%",
					},
					onUpdate: function () {
						let progressValue = Math.round(this.progress() * 100); // Corrected scaling
						let displayPercent = Math.round(
							(completedPercent * progressValue) / 100
						); // Fixes low % issue

						const percentageText = progressContainer.querySelector(
							".tj-progress__perchant"
						);
						if (percentageText) {
							percentageText.textContent = displayPercent + "%";
						}
					},
				});
			});
		}
	};

	// Call the function
	progressBarController();
	// nice select
	if ($(".tj-nice-select").length) {
		$(".tj-nice-select").niceSelect();
	}
})(jQuery);

function animateCounter(counter, target, suffix) {
	let count = 0;
	let speed = 50; // Animation speed

	let updateCount = () => {
		let increment = target / speed;
		count += increment;

		if (count < target) {
			counter.innerText = Math.ceil(count) + suffix;
			setTimeout(updateCount, 20);
		} else {
			counter.innerText = target + suffix;
		}
	};

	counter.innerText = '0' + suffix; // Initialize counter
	updateCount();
}

function startCountersWhenVisible() {
	let counters = document.querySelectorAll('.boxwe1 span');

	let observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				let counter = entry.target;
				let text = counter.innerText;
				let target, suffix;

				if (text.includes('%')) {
					target = parseInt(text.replace('%', ''));
					suffix = '%';
				} else if (text.includes('+')) {
					target = parseInt(text.replace('+', ''));
					suffix = '+';
				} else {
					target = parseInt(text);
					suffix = '';
				}

				animateCounter(counter, target, suffix);
				observer.unobserve(counter); // Stop observing after animation starts
			}
		});
	}, { threshold: 0.5 }); // Trigger when 50% visible

	counters.forEach(counter => observer.observe(counter));
}

window.onload = startCountersWhenVisible;

