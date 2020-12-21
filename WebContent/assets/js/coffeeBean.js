$(function() {
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
        // 마우스 올라왔을 때
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
});