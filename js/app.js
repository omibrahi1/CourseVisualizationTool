const majors = [
  {
    id: "cit",
    title: "Computer and Information Technology",
    image: "assets/CIT.jpg",
    prefix: "CIT / CNIT",
    description: "Manage applications, databases, systems, and IT solutions for organizations.",
    courses: [
      "CNIT 18000 - Introduction to Systems Development",
      "CNIT 25501 - Object-Oriented Programming",
      "CNIT 27200 - Database Fundamentals",
      "CNIT 28000 - Systems Analysis and Design",
      "CNIT 31500 - Systems Administration",
      "CNIT 32000 - Policy, Regulation, and Globalization in IT",
      "CNIT 34000 - Cybersecurity Fundamentals",
      "CNIT 37200 - Web Application Development",
      "CNIT 39200 - Enterprise Data Management",
      "CNIT 48000 - Managing IT Projects"
    ],
    jobs: ["Systems Analyst", "Application Developer", "Database Administrator", "IT Project Coordinator"]
  },
  {
    id: "cnit",
    title: "Computing Infrastructure and Network Engineering Technology",
    image: "assets/CNET.jpg",
    prefix: "CNIT",
    description: "Design, secure, and manage enterprise networks, servers, and cloud infrastructure.",
    courses: [
      "CNIT 17600 - Information Technology Architectures",
      "CNIT 18000 - Introduction to Systems Development",
      "CNIT 24200 - System Administration",
      "CNIT 25501 - Object-Oriented Programming",
      "CNIT 27000 - Cybersecurity Fundamentals",
      "CNIT 34200 - Advanced Systems Administration",
      "CNIT 34400 - Network Engineering Fundamentals",
      "CNIT 34500 - Internetwork Design and Administration",
      "CNIT 45500 - Network Security"
    ],
    jobs: ["Network Engineer", "Cloud Support Associate", "Systems Administrator", "Infrastructure Analyst"]
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    image: "assets/cyber.jpg",
    prefix: "CNIT / CIT",
    description: "Learn how to protect systems, analyze security risks, and respond to threats.",
    courses: [
      "CNIT 18000 - Introduction to Systems Development",
      "CNIT 24200 - System Administration",
      "CNIT 27000 - Cybersecurity Fundamentals",
      "CNIT 32000 - Policy, Regulation, and Globalization in IT",
      "CNIT 34000 - Cybersecurity Fundamentals",
      "CNIT 34400 - Network Engineering Fundamentals",
      "CNIT 45500 - Network Security",
      "CNIT 45600 - Cyber Forensics",
      "CNIT 45800 - Incident Response"
    ],
    jobs: ["Cybersecurity Analyst", "Security Operations Analyst", "Digital Forensics Technician", "Risk Analyst"]
  },
  {
    id: "data",
    title: "Data Analytics, Technologies and Applications",
    image: "assets/data.jpg",
    prefix: "CIT / CNIT",
    description: "Use data, databases, statistics, and visualization tools to solve problems.",
    courses: [
      "CNIT 18000 - Introduction to Systems Development",
      "CNIT 25501 - Object-Oriented Programming",
      "CNIT 27200 - Database Fundamentals",
      "CNIT 28000 - Systems Analysis and Design",
      "CNIT 38100 - Data Management",
      "CNIT 39200 - Enterprise Data Management",
      "CNIT 41800 - Data Analytics",
      "STAT 30100 - Elementary Statistical Methods",
      "CGT 27000 - Data Visualization Foundations"
    ],
    jobs: ["Data Analyst", "Business Intelligence Analyst", "Database Specialist", "Reporting Analyst"]
  },
  {
    id: "game",
    title: "Game Development",
    image: "assets/gamedev.jpg",
    prefix: "CGT",
    description: "Create interactive games, simulations, and digital experiences for different industries.",
    courses: [
      "CGT 14100 - Internet Foundations, Technologies and Development",
      "CGT 17208 - Graphics Communication and Spatial Analysis",
      "CGT 21500 - Introduction to Game Development",
      "CGT 24500 - Game Development Production",
      "CGT 35300 - Principles of Interactive and Dynamic Media",
      "CGT 35600 - Game Design and Development",
      "CGT 41100 - Contemporary Problems in Applied Computer Graphics",
      "CGT 45600 - Advanced Game Development"
    ],
    jobs: ["Game Designer", "Technical Artist", "Simulation Developer", "Level Designer"]
  },
  {
    id: "web",
    title: "Web Programming and Design",
    image: "assets/web.jpg",
    prefix: "CGT / CIT",
    description: "Build responsive websites and secure web applications using programming and design skills.",
    courses: [
      "CGT 14100 - Internet Foundations, Technologies and Development",
      "CGT 24200 - Fundamentals of Web Programming",
      "CIT 31200 - Advanced Web Design",
      "CNIT 25501 - Object-Oriented Programming",
      "CNIT 27200 - Database Fundamentals",
      "CNIT 37200 - Web Application Development",
      "CGT 35300 - Principles of Interactive and Dynamic Media",
      "CGT 41100 - Contemporary Problems in Applied Computer Graphics"
    ],
    jobs: ["Front-End Developer", "Web Developer", "UX Developer", "Full-Stack Developer"]
  }
];

