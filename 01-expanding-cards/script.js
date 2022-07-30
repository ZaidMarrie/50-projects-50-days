const imagePanels = document.querySelectorAll(".panel");

imagePanels.forEach((panel) => {
	panel.addEventListener("click", expandPanel);
});

function expandPanel(e) {
	const targetPanel = e.currentTarget;
	const panelsToCollapse = Array.from(imagePanels).filter(
		(panel) => panel !== targetPanel
	);

	panelsToCollapse.forEach((panel) => panel.classList.remove("active"));
	targetPanel.classList.add("active");
}
