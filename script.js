/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const website = document.getElementById("website");
    const brain = document.querySelector(".brain-icon");

    if (!loader || !website) {
        console.error("Loader or website not found.");
        return;
    }

    website.style.opacity = "0";
    website.style.visibility = "hidden";


    /* Brain appears */

    setTimeout(() => {

        if (brain) {
            brain.classList.add("active");
        }

    }, 4000);


    /* Enter website */

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            website.style.visibility = "visible";
            website.style.opacity = "1";

        }, 1000);

    }, 5500);

});


/* =====================================================
   PORTFOLIO BOARD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const boardItems =
        document.querySelectorAll(".board-item");

    const panels =
        document.querySelectorAll(".content-panel");

    const backButtons =
        document.querySelectorAll(".back-btn");

    const board =
        document.querySelector(".navigation-board");


    /* =========================
       OPEN PANEL
    ========================= */

    boardItems.forEach(item => {

        item.addEventListener("click", () => {

            const target =
                item.getAttribute("data-target");

            const panel =
                document.getElementById(target + "-panel");


            if (!panel) {

                console.error(
                    "Panel not found:",
                    target + "-panel"
                );

                return;
            }


            /* Hide every panel */

            panels.forEach(section => {
                section.classList.remove("active");
            });


            /* Show selected panel */

            panel.classList.add("active");


            /* Scroll to selected panel */

            setTimeout(() => {

                panel.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 50);

        });

    });


    /* =========================
       BACK TO BOARD
    ========================= */

    backButtons.forEach(button => {

        button.addEventListener("click", () => {

            panels.forEach(panel => {
                panel.classList.remove("active");
            });


            if (board) {

                board.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});