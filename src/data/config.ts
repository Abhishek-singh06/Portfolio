const config = {
  title: "Abhishek Kumar Singh | Software Engineer",
  description: {
    long: "Explore the portfolio of Abhishek Kumar Singh, a Software Engineer and Full-Stack Developer from VIT Chennai building full-stack applications, AI-powered platforms, and real-world software solutions using React, Next.js, Node.js, FastAPI, databases, and modern web technologies.",
    short: "Software Engineer and Full-Stack Developer building modern web applications, AI-powered platforms, and real-world software solutions.",
  },
  keywords: [
    "Abhishek Kumar Singh",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Java",
    "JavaScript",
    "TypeScript",
    "AI",
    "Gemini API",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "VIT Chennai",
    "Web Development"
  ],
  author: "Abhishek Kumar Singh",
  email: "abhishek.k.singhs01@gmail.com",
  site: "https://github.com/Abhishek-singh06",

  // for github stars button
  githubUsername: "Abhishek-singh06",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/abhishekkumarsingh001",
    github: "https://github.com/Abhishek-singh06",
    leetcode: "https://leetcode.com/u/Abhishek_Kumar_Singh01/",
  },
};
export { config };
