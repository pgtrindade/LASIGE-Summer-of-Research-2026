// Function to handle hamburger menu click
const menutoggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menutoggler.addEventListener("click", () => {
    // Toggle the "show-menu" class on the navbar to show/hide the menu
    navbar.classList.toggle("show-menu");
    if (navbar.classList.contains("show-menu")) {
        // When showing the menu, set max-height to allow it to expand
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        // When hiding the menu, set max-height to 0 and hide overflow
        menu.style.maxHeight = "0px";
        menu.style.overflow = "hidden";
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.forEach((link) => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        rootMargin: "-120px 0px -70% 0px",
        threshold: 0
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

const researchLineAcronymToName = {
    "CPS": "cyber-physical-systems",
    "DSI": "data-and-systems-intelligence",
    "DS2": "dependable-and-secure-decentralized-systems",
    "HBI": "health-and-biomedical-informatics",
    "IHCI": "inclusive-human-computer-interaction",
    "RSS": "reliable-software-systems",
    "ToC": "theory-of-computing"
};

$(document).ready(function () {

    function checkDescriptionOverflow() {
        $('.card-description').each(function () {
            const cardDescriptionElement = this;
            const $cardDescription = $(cardDescriptionElement);

            $cardDescription.off('scroll.descriptionIndicator');

            // Reset classes
            $cardDescription.removeClass('has-overflow show-scroll-indicator');

            const hasScrollbar = cardDescriptionElement.scrollHeight > cardDescriptionElement.clientHeight;

            if (hasScrollbar) {
                $cardDescription.addClass('has-overflow');

                function updateIndicatorState() {
                    if (cardDescriptionElement.scrollTop < 5) {
                        if (!$cardDescription.hasClass('show-scroll-indicator')) {
                            $cardDescription.addClass('show-scroll-indicator');
                        }
                    } else {
                        if ($cardDescription.hasClass('show-scroll-indicator')) {
                            $cardDescription.removeClass('show-scroll-indicator');
                        }
                    }
                }

                updateIndicatorState();

                $cardDescription.on('scroll.descriptionIndicator', function () {
                    updateIndicatorState();
                });
            }
        });
    }

    function hideUnusedFilterButtons() {
        if (!Projects || Projects.length === 0) {
            $(".filter-button").each(function () {
                const category = $(this).data("category");

                if (category !== "all") {
                    $(this).hide();
                }
            });
            return;
        }

        // Collect categories that actually exist
        const availableCategories = new Set();

        Projects.forEach(project => {
            if (Array.isArray(project.research_line)) {
                project.research_line.forEach(line => {
                    availableCategories.add(line);
                });
            }
        });

        // Hide unused buttons
        $(".filter-button").each(function () {
            const category = $(this).data("category");

            if (category !== "all" && !availableCategories.has(category)) {
                $(this).hide();
            }
        });
    }

    function displayProjects(category) {
        // Clear existing opportunities
        $(".opportunity-card").remove();

        if (Projects && Projects.length > 0) {
            // Hide the "no projects" message
            $("#no-projects-message").hide();

            Projects.sort((a, b) => a.title.localeCompare(b.title));

            // Loop through each project in the Projects array
            $.each(Projects, function (index, project) {
                if (category === 'all' || project.research_line.includes(category)) {
                    // Create a new opportunity card for each project
                    const opportunityCard = document.createElement('div');
                    opportunityCard.classList.add('opportunity-card');

                    let researchLinesHTML = '';
                    project.research_line.forEach(line => {
                        researchLinesHTML += `<a href="https://www.lasige.pt/research-line/${researchLineAcronymToName[line]}/" target="_blank" class="research-line-tag research-line-${line}">${line}</a>`
                    });

                    let mentorsHTML = '';

                    if (Array.isArray(project.mentors)) {
                        project.mentors.forEach((mentor, i) => {
                            mentorsHTML += `<a href="${mentor.link}" target="_blank" class="mentor-link">${mentor.name}</a>`;
                            if (i < project.mentors.length - 1) mentorsHTML += '<br>';
                        });
                    } else {
                        mentorsHTML = project.mentors;
                    }

                    // Populate the opportunity card with details
                    opportunityCard.innerHTML = `<div class="card">
            <h3 class="title card-title">${project.title}</h3>
            <div class="card-tags-wrapper">
              ${researchLinesHTML}
              <div class="students-tag">
                <i class="fa-solid fa-users"></i>
                <span>${project.num_students} ${project.num_students === 1 ? 'Opening' : 'Openings'}</span>
              </div>
            </div>
            <div class="card-details-wrapper">
              <div class="card-details">
                <strong>Mentors</strong>
                <span>${mentorsHTML}</span>
              </div>
              <div class="card-details card-description">
                <strong>Description</strong>
                <p>${project.description.replace(/\n\n/g, '</p><p>')}</p>
                <div class="scroll-indicator">Scroll for more</div>
              </div>
            </div>
            <a href="${project.link}" target="_blank" class="button">Apply Here</a></div>
          `;

                    // Append the opportunity card to the container
                    document.querySelector(".card-group").appendChild(opportunityCard);
                }
            });
        } else {
            // If there are no projects available, show the hidden message div
            $("#no-projects-message").show();
        }

        // Check for overflow in descriptions after content is loaded
        setTimeout(checkDescriptionOverflow, 100);
    }

    // Hide unused filters
    hideUnusedFilterButtons();

    // Call the displayProjects function to load all projects initially
    displayProjects('all');

    // Function to handle filter button clicks
    $(".filter-button").click(function () {
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
        const category = $(this).attr("data-category");
        displayProjects(category);
    });

    // Smooth scroll to the Research Opportunities section when "Apply Now" is clicked
    $(".apply-button").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $("#intern").offset().top
            },
            800
        );
    });
});