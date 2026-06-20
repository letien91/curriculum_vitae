export type Locale = "en" | "vi";

export type LocalizedString = Record<Locale, string>;

export type TechSpec = {
  label: LocalizedString;
  values: string[];
};

export type StoreLink = {
  label: LocalizedString;
  url: string;
};

export type TestAccount = {
  label: LocalizedString;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  description: LocalizedString;
  images: string[];
  tech: TechSpec[];
  links?: StoreLink[];
  testAccounts?: TestAccount[];
  integratedProjects?: string[];
  featured?: boolean;
  role?: LocalizedString;
};

export type Experience = {
  from: string;
  to: string;
  toNow?: boolean;
  company: string;
  role: LocalizedString;
  items: LocalizedString[];
};

export type SkillBar = {
  name: LocalizedString;
  level: number;
};

export type LanguageSkill = {
  name: LocalizedString;
  level: LocalizedString;
};

export type ValueCard = {
  title: LocalizedString;
  description: LocalizedString;
};

export type Stat = {
  value: string;
  label: LocalizedString;
};

export type Achievement = {
  title: LocalizedString;
  description: LocalizedString;
};

export type PersonalInfo = {
  name: string;
  navName: LocalizedString;
  logo: string;
  position: LocalizedString;
  avatar: string;
  gender: LocalizedString;
  maritalStatus: LocalizedString;
  phone: string;
  email: string;
  location: LocalizedString;
  education: LocalizedString;
  summary: LocalizedString;
  zaloUrl: string;
  heroBadge: LocalizedString;
  heroHeadline: LocalizedString;
  heroHighlight: LocalizedString;
  heroTags: LocalizedString;
};

export type CvData = {
  personal: PersonalInfo;
  stats: Stat[];
  skillBars: SkillBar[];
  languages: LanguageSkill[];
  valueCards: ValueCard[];
  achievements: Achievement[];
  experiences: Experience[];
  projects: Project[];
};

export type UiLabels = {
  nav: Record<
    | "home"
    | "about"
    | "experience"
    | "projects"
    | "skills"
    | "achievements"
    | "contact",
    LocalizedString
  >;
  sections: Record<
    | "personalInfo"
    | "expertise"
    | "languages"
    | "about"
    | "experience"
    | "featuredProjects"
    | "allProjects"
    | "achievements"
    | "contact",
    LocalizedString
  >;
  buttons: Record<
    | "viewProfile"
    | "contactMe"
    | "sendEmail"
    | "seeMore"
    | "seeLess"
    | "viewAllProjects"
    | "linkStore"
    | "testAccount"
    | "integratedProjects",
    LocalizedString
  >;
  misc: Record<"projectsIntegrated" | "copyright" | "contactDescription", LocalizedString>;
};
