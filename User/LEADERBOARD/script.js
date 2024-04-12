let jugador = {
    username: localStorage.getItem('username'),
    points: localStorage.getItem('points')
}

window.onload = function(){
    document.getElementById('tecBucks').innerHTML = localStorage.getItem('walletAmmount')

}

function loadLeaderboard(){
    
}