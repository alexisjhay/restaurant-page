import "./css/style.css";
import { createHome } from "./module/home.js";

const content = document.querySelector("#content");

document.querySelector(".homeBtn").addEventListener("click", () => {
	clearContent();
	createHome(content);
});

function clearContent() {
	content.textContent = "";
}

// RUN ON PAGE LOAD
createHome(content);
