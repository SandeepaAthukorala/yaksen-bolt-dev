import React from 'react';
import { Facebook, Youtube, Linkedin, Twitter, Instagram } from 'lucide-react';
import SocialLink from './social/SocialLink';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/yaksen', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/yaksen', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/yaksen', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/yaksen', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/yaksen', label: 'LinkedIn' },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}
