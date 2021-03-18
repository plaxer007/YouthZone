let inputs = document.querySelectorAll('input');
let h3 = document.querySelector('h3');
for(input of inputs){
    input.addEventListener('click', function(e){
        e.target.style.backgroundColor = "#fdfdfd";
    });
}
for(input of inputs){
    input.addEventListener('blur', function(e){
        e.target.style.backgroundColor = "#fdfdfd";

    });
}

function authorize(){
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if(login === 'admin' && password === 'admin'){
        window.location.href = 'cms-auth.html'
    } else {
        window.location.replace = 'error.html'
    }
}
