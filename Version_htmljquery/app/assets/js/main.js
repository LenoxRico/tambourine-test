$( document ).ready(function() {
    $('#showBook').on('click',function(){
        $('#overlay').show();
        $('body').css({'overflow':'hidden'})
    })
    $('#hideBook').on('click',function(){
        $('#overlay').hide();
        $('body').css({'overflow':'auto'})
    })
});