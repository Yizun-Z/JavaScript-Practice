const btnEl = document.getElementById("btn-el")
const psw1 = document.getElementById("password1")
const psw2 = document.getElementById("password2")
const psw3 = document.getElementById("password3")
const psw4 = document.getElementById("password4")



btnEl.addEventListener("click", function() {
    psw1.textContent = getPassword()
    psw2.textContent = getPassword()
    psw3.textContent = getPassword()
    psw4.textContent = getPassword()
})

function getPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/?@+<>!%&"
    let psw = ""
    let pswLength = Math.floor(Math.random() * 5 + 10)

    for (let i = 0; i < pswLength; i++){
        let num = Math.floor(Math.random() * chars.length)
        psw += chars.charAt(num)
    }
    return psw
}

