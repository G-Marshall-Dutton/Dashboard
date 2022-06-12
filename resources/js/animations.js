var intersectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((e) => {
        // When in view
        if(e.intersectionRatio > 0) {

            // Animate
            e.target.classList.add("visible")

            // Stop observing
            observer.unobserve(e.target)
        }
    })
});


let cards = document.querySelectorAll(".card")
cards.forEach((card) => { intersectionObserver.observe(card); })

  

