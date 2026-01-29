
// Fix: Import React to resolve 'Cannot find namespace React' error on React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonaCardProps {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}
