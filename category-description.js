document.addEventListener("DOMContentLoaded", () => {
    const descriptionBox = document.getElementById("category-description");
    const filterButtons = document.querySelectorAll(".filter-button");

    const descriptions = {
        CPS: {
            text: "The LASIGE research line Cyber-Physical Systems (CPS) investigates the functional, human, trustworthiness and timing aspects of cyber-physical systems. This research line focuses on system solutions for offline verification and online monitoring of security- and safety-critical embedded real-time systems, mechanisms for efficient and adaptive interactions among entities in specific scenarios, protocols for autonomous driving scenarios, and visual analytics techniques and tools for exploring heterogeneous datasets from cyber-physical and smart systems, making them more transparent to end-users.",
            link: "https://lasige.pt/research-line/cyber-physical-systems/"
        },

        DSI: {
            text: "The research line on Data and Systems Intelligence (DSI) strives to devise innovative solutions for large‐scale data problems and complex systems. DSI intersects areas of recent high visibility and impact, such as machine learning and data mining, but also the general fields of artificial intelligence. This highly multidisciplinary research line aims at advancing research and knowledge in the recent flagship application and research domain of data science, web science, and network science.",
            link: "https://lasige.pt/research-line/data-and-systems-intelligence/"
        },

        DS2: {
            text: "Dependable and Secure Decentralized Systems (DS2) investigates models, protocols and architectures that are suitable for applications with strong dependability requirements, namely applications that need to remain operational despite accidental faults or malicious attacks. The solutions being developed cover a diverse set of objectives, enforcing the prevention, detection and tolerance of failures. The kind of environments that are being contemplated include cloud deployments, highly dynamic and geographically distributed networks, mobile distributed computing, web systems and applications, smart grids and other critical infrastructures.",
            link: "https://lasige.pt/research-line/dependable-and-secure-decentralized-systems/"
        },

        HBI: {
            text: "LASIGE presents a longstanding record of research contributions in the area of Health & Biomedical Informatics (HBI), by providing innovative solutions for processing biological and medical data, and for supporting the discovery of new biomedical insights. This research line aims to encompass all the scientific work in LASIGE where informatics plays a fundamental role in creating new knowledge in life and health sciences.",
            link: "https://lasige.pt/research-line/health-and-biomedical-informatics/"
        },

        IHCI: {
            text: "LASIGE presents a longstanding record of research contributions in the area of accessible computing, in assessing, designing, and developing technologies for people with different abilities. The Inclusive Human-Computer Interaction (IHCI) research line gathers all the contributions that seek to evaluate or design interfaces for people with disabilities, older adults, or people suffering from situational impairments.",
            link: "https://lasige.pt/research-line/inclusive-human-computer-interaction/"
        },

        RSS: {
            text: "Reliable Software Systems (RSS) focuses on modelling techniques and formal analysis approaches to software system structure and behaviour. It aims at enhancing the software engineering practice and particularly the quality of the software. Its activity ranges from developing theoretical models, languages and techniques to the development of tools that can be used in the real-world software development process, with a clear impact on the workflow of developers and the industry in general. RSS centers its attention on the verification and validation of software, increasing the confidence of developers in their code, especially in complex and error-prone scenarios, such as concurrent and distributed programs.",
            link: "https://lasige.pt/research-line/reliable-software-systems/"
        },

        ToC: {
            text: "Theory of Computing (ToC) is dedicated to the foundational, theoretical study of computation: What is a computer? What is computation and where does it manifest? What are the capabilities and limitations of different kinds of computers? The method we use to study this question is the mathematical method: we use precise mathematical definitions to model various systems where computation (or a computation-like phenomenon) occurs, and then we use rigorous, deductive reasoning (i.e., mathematical proofs) to understand the behavior and properties of such systems.",
            link: "https://lasige.pt/research-line/theory-of-computing/"
        }
    };

    function updateCategoryDescription(category) {
        if (!descriptionBox) return;

        if (category === "all") {
            descriptionBox.innerHTML = "";
            descriptionBox.style.display = "none";
            return;
        }

        const item = descriptions[category];

        if (!item) {
            descriptionBox.innerHTML = "<p>No description available.</p>";
            descriptionBox.style.display = "block";
            return;
        }

        // console output
        console.log(`=== ${category} DESCRIPTION ===`);
        console.log(item.text);

        descriptionBox.innerHTML = `
      <p>${item.text}</p>
      <a href="${item.link}" target="_blank" class="learn-more-link">
        See more →
      </a>
    `;

        descriptionBox.style.display = "block";
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            updateCategoryDescription(button.dataset.category);
        });
    });

    descriptionBox.style.display = "none";
});