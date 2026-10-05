document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       LOAD SEPARATE HTML FILES
    ====================================================== */

    loadSection(
        "career-content",
        "career.html"
    );

    loadSection(
        "courses-content",
        "courses.html"
    );

    loadSection(
        "projects-content",
        "projects.html"
    );

    loadSection(
        "reviews-content",
        "reviews.html"
    );

    loadSection(
        "about-content",
        "about.html"
    );

    loadSection(
        "contact-content",
        "contact.html"
    );



    function loadSection(
        elementId,
        fileName
    ) {

        const container =
            document.getElementById(elementId);


        if (!container) {
            return;
        }


        fetch(fileName)

            .then(function (response) {

                if (!response.ok) {

                    throw new Error(
                        fileName +
                        " could not be loaded"
                    );

                }

                return response.text();

            })


            .then(function (html) {

                container.innerHTML = html;

            })


            .catch(function (error) {

                console.error(error);

                container.innerHTML = `
                    <div class="load-error">
                        <h3>
                            Unable to load this section
                        </h3>

                        <p>
                            Please check the file name
                            and Live Server.
                        </p>
                    </div>
                `;

            });

    }



    /* =====================================================
       SMOOTH NAVIGATION
    ====================================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const target =
                    this.getAttribute("href");


                if (
                    target &&
                    target.startsWith("#")
                ) {

                    const section =
                        document.querySelector(
                            target
                        );


                    if (section) {

                        section.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });



    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (menuBtn && navMenu) {

        menuBtn.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle(
                    "active"
                );

            }
        );

    }



    /* =====================================================
       THEME TOGGLE
    ====================================================== */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }

    }



    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "light-mode"
                );


                if (
                    document.body.classList.contains(
                        "light-mode"
                    )
                ) {

                    localStorage.setItem(
                        "theme",
                        "light"
                    );

                    themeToggle.textContent =
                        "🌙";

                } else {

                    localStorage.setItem(
                        "theme",
                        "dark"
                    );

                    themeToggle.textContent =
                        "☀";

                }

            }
        );

    }


});
