$(document).ready(function(){


	$('tr.header')
		.click(function(){
			$(this).siblings('.child-'+this.id).toggle('fast');
		});
	$('tr[class^=child]').hide().children('tr');
});	
