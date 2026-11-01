export function createHome(content) {
	content.className = "";
	content.classList.add("home");

	// ----HERO TEXT DIV----

	const heroText = document.createElement("div");
	heroText.classList.add("hero-text");

	// H1

	const heroH1 = document.createElement("h1");
	heroH1.textContent = "Fresh Flavors, Unforgettable Moments.";

	heroText.appendChild(heroH1);

	// HERO INTRO

	const heroIntro = document.createElement("p");
	heroIntro.classList.add("hero-intro");
	heroIntro.textContent =
		"Discover your next favorite meal, one bite at a time.";

	heroText.appendChild(heroIntro);

	// HERO PARAGRAPH

	const heroPara = document.createElement("p");
	heroPara.textContent =
		"Experience great food made with passion and served with quality. We bring together delicious meals, fresh ingredients, and a welcoming atmosphere to make every dining experience special.";

	heroText.appendChild(heroPara);

	// HERO BUTTON

	const heroBtn = document.createElement("button");
	heroBtn.classList.add("explore");
	heroBtn.textContent = "Explore Menu";

	heroText.appendChild(heroBtn);

	// ----HERO IMAGE DIV----

	const heroImage = document.createElement("div");
	heroImage.classList.add("hero-img");

	// APPEND TO CONTENT

	content.appendChild(heroText);
	content.appendChild(heroImage);
}
