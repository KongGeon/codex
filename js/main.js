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
    if (Mobile()){// 모바일일 경우
      $('body').css('overflow','hidden')
    }
  }
  
  $(function () {
    //  모달
    $(".modal-close-btn").click(function () {
      $(".modal").fadeOut();
      $('body').css('overflow','auto')
    }); 
    
    // datepicker
  
    $('.date-nomal').datepicker();
  });



  $(document).ready(function(){

      // 모바일 메뉴 토글
		$(".menu-step1").click(function(){
      if($(this).hasClass("menu-on")){
        $(".menu-step1").removeClass('menu-on')
      }else{
        $(".menu-step1").removeClass('menu-on')
        $(this).addClass('menu-on')
      }
		});

    //체크박스 전체 선택 해제
    $("#ch-all").click(function() {
      if($("#ch-all").is(":checked")) $("input[name=table-check]").prop("checked", true);
      else $("input[name=table-check]").prop("checked", false);
    });
  
    $("input[name=table-check]").click(function() {
      var total = $("input[name=table-check]").length;
      var checked = $("input[name=table-check]:checked").length;
  
      if(total != checked) $("#ch-all").prop("checked", false);
      else $("#ch-all").prop("checked", true); 
    });


    // Q&A
    $(".question").click(function(){
      if($(this).hasClass("active")){
        $(".question").removeClass('active')
      }else{
        $(".question").removeClass('active')
        $(this).addClass('active')
      }
		});


    // 이메일 직접입력
    $('#emailId').change(function(){
      $("#emailId option:selected").each(function () {
       console.log('ss');
       
       if($(this).val()== '1'){ //직접입력일 경우
          $("#inputId").val('');                        //값 초기화
          $("#inputId").attr("disabled",false); //활성화
          $("#inputId").attr("required",true); //필수값받도록 변경
          $("#inputId").css("display",'block'); //활성화
          $("#inputId").focus(); //직접입력 창 포커스

       }else{ //직접입력이 아닐경우
          // $("#inputId").val($(this).text());      //선택값 입력
          $("#inputId").attr("disabled",true); //비활성화
          $("#inputId").attr("required",false); //필수값 안받도록 변경
          $("#inputId").css("display",'none'); //활성화

       }
      });
   });
	});



