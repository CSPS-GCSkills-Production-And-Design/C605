//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		//console.log("Interactions:systemReady");
	}

	/* is called on every page load, great for adding custom code to all pages*/
	 function pageLoaded() {
	
	
	// 	//-----------------------------------------------------------------------------------------------------
	// 	//    Jump to top of page when page loaded
	// 	//    Author: Unknown
	// 	//-----------------------------------------------------------------------------------------------------
	// 	window.scrollTo(0, 0);
			
		
	// 	//-----------------------------------------------------------------------------------------------------
	// 	//    Scripts for accessbility checking
	// 	//    Author: Various
	// 	//-----------------------------------------------------------------------------------------------------
		
	// 	// Check page to have only one h1 tag -----------------------------------------------------------------
	// 	if($("h1").length > 1)
	// 	{
	// 		$("h1").each(function(index)
	// 		{
	// 			$("h1").eq(index).addClass("accessibility_error");
	// 		});
			
	// 		$("h1").eq(0).removeClass("accessibility_error");
	// 	}		
		
		
		
	// 	// --------------------------------------------------------
	// 	//
	// 	// 	Paystub nav
	// 	//	Adds navigation code to paystubs
	// 	//
	// 	// --------------------------------------------------------
		
	// 	if($(".paystub").length !== 0) 
	// 	{
	// 		var counter = 0;
	// 		if($(".table"+counter).length !== 0) {
	// 		 $(".table"+counter).each(function(){
	// 			$("figure").each(function(){	
	// 				$(".table"+counter+" figure").addClass("figure"+counter);
	// 				$(".table"+counter+" .paystubnav").addClass("navCtl"+counter);
	// 				$(".table"+counter+" #stubback").addClass("stubback"+counter);
	// 				$(".table"+counter+" #stubnext").addClass("stubnext"+counter);
	// 				makeCtls(counter);
	// 				counter++;
	// 			 })	
	// 			})
	// 		}
		
	// 	}
	// 	function makeCtls(index)
	// 	{
	// 		var stubRows = $(".figure"+index).find(".rowPadding");
	// 		var navBtns = $(".navCtl"+index);
	// 		var nextBtn = $(".stubnext"+index);
	// 		var backBtn = $(".stubback"+index);
	// 		var rowCount = stubRows.length - 1;	
		
	// 		var rowIndex = 0;
	// 		var fRowNo = 0;
				
	// 			//Display first arrow
	// 			stubRows.each(function() {
	// 				var fRow = stubRows.eq(rowIndex).find(".arrow_right");
	// 				if(fRow.length > 0) {
	// 					fRowNo = rowIndex;
	// 					displayInfo(stubRows, fRowNo);
	// 				}
	// 				else{
	// 					rowIndex++;
	// 				}
	// 			});
				
	// 			nextBtn.click(function() 
	// 				{
	// 				enableBtn(backBtn);
				
	// 				if(rowIndex < rowCount) {
	// 					//increment to next row	
	// 					rowIndex++;
	// 					focusHighlight(stubRows, rowIndex);
						
	// 					//display arrow		
	// 					displayInfo(stubRows, rowIndex);
						
	// 					//if last row
	// 					if(rowIndex === rowCount) {
	// 						disableBtn(nextBtn);
	// 					}
	// 				}
	// 			});
	// 			backBtn.click(function() {
	// 				enableBtn(nextBtn);
	// 				if(rowIndex <= rowCount) {
	// 					//decrement to previous row	
	// 					rowIndex--;
	// 					focusHighlight(stubRows, rowIndex);
						
	// 					//display arrow
	// 					displayInfo(stubRows, rowIndex);
				
	// 					//if first row
	// 					if(rowIndex === fRowNo) {
	// 						disableBtn(backBtn);
	// 					}
	// 				}
	// 			});
			
				
	// 			//Accessibility
				
	// 			$(".navCtl"+index).find('.disabled').attr({
	// 				'aria-selected': false,
	// 				'tabindex': -1
	// 			});
	// 			navBtns.on('keydown', function (e) {switch (e.keyCode) {
	// 					case 38: // Up
	// 						e.view.event.preventDefault();
	// 						enableBtn(nextBtn);

	// 						if(rowIndex <= rowCount) {
	// 							//decrement to previous row	
	// 							rowIndex--;
	// 							focusHighlight(stubRows, rowIndex);
	
	// 							//display arrow
	// 							displayInfo(stubRows, rowIndex);
	
	// 							//if first row
	// 							if(rowIndex === fRowNo) {
	// 								disableBtn(backBtn);
	// 							}
	// 						}
	// 						break;
	// 					case 40: //Down
	// 					e.view.event.preventDefault();
	// 						enableBtn(backBtn);
	// 						if(rowIndex < rowCount) {
	// 							//increment to next row	
	// 							rowIndex++;
	// 							focusHighlight(stubRows, rowIndex);
	
	// 							//display arrow		
	// 							displayInfo(stubRows, rowIndex);
	
	// 							//if last row
	// 							if(rowIndex === rowCount) {
	// 								disableBtn(nextBtn);
	// 							}
	// 						}
	// 					break;
						
	// 				}});
	// 	}
		
	// 	function focusHighlight (obj, index) {
	// 		var allRows = obj.find(".highlightable");
	// 		var currentRow = obj.eq(index).find(".highlightable");
	// 		obj.attr('aria-selected', false);
	// 		obj.attr('tabindex', -1);
	// 		obj.eq(index).attr('aria-selected', true);
	// 		obj.eq(index).attr('tabindex', 0);
	// 		allRows.removeClass("highlight");
	// 		currentRow.addClass("highlight");
	// 		currentRow.focus();
	// 	}
		
	// 	function displayInfo (obj, index) {
			
	// 		var allArrows = obj.find(".arrow_right");
	// 		var currentArrow = obj.eq(index).find(".arrow_right");
			
	// 		//Move relative to focusRow
	// 		var rowHeight = obj.eq(index).find(".highlight").height() / 2 ;
	// 		var rowTop = obj.eq(index).find(".highlight").position();
	// 		var boxHeight = obj.eq(index).find(".arrow_right").height() / 2;
	// 		var calculateBoxTop = (rowTop.top - boxHeight) + rowHeight - 35;
	// 		obj.eq(index).find( ".arrow_right" ).css( "top", calculateBoxTop );	
			
			
	// 		allArrows.hide();
	// 		currentArrow.show();
	// 	}
		
		
	// 	function disableBtn (obj) {
	// 		//add a line to truely disable a button AY
	// 		obj.attr('disabled',true);

	// 		obj.addClass("disabled");
	// 		obj.attr({
	// 			'aria-selected': false,
	// 			'tabindex': -1
				
	// 		});
	// 	}
		
	// 	function enableBtn (obj) {
	// 		//add a line to truely disable a button AY
	// 		obj.attr('disabled',false);

	// 		obj.removeClass("disabled");
	// 		obj.attr({
	// 			'aria-selected': true,
	// 			'tabindex': 0
	// 		});
	// 	}
				
	// 	// --------------------------------------------------------
	// 	//
	// 	//	Questionnaire
	// 	//
	// 	// --------------------------------------------------------
		
	// 	//if not 0 then Submit button exists
	// 	if($(".MeD_questionnaire").length !== 0) 
	// 	{
	// 		//make all feedback invisible
	// 		$(".feedback").addClass("invisible");
						
	// 		//handle OneAnswer questions
	// 		$(".MeD_OneAnswer_question").each(function (index)
	// 		{
	// 			$(this).on("click", "input", function() 
	// 			{
	// 				//reset all feedback to invisible for this question
	// 				$(".MeD_OneAnswer_question").eq(index).children(".feedback").addClass("invisible");
					
	// 				//check value of selected radio button
	// 				var selected = $("input[name=Question" +(index+1) +  "]:checked").val();
					
	// 				//remove invisibility from the feedback with matching class
	// 				$(".feedback." + selected).eq(index).removeClass("invisible");	

	// 			});
	// 		});		
	// 	}
		

		
	// 	//header scanning script
	// 	function scanheaders()
	// 	{
	// 		var allheaders = $("h1, h2, h3, h4, h5, h6");
			
			
	// 		for(var i=0; i < allheaders.length -1; i++)
	// 		{
	// 			var headerLevelA = parseInt(allheaders.eq(i).prop("tagName").substring(1,2));
	// 			var headerLevelB = parseInt(allheaders.eq(i+1).prop("tagName").substring(1,2));
				
	// 			if(headerLevelB > (headerLevelA+1))
	// 			{
	// 				console.error("WARNING: HEADER h" + headerLevelB + " AFTER h" + headerLevelA + "!");
	// 				console.error("<h" + headerLevelA + ">" + allheaders.eq(i).html() + "</h" + headerLevelA + ">");
	// 				console.error("<h" + headerLevelB + ">" + allheaders.eq(i+1).html() + "</h" + headerLevelB + ">");
	// 			}
	// 		}
	// 	}
		
	// 	scanheaders();
		
		
	}

	initialize();

});