async function getrss(url){
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)

        
        var news = document.getElementsByClassName("news-story")[0];
        var items = data.items;
        for(var i = 0; i < items.length; i++) {
            var h2 = document.createElement("h2");
            h2.innerHTML = items[i].title;
            news.appendChild(h2)

            var date = document.createElement("h4")
            date.innerHTML = items[i].pubDate
            news.appendChild(date)

            var img = document.createElement("img")
            img.src = items[i].enclosure.link;
            img.style = "width:400px;image-rendering: crisp-edges;"
            news.appendChild(img)
            
            var p = document.createElement("h3")
            p.innerHTML = items[i].content;
            news.appendChild(p)

            
            var a = document.createElement("a")
            a.href = items[i].link;
            a.title = "read more"
            var link = document.createTextNode("read more"); 
            a.appendChild(link)
            a.target = "_blank"
            news.appendChild(a);

            news.appendChild(document.createElement("br"))
            
        }

    } 
    catch(err) {
        alert(err);
    }
}
console.log(document.getElementById('rss'))
getrss(document.getElementById('rss').firstChild.data)
