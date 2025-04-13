export type FeatureItem = {
  icon:
    | "Code"
    | "ShieldCheck"
    | "Checks"
    | "ClockClockwise"
    | "Users"
    | "Custom";
  bgColor: string;
  title: string;
  description: string;
};

export const FEATURES: FeatureItem[] = [
  {
    icon: "Code",
    bgColor: "#F9ECFE",
    title: "AI Code Review",
    description: "Auto checks accuracy, efficiency and best practices",
  },
  {
    icon: "ShieldCheck",
    bgColor: "#DBF8FF",
    title: "AI Plagiarism Score",
    description: "Fast and accurate AI-powered originality check",
  },
  {
    icon: "Checks",
    bgColor: "#E7E6F8",
    title: "Fair Grading",
    description: "Remove bias: Score consistently, every time.",
  },
  {
    icon: "ClockClockwise",
    bgColor: "#E1EFFE",
    title: "Saves time",
    description: "Focus more on students, less on grading",
  },
  {
    icon: "Custom",
    bgColor: "#FDF6B2",
    title: "Improved Insights",
    description: "Spot strengths & gaps with detailed reports.",
  },
  {
    icon: "Users",
    bgColor: "#DEF7EC",
    title: "Enhanced Engagement",
    description: "Dashboard boosts Student-Techer-Parent connect",
  },
];
