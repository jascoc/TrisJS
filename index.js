function funzione(colore){
    document.getElementById('container').classList.add(colore);
}

window.onload = function gridGenerator(){
    var grid = document.getElementById('grid');
    for(var i=1; i<10; i++){
            var button = document.createElement('button');
            button.classList.add('cell');
            button.id= i;
            grid.appendChild(button);
            button.onclick = function(){ move(this.id); } // attacchiamo dinamicamente la funzione .onclick al HTML
        }
    }
 function move(id){
    var grid = document.getElementById('grid');
    var player = document.getElementById('player');
    var button = document.getElementById(id);
    if(player.value == 1){
        button.innerText="X";
        player.value = 2;
    } else{
        button.innerText="O";
        player.value = 1;
    }
    button.disabled = "true";
    var victory = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7'],
    ]

    victory.forEach(combination=>{
        var tic = document.getElementById(combination[0]);
        var tac = document.getElementById(combination[1]);
        var toe = document.getElementById(combination[2]);
        if(tic.innerText != "" && (tic.innerText == tac.innerText) && (tic.innerText == toe.innerText)){
            for(var count=1; count < 10; count++){
                tic.style.border = "2px solid green"
                tac.style.border = "2px solid green"
                toe.style.border = "2px solid green"
            }
            grid.disabled = "true"
        }
    })
}

//var victory = ['123','456']