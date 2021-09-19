function j () {
    alert(1);
    console.log('123');
}
function f (){
    alert(123);
    console.log('123123');
}
$(document).ready(function() 	{
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})