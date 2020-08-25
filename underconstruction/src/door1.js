
	$(document).ready(function(){
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
		var h = window.innerHeight;
		var w = window.innerWidth;
		var firstbookA = true
		var firstbookB = true
		var firstbookC = true

		$('.prepage').fadeOut(300)


$('.wait').waitForImages(true).done(function() {
	$('.page_2').addClass('show_page')
	addbigdoor()
	$('.loading').hide()
});
		$('.page_2').click(function(){
			// loadpage_1()
			$('.content_wrapper').show()
			$('.page_2').addClass('pagerotate')
		})
		var addbigdoor_counter = 1
		function addbigdoor(){
			if(addbigdoor_counter<4){
				var speed = 800
			}else{
				var speed = 150
			}
				if(addbigdoor_counter<12){
					setTimeout(function(){
						addbigdoor_counter++
						addbigdoor()
					}, speed )
				}
				$('.page_2 .door_'+ (addbigdoor_counter)).addClass('bigdoor')
				$('.page_2 .door_'+ (addbigdoor_counter)).css({'z-index':0})
				$('.page_2 .door_'+ (addbigdoor_counter)).css({'z-index':addbigdoor_counter})
				$('.pers').css({'z-index':addbigdoor_counter})
		}
		function removebigdoor(removebigdoor_counter){
				$('.content_0 .door_1').hide()
				$('.page_3').css({'opacity':1})
				$('.page_3 .pers').fadeIn(2000)
				// $('.content_wrapper').fadeOut(5000)
				var door_array = ['door-10','door-11','door-12','door-09']
				$('.page_3 .door_'+ (removebigdoor_counter)).removeClass('bigdoor')
				if(removebigdoor_counter < 8){
						$('.page_3 .door_'+ (removebigdoor_counter) + ' .innerimg').show()
					}else{
						$('.start').fadeIn(300)
						$('.page_3 .door_'+ (removebigdoor_counter) + ' .innerimg').fadeIn(300)
					}
				$('.pers').css({'z-index':4})
				if(removebigdoor_counter == 2){
						$('.page_3 .pers').fadeIn(1000)
					}
				if(removebigdoor_counter<8){
					removebigdoor_counter  = removebigdoor_counter + 1
					setTimeout(function(){
						removebigdoor(removebigdoor_counter)
					},300)
				}
		}
		var currentpage = [0,0,0]
		var maxpage = [12,14,14]
		var currentbook = 0


			    var counter_1 = 0
			    var counter_2 = 0
			    var counter_3 = 0
		if(isMobile){
			document.addEventListener('touchstart', handleTouchStart, false);        
			document.addEventListener('touchmove', handleTouchMove, false);

			var xDown = null;                                                        
			var yDown = null;

			function getTouches(evt) {
			  return evt.touches ||             // browser API
			         evt.originalEvent.touches; // jQuery
			}                                                     

			function handleTouchStart(evt) {
			    const firstTouch = getTouches(evt)[0];                                      
			    xDown = firstTouch.clientX;                                      
			    yDown = firstTouch.clientY;                                      
			};                                                

			function handleTouchMove(evt) {
			    if ( ! xDown || ! yDown ) {
			        return;
			    }

			    var xUp = evt.touches[0].clientX;                                    
			    var yUp = evt.touches[0].clientY;

			    var xDiff = xDown - xUp;
			    var yDiff = yDown - yUp;

			    if ( Math.abs( xDiff ) > Math.abs( yDiff )) {
	                $('body').css({'overflow':'hidden'})
	                console.log('hey')
			        if ( xDiff > 0 ) {
			        	h = window.innerHeight;
			            console.log( 'left swipe ' )
			            if(currentbook>0 && currentpage[currentbook-1]<maxpage[currentbook-1]-1){
			            	currentpage[currentbook-1] = currentpage[currentbook-1]+1
			            	$('#book_'+currentbook).css({'margin-left':-100*currentpage[currentbook-1]+'vw'})
			            	$('#section'+(currentbook-1) +' .swipe').hide()
			            }
			            if(currentbook==3 && currentpage[currentbook-1]==maxpage[currentbook-1]-1){
			            	console.log('hey')
			            	$('#section'+(currentbook-1) +' .swipe').hide()
			            	$(window).scrollTop( $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight())
			            }
		    		if(currentbook == 1){$(window).scrollTop( $('.content_1_1').outerHeight() - (h-1.5*w)/2);
						firstbookA = false}
		    		if(currentbook == 2){$(window).scrollTop( $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight() - (h-1.5*w)/2);
						firstbookB = false}
		    		if(currentbook == 3){$(window).scrollTop( $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight() - (h-1.5*w)/2);
						firstbookC = false}

			        } else {
			            console.log( 'right swipe' )
			            if(currentbook>0 && currentpage[currentbook-1]>0){
			            	currentpage[currentbook-1] = currentpage[currentbook-1]-1
			            	$('#book_'+currentbook).css({'margin-left':-100*currentpage[currentbook-1]+'vw'})
			            }
			            console.log( currentpage[currentbook-1])
			        }         
			    }else if(Math.abs( yDiff )>10){ 
	                document.body.style.overflowY = "scroll";    
			    }
			    /* reset values */
			    xDown = null;
			    yDown = null;                                             
			};

				$(window).scroll(function (event) {
					h = window.innerHeight;
				    	console.log('l-----sd-----')
				    var scroll = $(window).scrollTop();
				    if(scroll > $('.content_1_1').outerHeight()-0.5*h
				    && scroll < $('.content_1_1').outerHeight() + $('.content_1_2').outerHeight()-0.5*h){
				    	currentbook = 1
				    	counter_1++
				    	if(counter_1<15 && firstbookA){
				    		$(window).scrollTop($('.content_1_1').outerHeight() - (h-1.5*w)/2);
				    	}else{
							firstbookA = false
				    	}   
		                loadpage_2()



				    }else if(scroll > $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()-0.5*h
				     && scroll < $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()-0.5*h){
				    	currentbook = 2
				    	counter_2++
				    	if(counter_2<15 && firstbookB){
				    		$(window).scrollTop($('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight() - (h-1.5*w)/2);
				    	}else{
							firstbookB = false
				    	}
						loadpage_3()



				    }else if(scroll > $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()
				    	+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()-0.5*h
				     && scroll < $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight()-0.5*h){
				    	currentbook = 3
				    	counter_3++
				    	if(counter_3<15 && firstbookC){
				    		$(window).scrollTop($('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight() - (h-1.5*w)/2);
				    	}else{
							firstbookC = false
				    	}


				    }else if(scroll > $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()
				    	+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight()+$('.content_4_1').outerHeight()-0.2*h){
				    	console.log('l----------')
				    		$(window).scrollTop($('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight()+$('.content_4_1').outerHeight());
								$('.page_3').addClass('show_page')
								$('.page_2').removeClass('show_page')
								removebigdoor(1)
				    }else{
				    	currentbook = 0
				    }
				});
		}

		if(!isMobile){
			loadpage_1()
			loadpage_2()
			loadpage_3()
			    $('html, body').scroll(function() {
			    	var scroll = $('body').scrollTop()
			    	if(scroll > $('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()
				    	+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight()+$('.content_4_1').outerHeight()-0.2*h){
			    		console.log('herrrrrrr')
				    		$(window).scrollTop($('.content_1_1').outerHeight()+$('.content_1_2').outerHeight()+$('.content_2_1').outerHeight()+$('.content_2_2').outerHeight()+$('.content_3_1').outerHeight()+$('.content_3_2').outerHeight()+$('.content_4_1').outerHeight());
								$('.page_3').addClass('show_page')
								$('.page_2').removeClass('show_page')
								removebigdoor(1)
				    }
			    });
			   $('.arrow_r').click(function(){
			        	h = window.innerHeight;
			        	var currentbook  = parseInt($(this).parent().attr('id').split('section')[1])+1
			        	console.log(currentbook)
			            if(currentbook>0 && currentpage[currentbook-1]<maxpage[currentbook-1]-1){
			            	currentpage[currentbook-1] = currentpage[currentbook-1]+1
			            	$('#book_'+currentbook).css({'margin-left':-55*currentpage[currentbook-1]+'vh'})
			            }
			        })

			   $('.arrow_l').click(function(){
			        	h = window.innerHeight;
			        	var currentbook  = parseInt($(this).parent().attr('id').split('section')[1])+1
			            if(currentbook>0 && currentpage[currentbook-1]>0){
			            	currentpage[currentbook-1] = currentpage[currentbook-1]-1
			            	$('#book_'+currentbook).css({'margin-left':-55*currentpage[currentbook-1]+'vh'})
			            }
			    })
		}
		function loadpage_1(){
			console.log($('.content_1_1').is(':empty'))
			if( $('.content_1_1').is(':empty') ) {
				$('.content_1_1').append('\
				<img src="content/1/img1.jpg">\
				<img src="content/1/img2.jpg">\
				<img src="content/1/img3.jpg">\
				<img src="content/1/img4.jpg">\
				<img src="content/1/img5.jpg">\
				')
				$('.content_1_2').append('\
				<div id="book_1">\
				    <div class="book book_1_2"></div>\
				    <div class="book book_1_3"></div>\
				    <div class="book book_1_4"></div>\
				    <div class="book book_1_5"></div>\
				    <div class="book book_1_6"></div>\
				    <div class="book book_1_7"></div>\
				    <div class="book book_1_8"></div>\
				    <div class="book book_1_9"></div>\
				    <div class="book book_1_10"></div>\
				    <div class="book book_1_11"></div>\
				    <div class="book book_1_12"></div>\
				    <div class="book book_1_13"></div>\
				</div>\
				')
			}
		}
		function loadpage_2(){
			if( $('.content_2_1').is(':empty') ) {
				$('.content_2_1').append('\
				<img src="content/2/img1.jpg">\
				<img src="content/2/img2.jpg">\
				<img src="content/2/img3.jpg">\
				<img src="content/2/img4.jpg">\
				<img src="content/2/img5.jpg">\
				<img src="content/2/img6.jpg">\
				<img src="content/2/img7.jpg">\
				<img src="content/2/img8.jpg">\
				<img src="content/2/img9.jpg">\
				<img src="content/2/img10.jpg">\
				')
				$('.content_2_2').append('\
				<div id="book_2">\
				    <div class="book book_2_2"></div>\
				    <div class="book book_2_3"></div>\
				    <div class="book book_2_4"></div>\
				    <div class="book book_2_5"></div>\
				    <div class="book book_2_6"></div>\
				    <div class="book book_2_7"></div>\
				    <div class="book book_2_8"></div>\
				    <div class="book book_2_9"></div>\
				    <div class="book book_2_10"></div>\
				    <div class="book book_2_11"></div>\
				    <div class="book book_2_12"></div>\
				    <div class="book book_2_13"></div>\
				    <div class="book book_2_14"></div>\
				    <div class="book book_2_15"></div>\
				</div>\
				')
			}
		}
		function loadpage_3(){
			if( $('.content_3_1').is(':empty') ) {
				$('.content_3_1').append('\
				<img src="content/3/img1.jpg">\
				<img src="content/3/img2.jpg">\
				<img src="content/3/img3.jpg">\
				<img src="content/3/img4.jpg">\
				<img src="content/3/img5.jpg">\
				<img src="content/3/img6.jpg">\
				<img src="content/3/img7.jpg">\
				<img src="content/3/img8.jpg">\
				')
				$('.content_3_2').append('\
				<div id="book_3">\
				    <div class="book book_3_2"></div>\
				    <div class="book book_3_3"></div>\
				    <div class="book book_3_4"></div>\
				    <div class="book book_3_5"></div>\
				    <div class="book book_3_6"></div>\
				    <div class="book book_3_7"></div>\
				    <div class="book book_3_8"></div>\
				    <div class="book book_3_9"></div>\
				    <div class="book book_3_10"></div>\
				    <div class="book book_3_11"></div>\
				    <div class="book book_3_12"></div>\
				    <div class="book book_3_13"></div>\
				    <div class="book book_3_14"></div>\
				    <div class="book book_3_14"></div>\
				    <div class="book book_3_14"></div>\
				    <div class="book book_3_15"></div>\
				</div>\
				')
				$('.content_4_1').append('\
				<img src="content/4/img1.jpg">\
				<img src="content/4/img2.jpg">\
				<img src="content/4/img3.jpg">\
				<img src="content/4/img4.jpg">\
				<img src="content/4/img5.jpg">\
				<img src="content/4/img6.jpg">\
				')
			}
		}
		$('.start').click(function(){
			location.reload();
		})
	})