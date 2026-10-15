const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

function closeMenu() {
	if (!menuToggle || !mainNav) return;

	menuToggle.setAttribute("aria-expanded", "false");
	menuToggle.setAttribute("aria-label", "Open navigation");
	mainNav.classList.remove("is-open");
	document.body.classList.remove("menu-open");
}

if (menuToggle && mainNav) {
	menuToggle.addEventListener("click", () => {
		const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

		menuToggle.setAttribute("aria-expanded", String(!isOpen));
		menuToggle.setAttribute(
			"aria-label",
			isOpen ? "Open navigation" : "Close navigation"
		);

		mainNav.classList.toggle("is-open", !isOpen);
		document.body.classList.toggle("menu-open", !isOpen);
	});

	navLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 700) {
			closeMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMenu();
		}
	});
}

console.log("OCEAN THEORY website is ready.");
