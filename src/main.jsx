import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  MapPin,
  Clock3,
  Phone,
  Menu,
  X,
  Building2
} from "lucide-react";

import "./styles.css";

const WHATSAPP_NUMBER = "08149080628";

const LOGO = "https://raw.githubusercontent.com/1mojisola/DAVE-Computers-Educational-Consult/refs/heads/main/received_1035405392878422.jpeg";

const services = [
  {
    icon: TicketCheck,
    title: "WAEC, NECO & NABTEB",
    text: "Registration services and result-checking PIN support for WAEC, NECO and NABTEB candidates."
  },
  {
    icon: GraduationCap,
    title: "NYSC Registration",
    text: "NYSC registration services through an NYSC accredited center."
  },
  {
    icon: ShieldCheck,
    title: "NERD Registration",
    text: "NERD registration services through a NERD accredited center."
  },
  {
    icon: TicketCheck,
    title: "Post UTME / Screening",
    text: "Post UTME and screening registration support for students and candidates."
  },
  {
    icon: Phone,
    title: "Phones & Laptops",
    text: "Sales of phones and laptops for students, individuals and businesses."
  },
  {
    icon: Building2,
    title: "Properties",
    text: "Buying and selling of used and new properties."
  }
];

const locations = [
  "Km 3, Phase 3, Federal University, Oye Campus, Oye-Ekiti, Ekiti State",
  "Adjacent Simple Eatery, Egbe, Oye-Ekiti",
  "Opposite Transformer, Irare Heirs Hospital Street, Oye",
  "26 Odunjo Avenue, Atobatele Estate, Onikoko, Abeokuta"
];

