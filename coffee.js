document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed("#typed", {
        strings: ["Morning", "Day","Evening","Night"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 700,
        loop: true
    });    
});
document.getElementById('typed').style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
document.getElementById('typed').style.color='#fad4a2';
