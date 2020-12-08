var a="";

$(document).ready(function(){
  $("#btn").click(function(){
  	if($("#data").val()=='')
  		{alert("Input the task");}
  	else{
    // $(".Todo").hide();
    a = $("#data").val(); 
    
    $('#data').val('');
      $("#todo").append("<li> <input type='checkbox' id='check'><span>"+a+"</span><input type='button' value='Edit' id='edit'><input type='button' value='delete' id='del'></li>");
  $("#todo").on('click',"#edit",function(){
  	$(this).parent().find('span').prop('contenteditable','true').focus();
  });

 $("#todo").on('click',"#del",function(){
  	$(this).parent().remove();
  });
}
  });


 $("#todo").on('click',"#check",function(){
 	 $(this).parent().hide();
 	 	var c=$(this).parent().text();
  	// $(this).parent().appendTo("#com")
  	 $("#com").append("<li> <input type='checkbox' id='check1' checked>"+c+"</li>");


  });
 $("#com").on('click',"#check1",function(){
 	$(this).parent().hide();
 		var b=$(this).parent().text();
  	// $(this).parent().appendTo("#todo")
  	 $("#todo").append("<li> <input type='checkbox' id='check'><span>"+b+"</span><input type='button' value='Edit' id='edit'><input type='button' value='delete' id='del'></li>");
  	

  });
});



