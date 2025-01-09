    const slider = document.querySelector(".slider-cover");

    const items = Array.from(slider.children);

    





    // Cloning for seamless loop

    const totalItems = items.length;


    items.forEach(item => slider.appendChild(item.cloneNode(true)));   //     Append clones at the end

    items.forEach(item => slider.insertBefore(item.cloneNode(true), slider.firstChild));      //  prepend clones at the start




    
    // Variables


    const itemWidth = items[0].offsetWidth;
    console.log(itemWidth);
    let currentIndex = totalItems; // Start at the first real item
    console.log(totalItems);
    let autoScrollInterval;




    // Initialize slider position

    slider.scrollLeft = currentIndex * itemWidth;



    // Auto-scroll


    function startAutoScroll() {
        
        autoScrollInterval = setInterval(() => {
            
            goToNext();
                
        }, 5000);

    }



    // stop auto-scroll


    function stopAutoScroll() {

        clearInterval(autoScrollInterval);

    }


    // Go to next item


    function goToNext() {

        currentIndex++;

        updateScrollPosition();

        

    }

    // Go to previous item

    function goToPrev() {

        currentIndex--;

        updateScrollPosition();

    }


    // update scroll position

    function updateScrollPosition() {

        slider.scrollTo({

            left: currentIndex * itemWidth,

            behavior: "smooth",


        });

    



    //handle seamless looping


    if (currentIndex >= totalItems * 2){

        setTimeout(() => {
            
            slider.scrollLeft = totalItems * itemWidth;
            currentIndex = totalItems;

        }, 300); //match this to the css transition duration

    } else if(currentIndex < totalItems){

        setTimeout(() => {
            
            slider.scrollLeft = totalItems * itemWidth;
            currentIndex = totalItems;

        }, 300);  // match this to the css transition duration

    }


}



//  Start auto scroll on load

    startAutoScroll();


    // Update itemWidth dynamically on window resize

    window.addEventListener('resize', () => {

        const previousWidth = itemWidth;
        itemWidth = items[0].offsetWidh;

        // Adjust currentIndex proportionally
        currentIndex = Math.round(slider.scrollLeft / previousWidth);
        slider.scrollLeft = currentIndex * itemWidth;

    });
