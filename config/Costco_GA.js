GA_TRACE_CODE = "UA-110079728-3";

var _local_debug = true;

if(_local_debug == false){
  CSS_URL = "https://localhost/GA-project/config/Costco_GA.css";
  LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
  
  //Costco_GA.js 直接加入在網頁head上
  console.log("[LOCAL TEST MODE]");
}
else {
  CSS_URL = "https://f121476536.github.io/GA-project/config/Costco_GA.css";
  LIB_URL = "https://f121476536.github.io/GA-project/ga_inject_lib.js";
  
}

var exec = function(){
  auto_set_user_id();
  
  //腳本
  
  //-------------首頁---------------
  
  //分類選單
  ga_mouse_over_event(".menu-trigger","Classification_Menu_Hover");
  ga_mouse_click_event(".menu-trigger","Classification_Menu_Click");
  //其餘主選單
  ga_mouse_over_event(".nbc-container","Other_Menu_Hover");
  ga_mouse_click_event(".nbc-container","Other_Menu_Click");
  
  
  //一層、二層分類選單
  ga_mouse_over_event(".show-sub-menu","Menu_Hover");
/*  ga_mouse_over_event('.topmenu:contains("所有  影音電視")','Third_Layer_Menu_Hover');
  ga_mouse_over_event('.topmenu:contains("60-69 吋")','Third_Layer_Menu_Hover');
  ga_mouse_over_event('.topmenu:contains("50-59 吋")','Third_Layer_Menu_Hover');				
  ga_mouse_over_event('.topmenu:contains("40-49 吋")','Third_Layer_Menu_Hover');				
  ga_mouse_over_event('.topmenu:contains("39 吋以下")','Third_Layer_Menu_Hover');		
  ga_mouse_over_event('.topmenu:contains("電視壁掛架")','Third_Layer_Menu_Hover');					
*/
  //三層分類選單

  var len_topmenu =  $('#theMenu').find('.topmenu').length; 	
  for(var i=0;i<len_topmenu;i++){
	var len_submenu = $('#top_menu'+i).find('ul').length;
  	for(var k=1;k<len_submenu;k++){
		var len_subsubmenu = $('#top_menu'+i).find('ul').eq(k).find('li').length;
  		for(var z=0;z<len_subsubmenu;z++){
			ga_mouse_over_event("#subsub_menu"+i+k+z,"SubSub_Menu_Hover");
		};	
  	};
  };
	/*
  ga_mouse_over_event("#subsub_menu0","SubSub_Menu_Hover");
  ga_mouse_over_event("#subsub_menu1","SubSub_Menu_Hover");
  ga_mouse_over_event("#subsub_menu2","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu3","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu4","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu5","SubSub_Menu_Hover");		
	*/												
				

}




// --------------------------------------
$(function() {  
 /*   var len =  $('#theMenu').find('.topmenu').length; 
    for(var i=0;i<len;i++){
        $('#theMenu').find('.topmenu').eq(i).attr('id', 'top_menu'+i);    
    };
    
    var len2 = $('#101-2-0').find('li').length;
    for(var i=0;i<len2;i++){
	$('#101-2-0').find('li').eq(i).attr('id','subsub_menu'+i);
    };

    for(var j=0;j<len;j++){
	var len3 = $('#top_menu'+j).find('ul').length;
	for(var i=0;i<len3;i++){
	    $('#top_menu'+j).find('ul').find('li').eq(i).attr('id','sub_menu'+i);
	};
    };
*/	
    var len_topmenu =  $('#theMenu').find('.topmenu').length; 
    for(var i=0;i<len_topmenu;i++){
        $('#theMenu').find('.topmenu').eq(i).attr('id', 'top_menu'+i);
	    
	var len_submenu = $('#top_menu'+i).find('ul').length;
	for(var k=1;k<len_submenu;k++){
	    var len_subsubmenu = $('#top_menu'+i).find('ul').eq(k).find('li').length;
	    for(z=0;z<len_subsubmenu;z++){
	        $('#top_menu'+i).find('ul').eq(k).find('li').eq(z).attr('id', 'subsub_menu'+i+k+z);
	    };
	};
    };
    
	
	

});

  
$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});