const quizQuestions = [
  {
    question: "1. What do you enjoy the most?",
    options: [
      { text: "Designing websites and UI", major: "Web Programming and Design" },
      { text: "Analyzing data and trends", major: "Data Analytics, Technologies and Applications" },
      { text: "Working with systems and IT support", major: "Computer and Information Technology" }
    ]
  },
  {
    question: "2. What sounds most interesting?",
    options: [
      { text: "Stopping hackers and securing systems", major: "Cybersecurity" },
      { text: "Managing servers and networks", major: "Computing Infrastructure and Network Engineering Technology" },
      { text: "General IT and troubleshooting", major: "Computer and Information Technology" }
    ]
  },
  {
    question: "3. What type of work do you prefer?",
    options: [
      { text: "Creative and visual web work", major: "Web Programming and Design" },
      { text: "Technical infrastructure and systems", major: "Computing Infrastructure and Network Engineering Technology" },
      { text: "Working with data and reports", major: "Data Analytics, Technologies and Applications" }
    ]
  },
  {
    question: "4. What would you rather build?",
    options: [
      { text: "A website or web app", major: "Web Programming and Design" },
      { text: "A secure system", major: "Cybersecurity" },
      { text: "A data dashboard", major: "Data Analytics, Technologies and Applications" }
    ]
  },
  {
    question: "5. Which class topic sounds most interesting?",
    options: [
      { text: "HTML, CSS, Bootstrap, and responsive layouts", major: "Web Programming and Design" },
      { text: "Firewalls, risk, and incident response", major: "Cybersecurity" },
      { text: "Databases, systems, and IT project work", major: "Computer and Information Technology" }
    ]
  },
  {
    question: "6. What kind of workplace task sounds best?",
    options: [
      { text: "Improving how a website looks and works", major: "Web Programming and Design" },
      { text: "Setting up servers, networks, or cloud tools", major: "Computing Infrastructure and Network Engineering Technology" },
      { text: "Finding patterns in information", major: "Data Analytics, Technologies and Applications" }
    ]
  },
  {
    question: "7. What would you enjoy learning more about?",
    options: [
      { text: "JavaScript, design, and user experience", major: "Web Programming and Design" },
      { text: "Networking and cloud systems", major: "Computing Infrastructure and Network Engineering Technology" },
      { text: "Cyber defense tools", major: "Cybersecurity" }
    ]
  },
  {
    question: "8. What type of problems do you like solving?",
    options: [
      { text: "Design and layout problems", major: "Web Programming and Design" },
      { text: "Security vulnerabilities", major: "Cybersecurity" },
      { text: "System and network issues", major: "Computer and Information Technology" }
    ]
  },
  {
    question: "9. Which career sounds most interesting?",
    options: [
      { text: "Web Developer", major: "Web Programming and Design" },
      { text: "Security Analyst", major: "Cybersecurity" },
      { text: "Data Analyst", major: "Data Analytics, Technologies and Applications" }
    ]
  },
  {
    question: "10. What do you enjoy most?",
    options: [
      { text: "Creating things people can interact with", major: "Game Development" },
      { text: "Protecting systems and information", major: "Cybersecurity" },
      { text: "Keeping technology systems running", major: "Computing Infrastructure and Network Engineering Technology" }
    ]
  }
];

function getMajorByTitle(title) {
  return majors.find((major) => major.title === title);
}

