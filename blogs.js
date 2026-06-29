document.querySelectorAll(".read-more").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const details = this.nextElementSibling;

        details.classList.toggle("show");

        if(details.classList.contains("show")){
            this.innerHTML = "Read Less ↑";
        }else{
            this.innerHTML = "Read More →";
        }

    });

});
