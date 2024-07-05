import { getAllData } from "./api.js";
import { loadFiles } from "./firestore.js";
import { generateID } from "./utilities.js";

// export const stepItems = [
//   {
//     _id: 0,
//     title: "Développement web",
//     description:
//       "Plongez dans mon monde où chaque ligne de code devient une symphonie numérique. Du front-end au back-end, je façonne des expériences web fluides et innovantes.",
//     videoUrls: "assets/videos/step1.webm",
//   },
//   {
//     _id: 1,
//     title: "Design web",
//     description:
//       "Explorez mes créations où le design rencontre la fonctionnalité. Chaque pixel est soigneusement placé pour captiver et inspirer, fusionnant beauté et efficacité.",
//     videoUrls: "assets/videos/step2.mp4",
//   },
//   {
//     _id: 2,
//     title: "Consultant voyage",
//     description:
//       "Laissez-moi être votre guide à travers les paysages numériques. Je vous conseille sur les meilleures pratiques et je vous emmène vers des solutions innovantes.",
//     videoUrls: "assets/videos/step1.mp4",
//   },
//   {
//     _id: 3,
//     title: "Mon passe-temps",
//     description:
//       "En dehors du code, je m'immerge dans la musique et les tutoriels vidéo. Chaque note et chaque leçon enrichissent mon esprit créatif et ma passion pour l'apprentissage continu.",
//     videoUrls: "assets/videos/step41.mp4",
//   },
// ];

