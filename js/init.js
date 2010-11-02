$(function(){

	$('#eddie').accordion();
	$('#menu').accordion();
	$('#tabs').tabs();
	$('#dialog').dialog({
				autoOpen:false
				});
	$('#dButton').button();
	$('#dButtonc').button();
				
	$('#dButton').click(function(){
				$('#dialog').dialog('open');
				return false;
				});

	$('#dButtonc').click(function(){
				$('#dialog').dialog('close');
				return false;
				});
});