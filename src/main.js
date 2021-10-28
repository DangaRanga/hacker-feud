import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["Black Hat", "White Hat"],
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
        question: "What are the worst ways to store a password?",
        answers: [
          {
            text: "On paper",
            money: 20,
          },
          {
            text: "Telling someone",
            money: 17,
          },
          {
            text: "In browser",
            money: 11,
          },
          {
            text: "On the desktop",
            money: 6,
          },
          {
            text: "Email",
            money: 4,
          },
          {
            text: "Notes app",
            money: 2,
          },
          {
            text: "None password protected device",
            money: 1,
          },
        ],
      },
      {
        question: "Biggest data breaches/cyber attacks in recent years",
        answers: [
          {
            text: "Amber Group",
            money: 17,
          },
          {
            text: "Solar Winds",
            money: 11,
          },
          {
            text: "Yahoo",
            money: 6,
          },
          {
            text: "Twitch",
            money: 4,
          },
          {
            text: "Facebook",
            money: 3,
          },
        ],
      },
    ],
  },
});

export default app;
