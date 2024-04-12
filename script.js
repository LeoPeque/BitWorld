

window.onload = function(){
    loadInternalStorage()
}


function loadInternalStorage(){
    var username = 'nombre usuario'
    var walletAmmount = '1000'
    var email = 'testmail@gmail.com'
    var points = 1000

    localStorage.setItem('walletAmmount', walletAmmount)
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('points', points)
}