function lookAround()
{
	var x_ran = Math.random() * 34;
	var y_ran = 55 + (Math.random() * 50);
	var new_x_left = 66 + x_ran;
	var new_x_right = 136 + x_ran;
	
	$('#left-eye').css('left', new_x_left).css('top', y_ran);
	$('#right-eye').css('left', new_x_right).css('top', y_ran);
	
	setTimeout(lookAround, 1000 + (Math.random() * 4000));
}