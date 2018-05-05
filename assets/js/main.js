			<script type="text/javascript">
				function googleTranslateElementInit() {
					new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
				}
		        function openbookingpage(){
		            //$(".language-shown-hide").show();
		            $(".booking-page").show();
		            $(".booking-shown-hide").css({"opacity":"1","overflow": "unset"});
		            setTimeout(function(){ 
		                navEl.hide();
		            }, 500);
		        }
		        function closebookingpage(){
		            $(".booking-shown-hide").css({"opacity":"0","overflow": "hidden"})
		            $(".booking-page").hide();
		        }
			</script>
