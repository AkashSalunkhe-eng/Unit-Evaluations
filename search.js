        //https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=API_KEY


        async function news() {

            let query = document.getElementById("news").value;

let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=b4938994bbf94e79af2fa41b24a5879b`);

let data = await res.json();
search(data.articles)
        }







function search(news1) {
            let div = document.getElementById("container")
            document.getElementById("container").innerHTML=null
            
           news1.forEach(element => {
              
               let div1 = document.createElement("div");
               div1.id="news_blocks"
               div1.id="div0"

               let title = document.createElement("h2");
               title.innerText=element.title

               let date = document.createElement("p");
               date.innerText="Publish Date & Time - "+element.publishedAt

               let img = document.createElement("img");
               img.src=element.urlToImage

               let desc = document.createElement("h4");
               desc.innerText = element.description

               div1.append(title,date,img,desc);
               div.append(div1)
               
           });
            
        }