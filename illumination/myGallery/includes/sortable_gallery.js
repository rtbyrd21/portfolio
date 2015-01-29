

var thumbnailSpacing = 15;


$(document).ready(function(){
	
	
	
	$('a.sortLink').on('click',function(e){
		e.preventDefault();
		$('a.sortLink').removeClass('selected');
		$(this).addClass('selected');
		var keyword = $(this).attr('data-keyword');
		sortThumbnails(keyword);
	});
	
	
	$('.gallery .sorting').css('margin-bottom',window.thumbnailSpacing+'px');
	$('.thumbnail_container a.thumbnailGallery') .addClass('showMe');
	
	positionThumbnails();
	setInterval('checkViewport()',750);
	
});


function checkViewport(){
	var photosWidth = $('photos').width();
	var thumbnailContainerWidth = $('.thumbnail_container').width();
	var thumbnailWidth = $('.thumbnail_container a.thumbnailGallery:first-child').outerWidth();
	
	if( photosWidth < thumbnailContainerWidth ){
		positionThumbnails();
	}
	if( (photosWidth - thumbnailWidth) > thumbnailContainerWidth ){
		positionThumbnails();
	} 
	
	/* debug */ $('.debug-size').html('photosWidth = '+photosWidth+' thumbnailContainerWidth ='+thumbnailContainerWidth);
}

function sortThumbnails(keyword){
	
	$('.thumbnail_container a.thumbnailGallery').each(function(){
		
		var thumbnailKeywords = $(this).attr('data-keywords');
		
		if(keyword == 'all'){
			$(this).addClass('showMe').removeClass('hideMe')
		}else{
			
			if( thumbnailKeywords.indexOf(keyword) != -1){
				$(this).addClass('showMe').removeClass('hideMe');
			}else{
				
				$(this).addClass('hideMe').removeClass('showMe');
			}
			
		}
		
	});
	positionThumbnails();
}

function positionThumbnails(){
	
	/* debug */ $('.debug-remainder').html('');
	
	$('.thumbnail_container a.thumbnailGallery.hideMe').animate({opacity:0},500,function(){
		$(this).css({'display':'none','top':'0px','left':'0px'});
	});
	
	var containerWidth = $('.photos').width();
	var thumbnail_R = 0;
	var thumbnail_C = 0;
	var thumbnailWidth = $('a.thumbnailGallery img:first-child').outerWidth() + window.thumbnailSpacing;
	var thumbnailHeight = $('a.thumbnailGallery img:first-child').outerHeight() + window.thumbnailSpacing;
	var max_C = Math.floor(containerWidth / thumbnailWidth);
	
	$('.thumbnail_container a.thumbnailGallery.showMe').each(function(index){
		var remainder = (index%max_C)/100;
		var maxIndex = 0;
		/* debug */ $('.debug-remainder').append(remainder+' - ');
	if(remainder == 0){
		if(index !=0){
			thumbnail_R += thumbnailHeight;
		}
		thumbnail_C = 0;
	}else{
		thumbnail_C += thumbnailWidth;
	}
	
	$(this).css('display', 'block').animate({
		'opacity':1,
		'top':thumbnail_R+'px',
		'left':thumbnail_C+'px'
		
		
	}, 400);
		
	var newWidth = max_C * thumbnailWidth;
	var newHeight = thumbnail_R + thumbnailHeight;
	$('.thumbnail_container').css({'width':newWidth+'px','heiht':newHeight+'px'});	
		
	});
	
}




/* colorbox */

 "use strict";
 $(document).ready(function(e) {
 	$('#gallery').find('a').colorbox({
 		
 		'rel':'gal',
 		'maxWidth' :'90%',
 		'scalePhotos' : true
 		
 		
 		});
 });





$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});




$(".glyphicon glyphicon-chevron-up").hover(function () {
    $(this).removeString("glyphicon-chevron-up"),
    $(this).append("glyphicon-chevron-down");
});

