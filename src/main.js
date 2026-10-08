import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="min-h-screen bg-slate-100 py-8">
    
    <section
  id="resume"
  class="mx-auto min-h-[297mm] w-[210mm] bg-white px-14 py-12 text-slate-800 shadow-lg"
>

      <!-- HEADER -->
      <header class="border-b-2 border-slate-800 pb-5 text-center">
        
        <h1 class="text-3xl font-bold tracking-wide">
          SNEHA
        </h1>

        <p class="mt-1 text-base font-semibold">
          Full Stack Developer | MERN Stack
        </p>

        <div class="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs">
          
          <a
            href="mailto:snehachristobher@gmail.com"
            class="underline"
          >
            snehachristobher@gmail.com
          </a>

          <span>|</span>
          <span>+91 8610515670</span>
          <span>|</span>

          <a
            href="https://www.linkedin.com/in/snehachristobher"
            target="_blank"
            class="underline"
          >
            LinkedIn
          </a>

          <span>|</span>

          <a
            href="https://github.com/snehachristobher-pixel"
            target="_blank"
            class="underline"
          >
            GitHub
          </a>

          <span>|</span>
          <span>Tamil Nadu, India</span>

        </div>
      </header>


      <!-- CAREER OBJECTIVE -->
      <section class="mt-6">

        <h2 class="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider">
          CAREER OBJECTIVE
        </h2>

        <p class="mt-3 text-sm leading-6">
          Aspiring Full Stack Developer with hands-on experience building
          responsive web applications using React.js, Node.js, Express.js,
          and MongoDB. Seeking an opportunity to apply my technical skills,
          contribute to real-world projects, and grow as a software developer.
        </p>

      </section>


      <!-- TECHNICAL SKILLS -->
      <section class="mt-6">

        <h2 class="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider">
          TECHNICAL SKILLS
        </h2>

        <div class="mt-3 space-y-1.5 text-sm leading-6">

          <p>
            <span class="font-semibold">Languages:</span>
            HTML5, CSS3, JavaScript (ES6+)
          </p>

          <p>
            <span class="font-semibold">Frontend:</span>
            React.js, Tailwind CSS, Responsive Web Design
          </p>

          <p>
            <span class="font-semibold">Backend:</span>
            Node.js, Express.js, REST APIs
          </p>

          <p>
            <span class="font-semibold">Database:</span>
            MongoDB, Mongoose
          </p>

          <p>
            <span class="font-semibold">Tools:</span>
            Git, GitHub, VS Code, Postman, Vite
          </p>

        </div>

      </section>


      <!-- PROJECTS -->
      <section class="mt-6">

        <h2 class="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider">
          PROJECTS
        </h2>


        <!-- PROJECT 1 -->
        <article class="mt-4">

          <div class="flex items-baseline justify-between gap-4">

            <h3 class="text-sm font-bold">
              Flight Booking & Reservation System
            </h3>

            <div class="whitespace-nowrap text-xs">

              <a
                href="https://github.com/snehachristobher-pixel/Flight-Booking-System"
                target="_blank"
                class="underline"
              >
                GitHub
              </a>

              <span>|</span>

              <a
                href="https://flightbookingsystem-skyjourney.netlify.app"
                target="_blank"
                class="underline"
              >
                Live Demo
              </a>

            </div>

          </div>

          <p class="mt-1.5 text-sm leading-5">

            <span class="font-semibold">Tech Stack:</span>
            React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST API

          </p>

          <p class="text-sm leading-6">

            Built a full-stack flight booking application with flight search,
            authentication, booking workflows, and database-based data management.

          </p>

        </article>


        <!-- PROJECT 2 -->
        <article class="mt-4">

          <div class="flex items-baseline justify-between gap-4">

            <h3 class="text-sm font-bold">
              Notes Management Application
            </h3>

            <div class="whitespace-nowrap text-xs">

              <a
                href="https://github.com/snehachristobher-pixel/Notes-App"
                target="_blank"
                class="underline"
              >
                GitHub
              </a>

              <span>|</span>

              <a
                href="https://projectnotesapp123.netlify.app/"
                target="_blank"
                class="underline"
              >
                Live Demo
              </a>

            </div>

          </div>

          <p class="mt-1.5 text-sm leading-5">

            <span class="font-semibold">Tech Stack:</span>
            React.js, JavaScript, Tailwind CSS, Local Storage

          </p>

          <p class="text-sm leading-6">

            Developed a responsive notes application with create, edit, search,
            tag, pin, archive, and trash features with persistent local storage.

          </p>

        </article>


        <!-- PROJECT 3 -->
        <article class="mt-4">

          <div class="flex items-baseline justify-between gap-4">

            <h3 class="text-sm font-bold">
              Movie Review Application
            </h3>

            <div class="whitespace-nowrap text-xs">

              <a
                href="https://github.com/snehachristobher-pixel/Final-Movie-Review-Project"
                target="_blank"
                class="underline"
              >
                GitHub
              </a>

              <span>|</span>

              <a
                href="https://finalmoviewreview.netlify.app"
                target="_blank"
                class="underline"
              >
                Live Demo
              </a>

            </div>

          </div>

          <p class="mt-1.5 text-sm leading-5">

            <span class="font-semibold">Tech Stack:</span>
            React.js, Tailwind CSS, OMDb API, Local Storage

          </p>

          <p class="text-sm leading-6">

            Built a movie discovery application with API-based search, filtering,
            pagination, movie details, and a persistent personal review feature.

          </p>

        </article>

      </section>


      <!-- CERTIFICATIONS -->
      <section class="mt-6">

        <h2 class="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider">
          CERTIFICATIONS
        </h2>

        <ul class="mt-3 space-y-1.5 text-sm">

          <li>
            • Full Stack Development —
            <a
              href="https://drive.google.com/file/d/1_rB1-yiUNfJcIw1Y2HeXD_4p2nNr6xlO/view?usp=sharing"
              target="_blank"
              class="underline"
            >
              GUVI
            </a>
            | 2026
          </li>

          <li>
            • Web Developer Bootcamp — Udemy | 2025
          </li>

          <li>
            • Advanced Diploma in Java Programming — CSC Computer Education | 2024
          </li>

          <li>
            • Data Science & Analytics — HP LIFE | 2024
          </li>

        </ul>

      </section>


      <!-- EDUCATION -->
      <section class="mt-6">

        <h2 class="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider">
          EDUCATION
        </h2>

        <div class="mt-3 text-sm leading-6">

          <p class="font-semibold">
            M.A. English Literature
          </p>

          <p>
            The American College, Madurai | 2023
          </p>

        </div>

      </section>

    </section>

  </main>
`;
import html2pdf from "html2pdf.js";

const downloadButton = document.createElement("button");

downloadButton.textContent = "Download Resume PDF";

downloadButton.className = `
  fixed bottom-6 right-6
  rounded-lg bg-blue-600
  px-5 py-3
  text-sm font-semibold text-white
  shadow-lg
  hover:bg-blue-700
  transition
  cursor-pointer
`;

document.body.appendChild(downloadButton);

downloadButton.addEventListener("click", () => {
  const resume = document.getElementById("resume");

  const options = {
    margin: 0,
    filename: "Sneha_Resume.pdf",

    image: {
      type: "jpeg",
      quality: 0.98
    },

    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff"
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },

    enableLinks: true,

    pagebreak: {
      mode: ["css", "legacy"]
    }
  };

  html2pdf()
    .set(options)
    .from(resume)
    .save();
});
