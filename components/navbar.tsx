"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/site-content";
import { PrototypeAction } from "@/components/prototype-action";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = siteContent.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a
          aria-label="Global Hearts Foundation home"
          className="brand-mark"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            alt="Global Hearts Foundation"
            className="brand-mark__image"
            height={160}
            priority
            src="/logo/global-hearts-logo.jpg.jpg"
            width={360}
          />
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          aria-label="Primary navigation"
          className={`nav-content${menuOpen ? " nav-content--open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {siteContent.navigation.map((item) => {
              const id = item.href.slice(1);
              return (
                <a
                  aria-current={active === id ? "location" : undefined}
                  className={active === id ? "nav-link nav-link--active" : "nav-link"}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <PrototypeAction className="nav-support" label="Support Our Cause" />
        </nav>
      </div>
    </header>
  );
}
