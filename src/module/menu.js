class Menu {
	constructor(name, category, price, description) {
		this.name = name;
		this.category = category;
		this.price = price;
		this.description = description;
	}
}

const menu = [
	new Menu(
		"Classic Cheeseburger",
		"main-dish",
		149,
		"Juicy beef patty with cheese, lettuce, and special sauce.",
	),
	new Menu(
		"Crispy Chicken Burger",
		"main-dish",
		129,
		"Crispy fried chicken with fresh lettuce and mayo.",
	),
	new Menu(
		"Creamy Carbonara",
		"main-dish",
		179,
		"Creamy pasta with bacon and parmesan cheese.",
	),
	new Menu(
		"Spaghetti Bolognese",
		"main-dish",
		159,
		"Classic spaghetti with rich meat sauce.",
	),
	new Menu(
		"Chicken Wings",
		"main-dish",
		189,
		"Six crispy wings served with rice and dip.",
	),
	new Menu(
		"Chicken Teriyaki",
		"main-dish",
		149,
		"Grilled chicken glazed with sweet teriyaki sauce.",
	),

	new Menu("French Fries", "sides", 79, "Golden crispy fries with seasoning."),
	new Menu(
		"Mozzarella Sticks",
		"sides",
		99,
		"Crispy cheese sticks with marinara dip.",
	),
	new Menu("Onion Rings", "sides", 89, "Crunchy golden onion rings."),

	new Menu(
		"Chocolate Milkshake",
		"beverages",
		99,
		"Rich and creamy chocolate milkshake.",
	),
	new Menu("Iced Coffee", "beverages", 89, "Refreshing iced coffee with milk."),
	new Menu(
		"Strawberry Smoothie",
		"beverages",
		109,
		"Sweet and refreshing strawberry smoothie.",
	),
];

export function createMenu(content) {
	content.className = "";
	content.classList.add("menu");

	const menuTop = document.createElement("div");
	menuTop.classList.add("menu-top");

	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	createMenuTop(menuTop, menuItem);
	allItems(menuItem);

	// APPEND TO CONTENT
	content.appendChild(menuTop);
	content.appendChild(menuItem);
}

function createMenuTop(menuTop, menuItem) {
	const menuH1 = document.createElement("h1");
	menuH1.textContent = "All Items";
	menuTop.appendChild(menuH1);

	createMenuSortButton(menuTop, menuH1, menuItem);
}

function createMenuSortButton(menuTop, menuH1, menuItem) {
	const buttons = ["all", "main-dish", "sides", "beverages"];

	const menuSort = document.createElement("div");
	menuSort.classList.add("menu-sort");

	for (const category of buttons) {
		const createButton = document.createElement("button");
		createButton.classList.add(`${category}`);
		createButton.textContent = category[0].toUpperCase() + category.slice(1);

		createButton.addEventListener("click", () => {
			clearMenuItem();
			if (category === "all") {
				menuH1.textContent = "All Items";
				allItems(menuItem);
			} else {
				menuH1.textContent = category[0].toUpperCase() + category.slice(1);
				sortDish(menuItem, category);
			}
		});

		menuSort.appendChild(createButton);
	}

	menuTop.appendChild(menuSort);
}

function createItemCard(menuItem, items) {
	const item = document.createElement("div");
	item.classList.add("item");

	const itemName = document.createElement("p");
	itemName.classList.add("item-name");
	itemName.textContent = items.name;

	const itemDesc = document.createElement("p");
	itemDesc.classList.add("item-desc");
	itemDesc.textContent = items.description;

	const itemPrice = document.createElement("p");
	itemPrice.classList.add("item-price");
	itemPrice.textContent = `PHP ${items.price}.00`;

	item.appendChild(itemName);
	item.appendChild(itemDesc);
	item.appendChild(itemPrice);

	menuItem.appendChild(item);
}

function allItems(menuItem) {
	for (const items of menu) {
		createItemCard(menuItem, items);
	}
}

function sortDish(menuItem, name) {
	const filtered = menu.filter((item) => item.category === name);

	for (const filteredItems of filtered) {
		createItemCard(menuItem, filteredItems);
	}
}

function clearMenuItem() {
	const menuItem = document.querySelector(".menu-item");
	menuItem.textContent = "";
}
