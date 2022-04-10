const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputEl.addEventListener("input", function showConversion(){
    const num = inputEl.value

    let feet = num * 3.28084
    feet = feet.toFixed(3)
    let meters = num * 0.3048
    meters = meters.toFixed(3)
    lengthEl.innerHTML = `
    ${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
   
    let gallons = num * 0.264172
    gallons = gallons.toFixed(3)
    let liters = num * 3.78541
    liters = liters.toFixed(3)
    volumeEl.innerHTML = `
    ${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`

    let pounds = num * 2.20462
    pounds = pounds.toFixed(3)
    let kilos = num * 0.453592
    kilos = kilos.toFixed(3)
    massEl.innerHTML = `
    ${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
})

