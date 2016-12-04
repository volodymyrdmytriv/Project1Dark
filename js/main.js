/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var FONT_SIZE_INDEX = 0.015;

function onLoaded() {

	function adjust_font_size() {
		// set base font size around 20px;
		var $body = $('body');
		var $header = $('.header');
		var $reservations_block = $('.reservations-block');
		var $footer = $('.footer');
		
		//$body.css('font-size', $body.width()*FONT_SIZE_INDEX+'px');
		
	}

	$(window).unbind('resize').on('resize', function() {
		adjust_font_size();
	});
	adjust_font_size();
	
	$('.header .menu li[page="'+window.active_page+'"]').addClass('active');
	$pagename = $('.header .menu li[page="'+window.active_page+'"]').text();
	$('.header .opened-page .page-name').text($pagename);
	
	$('.cook-person').hover(function(){
		$(this).find('.cooker-intro').show();
	}, function(){
		$(this).find('.cooker-intro').hide();
	});
	
	$('.header .menu li').unbind('click').click(function (){
		var pagename = $(this).attr('page');
		window.location.href = pagename+'.html';
	});
	
}

$(document).ready(function() {
	$('.header2').load('./header.html', '', onLoaded);
	$('.lunch-dinner').load('./lunchdinner_block.html', '', onLoaded);
	$('.reservations-block').load('./reservations_block.html', '', onLoaded);
	$('.footer').load('./footer.html', '', onLoaded);

});
