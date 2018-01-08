GA_TRACE_CODE = "UA-110096492-2";


var _local_debug = true;

if(_local_debug == false){
  CSS_URL = "https://localhost/GA-project/config/Costco_GA.css";
  LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
  
  //Costco_GA.js 直接加入在網頁head上
  console.log("[LOCAL TEST MODE]");
}
else {
  CSS_URL = "https://medo972283.github.io/GA-project/config/Costco_GA.css";
  LIB_URL = "https://medo972283.github.io/GA-project/ga_inject_lib.js";
  
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
/*  ga_mouse_over_event("#subsub_menu0","SubSub_Menu_Hover");
  ga_mouse_over_event("#subsub_menu1","SubSub_Menu_Hover");
  ga_mouse_over_event("#subsub_menu2","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu3","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu4","SubSub_Menu_Hover");		
  ga_mouse_over_event("#subsub_menu5","SubSub_Menu_Hover");		*/
	

	
 
	
//首頁或其他共通功能
      
    //標籤LOGO
    //標籤LOGO點擊
    ga_mouse_click_event('#siteLogoContainer','Logo_siteLogoContainer_Click')
    //標籤LOGO滑動
    ga_mouse_over_event('#siteLogoContainer','Logo_siteLogoContainer_Hover')
       
    //首頁橫幅廣告
    //首頁橫幅廣告點擊
    ga_mouse_click_event('.lazyOwl.js-responsive-carousel-image','Home_Banner_lazyOwl_Click')
    //首頁橫幅廣告滑動
    ga_mouse_over_event('.lazyOwl.js-responsive-carousel-image','Home_Banner_lazyOwl_Hover')
    //首頁橫幅廣告右箭頭紐點擊
    ga_mouse_click_event('.owl-next','Good_Information_Simple_Left_owl-next_Click')
    //首頁橫幅廣告左箭頭紐點擊
    ga_mouse_click_event('.owl-prev','Good_Information_Simple_Right_owl-prev_Click')	
    
    //首頁大標
    //首頁大標點擊
    ga_mouse_click_event('#FEATUREDPRODUCTSTitle','Home_Title_FEATUREDPRODUCTSTitle_Click')
    ga_mouse_click_event('#BuyerPickTitle','Home_Title_BuyerPickTitle_Click')
    ga_mouse_click_event('#WHATSNEWTitle','Home_Title_WHATSNEWTitle_Click')
    //首頁大標滑動
    ga_mouse_over_event('#FEATUREDPRODUCTSTitle','Home_Title_FEATUREDPRODUCTSTitle_Hover')
    ga_mouse_over_event('#BuyerPickTitle','Home_Title_BuyerPickTitle_Hover')
    ga_mouse_over_event('#WHATSNEWTitle','Home_Title_WHATSNEWTitle_Hover')
        
    //首頁活動區塊
    //首頁活動(優惠商品、新品推薦......等等)點擊
    ga_mouse_click_event('.col-xs-6.col-sm-3.col-md-3','Event_Block_col-xs-6.col-sm-3.col-md-3_Click')
    //首頁活動(優惠商品、新品推薦......等等)滑動
    ga_mouse_over_event('.col-xs-6.col-sm-3.col-md-3','Event_Block_col-xs-6.col-sm-3.col-md-3_Hover')
        
    //搜尋框
    //搜尋框(普通)，滑動
    ga_mouse_over_event('#js-site-search-input','Search_Box_Input_js-site-search-input_Hover')
    //搜尋框(行動)，滑動    
    ga_mouse_over_event('#searchBoxContainerMobile','Search_Box_Input_Mobile_js-site-search-input_Hover') 

    //下拉式選單
    var len_option = $('#sortOptions1').find('option').length;
    for(var i=0;i<len_option;i++){
  	  ga_mouse_over_event("#comboBox_option"+i,"ComboBox_Item_Hover");
	  ga_mouse_click_event("#comboBox_option"+i,"ComboBox_Item_Click");
    };
    ga_mouse_click_event("#sortOptions1","ComboBox_Click");
	
    //麵包屑導航
    var len_breadcrumb = $('.breadcrumb').find('li').length;
    for(var i=0;i<len_breadcrumb;i++){
	  ga_mouse_over_event('#breadcrumb_item'+i, 'Breadcrumb_Item_Hover'); 
  	  ga_mouse_click_event('#breadcrumb_item'+i, 'Breadcrumb_Item_Click'); 
    };	
	
    //-----------------------------
        
        
    //自有品牌
    
    //認識好市多說明頁面Label
    //認識好市多說明頁面Label滑動
    ga_mouse_over_event('.sidebar1','Kirkland_Signature_Information_Sidebar1_Hover')
    ga_mouse_over_event('.sidebar2','Kirkland_Signature_Information_Sidebar2_Hover') 
    ga_mouse_over_event('.sidebar3','Kirkland_Signature_Information_Sidebar3_Hover')
    ga_mouse_over_event('.sidebar4','Kirkland_Signature_Information_Sidebar4_Hover')
    ga_mouse_over_event('.sidebar5','Kirkland_Signature_Information_Sidebar5_Hover')
    ga_mouse_over_event('.sidebar6','Kirkland_Signature_Information_Sidebar6_Hover')
    ga_mouse_over_event('.sidebar7','Kirkland_Signature_Information_Sidebar7_Hover')
    ga_mouse_over_event('.sidebar8','Kirkland_Signature_Information_Sidebar8_Hover')
    //認識好市多說明頁面Label點擊
    ga_mouse_click_event('.sidebar1','Kirkland_Signature_Information_Sidebar1_Click')
    ga_mouse_click_event('.sidebar2','Kirkland_Signature_Information_Sidebar2_Click') 
    ga_mouse_click_event('.sidebar3','Kirkland_Signature_Information_Sidebar3_Click')
    ga_mouse_click_event('.sidebar4','Kirkland_Signature_Information_Sidebar4_Click')
    ga_mouse_click_event('.sidebar5','Kirkland_Signature_Information_Sidebar5_Click')
    ga_mouse_click_event('.sidebar6','Kirkland_Signature_Information_Sidebar6_Click')
    ga_mouse_click_event('.sidebar7','Kirkland_Signature_Information_Sidebar7_Click')
    ga_mouse_click_event('.sidebar8','Kirkland_Signature_Information_Sidebar8_Click')
    
    //自有品牌介紹圖片滑動
    //作廢，會產生衝突1.7.19:02
    //ga_mouse_over_event('.content','Kirkland_Signature_Information_Hover')
        
    //-----------------------------
    
        
    //商品
        
    //商品介紹資訊區(簡式，無比較產品按鈕)
    //商品介紹資訊區塊(簡式，無比較產品按鈕)滑動
    ga_mouse_over_event('.item.product-item ','Good_Information_Simple_.item.product-item_Hover')
    //商品介紹資訊區塊(簡式，無比較產品按鈕)點擊
    ga_mouse_click_event('.item.product-item' ,'Good_Information_Simple_.item.product-item_Click')	
    
    //商品介紹資訊區(詳式，具比較產品按鈕)
    //商品介紹資訊區塊(詳式，具比較產品按鈕)滑動
    ga_mouse_over_event('.product-item.vline','Good_Information_Normal_product-item.vline_Hover')
    //商品介紹資訊圖片(詳式，具比較產品按鈕)點擊
    ga_mouse_click_event('.product-image','Good_Information_Picture_Normal_product-image_Click')
    //商品介紹資訊文字(詳式，具比較產品按鈕)點擊
    ga_mouse_click_event('.product-list-details','Good_Information_Text_Normal_product-list-details_Click')
    //商品介紹資訊比較產品按鈕(詳式，具比較產品按鈕)點擊
    //  ga_mouse_click_event('.__label','Good_Information_Text_Porduct_Compare_product-compare-checkbox__label_Click')
    ga_mouse_click_event('.checkbox-label','Good_Information_Porduct_Compare_Click')
			
    //商品介紹資訊區塊(詳式，具比較產品按鈕)點擊，作廢
    //ga_mouse_click_event('.product-item.vline','Good_Information_Normal_product-item.vline_Click')
        
    
    
        
    //商品篩選標籤
    //商品篩選標籤滑動
    ga_mouse_over_event('.facet-label','Good_facet-label_Hover')
    //商品篩選標籤點擊
    ga_mouse_click_event('.facet-label','Good_facet-label_Click')
        
    //商品分類(第二層標籤)的頁面相關
    //商品分類(第二層標籤)置中介紹的圖片，滑動
    ga_mouse_over_event('.js-responsive-image','Middle_AdImage_js-responsive-image_Hover')
    //商品分類(第二層標籤)置中介紹的圖片，點擊
    ga_mouse_click_event('.js-responsive-image','Middle_AdImage_js-responsive-image_Click')
        
    //商品分類(第二層標籤)產品類別，滑動
    ga_mouse_over_event('.category-node','iddle_AdImage_category-node_Hover')
    //商品分類(第二層標籤)產品類別，點擊
    ga_mouse_click_event('.category-node','Middle_AdImage_category-node_Click')
        
    
    //商品推薦介紹頁面切換點擊(灰色小點)
    ga_mouse_click_event('.owl-page','Good_Information_Page_Change_owl-page_Click')
  
    //比較產品
    ga_mouse_click_event('.product-compare-widget__compare-btn.btn.btn-primary.js-product-compare-widget-button','Compare_Button_Click');
    ga_mouse_over_event('.product-compare-widget__compare-btn.btn.btn-primary.js-product-compare-widget-button','Compare_Button_Hover');
         
    //-----------------------------  	
	
	
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
*/
    //主選單添加id	
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
    
    //下拉式選單添加id
    var len_option = $('#sortOptions1').find('option').length;
    for(var i=0;i<len_option;i++){
        $('#sortOptions1').find('option').eq(i).attr('id','comboBox_option'+i);
    };	
    
    //麵包屑導航添加id
    var len_breadcrumb = $('.breadcrumb').find('li').length;
    for(var i=0;i<len_breadcrumb;i++){
    	$('.breadcrumb').find('li').eq(i).attr('id','breadcrumb_item'+i);
    };
});




  
$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});

