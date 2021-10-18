  //b4938994bbf94e79af2fa41b24a5879b
  async function news() {

    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4938994bbf94e79af2fa41b24a5879b`);

   let data = await res.json();
   shownews(data.articles);
   console.log(data.articles)
}
news()

if(localStorage.getItem("news")===null){
    localStorage.setItem("news",JSON.stringify([]))
}

function shownews(news1) {
    let div = document.getElementById("container")
    
   news1.forEach(element => {
      
       let div1 = document.createElement("div");
       div1.id="news_blocks"

       let title = document.createElement("h2");
       title.innerText=element.title
       title.id="title"

       let date = document.createElement("p");
       date.innerText="Publish Date & Time - "+element.publishedAt

       let img = document.createElement("img");
       img.src=element.urlToImage

       img.onclick=function () {

        let obj ={
            url:element.urlToImage,
            content:element.content,
        }
            let urlimg = JSON.parse(localStorage.getItem("news"));

            urlimg.push(obj);
            localStorage.setItem("news",JSON.stringify(urlimg))

           window.location.href="news.html"
       }

       let desc = document.createElement("h4");
       desc.innerText = element.description

       div1.append(title,date,img,desc);
       div.append(div1)
       
   });
    
}
function search() {
    window.location.href="search.html"
}

