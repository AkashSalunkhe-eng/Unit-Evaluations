function showclick() {
    let cont = document.getElementById("cont");
    let obj = JSON.parse(localStorage.getItem("news"));

    obj.forEach(element => {
        let img = document.createElement("img");
    img.src=element.url

    let content = document.createElement("p");
    content.innerText=element.content
    content.id="content"

    cont.append(img,content) 
    });

   
    
}
showclick()

function home() {
    let cont = document.getElementById("cont");
    let obj = JSON.parse(localStorage.getItem("news"));
    obj =""
    document.getElementById("cont").innerHTML=null;
    
    
    window.location.href="home.html"
}
function search() {
window.location.href="search.html"
}
