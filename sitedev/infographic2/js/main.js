jQuery(document).ready(function($){




	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('animated').removeClass('fadeIn');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in') &&
			$(this).find('.cd-timeline-content > h2').addClass('animated').addClass('fadeIn') &&
			$(this).find('.cd-timeline-content > p').addClass('animated').addClass('fadeIn');
		});
	}

	// Materialize options

	 $('.modal-trigger').leanModal();
	  $('.parallax').parallax();

	 // load modal includes here
	 var promise = $.ajax("includes/inc.html");
	 promise.then(function(data){
  		$('#html-include').html(data);
			console.log ('Modal load: success');
		}, function() {
					console.log ('Modal load: error');
				});



				$(function() {
	  $('a.smooth[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 69
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});




});
