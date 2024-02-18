const openShareDropdown = (id) => {
    const sharedProject = document.getElementById(id);
    const selectedCompStyle = sharedProject.getElementsByClassName("share_dropdown_div");
    if (selectedCompStyle[0].classList.contains("active")) {
        selectedCompStyle[0].classList.remove("active");
    } else {
        selectedCompStyle[0].classList.add("active");
    }
};