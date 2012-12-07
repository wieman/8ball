	(function($) {
	$.fn.eightball = function() {
		var ballnr, above, under, current, zindex, currentzindex, changeside, i, randomAns;
		ballnr = $('.eightball img').length;
		above = 1;
		under = 0;
		zindex = parseInt($('.eightball').css('z-index')),
		currentzindex = zindex;
		
		randomAns = function() {
			var random = Math.floor(Math.random()*(10-1)+1),
			ans;
			switch(random) {
			case 1:
				ans = '<p> It is certain </p>';
				return ans;
			break;
			case 2:
				ans = '<p> It is decidedly so </p>';
				return ans;
			break;
			case 3:
				ans = '<p> Without a doubt </p>';
				return ans;
			break;
			case 4:
				ans = '<p> Yes it´s definitely </p>';
				return ans;
			break;
			case 5:
				ans = '<p> You may rely on it </p>';
				return ans;
			break;
			case 6:
				ans = '<p> As I see it, yes </p>';
				return ans;
			break;
			case 7:
				ans = '<p> Most likely </p>';
				return ans;
			break;
			case 8:
				ans = '<p> Outlook good </p>';
				return ans;
			break;
			case 9:
				ans = '<p> Yes </p>';
				return ans;
			break;
			case 10:
				ans = '<p> Signs point to yes </p>';
				return ans;
			break;
			case 11:
				ans = '<p> Reply hazy, try again </p>';
				return ans;
			break;
			case 12:
				ans = '<p> Ask again later </p>';
				return ans;
			break;
			case 13:
				ans = '<p> Better not tell you now </p>';
				return ans;
			break;
			case 14:
				ans = '<p> Cannot predict now </p>';
				return ans;
			break;
			case 15:
				ans = '<p> Concentrate and ask again </p>';
				return ans;
			break;
			case 16:
				ans = '<p> Don´t count on it </p>';
				return ans;
			break;
			case 17:
				ans = '<p> My reply is no </p>';
				return ans;
			break;
			case 18:
				ans = '<p> My sources say no </p>';
				return ans;
			break;
			case 19:
				ans = '<p> Outlook not so good </p>';
				return ans;
			break;
			case 20:
				ans = '<p> Very doubtful </p>';
				return ans;
			break;
			}
		}
		
		changeside = function() {
			$('.text p').replaceWith('<p> </p>');
			$('.eightball img')
			.eq(above)
			.css('z-index', currentzindex++)
			.click(function() {
				$('.eightball img')
				.eq(above)
				.fadeOut( 'slow', function() {
					$(this)
					.fadeIn(0)
					$(this).prev().css('z-index', currentzindex++);
					$('.text p').replaceWith(randomAns())
					$('.text').css('z-index', currentzindex++);
					
				});
			});
			
		};
		$('.text')
			.css('z-index', currentzindex++);
		
		$('.eightball img').each(function() {
		$(this)
			.attr('src', $(this).attr('src1'))
			.css('z-index', currentzindex++);
		})
		.click(function() {changeside();});
	}}) (jQuery);