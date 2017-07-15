
$(document).ready(function(){

    $('.select2').select2();

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


});