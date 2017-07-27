
$(document).ready(function(){

    if($('.select2').length > 0) {
        $('.select2').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "select2-green"
        });
    }

    if($( ".temp-slider" ).length > 0) {
        $( ".temp-slider" ).slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 40,
            value: 24,
            slide: function( event, ui ) {
                $( "#temperature" ).html( ui.value );
            }
        });
        $( "#temperature" ).html( $( ".temp-slider" ).slider( "value" ) );
    }


    if($('#budget').length > 0) {
        $('#budget').roundSlider({
            radius: 83,
            width: 20,
            handleShape: "dot",
            handleSize: "+5",
            min: 0,
            max: 3000,
            step: 20,
            value: 300,
            sliderType: "min-range",
            startAngle: 270,
            circleShape: "full",
            tooltipFormat: function (e) {
                return  e.value + ' €';
            }
        });
    }

    $( "#slider-price" ).slider({
        range: true,
        step: 10,
        min: 0,
        max: 2000,
        values: [ 200, 700 ],
        classes: {
            "ui-slider": "toptravel-slider",
            "ui-slider-handle": "toptravel-slider-handle",
            "ui-slider-range": "toptravel-slider-range"
        },
        slide: function( event, ui ) {
            $('#price-from').val(ui.values[0]);
            $('#price-to').val(ui.values[1]);
        }
    });

    $( "#slider-duration" ).slider({
        range: true,
        min: 0,
        max: 30,
        values: [ 3, 14 ],
        classes: {
            "ui-slider": "toptravel-slider",
            "ui-slider-handle": "toptravel-slider-handle",
            "ui-slider-range": "toptravel-slider-range"
        },
        slide: function( event, ui ) {
            $('#duration-from').val(ui.values[0]);
            $('#duration-to').val(ui.values[1]);
        }
    });

    $("#price-from").val($( "#slider-price" ).slider( "values", 0 ));
    $("#price-to").val($( "#slider-price" ).slider( "values", 1 ));
    $("#duration-from").val($( "#slider-duration" ).slider( "values", 0 ));
    $("#duration-to").val($( "#slider-duration" ).slider( "values", 1 ));

    //scripts.js

    $('[data-toggle="tooltip"]').tooltip();

    $(".checkbox:not(.styled)").each(function(){
        var $that = $(this);
        $that.addClass("styled").find("label").prepend('<i class="ico fa fa-check"></i>');
        if($that.find('input[type="checkbox"]').prop("checked")){
            $that.addClass("checked");
        }
    });

    $( document).on( "click", '.checkbox.selectable:not(.disabled)', function(e){
        e.preventDefault();
        var $that = $(this).find('input[type="checkbox"]');
        if($that.prop("checked")){
            $that.prop('checked', false).change();
        }else{
            $that.prop('checked', true).change();
        }
    });
    $( document).on( "change", 'input[type="checkbox"]', function(e){
        var $that = $(this);
        var $div = $that.parents(".checkbox");
        var target = $div.data("target");
        if($that.prop("checked")){
            $div.addClass("checked");
            if ($div.hasClass("toggle")) {
                doFadeIn(target);
            }
        }else{
            $div.removeClass("checked");
            if ($div.hasClass("toggle")) {
                doFadeOut(target);
            }
        }
    });


});