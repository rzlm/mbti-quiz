type MBTIPersonality = {
  code: string;
  name: string;
};

const mbtiPersonalities: MBTIPersonality[] = [
  { code: "INTJ", name: "The Architect" },
  { code: "INTP", name: "The Logician" },
  { code: "ENTJ", name: "The Commander" },
  { code: "ENTP", name: "The Debater" },
  { code: "INFJ", name: "The Advocate" },
  { code: "INFP", name: "The Mediator" },
  { code: "ENFJ", name: "The Protagonist" },
  { code: "ENFP", name: "The Campaigner" },
  { code: "ISTJ", name: "The Logistician" },
  { code: "ISFJ", name: "The Defender" },
  { code: "ESTJ", name: "The Executive" },
  { code: "ESFJ", name: "The Consul" },
  { code: "ISTP", name: "The Virtuoso" },
  { code: "ISFP", name: "The Adventurer" },
  { code: "ESTP", name: "The Entrepreneur" },
  { code: "ESFP", name: "The Entertainer" },
];

export default mbtiPersonalities;
    