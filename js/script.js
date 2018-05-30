$(document).ready(function() {

	$('#addItem').on('click', addItem); 
	$('#todos').on('change', '.completeItem', completeItem);
	$('#newTodo').on('keypress', function(e){
		if(e.which === 13) { 
			addItem();
			e.preventDefault();
 		}	
	});
 	
	function addItem(){
		var newTodoText = $('#newTodo').val();
		$('#todos').append('<li><input class="completeItem" type="checkbox">' + newTodoText + '</li>');
		$('#newTodo').val("");
		}


		function removeItem(){
			$(this).parent().remove();
		}

		function completeItem(){
			$(this).parent().toggleClass('done');
		}
});
	
	

