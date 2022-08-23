const faqTriggers = document.querySelectorAll(".faq__trigger");

faqTriggers.forEach((trigger) => {
	trigger.addEventListener("click", (event) => {
		trigger.parentElement.classList.toggle("active");
	});
});
