$(".filter__item").click(function (event) {
    var i = $(this).data('filter')
    if (i == 1) {
        $(".portfolio__item").show();
    }
    else {
        $(".portfolio__item").hide();
        
        $(".portfolio__item.f__" + i).show();

    }
    $(".filter__item").removeClass('active');
    $(this).addClass('active')
    return false
});