


$(document).ready(function(){
    //These are varibles
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Click event on toggle menu
    $toggleCollapse.click(function(){//When 3 bar is clicked on activate function
        $nav.toggleClass('collapse');//When activated then the .nav class will toggle to the '.collapse' class(minimize the entire content)
    })

    //Calls on the "owl-carousel" class and activate the owlCarousel feature
    $('.owl-carousel').owlCarousel({
        loop:true,//makes the carousel default at looping
        autoplay:true, //makes carousel default at autoplaying

        autoplayTimeout: 3000,//sets the autoplay loop change every 3 second
        dots: false,//remove the default dots navigation 

        nav:true,//Enables mini navigation arrows at the bottom. It also is invisible as a "owl-nav" class
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },3000);
    })
    
});































