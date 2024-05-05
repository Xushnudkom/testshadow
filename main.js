const difficPassword =()=> {
    let password = document.getElementById("password").value
    let result = document.getElementById("result")
    if(password.length === 0){
        result.innerText = ""
        result.classList.add("required")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("easy")
    }else if(password.length <= 4){
        result.innerText = "Parol kuchsiz"
        result.classList.add("easy")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("required")
    }
    else if(password.length > 4 && password.length < 8){
        result.innerText = "Parol o`rtacha"
        result.classList.add("normal")
        result.classList.remove("strong")
        result.classList.remove("required")
        result.classList.remove("easy")
    }else if(password.length >= 8){
        result.innerText = "Parol kuchli"
        result.classList.add("strong")
        result.classList.remove("required")
        result.classList.remove("normal")
        result.classList.remove("easy")
    }
}

const isShow=()=>{
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
}