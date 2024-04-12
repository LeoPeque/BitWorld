window.onload = function() {
    document.getElementById('username').innerHTML = localStorage.getItem('username')
    document.getElementById('email').innerHTML = localStorage.getItem('email')

    loadAdminData()
    
    document.getElementById('dinero').innerHTML = localStorage.getItem('profit')
    document.getElementById('playersTot').innerHTML = localStorage.getItem('playerCount')
    document.getElementById('juegoNom').innerHTML = localStorage.getItem('juegoPopular')
    document.getElementById('playersJuego').innerHTML = localStorage.getItem('juegoPlayerCount')
};

function loadAdminData(){
    var profit = '1,003,434'
    var playerCount = '10,222'
    var juegoPopular = 'Out of Time'
    var juegoPlayerCount = '5,327'

    localStorage.setItem('profit', profit)
    localStorage.setItem('playerCount', playerCount)
    localStorage.setItem('juegoPopular', juegoPopular)
    localStorage.setItem('juegoPlayerCount', juegoPlayerCount)

}