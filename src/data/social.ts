export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/akaenchanh",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/annabelle-kaenchanh/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:akaenchanh@gmail.com",
    icon: "email",
  },
];