function buildMajorCards() {
  const majorCards = document.getElementById("majorCards");
  const modalContainer = document.getElementById("modalContainer");

  majorCards.innerHTML = "";
  modalContainer.innerHTML = "";

  majors.forEach((major) => {
    majorCards.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <article class="card major-card">
          <img src="${major.image}" class="card-img-top" alt="${major.title} photo" />
          <div class="card-body d-flex flex-column">
            <span class="badge badge-purdue mb-2 align-self-start">${major.prefix}</span>
            <h3 class="card-title h5">${major.title}</h3>
            <p class="card-text">${major.description}</p>
            <button class="btn btn-dark mt-auto" data-bs-toggle="modal" data-bs-target="#modal-${major.id}" aria-label="View courses and jobs for ${major.title}">
              Explore This Major
            </button>
          </div>
        </article>
      </div>
    `;

    modalContainer.innerHTML += `
      <div class="modal fade" id="modal-${major.id}" tabindex="-1" aria-labelledby="label-${major.id}" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title h5" id="label-${major.id}">${major.title}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <p>${major.description}</p>

              <div class="accordion" id="accordion-${major.id}">
                <div class="accordion-item">
                  <h3 class="accordion-header" id="heading-courses-${major.id}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#courses-${major.id}" aria-expanded="true" aria-controls="courses-${major.id}">
                      Required Major Courses
                    </button>
                  </h3>

                  <div id="courses-${major.id}" class="accordion-collapse collapse show" aria-labelledby="heading-courses-${major.id}" data-bs-parent="#accordion-${major.id}">
                    <div class="accordion-body">
                      <ul>${major.courses.map(course => `<li>${course}</li>`).join("")}</ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="heading-jobs-${major.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#jobs-${major.id}" aria-expanded="false" aria-controls="jobs-${major.id}">
                      Possible Jobs
                    </button>
                  </h3>

                  <div id="jobs-${major.id}" class="accordion-collapse collapse" aria-labelledby="heading-jobs-${major.id}" data-bs-parent="#accordion-${major.id}">
                    <div class="accordion-body">
                      <ul>${major.jobs.map(job => `<li>${job}</li>`).join("")}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function buildQuiz() {
  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const number = index + 1;

    quizForm.innerHTML += `
      <fieldset class="mb-4">
        <legend class="h6">${question.question}</legend>

        <div class="row g-2">
          ${question.options.map((option, optionIndex) => {
            const major = getMajorByTitle(option.major);
            const inputId = `q${number}-option${optionIndex + 1}`;

            return `
              <div class="col-12 col-md-4">
                <input
                  type="radio"
                  class="btn-check"
                  name="q${number}"
                  id="${inputId}"
                  value="${major.id}"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark w-100 h-100 d-flex align-items-center justify-content-center" for="${inputId}">
                  ${option.text}
                </label>
              </div>
            `;
          }).join("")}
        </div>
      </fieldset>
    `;
  });
}

function scoreQuiz() {
  const scores = {
    cit: 0,
    cnit: 0,
    cyber: 0,
    data: 0,
    game: 0,
    web: 0
  };

  let answered = 0;

  quizQuestions.forEach((question, index) => {
    const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);

    if (selected) {
      scores[selected.value]++;
      answered++;
    }
  });

  const result = document.getElementById("quizResult");

  if (answered < quizQuestions.length) {
    result.className = "alert alert-danger mt-4";
    result.textContent = `Please answer all 10 questions. You answered ${answered}.`;
    result.classList.remove("d-none");
    return;
  }

  const bestMajorId = Object.keys(scores).reduce((best, current) =>
    scores[current] > scores[best] ? current : best
  );

  const bestMajor = majors.find((major) => major.id === bestMajorId);

  result.className = "alert alert-warning mt-4";
  result.innerHTML = `
    <strong>Recommended major:</strong> ${bestMajor.title}. 
    This result is based on the program that matched your answers the most.
  `;
  result.classList.remove("d-none");
}

function enableTooltips() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  buildMajorCards();
  buildQuiz();
  enableTooltips();

  document.getElementById("scoreQuiz").addEventListener("click", scoreQuiz);

  document.getElementById("resetQuiz").addEventListener("click", function () {
    document.getElementById("quizResult").classList.add("d-none");
  });
});