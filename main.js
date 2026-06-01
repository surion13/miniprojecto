const sections = [
  {
    id: "who-am-i",
    title: "WHO AM I ?",
    paragraphs: [
      "I Am a full-stack website developer specialized in ReactJS. Plus, I also know some WordPress front-end development with Elementor and WooCommerce.",
      "Programming is my passion, that's the reason I am working at the time of my academic career.",
      "Additionally, I like to play PC games and read story-type books in my leisure time which is kinda fun and relaxing!"
    ],
    buttonText: "SHOW MY PROJECTS",
    imagenes: [
      { src: "mobile/traje.jpeg", alt: "Samuel 1", clases: "hidden lg:block absolute top-32 left-[15%] w-36 -rotate-12 rounded-2xl drop-shadow-[-20px_-20px_20px_white]" },
      { src: "mobile/montaña.jpeg", alt: "Samuel 2", clases: "hidden lg:block absolute bottom-32 left-[8%] w-64 rotate-[8deg] z-20 rounded-3xl drop-shadow-[0px_0px_30px_white]" },
      { src: "mobile/fogata.jpeg", alt: "Samuel 3", clases: "hidden lg:block absolute top-1/2 right-[3%] w-72 -translate-y-1/2 rotate-[-15deg] rounded-3xl drop-shadow-[-20px_-20px_20px_white] opacity-80" }
    ]
  },
  {
    id: "habilidades",
    titulo: "MY SKILLS",
    experiencia: 4,
    cards: [
      { src: "mobile/html-svgrepo-com.svg", nombre: "HTML" },
      { src: "mobile/css-3-svgrepo-com.svg", nombre: "CSS" },
      { src: "mobile/javascript-svgrepo-com.svg", nombre: "JavaScript" },
      { src: "mobile/react-svgrepo-com.svg", nombre: "React" },
      { src: "mobile/next-js-svgrepo-com.svg", nombre: "Next.js" },
      { src: "mobile/node-js-svgrepo-com.svg", nombre: "Node.js" },
      { src: "mobile/tailwind-svgrepo-com.svg", nombre: "Tailwind" },
      { src: "mobile/mongodb-logo-svgrepo-com.svg", nombre: "MongoDB" },
    ]
  },
  {
    id: "additional-skills",
    titulo: "Additional Skills",
    cards: [
      { src: "mobile/bootstrap-svgrepo-com.svg", alt: "Bootstrap" },
      { src: "mobile/axios.svg", alt: "Axios" },
      { src: "mobile/redux-svgrepo-com.svg", alt: "Redux" },
      { src: "mobile/material-ui-svgrepo-com.svg", alt: "Material UI" },
      { src: "mobile/firebase-svgrepo-com.svg", alt: "Firebase" },
      { src: "mobile/wordpress-svgrepo-com.svg", alt: "WordPress" },
      { src: "mobile/framer-motion.svg", alt: "Framer Motion" },
    ]
  }
]

// --- WHO AM I ---
let whoAmISection = document.querySelector(`#${sections[0].id}`)

let imagenes = ""
for (let i = 0; i < sections[0].imagenes.length; i++) {
  imagenes += `<img src="${sections[0].imagenes[i].src}" alt="${sections[0].imagenes[i].alt}" class="${sections[0].imagenes[i].clases}" />`
}

let infoWhoAmI = `
  <section id="infografia" class="relative min-h-screen flex flex-col items-center justify-center dark:bg-[#0D1117] bg-white px-6 py-24 overflow-hidden">
    ${imagenes}
    
  <div class="relative z-10 flex flex-col items-center text-center max-w-3xl space-y-10">
      <h2 class="dark:text-[#E3FF6A] text-purple-500 text-6xl lg:text-8xl font-bold tracking-tighter">${sections[0].title}</h2>
      <div class="space-y-6 text-gray-400 text-lg lg:text-xl font-medium leading-relaxed px-4">
        <p>${sections[0].paragraphs[0]}</p>
        <p>${sections[0].paragraphs[1]}</p>
        <p>${sections[0].paragraphs[2]}</p>
      </div>
      <button class="dark:bg-[#E3FF6A] bg-purple-500 text-black px-12 py-4 rounded-full font-extrabold tracking-[0.2em] hover:scale-110 text-xl">
        ${sections[0].buttonText}
      </button>
    </div>
  </section>
`

whoAmISection.innerHTML = infoWhoAmI

// --- MY SKILLS ---
let skillsSection = document.querySelector(`#${sections[1].id}`)

let skillCards = ""

for (let i = 0; i < 4; i++) {
  skillCards += `
    <div class="flex items-center justify-center aspect-square rounded-3xl bg-[#1E293B]/40 border border-white/5 hover:bg-[#1E293B] transition-all group">
      <img src="${sections[1].cards[i].src}" alt="${sections[1].cards[i].nombre}" class="w-12 lg:w-16 transition-all duration-500" />
    </div>
  `
}

skillCards += `
  <div class="col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col items-center justify-center rounded-3xl bg-[#1E293B] border border-white/10 p-8 text-center shadow-2xl">
    <span class="text-7xl lg:text-8xl font-bold text-white">${sections[1].experiencia}</span>
    <p class="text-[#8892B0] text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mt-4 leading-tight">
      Years<br>Experience<br>Working
    </p>
    <button class="mt-8 rounded-full dark:bg-[#E3FF6A] bg-purple-500 px-6 py-2 text-[10px] font-bold text-black transition-transform hover:scale-105">
      DOWNLOAD MY CV
    </button>
  </div>
`

for (let i = 4; i < sections[1].cards.length; i++) {
  skillCards += `
    <div class="flex items-center justify-center aspect-square rounded-3xl bg-[#1E293B]/40 border border-white/5 hover:bg-[#1E293B] transition-all group">
      <img src="${sections[1].cards[i].src}" alt="${sections[1].cards[i].nombre}" class="w-12 lg:w-16 transition-all duration-500" />
    </div>
  `
}

let infoSkills = `
  <section class="max-w-6xl mx-auto px-6 py-24">
    <h2 class="text-center dark:text-[#E3FF6A] text-purple-500 text-5xl font-bold mb-16 tracking-tighter">${sections[1].titulo}</h2>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-6">
      ${skillCards}
    </div>
  </section>
`

skillsSection.innerHTML = infoSkills

// --- ADDITIONAL SKILLS ---
let additionalSection = document.querySelector(`#${sections[2].id}`)

let additionalCards = ""
for (let i = 0; i < sections[2].cards.length; i++) {
  additionalCards += `
    <img src="${sections[2].cards[i].src}" alt="${sections[2].cards[i].alt}" class="h-7 lg:h-9 w-auto" />
  `
}

let infoAdditional = `
  <div class="max-w-6xl mx-auto px-6 pb-24">
    <div class="rounded-4xl border border-white/5 bg-[#1E293B]/20 p-10 backdrop-blur-sm">
      <h3 class="text-center dark:text-[#E3FF6A] text-purple-500 text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase mb-12">
        ${sections[2].titulo}
      </h3>
      <div class="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
        ${additionalCards}
      </div>
    </div>
  </div>
`

additionalSection.innerHTML = infoAdditional



/**------------------------dark mode------------------------------ */
let botoncito = document.querySelector("#btndark");
let documento = document.querySelector("#todo");
console.log(documento)
console.log("Hola mundo")

function cambiarModo() {
  documento.classList.toggle("dark");
}

botoncito.addEventListener("change", cambiarModo);


console.log(botoncito)