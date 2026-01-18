import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const projects = [
    {
      name: "Personal Portfolio",
      type: "Web",
      description: "A modern developer portfolio built with Next.js, Tailwind CSS, and Prisma.",
      poster: "/images/portfolio.png",
      link: "https://yourportfolio.com",
      githubLink: "https://github.com/yourname/portfolio",
      tag: "Next.js,Prisma,MySQL",
    },
    {
      name: "Admin Dashboard",
      type: "Web",
      description: "Role-based admin dashboard with authentication and data management.",
      poster: "/images/admin-dashboard.png",
      link: null,
      githubLink: "https://github.com/yourname/admin-dashboard",
      tag: "Next.js,JWT,Prisma",
    },
    {
      name: "Android Movie App",
      type: "Mobile",
      description: "A movie streaming app built using Kotlin, MVVM, and REST APIs.",
      poster: "/images/movie-app.png",
      link: null,
      githubLink: "https://github.com/yourname/movie-app",
      tag: "Android,Kotlin,MVVM",
    },
  ]

  for (const project of projects) {
    await prisma.project.create({ data: project })
  }

  console.log("✅ Test projects inserted successfully")
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
