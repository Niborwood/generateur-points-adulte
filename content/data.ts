import { Question } from "../definitions/definitions";

const rawData: Question[] = [
  // Question 0
  {
    _id: 0,
    title: "On se vouvoie ou on se tutoie ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 2,
        respScore: null,
        answer: "Tutoie-moi",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: null,
        answer: "Vouvoyez-moi",
      },
    ],
  },
  // Question 1
  {
    _id: 1,
    title: "Buvez-vous du café ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 2,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 2
  {
    _id: 2,
    title: "A quelle fréquence buvez-vous de l'alcool ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 0,
        respScore: 9,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Le week-end, occasionnellement",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 3,
        answer:
          "Le week-end, quelques soirs de semaine si l'occasion se présente",
      },
      {
        _id: 3,
        adultScore: 8,
        respScore: 2,
        answer: "Un peu tout le temps, parfois le midi",
      },
    ],
  },
  // Question 3
  {
    _id: 3,
    title: "A quelle régularité sortez-vous au restaurant ?",
    helper: "Ne sont pas comptées les livraisons (type Delieroo)",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: null,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 6,
        respScore: 6,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 8,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: 2,
        respScore: 1,
        answer: "Plus d'une fois par semaine",
      },
    ],
  },
  // Question 4
  {
    _id: 4,
    title: "A quelle régularité laissez-vous des pourboires ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 0,
        respScore: null,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: null,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 6,
        respScore: null,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: 9,
        respScore: null,
        answer: "Plus d'une fois par semaine",
      },
    ],
  },
  // Question 5
  {
    _id: 5,
    title:
      "Parmi la sélection suivante, quel est votre appareil de cuisine favori ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 0,
        respScore: 2,
        answer: "Aucun de ceux-ci",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 0,
        answer: "Au micro-onde",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 5,
        answer: "À la plaque",
      },
      {
        _id: 3,
        adultScore: 6,
        respScore: 8,
        answer: "Au four",
      },
      {
        _id: 4,
        adultScore: 8,
        respScore: 5,
        answer: "Au robot-cuiseur",
      },
    ],
  },
  // Question 6
  {
    _id: 6,
    title: "Vous arrive-t-il de prévoir de partir en week-end ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 7,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 7
  {
    _id: 7,
    title: "Avez-vous le permis ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 7,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 3,
        answer: "Non",
      },
    ],
  },
  // Question 8
  {
    _id: 8,
    title: "A quelle fréquence vous pesez-vous ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: null,
        respScore: 0,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: 3,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: null,
        respScore: 6,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: null,
        respScore: 9,
        answer: "Plus d'une fois par semaine",
      },
    ],
  },
  // Question 9
  {
    _id: 9,
    title: "Souffrez-vous de calvitie ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Non",
      },
      {
        _id: 2,
        adultScore: 7,
        respScore: null,
        answer: "Non, mais j'appréhende d'en avoir une",
      },
    ],
  },
  // Question 10
  {
    _id: 10,
    title: "Dans quel type de logement vivez-vous ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 0,
        respScore: 0,
        answer: "Chez vos parents",
      },
      {
        _id: 1,
        adultScore: 4,
        respScore: 4,
        answer: "En collocation",
      },
      {
        _id: 2,
        adultScore: 7,
        respScore: 7,
        answer: "En location",
      },
      {
        _id: 3,
        adultScore: 9,
        respScore: 9,
        answer: "Je suis propriétaire",
      },
    ],
  },
    // Question 11
  {
    _id: 11,
    title: "Comment nommez-vous cette couleur (marron) ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 3,
        respScore: null,
        answer: "Marron",
      },
      {
        _id: 1,
        adultScore: 7,
        respScore: null,
        answer: "Taupe",
      },
    ],
  },
      // Question 12
  {
    _id: 12,
    title: "Comment nommez-vous cette couleur (rouge) ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 3,
        respScore: null,
        answer: "Rouge",
      },
      {
        _id: 1,
        adultScore: 7,
        respScore: null,
        answer: "Pourpre",
      },
    ],
  },
  // Question 13
  {
    _id: 13,
    title: "Comment nommez-vous cette couleur (bleu) ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 3,
        respScore: null,
        answer: "Bleu",
      },
      {
        _id: 1,
        adultScore: 7,
        respScore: null,
        answer: "Cyan",
      },
    ],
  },
    // Question 14
  {
    _id: 14,
    title: "Avez-vous des tickets restaurant ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: null,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Non",
      },
    ],
  },
    // Question 15
  {
    _id: 15,
    title: "Avez-vous des enfants ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 10,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Non",
      },
    ],
  },
    // Question 16
  {
    _id: 16,
    title: "Etes-vous déjà allés une fois au travail en costume / tailleur ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 10,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
    // Question 17
  {
    _id: 17,
    title: "Avez-vous une voiture ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 18
  {
    _id: 18,
    title: "Avez-vous une deuxième voiture ?",
    category: "Daily Life",
    condition: [18, 0],
    answers: [
      {
        _id: 0,
        adultScore: 10,
        respScore: 10,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Non",
      },
    ],
  },
   // Question 19
  {
    _id: 19,
    title: "Quel est votre situation amoureuse ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 2,
        respScore: 5,
        answer: "Célibataire",
      },
      {
        _id: 1,
        adultScore: 6,
        respScore: 5,
        answer: "Concubinage",
      },
      {
        _id: 2,
        adultScore: 8,
        respScore: 7,
        answer: "Pacsé",
      },
      {
        _id: 3,
        adultScore: 10,
        respScore: 9,
        answer: "Marié",
      },
    ],
  },
  // Question 20
  {
    _id: 20,
    title: "Pour quelle raison avez-vous vomi la dernière fois ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 5,
        respScore: 9,
        answer: "Je n'ai jamais vomi",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: 1,
        answer: "À cause de l'alcool",
      },
      {
        _id: 2,
        adultScore: 2,
        respScore: 2,
        answer: "À cause de bonbons",
      },
      {
        _id: 3,
        adultScore: null,
        respScore: null,
        answer: "À cause de maladie",
      },
    ],
  },
   // Question 21
  {
    _id: 21,
    title: "Vous-êtes déjà vous plaint du bruit ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 4,
        answer: "Non",
      },
    ],
  },
  // Question 22
  {
    _id: 22,
    title: "Avez-vous des insomnies ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 7,
        respScore: 7,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 23
  {
    _id: 23,
    title: "À quelle régularité regardez-vous la météo ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: 1,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 4,
        respScore: 4,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 7,
        respScore: 7,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: 9,
        respScore: 9,
        answer: "Plus d'une fois par semaine",
      },
    ],
  },
  // Question 24
  {
    _id: 24,
    title: "Vous-êtes vous déjà plaint des jeunes ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: null,
        answer: "Non",
      },
    ],
  },
   // Question 25
  {
    _id: 25,
    title: "Connaissez-vous la signification de l'acronyme PEL ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 26
  {
    _id: 26,
    title: "Connaissez-vous votre numéro de sécurité sociale ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 27
  {
    _id: 27,
    title: "Connaissez-vous le nom et le prénom de votre conseiller bancaire ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 28
  {
    _id: 28,
    title: "Avez-vous un rythme fixe pour vos relations conjuguales ?",
    // Selon 
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 7,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 29
  {
    _id: 29,
    title: "Instinctivement, vouvoyez-vous les inconnus ?",
    // Selon 
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 30
  {
    _id: 30,
    title: "Faites-vous vous-même la vaisselle ?",
    // Selon 
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 7,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 31
  {
    _id: 31,
    title: "Repassez-vous vos vêtements ?",
    // Selon 
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 32
  {
    _id: 32,
    title: "Portez-vous une grande importance à votre décoration d'intérieur ?",
    // Selon 
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 6,
        respScore: 7,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 4,
        respScore: 3,
        answer: "Non",
      },
    ],
  },
  // Question 33
  {
    _id: 33,
    title: "À quelle régularité regardez-vous la météo ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: null,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 6,
        respScore: null,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 9,
        respScore: null,
        answer: "Une fois par semaine ou plus, en moyenne",
      },
    ],
  },
  // Question 34
  {
    _id: 34,
    title: "Connaissez-vous les dates des vacances scolaires de tête ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 4,
        respScore: 2,
        answer: "Non",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 6,
        answer: "Oui",
      },
      {
        _id: 2,
        adultScore: 9,
        respScore: 10,
        answer: "Oui, grâce à mon entourage",
      },
    ],
  },
  // Question 35
  {
    _id: 35,
    title: "Si vous deviez écouter une station de radio parmi les suivantes, laquelle choisisseriez-vous ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 3,
        respScore: 3,
        answer: "NRJ",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 7,
        answer: "Rires & Chansons",
      },
      {
        _id: 2,
        adultScore: 7,
        respScore: 7,
        answer: "France Culture",
      },
       {
        _id: 3,
        adultScore: 7,
        respScore: 1,
        answer: "RMC",
      },
    ],
  },
  // Question 36
  {
    _id: 36,
    title: "Avez-vous un autocollant \"Stop Pub\" sur votre boîte aux lettres ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 10,
        respScore: 10,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 0,
        respScore: 0,
        answer: "Non",
      },
    ],
  },
  // Question 37
  {
    _id: 37,
    title: "Faites vous vous-mêmes vos courses ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: 3,
        answer: "Oui, mais je me les fais livrer à domicile",
      },
      {
        _id: 2,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 38
  {
    _id: 38,
    title: "Faites vous vous-mêmes vos courses ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: 3,
        answer: "Oui, mais je me les fais livrer à domicile",
      },
      {
        _id: 2,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 39
  {
    _id: 39,
    title: "Essayez-vous d'anticiper la circulation/le trafic lorsque vous faites un déplacement ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 8,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 2,
        answer: "Non",
      },
    ],
  },
  // Question 40
  {
    _id: 40,
    title: "Avez-vous une paire de chaussures que vous devez cirer ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 41
  {
    _id: 41,
    title: "Avez-vous un animal de compagnie ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 7,
        answer: "Oui, et c'est moi qui m'en occupe au quotidien",
      },
      {
        _id: 1,
        adultScore: 5,
        respScore: 1,
        answer: "Oui, mais d'autres s'en occupent",
      },
      {
        _id: 2,
        adultScore: null,
        respScore: 4,
        answer: "Non",
      },
    ],
  },
  // Question 42
  {
    _id: 42,
    title: "Vous-êtes vous déjà justifié d'un achat par la phrase 'C'est pratique' ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 8,
        respScore: 7,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 2,
        respScore: 3,
        answer: "Non",
      },
    ],
  },
  // Question 43
  {
    _id: 43,
    title: "Ronflez-vous ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 44
  {
    _id: 44,
    title: "Etes-vous bon bricoleur ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 45
  {
    _id: 45,
    title: "Vous levez-vous tôt pour aller courir ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
   // Question 46
  {
    _id: 46,
    title: "Savez-vous lancer une machine de linge et de vaisselle ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 7,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 47
  {
    _id: 47,
    title: "Payez-vous des impôts ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 10,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 0,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 48
  {
    _id: 48,
    title: "Prévoyez-vous vos dépenses en fonction de vos rentrées d'argent ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 7,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 3,
        respScore: 1,
        answer: "Non",
      },
    ],
  },
  // Question 49
  {
    _id: 49,
    title: "Avez-vous tenté de vous justifier en répondant à l'une des questions de ce questionnaire ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 10,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 0,
        respScore: null,
        answer: "Non",
      },
    ],
  },
];

export default rawData;
