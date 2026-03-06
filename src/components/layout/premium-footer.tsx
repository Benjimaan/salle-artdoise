import { Instagram, Facebook } from "lucide-react";
import { SITE_NAME, NAV_LINKS, CONTACT, SOCIALS } from "@/lib/constants";

export default function PremiumFooter() {
  return (
    <footer className="bg-dark text-white/80">
      {/* Gold gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wider text-white">
              {SITE_NAME}
            </h3>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-white/50">
              Un lieu d&apos;exception pour vos plus belles celebrations.
              Elegance, raffinement et sur-mesure au coeur de l&apos;Oise.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 transition-colors duration-300 hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 transition-colors duration-300 hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-white/50 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-white/50">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="transition-colors duration-300 hover:text-gold"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors duration-300 hover:text-gold"
              >
                {CONTACT.email}
              </a>
              <p>{CONTACT.fullAddress}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center font-sans text-xs text-white/30 sm:flex-row lg:px-10">
          <span>&copy; 2025 L&apos;Art d&apos;Oise &mdash; Tous droits reserves</span>
          <a
            href="/mentions-legales"
            className="transition-colors duration-300 hover:text-gold"
          >
            Mentions legales
          </a>
        </div>
      </div>
    </footer>
  );
}
