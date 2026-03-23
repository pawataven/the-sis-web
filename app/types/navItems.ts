// ~/types/navItems.ts
export interface NavDropdownItem {
  readonly label: string;
  readonly to: string;
}

export interface NavItem {
  readonly label: string;
  readonly to: string;
  readonly icon: string;
  readonly alt: string;
  readonly dropdown?: NavDropdownItem[];
}