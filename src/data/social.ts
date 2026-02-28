export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/annabellekaenchanh",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/annabellekaenchanh",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:hello@annabellekaenchanh.com",
    icon: "email",
  },
];
