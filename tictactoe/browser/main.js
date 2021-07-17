var x = "url('./x.png')";
var o = "url('./o.png')";

class Game {
    constructor() {
        this.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]
        this.set = function(xPos, yPos, val) {this.board[xPos][yPos] = val;}
        this.as_one = function() {return this.board[0].concat(this.board[1].concat(this.board[2]));}
    }
}

function cancel() {
    var els = document.getElementsByTagName("td");
    for (var i = 0; i < 10; i++) {
        var el = els[i];
        el.onclick = function() {};
    }
}

var current = new Game();

function someone_won() {
    var b = current.as_one();
    var winner = '';
        if (b[0] == b[1] && b[1] == b[2] && b[0] != "-")
            winner = b[0];        
        if (b[3] == b[4] && b[4] == b[5] && b[3] != "-") 
            winner = b[3];
        if (b[6] == b[7] && b[7] == b[8] && b[6] != "-") 
            winner = b[6];
        if (b[0] == b[3] && b[3] == b[6] && b[0] != "-") 
            winner = b[0];
        if (b[1] == b[4] && b[4] == b[7] && b[1] != "-") 
            winner = b[1];
        if (b[2] == b[5] && b[5] == b[8] && b[2] != "-") 
            winner = b[2];
        if (b[0] == b[4] && b[4] == b[8] && b[0] != "-") 
            winner = b[0];
        if (b[2] == b[4] && b[4] == b[6] && b[2] != "-") 
            winner = b[2];
        if (winner != '') {
            
            setTimeout(function(){alert("Player " + winner + " won!");}, 250);
            setTimeout(function(){if(confirm("Do you want to start a new game?")){location.reload();}}, 2500);
            cancel();
            return true;
        } else {
            return false;
        }
}
function is_draw() {
    if (someone_won()) {
        return false;
    }
    for (var i = 0; i < 10; i++) {
        if (current.as_one()[i] == "-") {
            return false;
        }
    }
    
    setTimeout(function(){alert("Draw!");}, 250);
    setTimeout(function(){if(confirm("Do you want to start a new game?")){location.reload();}}, 2500);
    cancel();
    return true;
}

var convertor = {"x": x, "o": o};


var turn_switch = "x";
function getClick(Xpos, Ypos, id) {
    var el = document.getElementById(id);
    if (el.style.backgroundImage == "") {
        el.style.backgroundImage = convertor[turn_switch];
        current.set(Xpos, Ypos, turn_switch);
    } else {
        return;
    }
        //if (is_draw()) {
        //    endgame();
        //    alert("Draw!");
        //    setTimeout(function(){if(confirm("Do you want to start a new game?")){location.reload();}}, 2500);
        //}
    
    if (turn_switch == "x") {
        turn_switch = "o";
        return;
    }
    if (turn_switch == "o") {
        turn_switch = "x";
    }
}

/***** will be removed v *****/
class Board {
    static display() {
        console.log(current.board[0]);
        console.log(current.board[1]);
        console.log(current.board[2]);
    }
}