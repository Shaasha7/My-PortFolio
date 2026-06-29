/* ==========================================
   CODOLIO PREMIUM JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    counterAnimation();

    createHeatMap();

    createRatingChart();

    revealOnScroll();

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

function counterAnimation(){

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = ()=>{

            count += speed;

            if(count < target){

                counter.innerHTML = Math.floor(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerHTML = target + "+";

            }

        }

        update();

    });

}

/* ==========================================
   CONTRIBUTION HEATMAP
========================================== */

function createHeatMap(){

    const grid = document.querySelector(".heatmap-grid");

    if(!grid) return;

    for(let i=0;i<180;i++){

        const box = document.createElement("div");

        const level = Math.floor(Math.random()*5);

        if(level===1) box.classList.add("level1");
        if(level===2) box.classList.add("level2");
        if(level===3) box.classList.add("level3");
        if(level===4) box.classList.add("level4");

        grid.appendChild(box);

    }

}

/* ==========================================
   CHART.JS
========================================== */

function createRatingChart(){

    const ctx = document.getElementById("ratingChart");

    if(!ctx) return;

    new Chart(ctx,{

        type:"line",

        data:{

            labels:[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug"
            ],

            datasets:[{

                label:"Rating",

                data:[
                    950,
                    1080,
                    1190,
                    1260,
                    1335,
                    1400,
                    1485,
                    1560
                ],

                borderColor:"#ff8a00",

                backgroundColor:"rgba(255,138,0,.15)",

                fill:true,

                borderWidth:4,

                tension:.4,

                pointRadius:5,

                pointBackgroundColor:"#ff8a00"

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                x:{

                    grid:{
                        display:false
                    }

                },

                y:{

                    beginAtZero:false

                }

            }

        }

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function revealOnScroll(){

    const elements = document.querySelectorAll(
        ".box,.achievement-card,.skill,.stat-card,.profile-card"
    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

}