function whatsappUrl(message) {
  if (!WHATSAPP_NUMBER) {
    return "#contact";
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Logo({ className = "" }) {
  return (
    <img
      className={className}
      src={LOGO}
      alt="DAVE Computers and Integrated Services Limited logo"
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="nav">
        <div className="container nav-inner">

          <a
            className="brand"
            href="#top"
            onClick={closeMenu}
            aria-label="DAVE Computers home"
          >
            <span className="brand-mark logo-mark">
              <Logo />
            </span>

            <span className="brand-text">
              <strong>DAVE</strong>
              <small>
                DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED
              </small>
            </span>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#locations" onClick={closeMenu}>
              Locations
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            className="nav-cta"
            href={whatsappUrl(
              "Hello DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED, I would like to make an enquiry about your services."
            )}
          >
            <MessageCircle size={17} />
            <span>Enquire</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">

          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>

          <div className="container hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                <Sparkles size={15} />
                Education • Technology • Property Services
              </div>

              <h1>
                Your trusted point for{" "}
                <span>
                  registration, technology & property services.
                </span>
              </h1>

              <p className="hero-text">
                DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED provides
                registration support, technology sales and property services
                for students, individuals and businesses.
              </p>

              <div className="hero-actions">

                <a
                  className="btn primary"
                  href={whatsappUrl(
                    "Hello DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED, I would like to enquire about your services."
                  )}
                >
                  Make an Enquiry
                  <ArrowRight size={18} />
                </a>

                <a className="btn secondary" href="#services">
                  View Services
                </a>

              </div>

              <div className="trust-row">

                <span>
                  <CheckCircle2 size={17} />
                  Student-friendly
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Multiple locations
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  8AM – 8PM
                </span>

              </div>

            </div>

            {/* HERO CARD */}
            <div className="hero-card">

              <div className="card-glow"></div>

              <div className="hero-card-top">

                <span className="mini-label">
                  INTEGRATED SERVICES
                </span>

                <div className="shield">
                  <ShieldCheck size={27} />
                </div>

              </div>

              <h2>
                Multiple essential services in one place.
              </h2>

              <p>
                From student registration and screening support to phones,
                laptops and property services.
              </p>

              <div className="exam-pills">
                <span>WAEC</span>
                <span>NYSC</span>
                <span>NERD</span>
                <span>TECH</span>
              </div>

              <a className="card-link" href="#contact">
                Contact DAVE
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        </section>

        {/* QUICK STATS */}
        <section className="stats">

          <div className="container stats-grid">

            <div className="stat">
              <strong>6</strong>
              <span>Core services</span>
            </div>

            <div className="stat">
              <strong>4</strong>
              <span>Listed locations</span>
            </div>

            <div className="stat">
              <strong>8AM–8PM</strong>
              <span>Business hours</span>
            </div>

          </div>

        </section>

        {/* SERVICES */}
        <section className="section" id="services">

          <div className="container">

            <div className="section-heading">

              <div className="eyebrow">
                What we offer
              </div>

              <h2>
                Services designed around your needs.
              </h2>

              <p>
                Explore DAVE's registration, technology and property services,
                then contact the team for current availability and requirements.
              </p>

            </div>

            <div className="service-grid">

              {services.map(({ icon: Icon, title, text }, index) => (

                <article
                  className="service-card"
                  key={title}
                >

                  <div className="service-card-top">

                    <div className="icon-box">
                      <Icon size={24} />
                    </div>

                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <span className="service-kicker">
                    DAVE SERVICE
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <a
                    href={whatsappUrl(
                      `Hello DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED, I am interested in your ${title} service.`
                    )}
                    className="service-link"
                  >
                    Enquire
                    <ArrowRight size={16} />
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section className="section about" id="about">

          <div className="container about-grid">

            <div className="about-panel">

              <span className="number">
                01
              </span>

              <div className="about-icon">
                <GraduationCap size={48} />
              </div>

              <span className="about-label">
                DAVE COMPUTERS
              </span>

              <h3>
                More than just computer services.
              </h3>

              <p>
                DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED combines
                educational registration support, technology sales and
                property services under one business.
              </p>

            </div>

            <div className="about-content">

              <div className="eyebrow">
                Why DAVE
              </div>

              <h2>
                One business. Multiple essential services.
              </h2>

              <div className="feature-list">

                <div className="feature">
                  <CheckCircle2 />

                  <span>
                    <strong>
                      Education & registration
                    </strong>

                    <small>
                      WAEC, NECO, NABTEB, NYSC, NERD and Post UTME services.
                    </small>
                  </span>
                </div>

                <div className="feature">
                  <CheckCircle2 />

                  <span>
                    <strong>
                      Technology sales
                    </strong>

                    <small>
                      Phones and laptops available through DAVE's sales service.
                    </small>
                  </span>
                </div>

                <div className="feature">
                  <CheckCircle2 />

                  <span>
                    <strong>
                      Property services
                    </strong>

                    <small>
                      Buying and selling of used and new properties.
                    </small>
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* LOCATIONS */}
        <section className="contact-info" id="locations">

          <div className="container">

            <div className="contact-heading">

              <div className="eyebrow">
                Contact & Locations
              </div>

              <h2>
                Find DAVE at any of the listed locations.
              </h2>

              <p>
                DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED currently
                operates across the following listed locations.
              </p>

            </div>

            <div className="contact-grid">

              <div className="contact-card">

                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>LOCATION 01</span>
                  <strong>
                    Oye / FUOYE
                  </strong>
                  <p>
                    Km 3, Phase 3, Federal University, Oye Campus,
                    Oye-Ekiti, Ekiti State
                  </p>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>LOCATION 02</span>
                  <strong>
                    Egbe, Oye-Ekiti
                  </strong>
                  <p>
                    Adjacent Simple Eatery, Egbe, Oye-Ekiti
                  </p>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>LOCATION 03</span>
                  <strong>
                    Irare, Oye
                  </strong>
                  <p>
                    Opposite Transformer, Irare Heirs Hospital Street, Oye
                  </p>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>LOCATION 04</span>
                  <strong>
                    Abeokuta
                  </strong>
                  <p>
                    26 Odunjo Avenue, Atobatele Estate, Onikoko, Abeokuta
                  </p>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-icon">
                  <Clock3 size={23} />
                </div>

                <div>
                  <span>OPENING HOURS</span>
                  <strong>
                    8:00 AM – 8:00 PM
                  </strong>
                  <p>
                    Contact DAVE for current availability and requirements.
                  </p>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <span>PHONE</span>
                  <strong>
                    0705 099 7976
                  </strong>
                  <p>
                    Alternative: 0814 908 0628
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="cta" id="contact">

          <div className="container">

            <div className="cta-box">

              <div className="cta-copy">

                <div className="eyebrow light">
                  Need a service?
                </div>

                <h2>
                  Talk to DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED.
                </h2>

                <p>
                  Ask about registration services, phones, laptops,
                  properties or any of the available services.
                </p>

              </div>

              <a
                className="btn white"
                href={whatsappUrl(
                  "Hello DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED, I would like to make an enquiry about your services."
                )}
              >
                <MessageCircle size={19} />
                Contact on WhatsApp
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="container footer-inner">

          <div className="footer-brand">

            <div className="footer-logo logo-mark">
              <Logo />
            </div>

            <div>
              <strong>
                DAVE COMPUTERS AND INTEGRATED SERVICES LIMITED
              </strong>

              <span>
                Education, technology and property services.
              </span>
            </div>

          </div>

          <span className="copyright">
            © {new Date().getFullYear()} DAVE Computers
          </span>

        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);