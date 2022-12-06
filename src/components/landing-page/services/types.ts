import audioMixing from "@assets/services/audio-mixing.jpg"
import guitarClass from "@assets/services/guitar-class.jpg"
import type { Props as Service } from "@components/landing-page/services/card.astro"

const services: Service[] = [
  {
    title: "Produção musical",
    description: "Descrição",
    url: "#",
    alt: "alt",
    image: audioMixing
  },
  {
    title: "Gravação online",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    url: "#",
    alt: "alt",
    image: guitarClass
  },
  {
    title: "Aulas de violão e guitarra",
    description: "Descrição",
    url: "#",
    alt: "alt",
    image: audioMixing
  },
  {
    title: "Consultoria de timbre",
    description: "Descrição",
    url: "#",
    alt: "alt",
    image: audioMixing
  },
  {
    title: "Locução",
    description: "Descrição",
    url: "#",
    alt: "alt",
    image: audioMixing
  },
]

export default services