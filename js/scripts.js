function load() {
	let element = document.querySelector(".row");
	
	let div = document.createElement("div");
	div.classList.add('col-lg-3', 'col-md-6');
	element.appendChild(div);

	let article = document.createElement("article");

	let img = document.createElement("img");
	img.setAttribute("src", "images/mie.jpg");
	article.appendChild(img);

	let section = document.createElement("section");
	let heading = document.createElement("h3");
	let node = document.createTextNode("Indomie");
	heading.appendChild(node);
	section.appendChild(heading);

	let p = document.createElement("p");
	let text = document.createTextNode("indomie goreng pilihan yang dimasak dengan kasih sayang");
	p.appendChild(text);
	section.appendChild(p);

	let hpat = document.createElement("h4");
	let hpattext = document.createTextNode("16.000 idr");
	hpat.appendChild(hpattext);
	section.appendChild(hpat);
	
	article.appendChild(section);
	div.appendChild(article);
}