const speedElement= document.querySelector("#speed")
const startBtn= document.querySelector("#start")
const stopBtn= document.querySelector("#stop")

startBtn.addEventListener("click",() => {

    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")
})

stopBtn.addEventListener("click",() => {

    startBtn.classList.remove("d-none")
    stopBtn.classList.add("d-none")

})
