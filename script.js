if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error=> {
        console.log("SW Registration Failed!");
        console.log(error);
    });
    
}

window.addEventListener('scroll',function(){
    var heroImg = document.getElementById('jumbotron');
    heroImg.style.opacity = 1 - window.pageYOffset/550;
})

