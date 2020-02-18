/* eslint-disable */

function update_amenities() {
	var checkboxes = document.querySelectorAll(".amenities li input[type=\"checkbox\"]");
	var names = [], ids = [];
	if (checkboxes)
		checkboxes.forEach(x => {
			if (x.checked) {
				ids.push(x.dataset.id);
				names.push(x.dataset.name);
			}
		});
	console.log("names?", names, checkboxes);
	$(".amenities > h4").text(names.join(", "));
}

$(document).ready(function() {
	update_amenities();
});
