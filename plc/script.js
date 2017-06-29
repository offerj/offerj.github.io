	
	var locale = window.location.hash.substr(1);
	
	
	
	$( document ).ready(function() {

		if(locale=="USD"){
		$("section div span").addClass("USD");
		}

		$("#showhide").bind("click",function(){
			
			
			if(parseInt($("#thisweek").css("height"))==310){
			
				$("#thisweek").animate({height: 650}, 500 );
				$("#showhide span").attr("class","hide");
				
			} else {
			
				$("#thisweek").animate({height: 310}, 500 );
				$("#showhide span").attr("class","show");
			
			
			}
			
			
			
		});


	});