export const witnesses = [
  {
    fullName: "amy Robson",
    userName: "@iamamyrobson",
    imgUrl: "assets/images/temoinns/image-amyrobson.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
  {
    fullName: "Jeremy Dubois",
    userName: "@iamjeremydubois",
    imgUrl: "assets/images/temoinns/image-jeremy.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
  {
    fullName: "Julios Omo",
    userName: "@iamjuliusomo",
    imgUrl: "assets/images/temoinns/image-juliusomo.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
  {
    fullName: "Max Blagun ",
    userName: "@iammaxblagun",
    imgUrl: "assets/images/temoinns/image-maxblagun.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
  {
    fullName: "Ramses Miron ",
    userName: "@iamramsesmiron",
    imgUrl: "assets/images/temoinns/image-ramsesmiron.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
  {
    fullName: "Vincent Darken",
    userName: "@iamvincentdarken",
    imgUrl: "assets/images/temoinns/image-juliusomo.png",
    message:
      'I really appreciate my collaboration with <a href="">@IsidoreOg</a> . <br> <br> He did good job and respect the timing. ',
    publishTime: "11:50",
    publishDate: "08/07/2023",
    RetweetsCount: 231,
    QotesCount: 423,
    likesCount: 1987,
  },
];

export const skills = [
  {
    _id: generateID(),
    name: "HTML5",
    imgName: "images/skills/HTML5.svg",
      //  imgUrl: "assets/images/skills/HTML5.svg",
    description:
      "HTML5 est le langage standard pour la création de sites web et d'applications web. Il offre une structure de base pour le contenu en ligne.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Cypress",
    imgName: "images/skills/Cypress.svg",
      //  imgUrl: "assets/images/skills/Cypress.svg",
    description:
      "Cypress est un framework de test automatisé pour les applications web modernes. Il permet des tests rapides, faciles et fiables.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Blender",
    imgName: "images/skills/blender.svg",
      //  imgUrl: "assets/images/skills/blender.svg",

    description:
      "Blender est un logiciel de modélisation, d'animation et de rendu 3D. Il est utilisé pour créer des graphiques, des animations, des jeux et plus encore.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Three.js",
    imgName: "images/skills/Threejs.svg",
      //  imgUrl: "assets/images/skills/Threejs.svg",

    description:
      "Three.js est une bibliothèque JavaScript pour créer et afficher des graphiques 3D animés en temps réel dans un navigateur web.",
    status: "En cours d'apprentissage",
  },
  {
    _id: generateID(),
    name: "TypeScript",
    imgName: "images/skills/TypeScript.svg",
      //  imgUrl: "assets/images/skills/TypeScript.svg",

    description:
      "TypeScript est un sur-ensemble de JavaScript qui ajoute des fonctionnalités de typage statique optionnelles. Il améliore la maintenabilité du code et la productivité.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Tailwind CSS",
    imgName: "images/skills/TailwindCSS.svg",
      //  imgUrl: "assets/images/skills/TailwindCSS.svg",

    description:
      "Tailwind CSS est un framework CSS utilitaire qui facilite la création de designs personnalisés avec des classes utilitaires directement dans le HTML.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Apache",
    imgName: "images/skills/apache.svg",
      //  imgUrl: "assets/images/skills/apache.svg",

    description:
      "Apache HTTP Server est un serveur web open-source largement utilisé. Il fournit une plateforme stable pour héberger des sites web et des applications.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Bootstrap",
    imgName: "images/skills/bootstrap.svg",
      //  imgUrl: "assets/images/skills/bootstrap.svg",

    description:
      "Bootstrap est un framework front-end populaire pour le développement web responsive. Il offre des composants prêts à l'emploi et une grille flexible.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "CSS",
    imgName: "images/skills/css.svg",
      //  imgUrl: "assets/images/skills/css.svg",

    description:
      "CSS (Cascading Style Sheets) est le langage utilisé pour définir la présentation visuelle des pages web. Il contrôle le style, la mise en page et l'apparence.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Debian",
    imgName: "images/skills/Debian.svg",
      //  imgUrl: "assets/images/skills/Debian.svg",

    description:
      "Debian est un système d'exploitation basé sur Linux, connu pour sa stabilité, sa sécurité et son large éventail de logiciels disponibles.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Figma",
    imgName: "images/skills/Figma.svg",
      //  imgUrl: "assets/images/skills/Figma.svg",

    description:
      "Figma est un outil de conception d'interface utilisateur basé sur le cloud. Il permet la collaboration en temps réel et la création de prototypes interactifs.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Firebase",
    imgName: "images/skills/Firebase.svg",
      //  imgUrl: "assets/images/skills/Firebase.svg",

    description:
      "Firebase est une plateforme de développement d'applications mobiles et web. Elle offre des fonctionnalités telles que l'authentification, la base de données en temps réel, le stockage et plus encore.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Git",
    imgName: "images/skills/Git.svg",
      //  imgUrl: "assets/images/skills/Git.svg",

    description:
      "Git est un système de contrôle de version distribué. Il permet de suivre les modifications du code source, de coordonner le travail d'équipe et de gérer les versions du logiciel.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "GitHub",
    imgName: "images/skills/Github.svg",
      //  imgUrl: "assets/images/skills/Github.svg",
    
    description:
      "GitHub est une plateforme de développement collaboratif de logiciels. Elle utilise Git pour le contrôle de version et facilite la gestion des projets, le suivi des problèmes et la collaboration.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "JavaScript",
    imgName: "images/skills/Javascript.svg",
      //  imgUrl: "assets/images/skills/Javascript.svg",

    description:
      "JavaScript est le langage de programmation de base pour le web. Il permet de rendre les pages web interactives et dynamiques.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "nginx",
    imgName: "images/skills/nginx.svg",
      //  imgUrl: "assets/images/skills/nginx.svg",

    description:
      "nginx est un serveur web open-source très performant. Il est utilisé comme serveur proxy, de messagerie et de streaming, entre autres.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Next.js",
    imgName: "images/skills/Nextjs.svg",
      //  imgUrl: "assets/images/skills/Nextjs.svg",

    description:
      "Next.js est un framework React populaire pour le rendu côté serveur et le développement d'applications web modernes. Il offre des performances optimisées et des fonctionnalités avancées.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "npm",
    imgName: "images/skills/npm.svg",
      //  imgUrl: "assets/images/skills/npm.svg",

    description:
      "npm est le gestionnaire de paquets par défaut pour Node.js. Il permet d'installer, de mettre à jour et de gérer les dépendances des projets JavaScript.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Node.js",
    imgName: "images/skills/nodejs.svg",
      //  imgUrl: "assets/images/skills/nodejs.svg",

    description:
      "Node.js est un environnement d'exécution JavaScript côté serveur. Il permet de développer des applications web robustes et évolutives.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "React",
    imgName: "images/skills/react.svg",
      //  imgUrl: "assets/images/skills/react.svg",

    description:
      "React est une bibliothèque JavaScript pour la construction d'interfaces utilisateur interactives. Elle permet de créer des composants réutilisables et de gérer l'état de manière efficace.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Redux",
    imgName: "images/skills/Redux.svg",
      //  imgUrl: "assets/images/skills/Redux.svg",

    description:
      "Redux est un gestionnaire d'état prévisible pour les applications JavaScript. Il facilite la gestion des données et de l'état de l'application de manière cohérente.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Vercel",
    imgName: "images/skills/Vercel.svg",
      //  imgUrl: "assets/images/skills/Vercel.svg",

    description:
      "Vercel est une plateforme de déploiement pour les applications front-end. Elle offre un déploiement simple, rapide et évolutif pour les projets web.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Vim",
    imgName: "images/skills/Vim.svg",
      //  imgUrl: "assets/images/skills/Vim.svg",

    description:
      "Vim est un éditeur de texte puissant, configurable et très efficace. Il est apprécié pour sa productivité et sa flexibilité.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Visual Studio Code",
    imgName: "images/skills/Visual-Studio-Code.svg",
      //  imgUrl: "assets/images/skills/Visual-Studio-Code.svg",

    description:
      "Visual Studio Code est un éditeur de code source développé par Microsoft. Il offre une large gamme de fonctionnalités, d'extensions et de support pour différents langages.",
    status: "Complète",
  },
  {
    _id: generateID(),
    name: "Yarn",
    imgName: "images/skills/yarn.svg",
      //  imgUrl: "assets/images/skills/yarn.svg",

    description:
      "Yarn est un gestionnaire de paquets JavaScript alternatif à npm. Il améliore la fiabilité et les performances des installations de dépendances.",
    status: "Complète",
  },
];

export const experiences = [
  {
    title: " Frontend junior developper",
    startMonth: "Feb",
    startYear: 2024,
    endMonth: "Present",
    endYear: "",
    reference: "Espero-soft Informatique",
    Tasks: [
      "developpe the clone off existing app and SAAS",
      " Mentoring the students of Mudey.fr ",
      " Contributing to ours student projects ",
      " Learning React , Typescript, bootstrap, indexDB, Localstorage, Redux , Chartjs,",
      " brainstorming the algo structure and complexity of algo ",
      " Git management",
      " Code review",
      " Learn how to track Bug ",
      " hosting VPS   ",
      "etc ...",
    ],
  },
  {
    title: " Assurance and Amadeus GDS Teachers",
    startMonth: "Aug",
    startYear: 2023,
    endMonth: "Present",
    endYear: "",
    reference: "Savoir-faire",
    Tasks: [
      "Teach the importance of assurance",
      " teach how booking a travel ticket using Amadeus ",
      " What i learn by teaching ",
      [
        "how explain the course",
        "how talk in public",
        " how share my experience and my skills with another person ",
      ],
      "etc ...",
    ],
  },
];

export const projects = [
  {
    _id: generateID(),
    projectTitle: "ALL DOCS",
    technologies: "Reactjs , Typescript , TailwindCSS , Redux  ",
    stack: "RTT",
    librarys: "HTML2Canvas , CanvastoPDf",
    typeOFpreoject: "For practice",
    Authors: "anonyme",
    Demo: "https:// facebook.com",
    functionality: [
      {
        "Édition de documents":
          "Créez et modifiez vos documents administratifs avec simplicité.",
      },
      {
        "Conversion en PDF ":
          "Telecharger la version PDF vos documents en un clic.",
      },
      {
        "Historique des documents":
          "Conservez un historique de tous vos documents émis, accessible à tout moment.",
      },
      {
        "Interface intuitive":
          "Profitez d'une interface utilisateur intuitive et responsive, facilitant la navigation et l'utilisation.",
      },
    ],
    contributors: " Espero-soft ",
    conclusion:
      "Ce site est conçu pour répondre à tous vos besoins en matière de gestion de documents administratifs, en alliant performance, sécurité et simplicité",
    Description:
      "Ce site , un clone moderne de parchance.fr, est dédié à l'édition et la gestion de documents administratifs et divers. Développé avec les technologies les plus récentes, cette plateforme offre une expérience utilisateur fluide et efficace.",
    coverUrl: "assets/images/galery/Alldocs.png",
    demoVideoUrl: "assets/videos/alldocs.webm",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: "Time Trackers Darshbord",
    technologies: "HTML5 , Javascript , css   ",
    stack: "HCJ",
    librarys: "nothing",
    typeOFpreoject: "For challenges",
    Authors: "Code Mentor",
    Demo: "https:// facebook.com",
    functionality: [
      {
        "Suivi du temps":
          "Enregistrez et gérez vos heures passées sur différentes activités.",
      },
      {
        "Calcul automatique":
          "Le site calcule automatiquement la durée de chaque tâche en fonction des heures de début et de fin.",
      },
      {
        "Gestion flexible ":
          " Modifiez ou supprimez vos entrées de temps enregistrées à tout moment.",
      },
      {
        "Vue par jour, semaine et mois ":
          " Visualisez vos activités pour une gestion optimale de votre emploi du temps.",
      },
    ],
    contributors: "  ",
    conclusion:
      "Cette site est conçu pour répondre à tous vos besoins en matière de gestion de temps, en alliant performance, sécurité et simplicité",
    Description:
      "  cette page, un tableau de bord moderne de suivi du temps, est conçu pour vous permettre de gérer efficacement et précisément vos activités quotidiennes, mensuelles et hebdomadaires. Développé en HTML, CSS et JavaScript, cette plateforme utilise IndexedDB pour sauvegarder l'historique des temps enregistrés par l'utilisateur. Vous pouvez facilement ajouter des tâches avec des heures de début et de fin, calculer la durée automatiquement, et accéder à vos données pour les modifier ou les supprimer selon vos besoins.",
    coverUrl: "assets/images/galery/timeTracking.jpg",
    demoVideoUrl: "assets/videos/timeTracking.jpg",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: " Loop Studio",
    technologies: "HTML5 , Javascript , css   ",
    stack: "HCJ",
    librarys: "nothing",
    typeOFpreoject: "For challenges",
    Authors: "Code Mentor",
    Demo: "https:// facebook.com",
    functionality: [
    ],
    contributors: "  ",
    conclusion:
      "Cette page d'accueil met en valeur l'esthétique et l'identité de Loopstudios, captivant les visiteurs dès leur arrivée avec un design épuré et une navigation intuitive.",
    Description:
      "la page d'accueil de Loopstudios, conçue pour présenter notre studio créatif avec élégance et simplicité. Cette page responsive est développée en utilisant HTML, CSS et JavaScript, offrant une expérience utilisateur fluide sur tous les appareils.",
    coverUrl: "assets/images/galery/loopstudios.jpg",
    demoVideoUrl: "assets/videos/timeTracking.jpg",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: "jstore",
    technologies:
      "React , Typescript , Bootstrap , Mongodb, Nodejs, Expressjs  ",
    librarys: "nothing",
    stack: "MERN-BT",
    typeOFpreoject: "For pratice",
    Authors: "Jstore",
    Demo: "https:// facebook.com",
    functionality: [
      {
        "Catalogue de produits ":
          " Explorez une variété de produits classés par catégories.",
      },
      {
        "Panier d'achat ":
          " Ajoutez facilement des produits à votre panier et passez à la caisse en toute sécurité.",
      },
      {
        "Paiement sécurisé ":
          " Utilisez PayPal ou Stripe pour des transactions sécurisées et rapides.",
      },
      {
        "Suivi des commandes ":
          " Suivez l'état de vos commandes et recevez des notifications en temps réel.",
      },
      {
        "Interface utilisateur intuitive ":
          " Profitez d'une navigation conviviale et d'une expérience utilisateur optimisée.",
      },
    ],
    contributors: " Espero-soft ",
    conclusion:
      "Ce site est conçu pour mettre en proatique l'integration des moyens de paiement dans des sites e-commerces et autre et comment personnaliser le composant/ page de paiement paypal et Stripe",
    Description:
      " Jstore, ume destination en ligne pour découvrir et acheter une large gamme de produits. ce site e-commerce utilise les technologies les plus avancées pour  offrir une expérience d'achat sécurisée et intuitive.",
    coverUrl: "assets/images/galery/Todo.jpg",
    demoVideoUrl: "assets/videos/alldocs.webm",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: "Stream Video",
    technologies: "React , Typescript , Bootstrap, Redux ,    ",
    stack: "RTB",
    librarys: "Slugify, indexDB",
    typeOFpreoject: "For Pratice",
    Authors: "NAnnonyme",
    Demo: "https:// facebook.com",
    functionality: [
      {"Ajout de vidéos ":" Uploadez facilement de nouveaux contenus vidéo sur la plateforme."},
{"Modification ":" Modifiez les détails des vidéos existantes comme le titre, la description, etc."},
{"Suppression ":" Supprimez les vidéos que vous ne souhaitez plus voir sur la plateforme."},
{"Visionnage ":" Regardez vos vidéos préférées en streaming avec une interface intuitive et conviviale."}
    ],
    contributors: " Espero-soft ",
    conclusion:
      "Ce site est conçu pour practiquez quelque fomctionnalitée de react telques le redux, slugify, les useParams et les root privee",
    Description:
      " Site de streaming vidéo, développé avec les technologies modernes telles que React, TypeScript, Bootstrap, Redux et IndexedDB. Notre plateforme vous offre une expérience fluide et sécurisée pour regarder et gérer vos vidéos préférées en ligne.",
    coverUrl: "assets/images/galery/productEcom.jpg",
    demoVideoUrl: "assets/videos/timeTracking.jpg",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: " TodoList ",
    technologies: "React , Bootstrap , TypeScript , Redux  ",
    stack: "RTB",
    librarys: "Drag an Drop , IndexDB and Localstorage",
    typeOFpreoject: "For Pratice",
    Authors: "Anonyme",
    Demo: "https:// facebook.com",
    functionality: [
      {"Ajout de tâches ":" Ajoutez facilement des tâches à accomplir avec des détails supplémentaires si nécessaire."},
{"Modification et suppression ":" Modifiez le contenu des tâches existantes ou supprimez-les selon vos besoins."},
{"Gestion intuitive ":" Organisez vos tâches par priorité, date d'échéance ou catégorie."},
{"Synchronisation instantanée ":" Les modifications sont automatiquement enregistrées localement grâce à IndexedDB."}
    ],
    contributors: " Espero-soft ",
    conclusion:
      "Cette application est conçue pour simplifier la gestion de vos tâches quotidiennes tout en offrant une interface utilisateur moderne et réactive.",
    Description:
      " notre application de liste de tâches, développée en utilisant React avec Bootstrap, TypeScript et IndexedDB. Cette application moderne vous permet de gérer efficacement vos tâches quotidiennes avec style et simplicité.",
    coverUrl: "assets/images/galery/Todo.jpg",
    demoVideoUrl: "assets/videos/ballanceDarshboard.jpg",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: " Product Page ",
    technologies: "HTML , CSS , JS , IndexDB  ",
    stack: "HCJ",
    librarys: "Drag an Drop , IndexDB and Localstorage",
    typeOFpreoject: "For Pratice",
    Authors: "Anonyme",
    Demo: "https:// facebook.com",
    functionality: [
      {"Fonctionnalités d'ajout au panier ":" Permet aux utilisateurs d'ajouter des produits à leur panier avec facilité."},
{"Fonctionnalités de suppression du panier ":" Offre la possibilité de supprimer des produits du panier en un clic."}
    ],
    contributors: "",
    conclusion:
      "Ce site est conçu pour être simple et pratique, offrant aux utilisateurs une expérience intuitive pour explorer nos produits et gérer leur sélection facilement.",
    Description:
      "Page de présentation de produits, conçu pour vous permettre d'explorer et d'interagir avec nos produits de manière interactive. Cette page pratique est développé en utilisant HTML, CSS et JavaScript, mettant en avant les fonctionnalités d'ajout au panier et de suppression du panier pour une expérience utilisateur enrichissante.",
    coverUrl: "assets/images/galery/productEcom.jpg",
    demoVideoUrl: "assets/videos/timeTracking.jpg",
    SourceCode: "https:// github.io",
  },
  {
    _id: generateID(),
    projectTitle: "crowfund landing page  ",
    technologies: "HTML , CSS , JS ,  ",
    stack: "HCJ",
    librarys: "",
    typeOFpreoject: "Challenge",
    Authors: "Anonyme",
    Demo: "https:// facebook.com",
    functionality: [
     
    ],
    contributors: "",
    conclusion:
      "Ce site est conçu pour être simple et pratique, offrant aux utilisateurs une expérience intuitive pour explorer nos produits et gérer leur sélection facilement.",
    Description:
      "page de crowdfunding, conçue avec passion et dévouement pour soutenir notre projet ambitieux. Cette page est le fruit de notre travail en HTML, CSS et JavaScript, offrant une expérience utilisateur immersive et engageante.",
    coverUrl: "assets/images/galery/crowfund.jpg",
    demoVideoUrl: "assets/videos/timeTracking.jpg",
    SourceCode: "https:// github.io",
  },
];

let result = []

console.log(result);
export const stepItems = result

console.log(stepItems);


skills.forEach((skill)=>{
  skill.imgUrl = loadFiles(skill.imgName)
  console.log(skill.imgUrl);
})

