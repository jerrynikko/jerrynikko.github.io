const btnLikes1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnAngry1 = document.getElementById("btnAngry1")
const countAngry1 = document.getElementById("countAngry1")
const btnHaha1 = document.getElementById("btnHaha1")
const countHaha1 = document.getElementById("countHaha1")
const btnSad1 = document.getElementById("btnSad1")
const countSad1 = document.getElementById("countSad1")
const btnWow1 = document.getElementById("btnWow1")
const countWow1 = document.getElementById("countWow1")
const btnLikes2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
const btnAngry2 = document.getElementById("btnAngry2")
const countAngry2 = document.getElementById("countAngry2")
const btnHaha2 = document.getElementById("btnHaha2")
const countHaha2 = document.getElementById("countHaha2")
const btnSad2 = document.getElementById("btnSad2")
const countSad2 = document.getElementById("countSad2")
const btnWow2 = document.getElementById("btnWow2")
const countWow2 = document.getElementById("countWow2")

function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}

function clickAngry1(){
  let totalAngry1 = parseInt(countAngry1.value) + 1
  countAngry1.textContent = totalAngry1.toString()
}

function clickHaha1(){
  let totalHaha1 = parseInt(countHaha1.value) + 1
  countHaha1.textContent = totalHaha1.toString()
}

function clickSad1(){
    let totalSad1 = parseInt(countSad1.value) + 1
    countSad1.textContent = totalSad1.toString()
  }

  function clickWow1(){
    let totalWow1 = parseInt(countWow1.value) + 1
    countWow1.textContent = totalWow1.toString()
  }

function clickLike2(){
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}

function clickAngry2(){
  let totalAngry2 = parseInt(countAngry2.value) + 1
  countAngry2.textContent = totalAngry2.toString()
}

function clickHaha2(){
  let totalHaha2 = parseInt(countHaha2.value) + 1
  countHaha2.textContent = totalHaha2.toString()
}

function clickSad2(){
    let totalSad2 = parseInt(countSad2.value) + 1
    countSad2.textContent = totalSad2.toString()
  }

  function clickWow2(){
    let totalWow2 = parseInt(countWow2.value) + 1
    countWow2.textContent = totalWow2.toString()
  }

btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnAngry1.addEventListener("click",clickAngry1)
btnAngry2.addEventListener("click",clickAngry2)
btnHaha1.addEventListener("click",clickHaha1)
btnHaha2.addEventListener("click",clickHaha2)
btnSad1.addEventListener("click",clickSad1)
btnSad2.addEventListener("click",clickSad2)
btnWow1.addEventListener("click",clickWow1)
btnWow2.addEventListener("click",clickWow2)

