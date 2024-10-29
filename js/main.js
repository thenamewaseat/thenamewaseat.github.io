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

