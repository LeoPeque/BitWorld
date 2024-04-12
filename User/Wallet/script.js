window.onload = function() {
    document.getElementById('user').innerHTML = localStorage.getItem('username')
    document.getElementById('tecBucks').innerHTML = localStorage.getItem('walletAmmount')
};