$(document).ready(function() {
    /* 엑스 이미지 클릭 시 이벤트 */
    $("#top #show-bean").click(function() {
        // 콩 이미지로 변경
        var bean = $(this).attr("src");
        var x = $(this).data("over");

        $(this).attr("src", x)
        $(this).data("over", bean);

        // 상단 영역 slideToggle
        $("#header > #bean").slideToggle(300);
    });

    /* 메뉴 탭 hover 시 이벤트 */
    $("#tab .tab-item a").hover(
        // 마우스 올라 왔을 때
        function() {
            // 글씨 색 변경
            $(this).css("color", "#f38200");
            // 아래 sub 메뉴 fadeIn
            var target = $(this).attr("href");
            $(target).fadeIn(300);
            // 그 외 sub 메뉴 안 보이기
            $(".sub").not($(target)).hide();
        },
        // 마우스 내려 갔을 때
        function() {
            $("#tab .tab-item a").css("color", "black");
            $(".sub").hide();
        }
    );

    /* 검색 아이콘 클릭 시 이벤트 */
    $("#tab #search > img").click(function() {
        // 검색 박스 slideToggle
        $("#searchbox").slideToggle(300);
        // input 테두리 삭제
        $("#input-box").css("border", "none");

        // X 모양의 이미지로 변경
        var search = $(this).attr("src");
        var x = $(this).data("over");
        $(this).attr("src", x);
        $(this).data("over", search);
    });

    /* 검색 박스 > input 클릭 시 placeholder 삭제 */
    $("#input-box").click(function() {
        $(this).attr("placeholder", "");
    });

    /****** slick 구현 ******/
    /*** 슬라이드 1 ***/
    $(".product-slide1").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false
    });

    /* 시작, 정지 버튼 공통 구현 */
    $(".stop").click(function() {
        // 시작 버튼 이미지로 변경
        var stop = $(this).children().attr("src");
        var play = $(this).children().data("over");
        $(this).children().attr("src", play);
        $(this).children().data("over", stop);

        // 슬라이드 기능 시작, 정지 기능
        if ($(this).children().attr("src") == "assets/img/container/div2/icon_stop.PNG") {
            $(this).prev().slick("slickPlay");
        } else {
            $(this).prev().slick("slickPause");
        }
    });

    /* 이미지 hover 시 이벤트 */
    $(".product-image img").hover(
        // 마우스 올라 왔을 때
        function() {
            // quickview 뜸
            $(this).parent().next().children().show();
            // 이미지 배경 색상 입혀짐
            $(this).css("opacity", "0.8");
        },
        // 마우스 내려 갔을 때
        function() {
            // quickview 사라짐
            $(".quickview img").hide();
            // 이미지 배경 색상 사라짐
            $(this).css("opacity", "1");
        }
    );

    /* quickview hover 시 이벤트 */
    $(".quickview img").hover(
        // 마우스 올라 왔을 때
        function() {
            $(this).show();
        },
        // 마우스 내려 갔을 때
        function() {
            $(this).hide();
        }
    );


    /*** 슬라이드 2 ***/
    $(".product-slide2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 3500,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false
    });

    /* 이미지 hover 시 이벤트 */
    $(".new-item-image img").hover(
        // 마우스 올라 왔을 때
        function() {
            $(this).css("opacity", "0.8");
        },

        // 마우스 내려 갔을 때
        function() {
            $(".new-item-image img").css("opacity", "1");
        }
    );
});