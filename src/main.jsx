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
  X
} from "lucide-react";

import "./styles.css";

/*
  IMPORTANT:
  Replace this with DAVE's actual WhatsApp number before delivery.

  Format:
  Nigeria number without the + sign or spaces.

  Example:
  const WHATSAPP_NUMBER = "2348012345678";
*/
const WHATSAPP_NUMBER = "0814 908 0628";


const services = [
  {
    icon: TicketCheck,
    title: "WAEC",
    text: "Registration support and result-checking PIN services."
  },
  {
    icon: TicketCheck,
    title: "NECO",
    text: "Registration support and result-checking PIN services."
  },
  {
    icon: TicketCheck,
    title: "NABTEB",
    text: "Registration support and result-checking PIN services."
  }
];


function whatsappUrl(message) {
  if (!WHATSAPP_NUMBER) {
    return "#contact";
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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
            <span className="brand-mark">
              <GraduationCap size={22} />
            </span>

            <span className="brand-text">
              <strong>DAVE</strong>
              <small>Computers & Educational Consult</small>
            </span>
          </a>


          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>


          <a
            className="nav-cta"
            href={whatsappUrl(
              "Hello DAVE Computers, I would like to make an enquiry about your services."
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
                Student-focused education services
              </div>

              <h1>
                Your trusted point for{" "}
                <span>exam services & result checking.</span>
              </h1>

              <p className="hero-text">
                DAVE Computers & Educational Consult provides support for
                WAEC, NECO and NABTEB registration and result-checking PIN
                services.
              </p>


              <div className="hero-actions">

                <a
                  className="btn primary"
                  href={whatsappUrl(
                    "Hello DAVE Computers, I want to enquire about your WAEC, NECO or NABTEB services."
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
                  Convenient
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Student-friendly
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Oye-based
                </span>

              </div>

            </div>


            {/* HERO CARD */}
            <div className="hero-card">

              <div className="card-glow"></div>

              <div className="hero-card-top">

                <span className="mini-label">
                  EDUCATIONAL SUPPORT
                </span>

                <div className="shield">
                  <ShieldCheck size={27} />
                </div>

              </div>


              <h2>
                Get the exam services you need in one place.
              </h2>

              <p>
                Registration support and result-checking PIN services
                for major Nigerian examination bodies.
              </p>


              <div className="exam-pills">
                <span>WAEC</span>
                <span>NECO</span>
                <span>NABTEB</span>
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
              <strong>3</strong>
              <span>Major exam bodies</span>
            </div>

            <div className="stat">
              <strong>1</strong>
              <span>Convenient contact point</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>Enquiry access</span>
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
                Exam services made simple.
              </h2>

              <p>
                Choose the examination body you need help with and
                contact DAVE for current registration and PIN availability.
              </p>

            </div>


            <div className="service-grid">

              {services.map(
                ({ icon: Icon, title, text }) => (

                  <article
                    className="service-card"
                    key={title}
                  >

                    <div className="service-card-top">

                      <div className="icon-box">
                        <Icon size={24} />
                      </div>

                      <span className="service-number">
                        0{services.findIndex(
                          service => service.title === title
                        ) + 1}
                      </span>

                    </div>


                    <span className="service-kicker">
                      EXAMINATION SERVICE
                    </span>

                    <h3>{title}</h3>

                    <p>{text}</p>


                    <a
                      href={whatsappUrl(
                        `Hello DAVE Computers, I am interested in ${title} services.`
                      )}
                      className="service-link"
                    >
                      Enquire
                      <ArrowRight size={16} />
                    </a>

                  </article>

                )
              )}

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
                EDUCATIONAL SUPPORT
              </span>

              <h3>
                Built around students.
              </h3>

              <p>
                DAVE Computers & Educational Consult is presented as
                a straightforward place for students and candidates
                to get help with examination-related services.
              </p>

            </div>


            <div className="about-content">

              <div className="eyebrow">
                Why DAVE
              </div>

              <h2>
                A simple way to get the right exam service.
              </h2>


              <div className="feature-list">

                <div className="feature">

                  <CheckCircle2 />

                  <span>
                    <strong>
                      Clear service options
                    </strong>

                    <small>
                      See the examination body you need at a glance.
                    </small>
                  </span>

                </div>


                <div className="feature">

                  <CheckCircle2 />

                  <span>
                    <strong>
                      Easy enquiries
                    </strong>

                    <small>
                      Contact the business directly for availability
                      and current requirements.
                    </small>
                  </span>

                </div>


                <div className="feature">

                  <CheckCircle2 />

                  <span>
                    <strong>
                      Convenient local service
                    </strong>

                    <small>
                      Serving students and candidates around the
                      Oye/FUOYE area.
                    </small>
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CONTACT INFORMATION */}
        <section className="contact-info">

          <div className="container">

            <div className="contact-heading">

              <div className="eyebrow">
                Contact & Location
              </div>

              <h2>
                Need help with an exam service?
              </h2>

              <p>
                Reach out to DAVE Computers & Educational Consult
                for current service availability and requirements.
              </p>

            </div>


            <div className="contact-grid">

              <div className="contact-card">

                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>
                    Oye / FUOYE Area
                  </strong>
                  <p>
                    Ekiti State, Nigeria
                  </p>
                </div>

              </div>


              <div className="contact-card">

                <div className="contact-icon">
                  <Clock3 size={23} />
                </div>

                <div>
                  <span>ENQUIRIES</span>
                  <strong>
                    Contact for availability
                  </strong>
                  <p>
                    Ask about current registration and PIN services.
                  </p>
                </div>

              </div>


              <div className="contact-card">

                <div className="contact-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <span>CONTACT</span>
                  <strong>
                    Direct enquiries
                  </strong>
                  <p>
                    Contact DAVE for assistance.
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
                  Need an exam service?
                </div>

                <h2>
                  Talk to DAVE Computers.
                </h2>

                <p>
                  Ask about WAEC, NECO or NABTEB registration
                  and result-checking PIN services.
                </p>

              </div>


              <a
                className="btn white"
                href={whatsappUrl(
                  "Hello DAVE Computers, I would like to make an enquiry about your exam services."
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

            <div className="footer-logo">
              <GraduationCap size={19} />
            </div>

            <div>
              <strong>
                DAVE Computers & Educational Consult
              </strong>

              <span>
                Educational support services in Oye, Ekiti.
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
