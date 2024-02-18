// const timeline_calendar_div = document.getElementById("timeline_calendar_div");
// const timeline_dropdown_div = document.getElementById("timeline_dropdown_div");
// const timeline_dropdown = document.getElementById("timeline_dropdown");
// const timeline_calendar_selected_button = document.getElementById("timeline_calendar_selected_button");


// // Toggle options visibility

// function toggleOptions() {
//     timeline_dropdown_div.style.display = (timeline_dropdown_div.style.display === 'block') ? 'none' : 'block';
//     if (timeline_dropdown_div.style.display === 'block') {
//         timeline_dropdown_div.style.padding = "4px";
//     }
// }


// // Select option function

// function selectOption(option) {
//     timeline_dropdown_div.style.padding = "0px";
//     timeline_calendar_selected_button.innerText = option.innerText;

//     // Deselect previous selected option
//     let selectedOption = document.querySelector('.timeline_calendar_option.selected');
//     if (selectedOption) {
//         selectedOption.classList.remove('selected');
//     }

//     // Mark the selected option
//     option.classList.add('selected');

//     // Hide options after selection
//     timeline_dropdown_div.style.display = 'none';
// }