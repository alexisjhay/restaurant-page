import "./css/style.css";
import { createHome } from "./module/home.js";
import { createMenu } from "./module/menu.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");

homeBtn.addEventListener("click", () => {
	clearContent();
	createHome(content);
});

menuBtn.addEventListener("click", () => {
	clearContent();
	createMenu(content);
});

export function clearContent() {
	content.textContent = "";
}

// RUN ON PAGE LOAD

createHome(content);
