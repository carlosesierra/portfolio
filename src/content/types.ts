export type NavigationItem = {
  label: string;
  href: string;
};

export type LinkCta = {
  label: string;
  href: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export type TitleBodyItem = {
  title: string;
  body: string;
};

export type LabeledTitleBodyItem = TitleBodyItem & {
  eyebrow: string;
};

export type StackGroup = {
  title: string;
  body?: string;
  items: readonly string[];
};
