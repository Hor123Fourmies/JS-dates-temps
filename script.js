/*

Les dates

I/
- constructeur Date


- Comparer 2 dates permet de connaître le temps écoulé entre 2 instants dans un programme

- De manière générale en programmation, le nombre de millisecondes écoulées depuis le 1er janvier 1970
sert de base de calcul.

II/
- Pour afficher la date au moment où le script est exécuté, on utilise
new Date ()

- Pour afficher le nombre de millisecondes écoulées depuis le 1er janvier 1970
au moment de l'exécution du script, on utilise Date.now ()

- Pour calculer le temps écoulé entre 2 dates, il suffit de soustraire la date la + récente
à la date la moins récente

III/

var premièreDate = Date.now ();
Du code est exécuté eentre 2 dates

var secondeDate = Date.now ();
var tempsEcoulé = secondeDate - premièreDate;

tempsEcoulé contient le nombre de millisecondes de diffrence entre nos deux dates.

IV/
- Pour comparer facilement les dates, il est possible de convertir une date en millsecondes en utilisant:
Date.parse("date")
var timesTamp

-Partir du nombre de millisecondes écoulées pour obtenir le mois, le jour...
Date.getMonth(); get.Date...

getFullYear() : renvoie l'année à 4 chiffres;
getMonth : renvoie le mois (0 à 11); 0=janvier;
getDate : renvoie le jour du mois (1 à 31);
getDay : renvoie le jour de la semaine (0 à 6, la semaine commence le dimanche)
getHours : renvoie l'heure (0 à 23);
getMinutes : renvoie les minutres (0 à 59);
getSeconds : renvoie les secondes (0 à 59);
getMilliseconds :

V/
- JS offre nativement une gestion du temps.
- Il est aussi possible d'exécuter du code au bout...

VI/

setTimeout
- Exécute un bout de code au bout d'un certain temps: x millisecondes (1000 millisecondes = 1 secondes).
- Cette fonction accepte en paramètre une fonction ou une fonction anonyme.
- Le paramètre spécifiant le temps s'écrit toujours en millisecondes.
-setTimeout (maFonction,3000); = ma fonction sera exécutée au bout de 3 secondes.
- ex avec une fonction anonyme:
setTimeout (function(){
alert ("3 secondes se sont écoulées), 3000);
- window.setTimeout;

VII/

setInterval
-Exécute du code à intervalles réguliers.
-Malheureusement, elle pose des problèmes et n'est pas performante.
-Il est donc recommandé d'utiliser setTimeout en obligeant la fonction exécutée par seTimeout
à s'appeler elle-même.

VIII/
function boucle ()
{
document.write("2 secondes se sont écoulées <br>")
...?...
}

IX/
clearTimeout
-Annuler une action temporelle
...
Sans paramètre, clearTimeout rafraîchit le dernier compteur qui a été exécuté/le dernier appel
à la méthode setTimeout.
Poss de mettre ne paramètre la variable concernée.
 */