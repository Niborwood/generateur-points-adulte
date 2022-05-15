import { Question } from "../definitions/definitions";

const rawData: Question[] = [
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
        answer: "Jamais",
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
        _id: 2,
        adultScore: 6,
        respScore: 8,
        answer: "Au four",
      },
      {
        _id: 3,
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
        _id: 2,
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
];

export default rawData;
