const search_input = document.getElementById("timeline_search_input");
const calendar_dropdown_div = document.getElementById("timeline_calendar_div");
const calendar_dropdown = document.getElementById("timeline_calendar");
const search_icon = document.getElementById("search_icon");
const search_max_vector = document.getElementById("search_max_vector");
const search_max_vector_div = document.getElementById("search_max_vector_div");
const dropdown_arrow = document.getElementById("dropdown_arrow");
const timeline_calendar_selected_button = document.getElementById("timeline_calendar_selected_button");



const timeline_calendar_div = document.getElementById("timeline_calendar_div");
const timeline_dropdown_div = document.getElementById("timeline_dropdown_div");
const timeline_dropdown = document.getElementById("timeline_dropdown");
// const timeline_calendar_selected_button = document.getElementById("timeline_calendar_selected_button");


// Toggle options visibility

function toggleOptions() {
    timeline_dropdown_div.style.display = (timeline_dropdown_div.style.display === 'block') ? 'none' : 'block';
    if (timeline_dropdown_div.style.display === 'block') {
        timeline_dropdown_div.style.padding = "4px";
    }
}


// Select option function

let current_option_text = timeline_calendar_selected_button.innerText;


function selectOption(option) {
    timeline_dropdown_div.style.padding = "0px";
    timeline_calendar_selected_button.innerText = option.innerText;

    // Deselect previous selected option
    let selectedOption = document.querySelector('.timeline_calendar_option.selected');
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }

    // Mark the selected option
    option.classList.add('selected');

    // Hide options after selection
    timeline_dropdown_div.style.display = 'none';
    current_option_text = option.innerText;
}

let search_input_bool = false;


search_input.addEventListener("focus", () => {
    search_input.placeholder = "Type something";
    calendar_dropdown.style.width = "0px";
    calendar_dropdown_div.style.opacity = "0";
    dropdown_arrow.style.width = "0px";
    timeline_calendar_selected_button.style.width = "0px";
    timeline_calendar_selected_button.innerText = "";
    calendar_dropdown.style.paddingLeft = "0px";
    calendar_dropdown.style.paddingRight = "0px";
    calendar_dropdown.style.color = "rgba(0,0,0,0)";
    // calendar_dropdown_div.style.paddingRight = "0px";
    calendar_dropdown_div.style.height = "40px";
    search_icon.style.display = "none";
    search_max_vector.style.display = "block";
    search_max_vector_div.style.width = "24px";
    search_max_vector_div.style.height = "24px";
});

search_max_vector.addEventListener("click", () => {
    search_input.placeholder = "Search";
    calendar_dropdown.style.width = "180px";
    calendar_dropdown_div.style.opacity = "1";
    timeline_calendar_selected_button.style.width = "auto";
    timeline_calendar_selected_button.innerText = current_option_text;
    calendar_dropdown.style.paddingLeft = "20px";
    calendar_dropdown.style.paddingRight = "20px";
    calendar_dropdown.style.color = "#FFFFFF";
    dropdown_arrow.style.width = "auto";
    calendar_dropdown_div.style.height = "40px";
    // calendar_dropdown_div.style.paddingRight = "9px";
    search_icon.style.display = "block";
    search_max_vector.style.display = "none";
    search_max_vector_div.style.width = "0px";
    search_max_vector_div.style.height = "0px";
});