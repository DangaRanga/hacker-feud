/*
  (C) 2020 David Lettier
  lettier.com
*/

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["Black-Hats", "White Hats"],
    qas: [
      {
        question: "What are some ways to secure your online accounts?",
        answers: [
          {
            text: "2FA",
            money: 17,
          },
          {
            text: "Strong passwords",
            money: 11,
          },
          {
            text: "Unique passwords",
            money: 6,
          },
          {
            text: "Password manager",
            money: 4,
          },
          {
            text: "Use a VPN",
            money: 3,
          },
          {
            text: "Don't Share Passwords",
            money: 1,
          },
        ],
      },

      {
        question: "Common cyber threats",
        answers: [
          {
            text: "Phishing",
            money: 17,
          },
          {
            text: "Malware",
            money: 11,
          },
          {
            text: "Ransomware",
            money: 6,
          },
          {
            text: "Virus",
            money: 4,
          },
          {
            text: "Pharming",
            money: 3,
          },
          {
            text: "Worm",
            money: 1,
          },
        ],
      },

      {
        question: "Why use a VPN?",
        answers: [
          {
            text: "Privacy",
            money: 17,
          },
          {
            text: "Piracy",
            money: 11,
          },
          {
            text: "Streaming",
            money: 6,
          },
          {
            text: "Vim vs Emacs",
            money: 4,
          },
          {
            text: "Chrome vs Firefox",
            money: 3,
          },
          {
            text: "NoSQL vs RDMS",
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
