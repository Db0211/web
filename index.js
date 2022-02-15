$('.wrap').fullpage({
    navigation:true,
    verticalCentered: true,
    anchors:['1page','2page','3page','4page','5page'],
    afterLoad:function(origin , destiantion , direction){
        $('#video').trigger('play');
    }
});

$('.youtube').colorbox({iframe:true,innerWidth1200, innerHeight720 , rel:'img1'});
