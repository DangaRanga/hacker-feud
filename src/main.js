/*
  (C) 2020 David Lettier
  lettier.com
*/

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["Dunning–Kruger Effect", "Impostor Syndrome"],
    qas: [
      {
        question: "What are the most popular programming languages?",
        answers: [
          {
            text: "C#",
            money: 17,
          },
          {
            text: "Python",
            money: 11,
          },
          {
            text: "Java",
            money: 6,
          },
          {
            text: "C",
            money: 4,
          },
          {
            text: "Ruby",
            money: 3,
          },
          {
            text: "Javascript",
            money: 1,
          },
        ],
      },
      {
        question: "What is the most hated thing about programming?",
        answers: [
          {
            text: "Bugs",
            money: 17,
          },
          {
            text: "Naming Things",
            money: 11,
          },
          {
            text: "Stand-ups",
            money: 6,
          },
          {
            text: "Documentation",
            money: 4,
          },
          {
            text: "Compiling",
            money: 3,
          },
          {
            text: "Meetings",
            money: 1,
          },
        ],
      },
      {
        question: "Who are some of the major innovators in tech?",
        answers: [
          {
            text: "Ada Lovelace",
            money: 17,
          },
          {
            text: "Tim Berners-Lee",
            money: 11,
          },
          {
            text: "Charles Babbage",
            money: 6,
          },
          {
            text: "Elon Musk",
            money: 4,
          },
          {
            text: "Jeff Besos",
            money: 3,
          },
          {
            text: "Bill Gates",
            money: 1,
          },
        ],
      },
      {
        question: "What are some of the hottest tech companies today?",
        answers: [
          {
            text: "Tencent",
            money: 17,
          },
          {
            text: "Huawei",
            money: 11,
          },
          {
            text: "IBM",
            money: 6,
          },
          {
            text: "Microsoft",
            money: 4,
          },
          {
            text: "Apple",
            money: 3,
          },
          {
            text: "Samsung",
            money: 1,
          },
        ],
      },
    ],
  },
});

export default app;
