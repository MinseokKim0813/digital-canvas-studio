import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MinseokKim0813", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/minseok0813", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mk7545@nyu.edu", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="font-mono text-sm text-muted-foreground text-center">
            <p className="flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-destructive" /> and lots of{" "}
              <span className="text-primary">{"<code/>"}</span>
            </p>
            <p className="mt-1 text-xs">
              © {new Date().getFullYear()} Minseok Kim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
