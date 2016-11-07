/* exo 1

var name = "Camille";

alert(name);
// exo 2
var nom = "Theil",
    prenom = "Camille",
    age= "26";

alert("nom: "+ nom +"\n" +'prenom: '+ prenom + '\n' + 'age: ' + age);

// exo 3


var input = prompt("Entrez votre nom silvouplais :)");
alert('Bonjour ' + input);

// exo 4
 var name1 = document.getElementsByTagName("input")[0],
     prenom1 = document.getElementsByTagName("input")[1],
     ville1 = document.getElementsByTagName("input")[2];

function ShowAlert()
{
    alert("nom: " + name1.value + "\n" + "prenom: " + prenom1.value + "\n" + "ville: " + ville1.value )
}

// exo 5

var numb1 = document.getElementsByTagName("input")[3],
    numb2 = document.getElementsByTagName("input")[4];


function multiplication()
{
    alert(Math.round(numb1.value) * numb2.value);
}

// exo 7

var shoes = prompt('Entrez votre pointure : '),
    birth = prompt('Entrez votre age : '),
    resultat = ((((shoes * 2) + 5) * 50) - birth) + 1766;

alert(resultat);

 */

//exo 8

var OldEnough = prompt("Entrez votre age :");

if(OldEnough > 18){
    alert("Vous avez plus de 18 ans ! Vous êtes majeur.")
}
else {
    alert("Vous avez moins de 18 ans ! Vous êtes mineur.")
}


