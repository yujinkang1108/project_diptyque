$(function(){

//헤더
/**
 *
 */
// .btn-open
$('.header .btn-open').on('click',function(){
    if ($('.nav').hasClass('on')){ //sub이 열렸을 때
        $('.nav').stop().slideUp(); //1 /닫아요
        $('.nav').removeClass('on') //1 /전체 클래스 빼주기

    } else{ //sub이 닫혔을 때,버튼 누르기 전 
        $('.nav').stop().slideUp(); //1
        $('.nav').stop().slideDown()//2
        
        $('.nav').removeClass('on') //1 /원래버튼 눌렀다가 다른버튼 눌렀을 때 원래버튼이 닫히게끔
        $('.nav').addClass('on')//2
    }
})
// .btn-search
$('.group-bar.main .btn-search').on('click',function(){
   $('.group-bar.main').addClass('on')
   $('.group-bar.srh').addClass('on')
   $('.group-bar.srh fieldset').addClass('on')
})
// .btn-close
$('.group-bar.srh .btn-close').on('click',function(){
   $('.group-bar.main').removeClass('on')
   $('.group-bar.srh').removeClass('on')
})


//메인
/**
 * 
 */
 


//푸터
/**
 * @btn-top
 */
$(".footer .top-box").click(function(){
   $('html,body').animate({scrollTop:'0'},1000);
   return false;
});


})// 지우지 말 것