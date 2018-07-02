document.addEventListener('DOMContentLoaded', function(){
	let div = document.createElement('div');
	div.className = 'header-container';

	let h1 = document.createElement('h1');
	let h1Text = document.createTextNode('This is an h1');
	h1.appendChild(h1Text);
	div.appendChild(h1);
	h1.className = 'h1';

	let h2 = document.createElement('h2');
	let h2Text = document.createTextNode('This is an h2');
	h2.appendChild(h2Text);
	div.appendChild(h2);
	h2.className = 'h2';
	
	let h3 = document.createElement('h3');
	let h3Text = document.createTextNode('This is an h3');
	h3.appendChild(h3Text);
	div.appendChild(h3);
	h3.className = 'h3';
	
	let h4 = document.createElement('h4');
	let h4Text = document.createTextNode('This is an h4');
	h4.appendChild(h4Text);
	div.appendChild(h4);
	h4.className = 'h4';
	
	let h5 = document.createElement('h5');
	let h5Text = document.createTextNode('This is an h5');
	h5.appendChild(h5Text);
	div.appendChild(h5);
	h5.className = 'h5';
	
	let h6 = document.createElement('h6');
	let h6Text = document.createTextNode('This is an h6');
	h6.appendChild(h6Text);
	div.appendChild(h6);
	h6.className = 'h6';

	let button = document.createElement('button');
	let btnText = document.createTextNode('Click to add new list item');
	button.appendChild(btnText);
	div.appendChild(button);
	button.className = 'addItem'

	let ul = document.createElement('ul');
	div.appendChild(ul);

	let i = 1;
	button.addEventListener('click', function(){
		let li = document.createElement('li');
		li.innerText = ('This is list item ' + i);
		li.style.color = getRandomColor();
		ul.appendChild(li);
		i++;
		
		li.addEventListener('dblclick', function(){
			ul.removeChild(li);
		});

	})
	
	document.body.appendChild(div);
	
	//added random color selector instead of just 8 colors
	function getRandomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
	
	h1.addEventListener('click', function(){
		h1.style.color = getRandomColor();
		}
	)
	h2.addEventListener('click', function(){
		h2.style.color = getRandomColor();
		}
	)
	h3.addEventListener('click', function(){
		h3.style.color = getRandomColor();
		}
	)
	h4.addEventListener('click', function(){
		h4.style.color = getRandomColor();
		}
	)
	h5.addEventListener('click', function(){
		h5.style.color = getRandomColor();
		}
	)
	h6.addEventListener('click', function(){
		h6.style.color = getRandomColor();
		}
	)

})

