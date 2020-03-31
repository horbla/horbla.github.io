function changeImage() {
	var image = document.getElementById('kuva');
	var image2 = document.getElementById('kuva2');
	
	if (image.src.match("full")) { 
			image.src = "./half.png";
			image2.src = "./juo.jpg";
		console.log(1);
	
	}else if (image.src.match("half")) { 
			image.src = "./empty.png";
			image2.src = "./hana.jpg";
			
		console.log(2);
				
	}else {	
			image.src = "./full.png";  
			image2.src = "./juo.jpg";
		console.log(3); 
		}
}
function aika() {
	var d = new Date();
	var m = d.getMinutes();
	document.getElementById("viritys").innerHTML=m;
	check();
}

function miinus() {
	var v = document.getElementById("viritys").innerHTML;
	v--; document.getElementById("viritys").innerHTML=v;
	check();
}

function plus() {
	var v = document.getElementById("viritys").innerHTML;
	v++; document.getElementById("viritys").innerHTML=v;
	check();
}

function check() {
	var m = document.getElementById("viritys").innerHTML;
	if( ( m % 2 ) == 0 ){
		document.getElementById("tunti").innerHTML="Arvo on parillinen";
	}else{
		document.getElementById("tunti").innerHTML="Arvo on pariton";
	}
}