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

    /* 이미지 hover 시 이벤트 */
    $(".product-image img").hover(
        // 마우스 올라 왔을 때
        function() {
            // quickview 뜸
            $(this).parent().children().find(".quickview").show();
            // 이미지 배경 색상 입혀짐
            $(this).css("background-color", "rgba(255,255,255,0.8").fadeIn(300);
        },
        // 마우스 내려 갔을 때
        function() {
            // quickview 사라짐
            $(".quickview").hide();
            // 이미지 배경 색상 사라짐
            $(this).css("background-color", "none");
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
            var white = $(this).css("background-color", "rgba(255,255,255,0.8)");
            white.fadeIn(300);
        },

        // 마우스 내려 갔을 때
        function() {
            $(".new-item-image").css("background-color", "none");
        }
    );
});