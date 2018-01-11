function affichermiddle()
{
	document.getElementById("centerpart").style.display = "block";
	document.getElementById("afficherbutton").style.display = "none";
}

function recherche()
{
	var searchcontent = document.getElementById("search").value;
	var mots = searchcontent.split(" ");
	for (i = 0; i < mots.length - 1; i++)
	{
		mots[i] = mots[i] + "+";
	}
	var adresse = "";
	adresse = mots.join("");
	document.location.href="https://www.google.fr/#q=" + adresse;
}

setTimeout( function popup()
{
	alert("Vous voulez agrandir la taille de votre penis ? N'attendez plus ! Commandez tout de suite CHEVALOR5000 et gagnez 7cm en moins d'une heure !");
}, 10000);
