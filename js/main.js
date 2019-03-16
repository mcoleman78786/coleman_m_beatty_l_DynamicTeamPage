
let img 		= document.querySelector("#photo"),
	lucbutton 	= document.querySelector("#lucBio"),
	malbutton 	= document.querySelector("#malBio"),
	lucContent 	= ["Hello! I’m Lucas Beatty and I am a 24-year-old male Canadian from the small town of Kenilworth Ontario and I’m also a right arm below elbow amputee since birth. Currently attending Fanshawe’s Multi Midea program to learn how to work with media to make bigger and better websites and create interesting video content on the internet of things. I originally got into this type of thing though my love of animation and seeking something a little more stable than the animation field but something that would still supplement my animation background. I’ve originally got into cartooning and animation because of my Dad and I love of The Loony Toons and Star Wars that only grew as I got older creating a true love of sci-fi and every cartoon I could get my eyes on. Then I was introduced to my first anime Digimon I fell in love with the idea of creating my own stories in the sci-fi worlds of Star Wars and Digimon where life could be anything I could have ever wanted. For years these where the worlds envisioned and wanted to be apart of; then one day my much older cousin would show me a world that was even more fantastic to be one that would root in me deeper then my parents would ever know Warcraft two Tides of Darkness. This world would honestly change my life not only did it kick me off into the world of High Fantasy but then it would have me fall in love with a storyline and art style that I still follow 20 years later. Basically, I'm a super geek that grew up in the perfect time to be so in the time of Superhero and High Fantasy."],
	malContent 	= ["My name is Mallory Coleman and I'm 20 years old. I'm a canadian girl born from a small town of Listowel Ontario. I'm currently enrolled in Interactive Media Design at Fanshawe College at London Ontario. I'm really enjoying my program as it is my first year. I spend a lot of my time with friends, family, and or doing homework whenever free time is possible. I also really enjoy going to the gym because I care about physical fitness. My favorite food would be anything with cheese or cheese sticks."],
	paragraph 	= document.querySelector("#bioInfo"),
	bck 		= document.querySelector("#bck"),
	title 		= document.querySelector('#bioTitle');

function imgChange() {
	paragraph.innerHTML = '';
	paragraph.innerHTML = lucContent;
	title.innerHTML = "Lucas Beatty";
	if (img.classList.contains('malAnimation')) {
	img.classList.remove("malAnimation");
	img.classList.add('lucAnimation');
	img.src = "images/headshot_luc.png";
	}
	else {
		img.classList.add("lucAnimation");
		img.src = "images/headshot_luc.png";

	}

	if (bck.classList.contains('malBck')) {
		bck.classList.remove('malBck');
		bck.classList.add('lucBck');
	}

	else {
		bck.classList.add('lucBck');
	}
	title.style.color = 'white';
}

lucbutton.addEventListener("click", imgChange);

function imgChange2() {
	paragraph.innerHTML = '';
	paragraph.innerHTML = malContent;
	title.innerHTML = "Mallory Coleman";
	if (img.classList.contains('lucAnimation')) {
	img.classList.remove("lucAnimation");
	img.classList.add('malAnimation');
	img.src = "images/headshot_mal.png";
	}
	else {
		img.classList.add('malAnimation');
		img.src = "images/headshot_mal.png";
	}

	if (bck.classList.contains('lucBck')) {
		bck.classList.remove('lucBck');
		bck.classList.add('malBck');
	}

	else {
		bck.classList.add('malBck');
	}
	title.style.color = 'white';
}
		malbutton.addEventListener("click", imgChange2);
