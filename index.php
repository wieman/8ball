<!doctype html>
<html lang='en' class='no-js'>
<head>
<meta charset='utf-8' />
<title>Demo</title>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="eightball.js" type="text/javascript"></script>
<style type="text/css">
.eightball{
	width: 339px; 
	height: 338px; 
	position: relative; 
	z-index: 10;
}
img{
		margin: 0;
		padding: 0; 
		position: absolute;
		width: 339px; 
		height: 338px;
}
.text{
	width: 120px;
	height: 90px; 
	color: #173397; 
	position: relative; 
	top: 130px; 
	left: 110px; 
	z-index: 20; 
	text-align: center; 
	font-size: 26px;
}
</style>
</head>

<script>
$(document).ready(function(){
$('.eightball').eightball();
});
</script>

<div id='test' class='fade'>
<p>Magic 8ball plugin</p>

<div class='eightball'>
<img src1='img/m8_ball.png' />
<img src1='img/8_ball.png' />
<div class='text'><p></p></div>
</div>

</div>