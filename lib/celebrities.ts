import type { Celebrity, Difficulty } from "@/lib/types"

export const celebrities: Record<Difficulty, Celebrity[]> = {
  easy: [
    {
      name: "Taylor Swift",
      imageUrl: "/taylor-swift-portrait-professional-photo.jpg",
      alternativeNames: ["Taylor", "Tay", "T Swift"],
    },
    {
      name: "Dwayne Johnson",
      imageUrl: "/dwayne-the-rock-johnson-portrait-professional-phot.jpg",
      alternativeNames: ["The Rock", "Rock", "Dwayne", "DJ"],
    },
    {
      name: "Beyonce",
      imageUrl: "/beyonce-portrait-professional-photo.jpg",
      alternativeNames: ["Bey", "Queen B", "Beyoncé", "Beyonce Knowles"],
    },
    {
      name: "Leonardo DiCaprio",
      imageUrl: "/leonardo-dicaprio-portrait-professional-photo.jpg",
      alternativeNames: ["Leo", "DiCaprio", "Leo DiCaprio"],
    },
    {
      name: "Rihanna",
      imageUrl: "/rihanna-portrait-professional-photo.jpg",
      alternativeNames: ["Riri", "RiRi", "Rihanna Fenty"],
    },
    {
      name: "Tom Cruise",
      imageUrl: "/tom-cruise-portrait-professional-photo.jpg",
      alternativeNames: ["Tom", "Cruise", "Thomas Cruise"],
    },
    {
      name: "Ariana Grande",
      imageUrl: "/ariana-grande-portrait-professional-photo.jpg",
      alternativeNames: ["Ari", "Ariana", "Grande"],
    },
    {
      name: "Chris Hemsworth",
      imageUrl: "/chris-hemsworth-portrait-professional-photo.jpg",
      alternativeNames: ["Chris", "Hemsworth", "Thor"],
    },
  ],
  medium: [
    {
      name: "Pedro Pascal",
      imageUrl: "/pedro-pascal-portrait-professional-photo.jpg",
      alternativeNames: ["Pedro", "Pascal"],
    },
    {
      name: "Jenna Ortega",
      imageUrl: "/jenna-ortega-portrait-professional-photo.jpg",
      alternativeNames: ["Jenna", "Ortega"],
    },
    {
      name: "Austin Butler",
      imageUrl: "/austin-butler-portrait-professional-photo.jpg",
      alternativeNames: ["Austin", "Butler"],
    },
    {
      name: "Florence Pugh",
      imageUrl: "/florence-pugh-portrait-professional-photo.jpg",
      alternativeNames: ["Florence", "Pugh", "Flo"],
    },
    {
      name: "Jonathan Majors",
      imageUrl: "/jonathan-majors-portrait-professional-photo.jpg",
      alternativeNames: ["Jonathan", "Majors"],
    },
    {
      name: "Anya Taylor Joy",
      imageUrl: "/anya-taylor-joy-portrait-professional-photo.jpg",
      alternativeNames: ["Anya", "ATJ", "Anya Taylor-Joy"],
    },
    {
      name: "Paul Mescal",
      imageUrl: "/paul-mescal-portrait-professional-photo.jpg",
      alternativeNames: ["Paul", "Mescal"],
    },
    {
      name: "Sydney Sweeney",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Sydney", "Sweeney"],
    },
  ],
  hard: [
    {
      name: "Jeremy Allen White",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Jeremy", "JAW"],
    },
    {
      name: "Ncuti Gatwa",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Ncuti"],
    },
    {
      name: "Emma D'Arcy",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Emma", "Emma Darcy"],
    },
    {
      name: "Xolo Mariduena",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Xolo", "Maridueña"],
    },
    {
      name: "Milly Alcock",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Milly"],
    },
    {
      name: "Dominique Thorne",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Dominique"],
    },
    {
      name: "Kit Connor",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Kit"],
    },
    {
      name: "Rachel Sennott",
      imageUrl: "/placeholder.svg?height=800&width=800",
      alternativeNames: ["Rachel"],
    },
  ],
}
