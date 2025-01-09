    
    


    



    
    const img=document.getElementById("img")
    const menucover = document.querySelector(".menu-cover");
    const menu=document.getElementById("menu-bar");
    const can=document.getElementById("can");
    const hero = document.getElementById("hero")


    img.addEventListener("click", function(){
        
            hero.style.marginTop="17rem"
            menucover.style.zIndex="2";
        setTimeout(() => {
            menu.style.marginRight="0";
        }, 500);
    })

    can.addEventListener("click", function(){
        
   
        menu.style.marginRight="-30rem";
        menucover.style.zIndex="-1";

        setTimeout(() => {
        hero.style.marginTop="0"
        }, 500);
    });







    // POPUP SCRIPT

    // const portfolioCover = document.querySelectorAll(".portfolio-cover");
    
    // portfolioCover.forEach( portfolio => {

    //     const portfolioImg = portfolio.querySelector("#porto-img");
        
    //     const popupBtn = portfolio.querySelector(".plus");
        
    //     popupBtn.addEventListener("click", function() {

    //         const popupItem = document.createElement("div");
    //         popupItem.className = "popup-cover";

    //         popupItem.innerHTML= `
    //             <div class="popup-contents-cover">
    //                 <img  alt="" class="popup-image">                        <p class="tracker">Image 1 of 6</p>
    //                     <button class="close-popup">X</button>
    //                 </div>
    //             </div>
            
    //         `

    //         const body = document.querySelector("#body")

    //     });
    // })



    const portfolioCover = document.querySelectorAll(".portfolio-cover");
    



    portfolioCover.forEach( portfolio => {

        console.log(portfolioCover.length);

        const portfolioImg = portfolio.querySelector("#porto-img");
        
        const popupBtn = portfolio.querySelector(".plus");

        
        




        // popup logic

        popupBtn.addEventListener("click", function() {

            const popupItem = document.createElement("div");
            popupItem.className = "popup-cover";

            const popUpCover = document.createElement("div");
            popUpCover.className = "popup-contents-cover";


            const image = document.createElement("img");
            image.className = "popup-image";
 
            const controls = document.createElement("div");
            controls.className = "controls";

            const text = document.createElement("p");
            text.textContent = "image 1 of 6";
            text.style.color="white"
            text.className = "tracker";
            

            const closeBtn = document.createElement("button");
            closeBtn.className = "close-popup";
            closeBtn.textContent = "X";


            image.src= portfolioImg.src;
            console.log(portfolioImg.src);

            
            const body = document.querySelector("#body");


            popupItem.style.opacity = "0";
                body.appendChild(popupItem);

                setTimeout(() => {
                    
                    popupItem.style.opacity = "1";
                }, 500);
            



            

            closeBtn.addEventListener('click', function() {
                
                popupItem.style.opacity = "0";
                setTimeout(() => {
                    body.removeChild(popupItem);
                }, 1000);
            })

            popupItem.appendChild(popUpCover);

            popUpCover.appendChild(image);
            popUpCover.appendChild(controls);

            console.log(popUpCover);


            
            controls.appendChild(text);
            controls.appendChild(closeBtn);

        });














    })


    