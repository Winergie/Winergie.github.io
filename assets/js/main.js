/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

function ChangeInputs()
   {
	var boxes = document.getElementsByClassName('verwarming');
    var checked = [];
    for (var i = 0; boxes[i]; ++i) {
        if (boxes[i].checked) {
            checked.push(boxes[i].value);
        }
    }
    var checkedStr = checked.join(' ');
    document.getElementById('verwarmingsbronnen').value = checkedStr;

	var boxes2 = document.getElementsByClassName('interesse');
    var checked2 = [];
    for (var i2 = 0; boxes2[i2]; ++i2) {
        if (boxes2[i2].checked) {
            checked2.push(boxes2[i2].value);
        }
    }
    var checkedStr2 = checked2.join(' ');
    document.getElementById('soort_interesse').value = checkedStr2;   }

   window.addEventListener("load", function () {
     const form = document.querySelector("form");

     form.addEventListener("submit", function ( event ) {
       event.preventDefault();
	   ChangeInputs();
	   const form = document.querySelector("form");
       sendData();
     } );

     function sendData() {
       const FD = new FormData(form);

       let url = form.dataset.gfUrl;
       for(let [key, value] of FD) {
         url = url.replace(key, value);
       }

       let opts = {
          method: "POST",
          mode: "no-cors",
          redirect: "follow",
          referrer: "no-referrer"
        }

        return fetch(url, opts).then(alert('Uw offerte is aangevraagd.')).catch((e) => {alert('Error:', e);});
     }
   } );

(function($) {
	$(function() {
		$("#header").load("/header.html");
		$("#footer").load("/footer.html");
		$("#menu").load("/navbar.html");
	});

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);
