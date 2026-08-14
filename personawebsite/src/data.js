export const PROFILE = {
  name: "Joshua Hanif",
  title: "Software Engineer",
  email: "hanifjoshua1@gmail.com",
  phone: "+1 (519) 716-4548",
  phoneHref: "tel:+15197164548",
  location: "Bedford, Nova Scotia",
  github: "https://github.com/jhaniff",
  linkedin: "https://www.linkedin.com/in/joshua-hanif",
  siteUrl: "https://jhaniff.github.io/Portfolio",
};

export const resumeHref = `${process.env.PUBLIC_URL || ""}/HanifResume.pdf`;
export const resumeLinkProps = {
  href: resumeHref,
  download: "Joshua-Hanif-Resume.pdf",
  type: "application/pdf",
};
export const profileImageSrc = `${process.env.PUBLIC_URL || ""}/profile.jpg`;

export const experience = [
  {
    company: "IBM",
    title: "Software QA Engineer",
    dates: "Jun 2026 – Present",
    bullets: [
      "Selected for IBM’s Quality Engineering track at the Client Innovation Center in Bedford, covering the testing lifecycle, test case design, defect management, and Agile/Scrum QA.",
      "Earned ISTQB Certified Tester and completed IBM coursework in software quality assurance.",
      "Building proficiency with enterprise QA tooling and processes ahead of client engagements.",
    ],
    tech: ["ISTQB", "Quality engineering", "Test strategy"],
  },
  {
    company: "Blaise Transit",
    title: "Software QA Analyst Intern",
    dates: "Jan 2026 – May 2026",
    bullets: [
      "Designed a Playwright + Appium (TypeScript) architecture across web, Android, and iOS that cut manual regression time by 90%.",
      "Wrote the mobile testing roadmap, including iOS provisioning and React Native selector risks, so the team could automate with fewer blockers.",
      "Solved shared-staging data collisions with dynamic user namespacing and API cleanup scripts, then documented a Dev/Staging/Prod test strategy.",
    ],
    tech: ["Playwright", "Appium", "TypeScript"],
  },
  {
    company: "Johnson Controls",
    title: "Software Automation Developer Co-op",
    dates: "Jun 2022 – Sep 2023",
    bullets: [
      "Built a Selenium + Appium + TestNG framework in Java that reduced flaky failures by 30%.",
      "Maintained Jenkins pipelines for build, test, and reporting so QA feedback landed in CI instead of a spreadsheet.",
      "Extended Appium coverage to a Flutter iOS installer app and led feature testing across security devices, web portals, and Android.",
    ],
    tech: ["Selenium", "Appium", "TestNG", "Jenkins", "Java"],
  },
];

export const projects = [
  {
    name: "yuMeet Social App",
    problem:
      "York University students were splitting campus life across Discord, group chats, and email. There was no single place for events, messaging, and discovery on iOS and Android.",
    solution:
      "I led full-stack delivery: React Native clients, Express microservices, JWT auth, WebSocket chat, Redis caching, and BullMQ notifications, deployed with Docker on DigitalOcean Kubernetes.",
    impact:
      "Realtime paths responded ~40% faster after Redis. The same codebase shipped to the App Store and Google Play.",
    tech: ["React Native", "TypeScript", "Express", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    deepDivePath: "/portfolio/yumeet",
  },
  {
    name: "SalonAI",
    problem:
      "Stylists kept client history in spreadsheets and email, so recommendations felt generic and booking follow-up was manual.",
    solution:
      "I built a Next.js + Flask platform around a fine-tuned LLaMA model, with Redis caching, PostgreSQL, and automated scheduling APIs in Docker.",
    impact:
      "Booking follow-up dropped by about 60%, and consultation satisfaction landed at 4.8★ while keeping recommendation latency in check.",
    tech: ["Next.js", "Flask", "Python", "LLaMA", "Redis", "PostgreSQL", "Docker"],
    deepDivePath: "/portfolio/salonai",
  },
  {
    name: "Enterprise QA Automation",
    problem:
      "Johnson Controls security releases stalled on fragmented scripts and multi-day manual regression across firmware, web, and mobile.",
    solution:
      "I unified Selenium, Appium, TestNG, and Cypress into shared page-object libraries, then parallelized them in Jenkins across browsers and devices.",
    impact:
      "Flaky failures fell 30%, 120+ scenarios ran in CI, and the regression gate shrank from about 12 hours to a few.",
    tech: ["Selenium", "Appium", "Cypress", "TestNG", "Jenkins", "Java"],
    deepDivePath: "/portfolio/automation",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "SQL", "Swift"],
  },
  {
    title: "Web & mobile",
    items: ["React", "React Native", "Node.js", "Express", "Next.js", "Flask", "PostgreSQL", "Redis"],
  },
  {
    title: "QA & automation",
    items: ["Playwright", "Appium", "Selenium", "Cypress", "TestNG", "ISTQB", "Jenkins"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "DigitalOcean", "Git", "CI/CD", "Linux"],
  },
];

export const navSections = [
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
  { label: "Contact", hash: "contact" },
];
