$(document).ready(function() {
	var $line=$('div.public-third ul>li.line-picture');
	$line.mouseover(function(event) {
	var $bg=$(this).css('background');
	var $pic=$('<div id="newpic"></div>');
	$('body').append($pic);
	$pic.css({
		'width':$(this).width()*2+ 'px',
		'height':$(this).height()*2+ 'px',
		'top':event.pageY+30+'px',
		'left':event.pageX+30+'px',
		'position':'absolute',
		'background':$bg
	});
	$pic.show('slow');
	}).mouseout(function(event) {
		$('#newpic').remove();
	});
});