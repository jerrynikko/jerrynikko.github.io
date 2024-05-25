const btnLikes1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnDislikes1 = document.getElementById("btnDislike1")
const countDislikes1 = document.getElementById("countDislikes1")
const btnLikes2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")


function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}

function clickDislike1(){
  let totalDislikes1 = parseInt(countDislikes1.value) + 1
  countDislikes1.textContent = totalDislikes1.toString()
}

function clickLike2(){
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}

btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnDislike1.addEventListener("click",clickDislike1)
