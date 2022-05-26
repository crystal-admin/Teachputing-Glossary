const likes = document.querySelector("button");

likes.addEventListener("click", function (){
    if (likes.firstElementChild.className === "show"){
        likes.firstElementChild.className = 'hide';
        likes.lastElementChild.className = "show";
    }
    else{
        likes.firstElementChild.className = 'show';
        likes.lastElementChild.className = "hide";
    }
});