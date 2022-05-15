fetch("./assets/JSON.json")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
        let api = data;

        api.map(function(info) {
    
            var wrap =document.createElement("main")
            
   
            var mainDiv = document.createElement("div")
            mainDiv.classList= "main-div"
            wrap.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].appendChild(mainDiv);
           
           
            var box = document.createElement("div")
            box.className = "box";
            mainDiv.appendChild(box)
          
          
      

            var left = document.createElement("div")
            left.className = "Left";
            box.appendChild(left)
            
    

            var img = document.createElement("img")
            img.className = "image";
            img.src = `${info.imageLink}`;
            left.appendChild(img);
           


            var right = document.createElement("div")
            right.className = "righ"
            box.appendChild(right)

            let title = document.createElement("h2")
            title.className= "header"
            title.innerHTML= `${info.title}`
            right.appendChild(title)

            let para = document.createElement("p")
            para.className = "author"
            para.innerHTML = `${info.author}`
            right.appendChild(para)

            let price = document.createElement("p");
            price.className= "price"
            price.innerHTML = `${info.price}` + "$"
            right.appendChild(price)

            let divBtn = document.createElement("div")
            divBtn.className= "divBtn"
            right.appendChild(divBtn)

            let btn = document.createElement("button")
            btn.textContent= "Read more"
            divBtn.appendChild(btn)
        })
        
    });
