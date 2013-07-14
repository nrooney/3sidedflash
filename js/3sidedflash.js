jQuery(document).ready(function(){
    
    $('.kanji').live("click", function(){
    	$(this).parent().addClass('show-kana');
    	$(this).parent().removeClass('show-kanji');
    	
    	$('.kana').click(function(){
    		$(this).parent().addClass('show-english');
    		$(this).parent().removeClass('show-kana');
    		
    		$('.english').click(function(){
    			$(this).parent().addClass('show-kanji');
    			$(this).parent().removeClass('show-english');
    		});
    	});
    });
    
});