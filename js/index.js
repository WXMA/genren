/*$(document).ready(function(){
			
			      $(".c1").animate({
			
					  height: "95%", 
					  wave: true
				  },4000);
			
				  $(".c2").animate({
			
					  height: "93%"
			
				  },5000)
			
				  $(".c3").animate({
			
					  height: "73%"
			
				  },6500)
			
			      $(".c4").animate({
			
					  height: "85%"
			
				  },6000)
			      
			      $(".c5").animate({
			
					  height: "45%"
			
				  },6000)
			
			      $(".c6").animate({
			
					  height: "50%"
			
				  },5800)
})*/
$(function(){
	$('#a').waterbubble({
		txt: 'HTML5',
		textColor: 'white',					
		data: 0.9,
		font: 'bold 37px arial',
		waterColor: '#877b5b'
	});
	$('#b').waterbubble({
		txt: 'CSS3',
		textColor: 'white',			
		font: 'bold 37px arial',
		data: 0.9,
		waterColor: '#a09553'
	});
	$('#c').waterbubble({
		txt: 'jQuery',
		textColor: 'white',
		font: 'bold 37px arial',
		data: 0.8,
		waterColor: '#877b5b'
	});
	$('#d').waterbubble({
		txt: 'JS',
		textColor: 'white',		
		font: 'bold 37px arial',
		data: 0.73,
		waterColor: '#a09553'
	});
	$('#e').waterbubble({
		txt: 'PHP',
		textColor: 'white',
		font: 'bold 37px arial',
		data: 0.5,
		waterColor: '#877b5b'
	});
    $('#f').waterbubble({
		txt: 'VUE',
		textColor: 'white',	
		font: 'bold 37px arial',
		data: 0.5,
		waterColor: '#a09553'
	});
});

//kaitou
    'use strict';
	$(document).ready(function () {
	    var $wrap = $('.wrapper'), pages = $('.page').length, scrolling = false, currentPage = 1, $navPanel = $('.nav-panel'), $scrollBtn = $('.scroll-btn'), $navBtn = $('.nav-btn');
	    function manageClasses() {
	        $wrap.removeClass(function (index, css) {
	            return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
	        });
	        $wrap.addClass('active-page' + currentPage);
	        $navBtn.removeClass('active');
	        $('.nav-btn.nav-page' + currentPage).addClass('active');
	        $navPanel.addClass('invisible');
	        scrolling = true;
	        setTimeout(function () {
	            $navPanel.removeClass('invisible');
	            scrolling = false;
	        }, 1000);
	    }
	    function navigateUp() {
	        if (currentPage > 1) {
	            currentPage--;
	            if (Modernizr.csstransforms) {
	                manageClasses();
	            } else {
	                $wrap.animate({ 'top': '-' + (currentPage - 1) * 100 + '%' }, 1000);
	            }
	        }
	    }
	    function navigateDown() {
	        if (currentPage < pages) {
	            currentPage++;
	            if (Modernizr.csstransforms) {
	                manageClasses();
	            } else {
	                $wrap.animate({ 'top': '-' + (currentPage - 1) * 100 + '%' }, 1000);
	            }
	        }
	    }
	    $(document).on('mousewheel DOMMouseScroll', function (e) {
	        if (!scrolling) {
	            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	                navigateUp();
	            } else {
	                navigateDown();
	            }
	        }
	    });
	    $(document).on('click', '.scroll-btn', function () {
	        if ($(this).hasClass('up')) {
	            navigateUp();
	        } else {
	            navigateDown();
	        }
	    });
	    $(document).on('click', '.nav-btn:not(.active)', function () {
	        if (!scrolling) {
	            var target = $(this).attr('data-target');
	            if (Modernizr.csstransforms) {
	                $wrap.removeClass(function (index, css) {
	                    return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
	                });
	                $wrap.addClass('active-page' + target);
	                $navBtn.removeClass('active');
	                $(this).addClass('active');
	                $navPanel.addClass('invisible');
	                currentPage = target;
	                scrolling = true;
	                setTimeout(function () {
	                    $navPanel.removeClass('invisible');
	                    scrolling = false;
	                }, 1000);
	            } else {
	                $wrap.animate({ 'top': '-' + (target - 1) * 100 + '%' }, 1000);
	            }
	        }
	    });
	});


//zhanshi
$(document).ready(function(){
		
			$('#onebyone_slider').oneByOne({
		
				className:'oneByOne1',
		
				easeType:'random',
		
				slideShow:true,
		
				delay:200,
		
				slideShowDelay:4000
		
			})
		
		});


