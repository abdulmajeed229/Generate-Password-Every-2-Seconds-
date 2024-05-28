let text = document.getElementById('text');

let letter = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_'


setInterval(() => {
    
    let lock = '' ;

    for( let i = 0 ; i  < 8 ; i++){

        lock = lock + letter.charAt(Math.floor(Math.random()*letter.length));

        text.value = lock
    }
}, 2000);