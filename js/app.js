const collapsedDrawer = document.querySelector(".collpasedDrawer");
const defaultDrawer = document.querySelector(".defaultDrawer");
const crossBtn = document.querySelector(".crossBtn");
const collapsedProfile = document.querySelector('.collapsedProfile');

collapsedProfile.addEventListener('click', function(){
    console.log("hiii");
    console.log(defaultDrawer);
    collapsedDrawer.style.display = "none";
    defaultDrawer.style.display = "block";
});

crossBtn.addEventListener("click", function(){
    collapsedDrawer.style.display = "block";
    defaultDrawer.style.display = "none";
})




document.addEventListener('DOMContentLoaded', () => {
    const toggleLightButton = document.querySelector('.toggle_light');
    const toggleDarkButton = document.querySelector('.toggle_dark');
    const collapsedModeButton = document.querySelector('.collapsedModeBtn');
    const body = document.body;

    // Functions to switch modes
    const enableLightMode = () => {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    };

    const enableDarkMode = () => {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    };

    // Event Listeners
    toggleLightButton.addEventListener('click', enableLightMode);
    toggleDarkButton.addEventListener('click', enableDarkMode);
    collapsedModeButton.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
});

