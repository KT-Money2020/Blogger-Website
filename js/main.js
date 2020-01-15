


$(document).ready(function(){
    //These are varibles
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Click event on toggle menu
    $toggleCollapse.click(function(){//When 3 bar is clicked on activate function
        $nav.toggleClass('collapse');//When activated then the .nav class will toggle to the '.collapse' class(minimize the entire content)
    })

});































