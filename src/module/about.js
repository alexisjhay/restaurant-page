export function createAbout(content) {
	content.className = "";
	content.classList.add("about");

	// ---ABOUT INFO---

	const aboutH1 = document.createElement("h1");
	const aboutDesc = document.createElement("p");
	const contactH1 = document.createElement("h1");

	aboutH1.textContent = "About Us";
	aboutDesc.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum undelaborum dolorum maiores veniam odit, expedita dicta! Ipsum pariatur qui, vel doloremque, ex nostrum, dolorem similique aliquid harum voluptates ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat possimus in consequuntur nisi eos molestiae? Quidem maxime rerum mollitia est sunt doloremque eos velit, at dolorum, commodi optio laudantium.";
	contactH1.textContent = "Contact Us";

	content.appendChild(aboutH1);
	content.appendChild(aboutDesc);
	content.appendChild(contactH1);

	// ---CONTACT INFO---

	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");

	// CONTACT US DIV

	const contactUsContainer = document.createElement("div");
	contactUsContainer.classList.add("contact-us");

	const h3Title = [
		{
			title: "Visit Us",
			info: "123 Flavor Street, Food District,\n Cebu City, Philippines",
		},
		{
			title: "Call Us",
			info: "+63 917 456 7890",
		},
		{
			title: "Email Us",
			info: "hello@restorant.example",
		},
	];

	for (const header of h3Title) {
		const h3 = document.createElement("h3");
		h3.textContent = header.title;
		const info = document.createElement("p");
		info.style.whiteSpace = "pre-line";
		info.textContent = header.info;

		contactUsContainer.appendChild(h3);
		contactUsContainer.appendChild(info);
	}

	// MESSAGE US DIV

	const messageUsContainer = document.createElement("div");
	messageUsContainer.classList.add("message-us");

	contactContainer.appendChild(contactUsContainer);
	contactContainer.appendChild(messageUsContainer);

	const h3 = document.createElement("h3");
	h3.textContent = "Send us a message";

	const form = document.createElement("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		alert("Message sent");
	});

	// FORM INPUT

	const formInput = [
		{
			inputType: "input",
			inputId: "fname",
			inputName: "fname",
			required: true,
			labelName: "Name",
		},
		{
			inputType: "input",
			inputId: "email",
			inputName: "email",
			required: true,
			labelName: "Email",
		},

		{
			inputType: "textarea",
			inputId: "message",
			inputName: "message",
			required: false,
			labelName: "Message",
		},
	];

	for (const inputs of formInput) {
		const inputLabel = document.createElement("label");
		const input = document.createElement(inputs.inputType);

		inputLabel.textContent = inputs.labelName;
		inputLabel.htmlFor = inputs.inputId;

		if (inputs.inputType === "textarea") {
			input.rows = 8;
		}

		input.id = inputs.inputId;
		input.name = inputs.inputName;
		input.required = inputs.required;

		form.appendChild(inputLabel);
		form.appendChild(input);
	}

	// FORM BUTTON

	const formBtn = document.createElement("button");
	formBtn.textContent = "Send";
	formBtn.type = "submit";

	form.appendChild(formBtn);

	// APPEND TO MESSAGE

	messageUsContainer.appendChild(h3);
	messageUsContainer.appendChild(form);

	// APPEND TO CONTENT

	content.appendChild(contactContainer);
}
