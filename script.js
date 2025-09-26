// 💗 Heart Icon functionality

const favCount = document.getElementById("fav-count");
let count = 0;

const hearts = document.querySelectorAll(".heart");
hearts.forEach(function(event){
    event.addEventListener('click', function(){
        count++;
        
        favCount.innerText = count;
    })
})