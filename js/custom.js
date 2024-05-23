/* JavaScript */

window.addEventListener("resize", function() {
	// window.location.reload(); // Required for auto-setting navigation menu.
});

document.addEventListener("DOMContentLoaded", function() {
	// Prevent closing from click inside dropdown
	document.querySelectorAll(".dropdown-menu").forEach(function(element) {
		element.addEventListener("click", function(e) {
			e.stopPropagation();
		});
	})

	// Make it as accordion for smaller screens
	if (window.innerWidth < 992) {
		// Close all inner dropdowns when parent is closed
		document.querySelectorAll(".navbar .dropdown").forEach(function(everydropdown) {
			everydropdown.addEventListener("hidden.bs.dropdown", function() {
				// After dropdown is hidden, then find all submenus
				this.querySelectorAll(".submenu").forEach(function(everysubmenu) {
					// Hide every submenu as well
					everysubmenu.style.display = "none";
				});
				this.querySelectorAll(".submenu-left").forEach(function(everysubmenu) {
					// Hide every submenu as well
					everysubmenu.style.display = "none";
				});
				this.querySelectorAll(".submenu-up").forEach(function(everysubmenu) {
					// Hide every submenu as well
					everysubmenu.style.display = "none";
				});
			})
		});
		document.querySelectorAll(".dropdown-menu a").forEach(function(element) {
			element.addEventListener("click", function(e) {
				let nextEl = this.nextElementSibling;
				if (nextEl && (nextEl.classList.contains("submenu") || nextEl.classList.contains("submenu-left") || nextEl.classList.contains("submenu-up"))) {
					// Prevent opening link if link needs to open dropdown
					e.preventDefault();
					console.log(nextEl);
					if (nextEl.style.display == "block") {
						nextEl.style.display = "none";
					} else {
						nextEl.style.display = "block";
					}

				}
			});
		})
		// End if inner width
	}
});

// Activate (any) bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Activate (any) bootstrap popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

/* jQuery */
$(document).ready(function() {
	let currentThemeIndex = 1;

	if (currentThemeIndex !== 0) {
		let colorPallet = {
			"background": ["default", "bisque"],
			"base": ["default", "#fffae5"],
			"focusPrime": ["default", "#dc3545"],
			"transparent": ["default", "transparent"]
		}

		let css = {
			"general": {
				"background-color": {
					"background": ["body", "header>div#navbar-top-e", "footer>div#navbar-bottom-e"],
					"base": ["li>.dropdown-menu", ".card-body", ".bg-light", ".form-control", ".form-select", "input", "textarea", ".foreground-light"],
					"focusPrime": [".btn-primary", ".btn-outline-primary", ".card-header"]
				},
				"color": {
					"background": [".form-control", ".form-select", "input", "textarea", ".foreground-light"]
				}
			},
			"hoverIn": {
				"background-color": {
					"focusPrime": [".dropdown-item"]
				}
			},
			"hoverOut": {
				"background-color": {
					"transparent": [".dropdown-item"]
				}
			}
		};

		let generalInlineStyles = {};
		let hoverInInlineStyles = {};
		let hoverOutInlineStyles = {};
		for (let cssDedicatedKey in css) {
			let cssZone = css[cssDedicatedKey];
			for (let cssPropertyKey in cssZone) {
				let cssProperty = cssZone[cssPropertyKey];
				for (let colorPalletKey in cssProperty) {
					let htmlElements = cssProperty[colorPalletKey];
					for (let htmlElementKey in htmlElements) {
						switch (cssDedicatedKey) {
							case "general":
								generalInlineStyles[htmlElements[htmlElementKey]] = generalInlineStyles[htmlElements[htmlElementKey]] ?
									generalInlineStyles[htmlElements[htmlElementKey]] + " " + cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;" :
									cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;";
								break;
							case "hoverIn":
								hoverInInlineStyles[htmlElements[htmlElementKey]] = hoverInInlineStyles[htmlElements[htmlElementKey]] ?
									hoverInInlineStyles[htmlElements[htmlElementKey]] + " " + cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;" :
									cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;";
								break;
							case "hoverOut":
								hoverOutInlineStyles[htmlElements[htmlElementKey]] = hoverOutInlineStyles[htmlElements[htmlElementKey]] ?
									hoverOutInlineStyles[htmlElements[htmlElementKey]] + " " + cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;" :
									cssPropertyKey + ": " + colorPallet[colorPalletKey][currentThemeIndex] + " !important;";
								break;
						}
					}
				}
			}
		}

		for (let generalInlineStyleKey in generalInlineStyles) {
			console.log(generalInlineStyleKey + " -> " + generalInlineStyles[generalInlineStyleKey]);
			$(generalInlineStyleKey).attr("style", generalInlineStyles[generalInlineStyleKey]);
		}
		for (let hoverInInlineStyleKey in hoverInInlineStyles) {
			console.log(hoverInInlineStyleKey + " -> " + hoverInInlineStyles[hoverInInlineStyleKey]);
		}
		for (let hoverOutInlineStyleKey in hoverOutInlineStyles) {
			console.log(hoverOutInlineStyleKey + " -> " + hoverOutInlineStyles[hoverOutInlineStyleKey]);
		}


		/*let colorBackground = ["default", "bisque"];
		let colorBase = ["default", "#fffae5"];
		let colorFocusPrime = ["default", "#dc3545"];
		let transparentColor = ["default", "transparent"];

		let elements1 = new Array("body", "header>div#navbar-top-e", "footer>div#navbar-bottom-e");
		elements1.forEach(function(value) {
			$(value).attr("style", "background-color: " + colorBackground[currentThemeIndex] + " !important");
		});

		let elements2 = new Array(".form-control", ".form-select", "input", "textarea", ".foreground-light");
		elements2.forEach(function(value) {
			$(value).attr("style", "color: " + colorBackground[currentThemeIndex] + " !important");
		});

		let elements3 = new Array("li>.dropdown-menu", ".card-body", ".bg-light", ".form-control", ".form-select", "input", "textarea", ".foreground-light");
		elements3.forEach(function(value) {
			$(value).attr("style", "background-color: " + colorBase[currentThemeIndex] + " !important");
		});

		let elements4 = new Array(".btn-primary", ".btn-outline-primary", ".card-header");
		elements4.forEach(function(value) {
			$(value).attr("style", "background-color: " + colorFocusPrime[currentThemeIndex] + " !important");
		});

		let elements5 = new Array(".dropdown-item");
		elements5.forEach(function(value) {
			$(value).hover(function(e) {
				if (e.type === "mouseenter") {
					$(this).attr("style", "background-color: " + colorFocusPrime[currentThemeIndex] + " !important");
				}
				else {
					$(this).attr("style", "background-color: " + "transparent !important");
				}
			})
		});*/
	}

	$(window).resize(function(){
		let mainWidth = $("main").width();
		let mainHeight = $("main").height();
	});

	$("p").click(function() {
		//$(this).hide();
	});
});