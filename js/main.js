// 모바일 체크 true면 모바일
function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } // 헤더 포커스 이벤트
  
  
  var headerListName = Array.prototype.slice.call(document.querySelectorAll('.header__menu > li > a'));
  var headerlastA = Array.prototype.slice.call(document.querySelectorAll('.header__step2:last-child'));
  
  if (Mobile()) {// 모바일일 경우
    var _loop = function _loop(i) {
      var e = headerListName[i];
      e.addEventListener('click', function () {
        if (e.parentNode.classList.contains('header-active')) {
          headerListName.forEach(function (a) {
            a.parentNode.classList.remove('header-active');
          });
        } else {
          headerListName.forEach(function (a) {
            a.parentNode.classList.remove('header-active');
          });
          e.parentNode.classList.add('header-active');
        }
      });
    };
    
    for (var i = 0; i < headerListName.length; i++) {
      _loop(i);
    }
  } else {// 모바일 아닐 경우
    var _loop2 = function _loop2(_i) {
      var e = headerlastA[_i];
      e.addEventListener('focusout', function () {
        e.parentNode.parentNode.classList.remove('header-active');
      });
    };
  
    
    for (var _i = 0; _i < headerlastA.length; _i++) {
      _loop2(_i);
    }
  
    var _loop3 = function _loop3(_i2) {
      var e = headerListName[_i2];
      e.addEventListener('focus', function () {
        headerListName.forEach(function (a) {
          a.parentNode.classList.remove('header-active');
        });
        e.parentNode.classList.add('header-active');
      });
      e.addEventListener('mouseleave', function () {
        headerListName.forEach(function (a) {
          a.parentNode.classList.remove('header-active');
        });
      });
    };
  
    for (var _i2 = 0; _i2 < headerListName.length; _i2++) {
      _loop3(_i2);
    }
  } // 헤더 포커스 이벤트 끝
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
  
  function modalOn(modal) {
    $('.' + modal).fadeIn();
  }
  
  $(function () {
    //  모달
    $(".modal-close-btn").click(function () {
      $(".modal").fadeOut();
    }); // datepicker
  
    $('.date-nomal').datepicker();
  });

  // 모바일 메뉴 토글

  $(document).ready(function(){
		$(".menu-step1").click(function(){
      if($(".menu-step1").hasClass("menu-on")){
        $(".menu-step1").removeClass('menu-on')
      }else{
        $(".menu-step1").removeClass('menu-on')
        $(this).toggleClass('menu-on')
      }
		});
	});