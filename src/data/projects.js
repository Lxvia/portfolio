import epidaure from "../assets/images/mockups/mockup_epidaure.jpg";
import zorya from "../assets/images/mockups/mockup_zorya.jpg";
import strasdev from "../assets/images/mockups/mockup_strasdev.jpg";

const projects = [
  {
    title: "Epidaure",
    status: " ",
    photo: epidaure,
    slug: "epidaure",
    description:
      "Epidaure est une application d'organisation déstinée aux professionnels de santé. Nous l'avons réalisée pour une osthéopathe rencontrant des difficultés à planifier les consultations au sein de son cabinet médical. Grâce à cette app, chaque praticien peut consulter, modifier son planning ou toutes autres informations nécessaires en temps réel. Réalisée dans le cadre de mon Bac+2 en Développement Web, ce site internet hebergé sur Heroku fonctionne avec une API et un Back-End en Ruby-on-Rails. Pour le Front-End, React.js et Tailwind ont été utilisés",
  },
  {
    title: "Zorya",
    status: " ",
    photo: zorya,
    slug: "zorya",
    description:
      "Zorya est une plateforme de E-Learning déstinée aux professionnels souhaitant former leurs employés sur divers sujets en lien avec la cybersécurité. Réalisé dans le cadre de mon Bac+2 en Développement Web, Ruby-on-Rails et Tailwind css ont été utilisés pour le Back-end ainsi que le Front-End. Heroku est utilisé pour l'hebergement",
  },
  {
    title: "Stras.Dev",
    status: "(En cours de développement)",
    photo: strasdev,
    slug: "strasdev",
    description:
      "Stras Dev est un site regroupant tous les évenenements du Grand-Est en lien avec le monde de l'informatique, qui jusqu'a présent étaient dispatchés sur plusieurs plateformes. Je l'ai réalisé pour Capitale Dev (de Google Developers Group Strasbourg), association dans laquelle j'occupe le poste de Développeuse Full-Stack. J'ai utilisé Firebase pour le Back-End et l'hebergement, puis React.js pour le Front-End.",
  },
];

export default projects;
