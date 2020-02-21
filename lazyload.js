<style>
  
aside.pagination-countdown.hide-pc {
  	opacity: 0;
  	transition: opacity .5s;
}

/** circle animation **/
  
.pagination-progress svg {
    transform: rotate(-90deg);
    width: 223px;
    width: 55px;
    height: 55px;
}

.progress-bar__background {
  	fill: none;
  	stroke: #979797;
  	stroke-width: 1.8;
}

.progress-bar__progress {
  	fill: none;
  	stroke: #000;
  	stroke-dasharray: 100 100;
  	stroke-dashoffset: 100;
  	stroke-linecap: round;
  	stroke-width: 1.8;
}
  
/** circle container **/
  
.pagination-countdown {
    height: 30px;
  	right: 15vw;
    position: sticky;
    position: -webkit-sticky;
    transition: opacity .5s;
  	z-index: 105;
    top: 26vh;
  
}
  
.pagination-progress {
    position: absolute;
    top: 115px;
    right: -65px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    z-index: 5;
}
  
/** circle text **/
  
.product-amt {
  	position: absolute;
    width: 39px;
    height: 39px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: -47px;
    margin-top: 10px;
    text-align: center;
    line-height: 37px;
    font-size: 16px;
}
  
.total-items {
	position: absolute;
    top: 60px;
    right: -2px;
    text-align: center;
    font-family: sofia-pro;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    letter-spacing: .1em;
    line-height: 12px;
    color: #000;
    font-family: HelveticaNeueW01-65Medi,Helvetica-Neue-Bold,Arial,Lucida Grande,sans-serif;
}
 
@media only screen and (max-width: 1099px) {
  
  	.product-amt {
    	background-color: transparent;
	}

  	.pagination-progress .inset {
    	background-color: #f1f9f9;
	}
  
  	.pagination-progress-mobile {
    	background-color: #f1f9f9;
    	height: 103px;
    	width: 76px;
    	position: absolute;
    	top: 150px;
    	right: 0;
    	z-index: 2;
	}
  	
  	.pagination-progress {
    	position: absolute;
    	top: 160px;
    	right: 10px;
    	width: 55px;
    	height: 55px;
    	border-radius: 50%;
    	z-index: 5;
	}
  
  	.pagination-countdown {
    	right: 0;
     }

}
  
@media only screen and (min-width: 1022px) and (max-width: 1099px) { 
  
  	.pagination-progress-mobile {
    	background-color: #f1f9f9;
    	height: 103px;
    	width: 76px;
    	position: absolute;
    	top: 15px;
    	 right: -35px;
    	z-index: 2;
	}
  	
  	.pagination-progress .inset {
    	background-color: #fff;
	}
  
  	.pagination-progress {
    	right: -25px;
        top: 25px;
  	}
  
  	.pagination-countdown {
    	right: 0;
  	}
  
}

@media only screen and (max-width: 1021px) {
  
  .product-amt {
    	background-color: transparent;
	}
  
  .pagination-countdown {
    	right: 0;
  }
  
  .pagination-progress .inset {
    	background-color: #f1f9f9;
	}
  
  .pagination-progress-mobile {
    	background-color: #f1f9f9;
    	height: 103px;
    	width: 76px;
    	position: fixed;
    	top: 34vh;
    	right: 0px;
    	z-index: 2;
	}
	
  .pagination-progress {
    	position: fixed;
    	top: 35vh;
    	width: 55px;
    	height: 55px;
    	border-radius: 50%;
    	z-index: 5;
	}
  
    .stick-pc .pagination-progress-mobile {
		top: 74.5vh;
	}
  
	.stick-pc .pagination-progress {
		top: 76vh;
	}
}

  
</style>

<script>

function productCountdown() {
  
  	/** page countdown **/
  	
  	var numberofProducts;
     
  	  if (document.querySelector('.mar-items-found-amt').innerHTML.length >= 10 ) {
        	numberofProducts = document.querySelector('.mar-items-found-amt').innerHTML .slice(0,4);
      }
  	
  	  if (document.querySelector('.mar-items-found-amt').innerHTML.length < 10 ) {
        	numberofProducts = document.querySelector('.mar-items-found-amt').innerHTML .slice(0,3);
      }
   
       if (document.querySelector('.mar-items-found-amt').innerHTML.length < 9 ) {
        	numberofProducts = document.querySelector('.mar-items-found-amt').innerHTML .slice(0,2);
      }
  
  	var productCountdown = document.createElement("aside");
    productCountdown.className = "pagination-countdown";
  
  	productCountdown.innerHTML = '<div class="pagination-progress-mobile"></div><div class="pagination-progress"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34"> <circle cx="16" cy="16" r="15.9155" class="progress-bar__background"/> <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar"/></svg><strong class="product-amt">'+numberofProducts+'</strong> <span class="total-items">Total Items</span></div>';
  
  	if ($('.pagination-countdown').length == 0) {
 		$(productCountdown).appendTo('.asc-prduct-holder');
    }
  	
  	var strokeDashOffsetValue;
  
  	$(window).scroll(function () {
   
          if ($(window).scrollTop() == 0) {
			var strokeDashOffsetValue = 100;
          }
      	 
          if ($(window).scrollTop() !== 0) {
			var strokeDashOffsetValue = 102 - $(window).scrollTop() / ($('.asc-prduct-holder').height() / 100);
          }   
          
		   var progressBar = $(".js-progress-bar");
		   progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
      
	 });
  
    $(window).scroll(function () {
		if (95 - $(window).scrollTop() / ($('.asc-prduct-holder').height() / 100) < -4) {
			$('.pagination-countdown').toggleClass('hide-pc', true);
		}
		if (95 - $(window).scrollTop() / ($('.asc-prduct-holder').height() / 100) > -4) {
			$('.pagination-countdown').toggleClass('hide-pc', false);
		}
	 });
  
     $(window).on("load resize scroll",function(e){
     	if ($(window).width() < 1600) {
			if (95 - $(window).scrollTop() / ($('.asc-prduct-holder').height() / 100) < 93.8) {
				$('.pagination-countdown').toggleClass('stick-pc', false);
			}
			if (95 - $(window).scrollTop() / ($('.asc-prduct-holder').height() / 100) > 93.8) {
				$('.pagination-countdown').toggleClass('stick-pc', true);
			}
          }
     });
}

function lazyLoad() {
    
  if ($('.pagination-countdown').length == 1) {
   	//if ($('div.mar-pagination-section .mar-pagination>li.current span').is(":visible")) {
	   $('.mar-pagination-section .mar-pagination>li:last-child a').unbind().click();
   	  //}
    }
 
  /**
   
   if ($('div.mar-pagination-section .mar-pagination>li.current span').is(":visible")) {
		$('.mar-pagination-section .mar-pagination>li:last-child a').click();
   } **/
}
  
var MutationObserver=window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

var btnTarget = document.querySelector('.main-content-wrapper .mar-plp-header-title-sort'); 
var btnTarget2 = document.querySelector('.asc-plp-filters');  
//^select parent container^
   var btnObserver = new MutationObserver(function(mutations) {
       mutations.forEach(function(mutation) { 
           if(mutation.type == 'childList') { 
             if(mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0){
 				productCountdown();
        		lazyLoad();
             }
           }
       });
   });
btnObserver.observe(btnTarget,{attributes: true, characterData:true, childList: true, subtree:true});
btnObserver.observe(btnTarget2,{attributes: true, characterData:true, childList: true, subtree:true});
  
  //

setTimeout(function(){
	$(document).ready(function(){
		productCountdown();
        lazyLoad();
	});
}, 500);

</script>