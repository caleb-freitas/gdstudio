import guitarClass from "@assets/services/guitar-class.jpg";
import type { Props as Service } from "@components/landing-page/services/card.astro";

const services: Service[] = [
  {
    title: "Produção musical",
    description:
      "Arranjo, gravação, mixagem e masterização para trabalhos autorais e covers.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
  {
    title: "Gravação online",
    description:
      "Gravação de guitarra e violão online, receba o instrumento gravado já no jeito para sua produção.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
  {
    title: "Aulas de violão e guitarra",
    description:
      "Aulas de guitarra e violão, do iniciante ao avançado, desde a técnica e o repertório a dicas de estrada e vivência profissional musical.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
  {
    title: "Consultoria de timbre",
    description:
      "Timbragem para amplificadores, pedaleiras; setup de pedais e sistemas híbridos.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
  {
    title: "Locução",
    description:
      "Locuções para porta de loja, carro de som e rádio, com ou sem vinheta personalizada.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
  {
    title: "Banda Prestun",
    description:
      "Banda para eventos de formaturas, casamentos, bailes, e eventos particulares e empresariais.",
    url: "#",
    alt: "alt",
    image: guitarClass,
  },
];

export default services;
