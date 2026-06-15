import { m } from "@rs-stack/i18n/messages";
import { type LinkProps } from "@rs-stack/i18n/tanstack-start/components/link";

type NavbarLink =
  | { label: string; href: LinkProps["href"]; to?: never }
  | { label: string; href?: never; to: LinkProps["to"] };

export const navLinks: NavbarLink[] = [
  {
    label: m.navbar__playground(),
    to: "/playground"
  },
  {
    label: m.navbar__dashboard(),
    to: "/dashboard"
  },
  {
    href: "#",
    label: m.navbar__api_docs()
  }
];
