
var ammount = parseInt(localStorage.getItem('walletAmmount'))

window.onload = function() {
    document.getElementById('tecBucks').innerHTML = ammount

};

function add500(){
    ammount = ammount + 500
    document.getElementById('tecBucks').innerHTML = ammount
    localStorage.setItem('walletAmmount', ammount)
}

function add1250(){
    ammount = ammount + 1250
    document.getElementById('tecBucks').innerHTML = ammount

    localStorage.setItem('walletAmmount', ammount)
}

function add2750(){
    ammount = ammount + 2750
    document.getElementById('tecBucks').innerHTML = ammount
    
    localStorage.setItem('walletAmmount', ammount)
}
