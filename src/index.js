import "./css/style.css";
import { createHome } from "./module/home.js";
import { createMenu } from "./module/menu.js";
import { createAbout } from "./module/about.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

homeBtn.addEventListener("click", () => {
	clearContent();
	createHome(content);
});

menuBtn.addEventListener("click", () => {
	clearContent();
	createMenu(content);
});

aboutBtn.addEventListener("click", () => {
	clearContent();
	createAbout(content);
});

export function clearContent() {
	content.textContent = "";
}

// RUN ON PAGE LOAD

createHome(content);
