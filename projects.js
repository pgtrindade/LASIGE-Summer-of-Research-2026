const Projects = [

    {
        "title": "Can your lunch influence how you control a computer with your mind? <br> Bio-Hacking Brain-Computer Interfaces: DIY Optical Sensors & The \"Sugar Rush\" Effect",
        "num_students": 2,
        "description": `
        <p>This project sits at the intersection of <strong>metabolic health</strong> and <strong>neurotechnology</strong>, exploring how Brain-Computer Interface (BCI) reliability can be improved for personalized health monitoring and neurorehabilitation.</p>

        <p>BCIs often suffer from “illiteracy” days, where performance drops significantly. We hypothesize that a user’s <strong>blood glucose level</strong> may act as a hidden noise factor affecting performance.</p>

        <br>

        <p><strong>Project Tasks:</strong></p>

        <ul>
          <li> - <strong>Hardware Engineering:</strong> Prototype a DIY near-infrared optical glucose sensor using microcontrollers, 3D printing, and sensors.</li>
          <li> - <strong>System Integration:</strong> Implement Lab Streaming Layer (LSL) protocols to synchronize real-time metabolic data with EEG streams.</li>
          <li> - <strong>Neural Analysis:</strong> Study how metabolic fluctuations affect brainwave signal-to-noise ratio (SNR) and BCI accuracy.</li>
          <li> - <strong>Data Science:</strong> Perform data collection and statistical testing.</li>
        </ul>

        <br>

        <p><strong>Future Horizons:</strong></p>
        <ul>
          <li> - <strong>Bio-Responsive Gaming:</strong> Enable “meta-aware” wearables for immersive VR environments that adapt to the user’s metabolic state.</li>
          <li> - <strong>Next-Gen Health Tech:</strong> Contribute to non-invasive wearables and metabolic-aware AI systems for personalized, needle-free medicine.</li>
        </ul>
       `,
        mentors: [
            { name: "João Garcia Farinha", link: "https://lasige.pt/member/joao-farinha/" },
            { name: "Prof. Nuno Garcia", link: "https://lasige.pt/member/nuno-garcia/" },
            { name: "Prof. Carlos Duarte", link: "https://lasige.pt/member/carlos-duarte/" },
        ],
        "research_line": ["HBI", "CPS", "IHCI", "DSI"],
        "link": "https://forms.gle/edoQnCP5PonNkYh26"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Can a musical beat \"hack\" your brain into controlling a computer? <br> Rhythm-Driven BCI Gaming: Syncing Mental Commands to the Beat",
        "num_students": 2,
        "description": `
        <p>Exploring the potential of "Plug-and-Play" BCIs for VR gaming and assistive tech. A major barrier to mind-controlled devices is "calibration fatigue" which is the requirement to train AI for 20 minutes before every use. We aim to investigate if this can be bypassed by leveraging the brain’s natural tendency to "phase-lock" to a musical beat, creating a universal temporal grid for neural signals.</p>

        <br>

        <p><strong>Project Tasks:</strong></p>

        <ul>
          <li> - <strong>Game/Interface Dev:</strong>  Developing or modding a rhythm-based interface (e.g. Unity/Godot/Python) to broadcast precise synchronization triggers.</li>
          <li> - <strong>Signal Processing:</strong> Implementing real-time pipelines to extract Phase-Locking Values (PLV) from EEG data.</li>
          <li> - <strong>Machine Learning:</strong>  Testing the potential for rhythmic "temporal grids" to allow ML models to generalize across different users without individual calibration.</li>
          <li> - <strong>Data Science:</strong> Data collection and statistical testing.</li>
        </ul>

        <br>

        <p><strong>Future Horizons:</strong></p>

        <ul>
          <li> - <strong>Neural-Clocked VR:</strong> Potentially enabling "Zero-Latency" environments where the game world is synchronized to the user's neural rhythms for heightened immersion.</li>
          <li> - <strong>Inclusive Tech:</strong> Repurposing rhythmic "temporal grids" for directional audio aids that help the hearing-impaired filter real-world sound.</li>
        </ul>
       `,
        mentors: [
            { name: "João Garcia Farinha", link: "https://lasige.pt/member/joao-farinha/" },
            { name: "Prof. Nuno Garcia", link: "https://lasige.pt/member/nuno-garcia/" },
            { name: "Prof. Carlos Duarte", link: "https://lasige.pt/member/carlos-duarte/" },
        ],
        "research_line": ["IHCI", "HBI", "DSI"],
        "link": "https://forms.gle/d8WvKnmrvVFRzTuPA"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Failure Detection and Management in 3D Printing",
        "num_students": 1,
        "description": `
            <p>The student will be called to set up a monitoring system for the 3D printing process in the workspace. The goal is to compare ongoing progress with the expected model structure and take action if any issues arise in order to prevent time and material waste.</p>
        `,
        mentors: [
            { name: "Iordanis Antypas", link: "https://lasige.pt/member/iordanis-antypas/" },
            { name: "Prof. João Bimbo", link: "https://lasige.pt/member/joao-bimbo/" }
        ],
        "research_line": ["DSI"],
        "link": "https://forms.gle/8Y1i7wSWX5VyEv6T9"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Exploring Multimodal Feedback for Aiming at Moving Targets in Virtual Reality for Blind People",
        "num_students": 1,
        "description": `
            <p>Target acquisition in 3D virtual environments remains a significant challenge for blind people due to the lack of precise non-visual feedback for orientation and depth. This becomes particularly demanding when aiming at moving targets, where users must continuously update spatial estimates without visual cues.</p>

            <p>This work explores how multimodal feedback—combining spatial audio techniques such as head-related transfer functions (HRTF) with vibrotactile feedback—can support fine-grained aiming tasks in virtual reality. A prototype VR environment focused on aiming at moving targets will be developed, implementing multiple feedback conditions that integrate spatial audio and haptics. Through a user study we will evaluate performance in terms of speed and accuracy, as well as overall player experience.</p>

            <p>The results aim to provide empirical grounding for the design of accessible spatial interaction techniques in dynamic and immersive environments.</p>    
        `,
        mentors: [
            { name: "Pedro Trindade", link: "https://lasige.pt/member/pedro-trindade/" },
            { name: "Prof. João Guerreiro", link: "https://lasige.pt/member/joao-guerreiro/" },
            { name: "Prof. André Rodrigues", link: "https://lasige.pt/member/andre-rodrigues/" },
        ],
        "research_line": ["IHCI"],
        "link": "https://forms.gle/FU6iEXWEcqJAzNi96"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Benchmarking Privacy of Machine Learning Models at Large-Scale",
        "num_students": 2,
        "description": `
            <p>The student will design, implement and publish an software benchmarking platform for training machine learning models (e.g. Vision Transformers) and then evaluating common accuracy and privacy metrics against them. The output of this work will be an essential part of performing research into techniques for developing privacy protections for trained models, without significantly harming accuracy and utility. The resulting platform will be run in the internal LASIGE computing cluster, and made available via an online open-source software repository. </p>
        `,
        mentors: [
            { name: "Prof. Alex Davidson", link: "https://lasige.pt/member/alex-davidson/" },
            { name: "Prof. Nuno Neves", link: "https://lasige.pt/member/nuno-neves/" },
        ],
        "research_line": ["DS2"],
        "link": "https://forms.gle/hsxLxJvXLerpxRyY8"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Preparing Clinical and Wearable Sensor Data for Multimodal Patient-centric learning in Parkinson’s Disease",
        "num_students": 3,
        "description": `
            <p>Parkinson’s Disease (PD) is a complex neurodegenerative disorder with heterogeneous motor and non-motor symptoms, variable disease progression, and fluctuating treatment responses. Real-world Parkinson’s datasets collected from medical information systems and wearable sensors can support patient-centric research, digital biomarker discovery, disease progression analysis, and clinical decision support. </p>

            <p>
            However, these datasets are often messy, incomplete, noisy, inconsistently formatted, and difficult to use directly for analysis or machine learning. Clinical records may include diagnosis information, visit dates, medication data, motor and non-motor assessments, and disease progression measures, while wearable sensors may capture movement, tremor, gait, sleep, activity, or physiological signals.
            </p>

            <p>
            The main objective of this project is to prepare a multimodal Parkinson’s Disease dataset composed of clinical records and wearable sensor data. Depending on the number of selected students, the work will be divided into complementary tracks focused on clinical data preparation, wearable sensor processing, and multimodal data integration.
            </p>
        `,
        mentors: [
            { name: "Prof. Diogo F. Soares", link: "https://lasige.pt/member/diogo-soares/" },
        ],
        "research_line": ["DSI", "HBI"],
        "link": "https://forms.gle/9tPxxyj73YZDcojX6"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "ArchiveChain - Archiving the Past, Enpowering the Future",
        "num_students": 1,
        "description": `
            <p>ArchiveChain (https://archivechain.pt) is a new Blockchain, created at LASIGE, that solves the energy consumption and centralisation issues of previous Blockchains such as Bitcoin and Ethereum. This is achieved by using a new type of consensus primitive, called Proof of Useful Space, where instead of relying on CPU power or Stake, pages from web archives such as the Wayback Machine and <a href="Arquivo.pt">Arquivo.pt</a> are used as the “fuel” that keeps the Blockchain working. This allows ArchiveChain, on one hand, to help decentralise web archival systems and reduce their costs and, on the other hand, to run smart contracts and cryptocurrencies in an sustainable and energy-efficient way. </p>

            <p>
            The goal of this project is to work on the ArchiveChain project and help improve it. First, we want to experimentally compare it with FileCoin, which is a similar Blockchain that is currently being used as cold storage backup of the Wayback Machine. We want to measure how long it takes to upload and download web archival pages in FileCoin and in ArchiveChain. ArchiveChain is expected to be much faster than FileCoin, allowing it to potentially replace web archival systems, instead of just serving as backup.
            </p>

            <p>
            After completing the previous objective, if there is still time in the internship, the second goal is to replace the communication layer of ArchiveChain with a more robust alternative like libp2p.
            </p>
        `,
        mentors: [
            { name: "Prof. Bernardo Ferreira", link: "https://lasige.pt/member/bernardo-ferreira/" },
        ],
        "research_line": ["DS2"],
        "link": "https://forms.gle/CiUnCE2z6WHakpYc8"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "ATIVA-ER: Designing an Emotion Regulation Mobile App for and with Neurodivergent Adults",
        "num_students": 2,
        "description": `
            <p>Neurodivergent adults often struggle with emotion regulation. Several exercises, such as mindfulness, journaling, and role-playing activities, have been effectively used to minimize such difficulties in this population. However, when delivered in therapeutic settings, these usually involve high costs, and cannot provide on-demand support. Digital Assistive Technologies (ATs), such as mobile applications, can be effective solutions to these limitations; yet, they are not always customized to neurodivergent users’ needs and preferences, which hinders their efficacy and adherence.  </p>

            <p>
            The goal of the ATIVA-ER project is to develop a tailored mobile application to provide on-demand emotion regulation support to neurodivergent adults (Autism, ADHD, and/or Intellectual Disability). By integrating this project, in this 2026 edition of the Summer of Research, the student(s) will:
            </p>
            <ul>
                <li> - Identify which emotion regulation exercises work best for neurodivergent adults;</li>
                <li> - Create a design space on how these exercises could be gamified when leveraged into a mobile application.</li>
            </ul>


            <p><strong>Expected Project Tasks</strong></p>

            <ul>
                <li> - Brief literature review on the:</li>
                <ol type="a">
                    <li> a) Most effective emotion regulation exercises for neurodivergent adults;</li>
                    <li> b) Most engaging and sensory-adapted gamification strategies for neurodivergent adults;</li>
                </ol>
                <li> - Combine the insights from 1a) and 1b) to create a set of design guidelines and illustrative examples (e.g., Figma) on how traditional emotion regulation exercises can be digitized and gamified into a mobile application.</li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Soraia M. Alarcão", link: "https://lasige.pt/member/soraia-meneses-alarcao/" },
            { name: "Prof. Vânia Mendonça", link: "https://lasige.pt/member/vania-mendonca/" },
            { name: "Isabel Trancoso", link: "https://lasige.pt/member/isabel-trancoso/" },
            { name: "Sofia Costa", link: "https://lasige.pt/member/sofia-costa/" },
        ],
        "research_line": ["IHCI"],
        "link": "https://forms.gle/K7XyFhnnr9hLoyJ98"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Precise Protocols: Integrating Refinement Types into FreeST",
        "num_students": 1,
        "description": `
            <p>Session types ensure that communication between distributed processes follows a strict protocol (e.g., “send an integer, then receive a string”). However, they often lack the granularity to express constraints on the values being exchanged. For instance, a protocol might require a “positive integer” or a “string that is a valid email address”.  </p>

            <p>
            This project aims to extend FreeST, a functional language with session types, with Refinement Types. Refinement types allow types to be constrained by logical predicates (e.g., {x:Int | x>0}). The goal is to allow developers to specify and statically verify more fine-grained properties of concurrent programs, reducing runtime errors in protocol-based communication.
            </p>

            <br>

            <p><strong>Expected Project Tasks</strong></p>

            </p>
            <ul>
                <li> - <strong>Literature Review:</strong> Study the basics of Linear Logic, Session Types, and the foundations of Refinement Types (e.g., Liquid Types).
                </li>
                <li> - <strong>Formal Specification:</strong> Define the syntax for refinement predicates within FreeST’s existing type system.
                </li>
                <li> - <strong>Implementation:</strong> Extend the FreeST compiler (written in Haskell) to support refinement type checking, likely by interfacing with an SMT solver.
                </li>
                <li> - <strong>Evaluation:</strong> Develop a suite of test cases (e.g., bounded buffers, authenticated communication) to demonstrate the increased expressivity and safety of the language.
                </li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Diana Costa", link: "https://lasige.pt/member/diana-costa/" },
            { name: "Prof. Vasco T. Vasconcelos", link: "https://lasige.pt/member/vasco-vasconcelos/" },
        ],
        "research_line": ["RSS"],
        "link": "https://forms.gle/G9Gyuxomm78fXic57"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Smart & Green Gaming: Using GenAI to Automate Mobile Game Energy Testing",
        "num_students": 2,
        "description": `
            <p>Mobile games are performance-intensive applications that can hugely impact smartphone battery life. While standard tools are able to measure energy consumption in traditional apps, games present a unique challenge: their interfaces are dynamic, visually driven, and difficult to automate using conventional code-based testing tools. This project will investigate how Generative AI models can be used to automatically navigate and test mobile games by interpreting raw screenshots and selecting the next valid action. The goal is to build a reproducible testing pipeline that measures the real-world battery impact of different game settings, such as graphics quality and refresh rate, and helps identify more energy-efficient gaming configurations.  </p>

            <strong>Expected project tasks and activities:</strong>

            <ul>
              <li>
                <strong>July</strong>
                <ul>
                  <li> - Learn how the existing ebserver testing framework and Android automation tools, such as ADB and UI Automator, work.</li>
                  <li> - Select a few (~1 to 3) target mobile games with different interaction styles (e.g., a puzzle game, a racing game, an RPG).</li>
                  <li> - Begin prompt engineering experiments to evaluate whether GenAI can accurately read game screenshots and generate basic navigation scripts.</li>
                </ul>
              </li>

              <li>
                <strong>August</strong>
                <ul>
                  <li> - Develop a Python-based pipeline where GenAI analyzes game screenshots and selects the next action (e.g., tap, swipe, or wait).</li>
                  <li> - Integrate these AI-generated actions into the automated testing framework.</li>
                  <li> - Test the system robustness to ensure the AI commands can run the gameplay loop for a specific amount of time without crashing or getting stuck.</li>
                </ul>
              </li>

              <li>
                <strong>September</strong>
                <ul>
                  <li> - Run repeated automated experiments across selected game configurations, such as high/low graphics settings and different refresh rates.</li>
                  <li> - Collect fine-grained energy data.</li>
                  <li> - Analyze the results and produce a final report detailing how the game settings affects the battery and how reliable the AI was in supporting the testing process with minimal manual intervention.</li>
                </ul>
              </li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Wellington Oliveira", link: "https://lasige.pt/member/wellington-oliveira/" },
        ],
        "research_line": ["RSS"],
        "link": "https://forms.gle/x3QJLi3xUKd6q2d3A"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Green Security for IoT: Benchmarking Lightweight Cryptography and Traditional Standards on Raspberry Pi",
        "num_students": 1,
        "description": `
            <p>As IoT and edge devices become more ubiquitous, balancing data security with limited hardware resources has become a big challenge. Traditional cryptographic algorithms can impose significant overhead on constrained devices, increasing execution time, memory usage, CPU load, and energy consumption. In response to this need, NIST (National Institute of Standards and Technology, https://www.nist.gov/) has choosen the Ascon family as a lightweight cryptography algorithm designed for limited environments.</p>

            <p>This project has the main objective of benchmark NIST lightweight cryptography against widely used traditional cryptographic standards on Raspberry Pi devices running Linux. Rather than inventing new algorithms, the project will replicate and adapt empirical benchmarking methodologies to evaluate the real-world resource footprint of selected cryptographic schemes. The main objective is to build an automated benchmarking pipeline that measures and compares execution time, memory footprint, CPU load, and energy consumption across different payload sizes and workloads.  </p>

            <br>

            <strong>Expected project tasks and activities</strong>

            <ul>
              <li>
                <strong>July</strong>
                <ul>
                  <li> - Set up the development and execution environment on Raspberry Pi devices running Linux.</li>
                  <li> - Integrate open-source cryptographic libraries to deploy selected algorithms, such as AES-GCM, ChaCha20-Poly1305, and Ascon-AEAD128.</li>
                  <li> - Define the experimental parameters, including varying message payloads, to ensure a fair and reproducible comparison.</li>
                </ul>
              </li>

              <li>
                <strong>August</strong>
                <ul>
                  <li> - Develop an automated testing script that executes encryption and decryption operations repeatedly to ensure statistical significance.</li>
                  <li> - Establish a data collection pipeline using OS-level profiling tools and power-measurement methods.</li>
                  <li> - Record raw data for execution time, RAM usage, CPU utilization, and energy usage into CSV datasets.</li>
                </ul>
              </li>

              <li>
                <strong>September</strong>
                <ul>
                  <li> - Clean and analyze the collected datasets to identify the scalability and resource trade-offs of each algorithm.</li>
                  <li> - Create visual charts comparing the cost of traditional algorithms versus lightweight cryptography across different payload sizes.</li>
                  <li> - Produce a final benchmarking report containing empirical evidence and practical guidelines to help IoT developers choose secure and energy-efficient cryptographic configurations.</li>
                </ul>
              </li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Wellington Oliveira", link: "https://lasige.pt/member/wellington-oliveira/" },
        ],
        "research_line": ["RSS", "CPS"],
        "link": "https://forms.gle/cT4arfuSoCbkSm4V7"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Cross-Modal Medical Image Synthesis",
        "num_students": 2,
        "description": `
            <p> The development of robust AI systems for medical imaging is constrained by the limited availability of large-scale, high-quality annotated datasets. As a result, medical image synthesis has become an important research direction, enabling the generation of realistic and diverse data to improve model performance and generalization. This research project aims to introduce key computer vision concepts applied to medical imaging, with a focus on understanding how AI models can work with and generate medical images. It will explore the use of neural networks for cross-modal image synthesis, particularly in translating between X-ray, CT, and PET images. The project will evaluate how well these approaches maintain anatomical consistency and capture clinically relevant information.</p>
        `,
        mentors: [
            { name: "Prof. Joana Santos", link: "https://lasige.pt/member/joana-santos/" },
        ],
        "research_line": ["HBI", "DSI"],
        "link": "https://forms.gle/LjMV1mZnHgpuiXpx9"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "GameNudges:  Embedding Physical Activity Data in Games to Nudge for Healthy Behaviors",
        "num_students": 2,
        "description": `
            <p> Promoting physical activity remains a critical public health challenge as sedentary lifestyles become increasingly prevalent. While digital tracking apps are widely used, their long-term effectiveness is often limited by the cognitive demands they place on users, frequently leading to early abandonment. To address this, we propose an approach that integrates behavioral nudges into gaming, an activity that people are already intrinsically motivated to pursue. Rather than introducing new routines, this project focuses on embedding nudges directly into the mechanics and narratives of popular commercial games, by leveraging real-world behavioral data.</p>

            <p>The focus of this internship is the development of a game mod that transforms real-world step counts into meaningful in-game influences (e.g., by walking more, the player unlocks new abilities). You will collaborate on the development of a mod for a commercial game (Minecraft, Skyrim, Brawl Stars, or other games with modding support); work on the technical integration of fitness data from platforms like Google Fit; and assist in evaluating their impact on physical activity levels and player experience through user studies. </p>
        `,
        mentors: [
            { name: "Prof. Diogo Branco", link: "https://lasige.pt/member/diogo-branco/" },
            { name: "David Gonçalves", link: "https://lasige.pt/member/david-goncalves/" },
        ],
        "research_line": ["IHCI"],
        "link": "https://forms.gle/Gm1Tv1ycbyiCfGhKA"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Personalized AI Stories to Improve Collaboration in Parkinson's Disease",
        "num_students": 2,
        "description": `
            <p>In chronic care, particularly for progressive disease like Parkinson’s, the quality of communication between patients and doctors is vital. Currently, clinical appointments often rely on memory and recall of the past six months, which can be unreliable. While many patients use technology to track their symptoms, the resulting data is often presented in dashboards or text notes that lack the patient's personal context. This can lead to a data story that feels out of the patient's control. We aim to change this by moving from the data telling the story to the person using the data to tell their story.</p>

            <p>This internship focuses on developing a personalized AI companion (e.g., a chatbot) designed to help patients co-construct and manage their own narratives. Rather than just showing trends, this tool empowers patients to structure their day-to-day experiences and maintain control over what is shared with clinicians. You will help develop a prototype that transforms data collected into structured, personalized stories. The project includes a user study to evaluate how this tool impacts patient agency, confidence, and clinical relevance. </p>
        `,
        mentors: [
            { name: "Prof. Diogo Branco", link: "https://lasige.pt/member/diogo-branco/" },
        ],
        "research_line": ["IHCI", "HBI"],
        "link": "https://forms.gle/Y5LwnqAotCsRfbFA9"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Outdoor Cooperative Flight with Two Drones",
        "num_students": 2,
        "description": `
            <p>This project will move an existing cooperative multi-drone system from Gazebo simulation to real outdoor flights. The work includes assembling and integrating onboard cameras, onboard computers, and communication modules; deploying the existing simulation code on the real drone platforms; and conducting experimental flights with two drones flying in tandem formation. The goal is to validate cooperative flight behaviours in real conditions and identify the practical challenges involved in outdoor deployment.</p>
        `,
        mentors: [
            { name: "Prof. Luis M. Pinto", link: "https://lasige.pt/member/luis-pinto/" },
        ],
        "research_line": ["CPS"],
        "link": "https://forms.gle/V2swhhoRGgBhX99h6"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Agentic AI for ROS-Based Robot Control",
        "num_students": 2,
        "description": `
            <p>This project explores the use of LLM-based agents to control robots through ROS. The student will develop an agent capable of interpreting high-level natural language commands and translating them into structured robot actions. Example commands include: “move to X Y Z”, “go home if battery is below 20%”, or “explore until your camera finds a person”. The project will investigate how agentic AI can interact safely with robot capabilities, sensor data, and mission constraints.</p>
        `,
        mentors: [
            { name: "Prof. Luis M. Pinto", link: "https://lasige.pt/member/luis-pinto/" },
        ],
        "research_line": ["CPS"],
        "link": "https://forms.gle/EsRJbp9aZAQ7WnT16"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Cooperative Drone Payload Transport in Simulation",
        "num_students": 2,
        "description": `
            <p>This project focuses on the simulation and control of two drones cooperatively transporting a suspended payload. A Gazebo simulation already exists where two drones move in tandem, but the oscillation of the payload must be characterized and minimized. The student will model payload oscillations, design control strategies to reduce them, and evaluate the resulting system in simulation. The goal is to improve the stability and reliability of cooperative aerial payload transport.</p>
        `,
        mentors: [
            { name: "Prof. Luis M. Pinto", link: "https://lasige.pt/member/luis-pinto/" },
        ],
        "research_line": ["CPS"],
        "link": "https://forms.gle/xnAiEBS7XFi2v2666"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "What is Wrong with my Logic Model?  - Exploring Satisfiability Modulo Theories (SMT) to identify reasons of inconsistency",
        "num_students": 1,
        "description": `
            <p>Computational Logic Models are used to model complex biological processes, like the life cycle of a cell, allowing the reproduction of known behaviours, testing hypotheses, and making predictions. However, as new experimental data becomes available, it becomes necessary to assess whether the models continue to be consistent with the data. If a model is not consistent, i.e., if a model cannot reproduce existing data, we need to identify possible reasons for the inconsistency.</p>
            <p>In the context of this project, a logical model, represented by a graph, is a set of nodes representing biological compounds that can have a value true or false (active or inactive), and a set of edges representing interactions between compounds. Nodes have regulatory functions (Boolean functions) associated with them that define how the values of the corresponding node change in time.</p>
            <p>When a model is inconsistent with a given set of experimental observations, the model needs to be repaired, which is a difficult task due to the number of possible combinations that one can change the model (changing regulatory functions, adding or removing interactions between compounds, etc.). Repairing an inconsistent model is usually a manual task, performed by a modeller, and thus prone to error. This project aims to explore the use of Satisfiability Modulo Theories (SMT) to assess whether a Logic model is consistent with a given set of data, and identify possible causes in case of inconsistency. When repairing an inconsistent model, we want to retrieve information about possible reasons for the inconsistency that can guide the repair task and make as few changes to the model as possible. Moreover, when checking the consistency, we must consider different update schemes, such as synchronous and asynchronous, and incomplete experimental observations, i.e., observations with missing values. This project aims to improve the capabilities and efficiency of a model revision tool - ModRev - openly available and implemented in C++ and Python. </p>

            <strong>Expected project tasks and activities</strong>

            <ul>
              <li>
                <strong>July</strong>
                <ul>
                  <li> - Learn how the existing ModRev tool works, focusing on the verification of consistency.</li>
                  <li> - Get familiar with Satisfiability Modulo Theories.</li>
                  <li> - Develop a first approach just to check the consistency of a model given a set of observations.  </li>
                </ul>
              </li>

              <li>
                <strong>August</strong>
                <ul>
                  <li> - Improve the approach by identifying (minimal) causes in case of inconsistency.</li>
                  <li> - Integrate the developed approach within ModRev (C++ or Python).</li>
                  <li> - Test and compare the capabilities of the new approach with the one already implemented within ModRev.</li>
                </ul>
              </li>

              <li>
                <strong>September</strong>
                <ul>
                  <li> - Run repeated automated experiments with different models and observations using the new and old approaches for a consistency check.
                  </li>
                  <li> - Collect results and compare the different approaches in different scenarios.</li>
                  <li> - Analyse the results and produce a final report detailing how the use of SMT can affect the performance of a model revision tool.</li>
                </ul>
              </li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Filipe Gouveia", link: "https://lasige.pt/member/filipe-gouveia/" },
        ],
        "research_line": ["RSS", "DSI", "HBI"],
        "link": "https://forms.gle/vB3zfpQL88pswzXB6"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Smart development of Machine Learning pipelines",
        "num_students": 1,
        "description": `
            <p>The adoption of Machine Learning (ML) has been rapidly increasing over the last decade, and multiple ML frameworks and libraries have been released, making the development of ML-based applications widely accessible. To develop an ML-based application, an ML pipeline, a sequence of ML operations to be executed, is defined. These operations can be pre-processing techniques, like data transformation, feature engineering, and feature selection, choosing the model and parametrising it, and evaluating the model. ML pipelines are usually manually designed by experts through trial-and-error processes, where different configurations are tried. This can be an onerous task. Moreover, ML pipelines can contain domain-specific defects. For example, a common method used in ML pipelines is to shuffle the dataset and split it into a train and test set. This could generate undesirable results if the dataset contains time-series data. The goal of this project is to make a first step in defining safer and correct ML pipelines. This project aims to identify pre-requisites and post-conditions of different ML operators, and implement corresponding constraints in the Aeon language, supporting the synthesis of ML pipelines.</p>

            <strong>Expected project tasks and activities</strong>

            <ul>
              <li>
                <strong>July</strong>
                <ul>
                  <li> - Getting familiar with Aeon Language and how its program synthesis module works.</li>
                  <li> - Select different Machine Learning operators to be considered in this work.</li>
                  <li> - Start identifying properties of the selected operators that could be defined within Aeon.  </li>
                </ul>
              </li>

              <li>
                <strong>August</strong>
                <ul>
                  <li> - Integrate a mechanism to ensure the identified properties within Aeon (SMT constraints / Liquid Types / Type Refinement).</li>
                  <li> - Identify different Machine Learning pipelines (correct and incorrect).</li>
                  <li> - Evaluate the correctness of the approach using sequences of ML operators.</li>
                </ul>
              </li>

              <li>
                <strong>September</strong>
                <ul>
                  <li> - Run different experiments and collect results data. </li>
                  <li> - Analyse the results and produce a final report detailing how the correctness of Machine Learning pipelines can be achieved with the proposed approach.</li>
                </ul>
              </li>
            </ul>
        `,
        mentors: [
            { name: "Prof. Filipe Gouveia", link: "https://lasige.pt/member/filipe-gouveia/" }, 
            { name: "Prof. Alcides Fonseca", link: "https://lasige.pt/member/alcides-fonseca/" },
        ],
        "research_line": ["RSS", "DSI"],
        "link": "https://forms.gle/RTo3utUYjqmbhZL86"
    },
    

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Characterization of Gait in Parkinson’s Disease",
        "num_students": 1,
        "description": `
            <p>People with neurological conditions, such as Parkinson’s Disease, frequently present abnormal gait patterns that serve as critical indicators of disease progression. This internship focuses on exploring and characterizing the DataPark dataset, an extensive clinical platform containing data from over 2,500 patients. The research aims to characterize the variations in how individuals walk across two distinct environments: controlled laboratory settings and free-living. You will work with accelerometry data collected from sensors placed on the wrist and lower back. By analyzing these patterns, we seek to understand the correlations between gait characteristics and clinical variables, such as the specific stage of the disease.</p>
        `,
        mentors: [
            { name: "Prof. Diogo Branco", link: "https://lasige.pt/member/diogo-branco/" },
            { name: "Prof. Tiago Guerreiro", link: "https://lasige.pt/member/tiago-guerreiro/" },
        ],
        "research_line": ["HBI", "IHCI"],
        "link": "https://forms.gle/J4vzspauv4aJ8Qn89"
    },
        

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Haptic Teleoperation for Collecting Robot Manipulation Demonstrations",
        "num_students": 1,
        "description": `
            <p>Robotic manipulation systems increasingly rely on high-quality demonstrations to learn useful and generalizable skills. However, collecting such demonstrations through conventional teleoperation interfaces can be unintuitive, tiring, and may result in unnatural robot motions. The Haply Inverse3 provides a direct 3D physical control interface, allowing the operator to guide robot end-effector motion through natural hand movements. This project investigates the use of a Haply Inverse3 haptic device as an intuitive interface for human-guided robot demonstration collection.</p>

            <p>The student will develop a small teleoperation pipeline where a human operator controls a simulated robot end-effector using the haptic device. The system will map the user’s hand motion to robot motion, record demonstration trajectories, and evaluate the quality and usability of the collected data in simple manipulation-related tasks such as reaching, object approach, and target placement using Franka Emika Research 3 robot arm.</p>

            <pThis summer project will focus on building the haptic teleoperation component and studying whether it can produce smooth, usable, and learning-relevant demonstrations.</p>

            <p>Expected outcomes include a working haptic teleoperation prototype, validation on a real robot for simple tasks, a small dataset of teleoperated demonstrations, and an evaluation report analyzing task success, completion time, trajectory smoothness, and usability.</p>
        `,
        mentors: [
            { name: "Sajjad Hekmat", link: "https://lasige.pt/member/sajjad-hekmat/" },
            { name: "Prof. João Bimbo", link: "https://lasige.pt/member/joao-bimbo/" },
        ],
        "research_line": ["DSI"],
        "link": "https://forms.gle/vnue6AirPmjhGnLLA"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Assume Nothing. Context is Everything. When knowing it happened is not enough: LLM-driven lab outcome contextualisation for clinicalknowledge graphs",
        "num_students": 1,
        "description": `

            <strong>A graph that remembers — but doesn't understand</strong>
            <p>Recent work introduced a framework for building Temporal Knowledge Graphs (TKGs) from Electronic Health Records (EHRs). Using a clinical dataset, a graph is constructed where every patient is represented as a set of timestamped facts: diagnoses, procedures, prescriptions, and lab events, each linked to a biomedical ontology. The result is a rich, symbolic patient representation with over 27 million temporal facts across ~60,000 hospital stays.</p>

            <br>

            <strong>Labs were done. So what? </strong>
            <p>In the current TKG, a lab event is represented as: Patient → hasLabEvent → pHAnalysis @ timestamp. The graph knows the test was done — a valuable insight in itself — but does not know whether the result fell within the normal range, was dangerously low, or critically high. It records that something happened without capturing what it means, leaving each patient's representation incomplete.</p>
            <p>The core problem: existence may not be enough to establish meaning. The values are in the data, they just never surface into the graph representation.</p>

            <br>

            <strong>Give the graph something to say about what it saw</strong>
            <p>This project enriches the patient representation by adding an LLM-driven outcome node to every lab event. A new node that captures the clinical interpretation of the result. Rather than a binary flag, outcomes are classified into an HL7-OBX.8-aligned schema: normal, low, high, critical low, or critical high, covering the full range of clinical significance.</p>
            <p>To attach the outcome, we reify the lab event: instead of a direct edge from patient to ontology class, we introduce an intermediate instance node for the event itself. This node connects to the ontology, carries the temporal stamp, and links to an outcome node. The patient representation becomes: Patient → hasLabEvent → L2 → rdf:type → [LOINC class] and L2 → hasOutcome → [Abnormal:High]. Each patient is now described not just by what tests were done and when, but by what those tests revealed, a richer, more clinically faithful portrait. Clean, modular, and backwards-compatible with the existing TKG design.</p>

            <br>

            <strong>Ontologies know the test. The LLM reads the result.</strong>
            <p>Ontologies such as LOINC offer structured descriptions of clinical concepts, including what each test measures and its expected units. For each lab event, we construct a structured prompt containing the LOINC concept definition and the patient's raw result value. This context is fed to a large language model, which classifies the outcome into the HL7-OBX.8 schema. Using LOINC as the grounding source means the LLM reasons over a  well-defined clinical standard.</p>

            <br>

            <strong>Does a richer patient representation actually help? </strong>
            <p>The evaluation has two layers. First, we validate the LLM classifier itself: on a held-out set of events, we compare the LLM-assigned labels to expected LOINC-based outcomes to measure classification accuracy. Second, we evaluate the impact on downstream tasks, comparing KG embedding and GNN models trained on the original TKG versus the outcome-enriched TKG on the predictive task of ICU readmission prediction. </p>


            <br>

            <strong>Taskplan</strong>

            <strong>Literature review & setup - 1 week </strong>
            <p>- Study the base TKG paper, LOINC structure, HL7 interpretation codes, and MIMIC-III lab schema. Set up the environment. </p>

            <strong>Lab event extraction & pre-processing - 1 week</strong>
            <p>Extract lab events from MIMIC-III, map to LOINC concepts, collect raw values, units and available reference ranges. </p>

            <strong>LOINC-guided LLM outcome classifier - 2 weeks </strong>
            <p>Design and implement the prompt pipeline feeding LOINC definitions, raw values and reference ranges to an LLM to produce HL7-aligned outcome labels. </p>

            <strong>KG integration & validation - 2 weeks </strong>
            <p>Integrate outcome nodes into the TKG. Validate classifier output against clinician-assigned MIMIC-III interpretation flags. </p>

            <strong>Downstream evaluation & write-up - 2 weeksaskplan</strong>
            <p>Compare KG embedding / GNN performance with and without outcome nodes on a predictive task. Write up findings.</p>
        `,
        mentors: [
            { name: "Ricardo M. S. Carvalho", link: "https://lasige.pt/member/ricardo-carvalho/" },
        ],
        "research_line": ["HBI", "DSI"],
        "link": "https://forms.gle/jimdw75Kyvsa76X47"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "A Recommender System for Biological Control Agents in Agriculture",
        "num_students": 1,
        "description": `
            <p>Crop diseases caused by bacteria and fungi are a major threat to global food security, leading to significant agricultural losses. While chemical pesticides have traditionally been used to combat these diseases, their negative impact on the environment and human health has driven the need for more sustainable solutions. Biological control agents (BCAs) offer a promising alternative. These beneficial microbes can inhibit plant pathogens without the harmful effects of chemical pesticides. There are several products in the market, and for farmers it may be difficult to know what to use in each crop. Thus, the goal of this project is to develop a recommender system of commercial BCAs for farmers. </p>

            <strong>Expected project tasks and activities</strong>
            <p>- Dataset collection: information gathering on database of microbial BCAs that are commercially available (Nacional and International)</p>
            <p>- Implementation of the recommender system</p>
            <p>- Integration with the PlantPathoRec project (https://plantpathorec.campus.ciencias.ulisboa.pt/)</p>
        `,
        mentors: [
            { name: "Prof. Márcia Barros", link: "https://lasige.pt/member/marcia-barros/" },
        ],
        "research_line": ["DSI"],
        "link": "https://forms.gle/ZdxddZSYafbU1h1x9"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "My AI Mirror: Designing Self-Awareness Tools for Youth AI Interactions",
        "num_students": 1,
        "description": `
            <p>Young people across Europe are rapidly adopting AI chatbots for learning, decision-making, emotional support, and daily tasks. Recent research reveals concerning patterns: heavy chatbot use correlates with increased emotional dependence and reduced critical thinking, while younger users (17–25) show the highest vulnerability to cognitive offloading. Yet, unlike screen time or social media, where digital wellbeing tools like Screen Time and RescueTime help users build self-awareness, no equivalent exists for AI interactions. Young people have no way to see, understand, or reflect on how they engage with AI.</p>

            <p>The core idea is to co-design and develop, with young people, a reflection dashboard that helps them understand their own LLM usage patterns. What would it track? Not just time-on-task, but richer dimensions: cognitive offloading patterns (did you ask the AI to do or help you learn?), topic sensitivity (are you sharing personal/emotional content?), dependency signals (are you checking with AI before making decisions you used to make alone?), and critical engagement (did you question or verify AI outputs?).</p>

            <strong>Expected project tasks and activities</strong>
            <p>1. Co-design workshops with youth</p>
            <p>2. "Provotype" development</p>
            <p>3. Design probe study</p>
        `,
        mentors: [
            { name: "Prof. Tiago Guerreiro", link: "https://lasige.pt/member/tiago-guerreiro/" },
            { name: "Prof. Rúben Gouveia", link: "https://lasige.pt/member/ruben-gouveia/" },
            { name: "Filipa Brito", link: "https://lasige.pt/member/filipa-brito/" },

        ],
        "research_line": ["IHCI"],
        "link": "https://forms.gle/pQ2YAf1cjhTeKMtH9"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Resolving Conflicting Evidence in Retrieval-Augmented Generation: Does Knowledge Graph Context Improve LLM Reasoning?",
        "num_students": 2,
        "description": `
            <p>This project investigates whether incorporating structured knowledge graph (KG)-derived context improves the ability of large language models to answer questions under conflicting retrieval conditions. Students will build a retrieval-augmented generation (RAG) system in which the model is provided with natural-language evidence containing deliberately introduced contradictions between retrieved statements. On top of this conflicting evidence, additional contextual information derived from a knowledge graph (e.g., Wikidata-based facts expressed as triples or sentences) is injected into the prompt.</p>

             <br>

            <strong>Taskplan</strong>
            <p>The goal is to evaluate whether KG-derived context helps models resolve or better manage conflicting information in retrieved evidence. Students will compare a standard setup against a KG-augmented version, analysing differences in answer accuracy, stability under conflicting inputs, and susceptibility to hallucination or unsupported conclusions. This setup allows a controlled study of how structured knowledge influences reasoning in RAG systems when the available evidence is inconsistent or ambiguous.</p>

        `,
        mentors: [
            { name: "Prof. Cátia Pesquita", link: "https://lasige.pt/member/catia-pesquita/" },
            { name: "Laura Balbi", link: "https://lasige.pt/member/laura-balbi/" },
        ],
        "research_line": ["DSI"],
        "link": "https://forms.gle/B4eNqiNrKx4hnh2u7"
    },


    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


    {
        "title": "Strategies for Adaptive Gradient Descent",
        "num_students": 2,
        "description": `
            <p>Neural networks have revolutionized modern computing, but it is difficult to train them. In this project, the student will test different strategies to improve the training of neural networks, including changes of batch size, learning rate and others. Neural networks have revolutionized modern computing, but training them effectively remains challenging. Their performance is highly sensitive to choices such as batch size, learning rate, optimizer, initialization strategy, activation function, regularization method, and network architecture. In this project, the student will investigate different strategies to improve the training of neural networks. The work will include designing and training neural network models, systematically varying key hyperparameters such as batch size and learning rate, and comparing the effects on convergence speed, stability, training loss, validation accuracy, and generalization performance. The student will also explore additional techniques such as learning rate scheduling, early stopping, dropout, batch normalization, weight decay, and different optimization algorithms. Experiments will be conducted using benchmark datasets, and results will be analyzed to identify which strategies lead to more efficient and reliable training. The project aims to provide practical insight into how neural networks can be trained more effectively and to help the student develop skills in experimental design, model evaluation, and deep learning implementation.</p>

            <br>

            <strong>Expected project tasks and activities</strong>
            <p>Train different neural nets on MNIST, MNIST Fashion, Cifar-100.</p>
        `,
        mentors: [
            { name: "Prof. Márcia L. Baptista", link: "https://lasige.pt/member/marcia-l-baptista/" },
        ],
        "research_line": ["CPS"],
        "link": "https://forms.gle/35YdkFkbWQ1dVSEh6"
    },
];