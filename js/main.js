let darkModeSetting = localStorage.getItem('darkMode');
/*document.addEventListener('DOMContentLoaded', () => {
    // Check local storage on page load
    function checkDarkMode() {
        const darkModeSetting = localStorage.getItem('darkMode');
        if (darkModeSetting === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    }*/

    // Function to update image source based on mode
    /*function updateImage() {
        const img = document.getElementById('modeImage');
        const darkModeSetting = localStorage.getItem('darkMode');
        img.src = darkModeSetting === 'enabled' ? 'dark-image.jpg' : 'light-image.jpg';
    }*/
   /* <!--<button class="toggle-button" id="toggleButton">Toggle Dark Mode</button>--> */
    /*if (darkModeSetting === 'enabled') {
        document.body.classList.add('dark-mode');
    }*/
    // Initialize dark mode based on user preference
    //checkDarkMode();
    //updateImage();

    // Event listener for the toggle button
    /*document.getElementById('toggleButton').addEventListener('click', () => {
        //document.body.classList.toggle('dark-mode');
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.body.classList.toggle("dark-mode");
        } else {
            document.body.classList.toggle("dark-mode");
        }
        //updateImage(); // Update image for the current mode
    });*/

/*if ( document.documentElement ) {
    if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {
        themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
    } else {
        if ( localStorage.getItem("data-bs-theme") !== null ) {
            themeMode = localStorage.getItem("data-bs-theme");
        } else {
            themeMode = defaultThemeMode;
        }
    }

    if (themeMode === "system") {
        themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    document.documentElement.setAttribute("data-bs-theme", themeMode);
}

addEventListener("load",(event)=>{
    if (thememode==1){
        var element = document.body;
        var bg = document.querySelector(".blocks");;
        
        element.classList.add("dark-mode");
        bg.classList.add("dark-mode2");
    }
})
function myFunction() {
    var element = document.body;
    var bg = document.querySelector(".blocks");;
    
    element.classList.toggle("dark-mode");
    bg.classList.toggle("dark-mode2");
    if (thememode==0){
        thememode=1;
    }
    else
    thememode=0;
}*/
//smooth loading
/*$(document).ready(function(){
    // to fade in on page load
    $("section").css("display", "none");
    $("section").fadeIn(400); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('section').fadeOut(400, function(){
            document.location.href = redirect
        });
    });
})*/

//init language on load
/*window.onload = function() {
    // Get the current URL
    let currentURL = window.location.href;

    // Check if 'lang' parameter is already in the URL
    if (!currentURL.includes('lang=')) {
        // Check if the URL already has a query string
        if (currentURL.indexOf('?') === -1) {
            // If no query string, append '?lang=en'
            window.location.href = currentURL + '?lang=en';
        } else {
            // If there is a query string, append '&lang=en'
            window.location.href = currentURL + '&lang=en';
        }
    }
};*/

