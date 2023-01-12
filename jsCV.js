function randomcol (){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}
async function randomuser(){
	const response = await fetch('https://randomuser.me/api/');
	const data = await response.json();
	const user = data.results[0];
	console.log(user);
	displayuser(user);
}
randomuser();
function displayuser(data){
	document.getElementById('ponemail').addEventListener("click", function(){
		document.getElementById('casilla').innerHTML= "My E-mail is: " + data.email;
	})
	document.getElementById('nom').addEventListener("click", function(){
		document.getElementById('casilla').innerHTML="Hi my name is " + data.name.first +" "+ data.name.last + " ("+data.dob.age+" Yrs)";
	})
	document.getElementById('ponenumero').addEventListener("click", function(){
		document.getElementById('casilla').innerHTML= "My cellphone number is: " + data.cell;
	})
	document.getElementById('image').setAttribute('src', data.picture.large)
	document.getElementById('loc').addEventListener('click', function(){
		document.getElementById('casilla').innerHTML = "I live in " + data.location.city + ", " + data.location.country;
	})
}


document.getElementById('botonh2').addEventListener("click", function () {
	document.getElementById('botonh2').style.backgroundColor = "red";
	document.body.style.backgroundColor = "purple";
	}) 

document.getElementById('cambiocol').addEventListener("click", function(){
	document.body.style.backgroundColor = randomcol();
})

document.getElementById('sacar').addEventListener("click", function(){
	document.getElementById('curri').style.display = "none";
})

document.getElementById('poner').addEventListener("click", function(){
	document.getElementById('curri').style.display ="block";
})





