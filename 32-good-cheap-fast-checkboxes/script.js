const toggleCheckboxes = document.querySelectorAll(".toggle__checkbox");
const goodToggleSwitch = document.getElementById("good");
const cheapToggleSwitch = document.getElementById("cheap");
const fastToggleSwitch = document.getElementById("fast");

toggleCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", (event) => {
		toggleOneOff(event.target);
	});
});

// Toggles one of the 'toggle switches' off
function toggleOneOff(toggledElement) {
	if (goodToggleSwitch.checked && cheapToggleSwitch.checked && fastToggleSwitch.checked) {
		if (goodToggleSwitch === toggledElement) {
			cheapToggleSwitch.checked = false;
		}

		if (fastToggleSwitch === toggledElement) {
			goodToggleSwitch.checked = false;
		}

		if (cheapToggleSwitch === toggledElement) {
			fastToggleSwitch.checked = false;
		}
	}
}
