document.getElementById("bottone").onclick = function (){
        var punteggio = 0;
        if(document.getElementById("corretta1").checked){
            punteggio++;
        }
        if(document.getElementById("corretta2").checked){
            punteggio++;
        }
        if(document.getElementById("corretta3").checked){
            punteggio++;
        }
        if(document.getElementById("corretta4").checked){
            punteggio++;
        }
        if(document.getElementById("corretta5").checked){
            punteggio++;
        }
        if(document.getElementById("corretta6").checked){
            punteggio++;
        }
        if(document.getElementById("corretta7").checked){
            punteggio++;
        }
        if(document.getElementById("corretta8").checked){
            punteggio++;
        }
        if(document.getElementById("corretta9").checked){
            punteggio++;
        }
        if(document.getElementById("corretta10").checked){
            punteggio++;
        }
        if(punteggio < 3){
            document.getElementById("risultato").innerHTML = "Hai fatto: " + punteggio +
                " punti, bocciato!"
        }else if (punteggio > 3 && punteggio <6){
            document.getElementById("risultato").innerHTML = "Hai fatto: " + punteggio +
                " punti, sai qualcosina, ma bocciato!";
        }else if(punteggio > 6 && punteggio <8){
            document.getElementById("risultato").innerHTML = "Hai fatto: " + punteggio +
                " punti, bravo, sei informato sull'educazione stradale! sei stato promosso!"
        }else if(punteggio === 0){
        document.getElementById("risultato").innerHTML = "Hai fatto: " + punteggio +
            " punti, sbagliate tutte. facevi prima a tirarle a caso"
         } else if(punteggio>8){
            document.getElementById("risultato").innerHTML = "Hai fatto: " + punteggio +
                " punti, bravissimo!"
        }

}