// 모바일 체크 true면 모바일
function Mobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}


// 헤더 포커스 이벤트
 const headerListName = Array.prototype.slice.call(document.querySelectorAll('.header__menu > li > a'));
 const headerlastA = Array.prototype.slice.call(document.querySelectorAll('.header__step2:last-child'));


if (Mobile()){// 모바일일 경우


    for (let i = 0; i < headerListName.length; i++) {
        const e = headerListName[i];
        e.addEventListener('click',()=>{
            if(e.parentNode.classList.contains('header-active')){
                
                headerListName.forEach(a => {
                    a.parentNode.classList.remove('header-active')
                });
            }else{

                headerListName.forEach(a => {
                    a.parentNode.classList.remove('header-active')
                });
                e.parentNode.classList.add('header-active')
            }
        })

    }
}else{// 모바일 아닐 경우

    for (let i = 0; i < headerlastA.length; i++) {
        const e = headerlastA[i];
        e.addEventListener('focusout',()=>{
            e.parentNode.parentNode.classList.remove('header-active')    
         })
    }
    
     for (let i = 0; i < headerListName.length; i++) {
         const e = headerListName[i];
         e.addEventListener('focusout',()=>{
             headerListName.forEach(a => {
                 a.parentNode.classList.remove('header-active')
             });
         })
         e.addEventListener('focus',()=>{
             headerListName.forEach(a => {
                 a.parentNode.classList.remove('header-active')
             });
             e.parentNode.classList.add('header-active')
         })
     }
     
     const headerIn = document.querySelector('header');

     headerIn.addEventListener('mouseleave',()=>{
         headerListName.forEach(a => {
             a.parentNode.classList.remove('header-active')
         });
     })


}


 // 헤더 포커스 이벤트 끝

// datepicker
 $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });



  function modalOn(modal){
    $('.' + modal).fadeIn();
}

$(function(){ 
    //  모달
    
    $(".modal-close-btn").click(function(){
      $(".modal").fadeOut();
    });
 
    // datepicker
    $('.date-nomal').datepicker();
  });



