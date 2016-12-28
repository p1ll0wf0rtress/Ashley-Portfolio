//fullpage
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['top', 'about', 'work', 'contact']
    });
});

$(".about").click(function() {
    console.log("about clicked");
    $.fn.fullpage.moveTo(2);
});
$(".work").click(function() {
    console.log("work clicked");
    $.fn.fullpage.moveTo(3);
});
$(".contact").click(function() {
    console.log("contact clicked");
    $.fn.fullpage.moveTo(4);
});

//flowtype
$('.aboutText').flowtype({
    minFont: 16,
    maxFont: 40,
});

//check for webp support
Modernizr.on('webp', function(result) {
    if (result == true) {
        console.log("Webp supported");
        $("#ashley").attr("src", "img/graphics/ashley.webp");
        $("#slide1").css({ "background-image": "url('img/renders/livingroom.webp')" });
        $("#slide2").css({ "background-image": "url('img/renders/courtYard.webp')" });
        $("#slide3").css({ "background-image": "url('img/renders/bar.webp')" });
        $("#slide4").css({ "background-image": "url('img/renders/window.webp')" });
    } else if (result == false) {
        $("#firstView").css({ "background-image": "url('img/renders/streetWindow.jpg')" });
    } else {
        alert("everything's broken!");
    }
});
