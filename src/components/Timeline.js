import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Timeline = () => {
  const experiences = [
    {
        title: "Certification Professionnelle: Techniques d’intégration Web",
        description:
          "Certification passée lors de ma formation en Digital Marketing et Webdesign.",
        compagny: "Webforce3 · Strasbourg",
        date: "Obtention en 2021",
        icon: <FaGraduationCap/>,
      },
    {
        title: "Bac+2 en Webdesign et Digital Marketing",
        description: "",
        compagny: "The Hacking Project",
        date: "Obtention en 2021",
        icon: <FaGraduationCap/>,
      },
    {
      title: "Chargée de Marketing Digital / Social Media Manager / Graphiste",
      description:
        "Gestion des réseaux sociaux et de la newsletter, Création de visuels photo et vidéo avec la suite Adobe",
      compagny: "EKLA SERUM · Stage",
      date: "mai 2021 - juil. 2021",
        icon: <FaBriefcase/>,
    },
    {
      title: "Webdesigner / Intégratrice Web / Graphiste",
      description:
        "Création de sites e-commerce via des CMS, Réalisation de templates en HTML/CSS, Création de visuels, Gestion des réseaux sociaux",
      compagny: "MTH Trading Corporation · CDD",
      date: "sept. 2021 - mars 2022",
      icon: <FaBriefcase/>,
    },
    {
        title: "Bac+2 en Développement Web (FullStack)",
        description: "",
        compagny: "The Hacking Project",
        date: "Obtention en 2022 · Mention très bien",
        icon: <FaGraduationCap/>,
      },
    {
      title: "Webdesigner / Développeuse FullStack",
      description:
        "Design et développement du site Stras.Dev avec Firebase, SCSS et React JS, Aide aux préparatifs et à l’organisation du DevFest 2022 à Strasbourg",
      compagny: "Google Developer Group Strasbourg · Stage",
      date: "oct. 2022 - dec 2022",
      icon: <FaBriefcase/>,
    },
    {
      title: "Membre / Développeuse FullStack",
      description:
        "Développement d'applications et maintenance des sites internet. Organisation des différents évènements.",
      compagny: "Google Developer Group Strasbourg ·  Bénévolat",
      date: "Depuis oct. 2022",
      icon: <FaBriefcase/>,
    },
  ];

  return (
    <div className="timeline">
      <VerticalTimeline
      lineColor={"#a3cab9"}>
          { [...experiences].reverse().map((el, i) => {
              return(
                  <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#bbb0d6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #bbb0d6" }}
          date="2011 - present"
          iconStyle={{ background: "#a3cab9", color: "#fff" }}
          icon={el.icon}
          key={i}
        >
          <h3 className="vertical-timeline-element-title">{el.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{el.compagny}</h4>
          <p>
            {el.description}
          </p>
          <small>{el.date}</small>
        </VerticalTimelineElement>
              )
          })}
        
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
