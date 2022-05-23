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
    
            let main =document.createElement("main")


            let mainDiv = document.createElement("div")
            mainDiv.classList= "main-div"
            main.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].appendChild(mainDiv);

            let boxright = document.createElement("aside")
            boxright.className= "boxright"
            document.getElementsByTagName("body")[0].appendChild(boxright)

            let rightbox = document.createElement("div")
            rightbox.className= "rightbox"
            boxright.appendChild(rightbox)
           
           
            let box = document.createElement("div")
            box.className = "box";
            mainDiv.appendChild(box)
          
          
      

            let left = document.createElement("div")
            left.className = "Left";
            box.appendChild(left)
            
    

            let img = document.createElement("img")
            img.className = "image";
            img.src = `${info.imageLink}`;
            left.appendChild(img);
           


            let right = document.createElement("div")
            right.className = "right"
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
            btn.className= "read"
            divBtn.appendChild(btn)

            let card = document.createElement("button")
            card.textContent= "Add to card"
            card.className= "card"
            divBtn.appendChild(card)


            let modal = document.createElement("div")
            modal.className= "modal"
            document.getElementsByTagName("body")[0].appendChild(modal)


            let modalbox = document.createElement("div")
            modalbox.className= "modalbox"
            modal.appendChild(modalbox)

            let modalleft = document.createElement("div")
            modalleft.className= "modalleft"
            modalbox.appendChild(modalleft)

            let modalimg = document.createElement("img")
            modalimg.className= "modalimage"
            modalimg.src = `${info.imageLink}`;
            modalleft.appendChild(modalimg)


            let modalright = document.createElement("div")
            modalright.className= "modalright"
            modalbox.appendChild(modalright)

            let modaltitle = document.createElement("h2")
            modaltitle.className = "modaltitle"
            modaltitle.innerHTML= `${info.title}`
            modalright.appendChild(modaltitle)



            let modaldes = document.createElement("p")
            modaldes.className= "modaldes"
            modaldes.innerHTML= `${info.description}`
            modalright.appendChild(modaldes)

            let modalclose = document.createElement("p")
            modalclose.className= "modalclose"
            modalclose.innerText= "X"
            modalright.appendChild(modalclose)

            btn.onclick = function(){
                modal.style.display = "block";
            }
            modalclose.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick =function(event){
                if(event.target == modal){
                    modal.style.display="none";
                }
            }




        })
        
    });
