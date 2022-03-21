$('.view .tabs_links li').click(function() {
  $('.view .tabs_links li').removeClass('active');
  $(this).addClass('active');
  $('.view .tabs_items .item').removeClass('active')
    .eq($(this).index()).addClass('active');
  return false;
});

$('.btn_1').click(function() {
  $('#modal_1').arcticmodal();
});

$('.btn_2').click(function() {
  $('#modal_2').arcticmodal();
});

$('.btn_3').click(function() {
  $('#modal_3').arcticmodal();
});

$('.btn_4').click(function() {
  $('#modal_4').arcticmodal();
});

$('.btn_5').click(function() {
  $('#modal_5').arcticmodal();
});

$('.btn_6').click(function() {
  $('#modal_6').arcticmodal();
});

$(document).ready(function() {
  $('.accordeon .answer').hide();
  $('.accordeon .question:first').addClass('active').next().show();
  $('.accordeon .question').click(function() {
    if ($(this).next().is(':hidden')) {
      $('.accordeon .question').removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideDown();
    } else $(this).toggleClass('active').next().slideUp();
  });

});

$('.slider_1').owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true,
  navText: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
});

var sync1 = $("#sync1");
var sync2 = $("#sync2");
var flag = false;
var slides = sync1.owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true
}).on('change.owl.carousel', function(e) {
  if (e.namespace && e.property.name === 'position' && !flag) {
    flag = true;
    thumbs.to(e.relatedTarget.relative(e.property.value), 300, true);
    flag = false;
  }
}).data('owl.carousel');
var thumbs = sync2.owlCarousel({
    loop: true,
    items: 4,
    nav: false,
  })

  .on('click', '.slide', function(e) {
    $('.slide').removeClass('synced')
    $(this).toggleClass('synced')
    e.preventDefault();
    sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 1300, true]);
  }).on('change.owl.carousel', function(e) {
    if (e.namespace && e.property.name === 'position' && !flag) {
      //nsole.log('...');
    }
  }).data('owl.carousel');

$("#sync2 .owl-item:first-child .slide").toggleClass('synced');

//Форма


$(document).ready(function() {

  function falidator(item) {
    check = true;
    $(item).find('input').each(function() {
      if ($(this).hasClass('required') && $(this).val() == '') {
        check = false;
        $(this).css('border', '1px red solid');
      } else {
        $(this).css('border', '1px transparent solid');
      }
    });
    if (check) {
      return true;
    } else {
      return false;
    }
  }

  /**************************/
  $("#form_1").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_1.php",
      data: $("#form_1").serialize(),
      success: function(html) {

      }
    });

    $('#modal_1').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_1').trigger("reset");
    return false;
  });
  /**************************/

  /**************************/
  $("#form_2").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_2.php",
      data: $("#form_2").serialize(),
      success: function(html) {

      }
    });

    $('#modal_2').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_2').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_3").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_3.php",
      data: $("#form_3").serialize(),
      success: function(html) {

      }
    });

    $('#modal_3').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_3').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_4").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_4.php",
      data: $("#form_4").serialize(),
      success: function(html) {

      }
    });

    $('#modal_4').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_4').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_5").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_5.php",
      data: $("#form_5").serialize(),
      success: function(html) {

      }
    });

    $('#modal_5').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_5').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_6").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_6.php",
      data: $("#form_6").serialize(),
      success: function(html) {

      }
    });

    $('#modal_6').arcticmodal('close');
    $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_6').trigger("reset");
    return false;
  });
  /**************************/

});


$(document).ready(function() {

  if ($.browser.msie) {
    $("form").find("input[type='text']").each(function() {
      var tp = $(this).attr("placeholder");
      $(this).attr('value', tp).css('color', '#373533');
    }).focusin(function() {
      var val = $(this).attr('placeholder');
      if ($(this).val() == val) {
        $(this).attr('value', '').css('color', '#373533');
      }
    }).focusout(function() {
      var val = $(this).attr('placeholder');
      if ($(this).val() == "") {
        $(this).attr('value', val).css('color', '#373533');
      }
    });

    /* Protected send form */
    $("form").submit(function() {
      $(this).find("input[type='text']").each(function() {
        var val = $(this).attr('placeholder');
        if ($(this).val() == val) {
          $(this).attr('value', '');
        }
      })
    });
  }
});




$(".numbox").mask("+7 (999) 999-99-99");