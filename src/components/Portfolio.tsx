import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Menu,
  X,
  Mail,
  Download,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { selectedWork } from "../data/selectedWork";

const email = "salmanahmadyt@gmail.com";
const nav = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
];

export const PortfolioHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="section-container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Salman Ahmad home"
          onClick={() => setOpen(false)}
        >
          salman<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export const PortfolioHero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero section-container">
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow">
          <span className="status-dot" /> FULL-STACK DEVELOPER · PAKISTAN
        </p>
        <h1>
          Ideas into
          <br />
          interfaces.
          <br />
          <span>Code into impact.</span>
        </h1>
        <p className="hero-description">
          I’m Salman Ahmad. I build web applications that bring thoughtful
          interfaces, useful features, and reliable integrations together.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="/Salman_Ahmad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials">
          <span>FIND ME ON</span>
          <a
            href="https://github.com/SalmanAhmad-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/salman-ahmad-398274290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </motion.div>
      <div className="hero-showcase">
        <div className="showcase-label">
          <span>FROM THE WORKBENCH</span>
          <span>01 / SELECTED WORK</span>
        </div>
        <a
          className="hero-preview"
          href="#project-comsatshub"
          aria-label="Explore the ComsatsHub project"
        >
          <div className="browser-bar">
            <div className="browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span>comsatshub.vercel.app</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
          <div className="hero-preview-image">
            <img
              src="/images/comsatshub.webp"
              alt="ComsatsHub student portal homepage"
              width="1600"
              height="900"
            />
          </div>
          <div className="preview-caption">
            <div>
              <span className="eyebrow">FEATURED PROJECT</span>
              <strong>Built for the campus community.</strong>
            </div>
            <span className="round-arrow">
              <ArrowUpRight size={22} aria-hidden="true" />
            </span>
          </div>
        </a>
        <div className="engineering-note">
          <Code2 size={22} aria-hidden="true" />
          <div>
            <strong>From frontend to the final integration.</strong>
            <span>React / Next.js / Supabase / AI APIs</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>THOUGHTFUL DESIGN. PRACTICAL ENGINEERING.</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export const SelectedWork: React.FC = () => (
  <section id="work" className="section-container content-section work-section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">01 — SELECTED WORK</p>
        <h2>
          Less talk.
          <br />
          <span>More shipped.</span>
        </h2>
      </div>
      <p>
        A selection of web platforms, client work, and AI applications. Explore
        the product and the engineering behind it.
      </p>
    </div>
    <div className="project-list">
      {selectedWork.map((project, index) => (
        <article
          id={`project-${project.id}`}
          key={project.id}
          className={`project-row project-${project.id}`}
        >
          <a
            className="project-visual"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            <div className="project-visual-top">
              <span>{project.name}</span>
              <span>0{index + 1}</span>
            </div>
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="project-visual-footer">
              EXPLORE THE PRODUCT <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
          <div className="project-copy">
            <p className="eyebrow">{project.category}</p>
            <h3>{project.headline}</h3>
            <p>{project.description}</p>
            <ul className="stack-list" aria-label="Technologies">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <details className="project-details">
              <summary>
                Behind the build <span aria-hidden="true">+</span>
              </summary>
              <dl>
                <dt>Context</dt>
                <dd>{project.context}</dd>
                <dt>My contribution</dt>
                <dd>{project.implementation}</dd>
                <dt>Engineering focus</dt>
                <dd>{project.focus}</dd>
              </dl>
            </details>
          </div>
        </article>
      ))}
    </div>
    <div className="work-footer">
      <span>There’s more in the repository.</span>
      <a
        className="text-link"
        href="https://github.com/SalmanAhmad-code?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore GitHub <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </div>
  </section>
);

const capabilities = [
  {
    number: "01",
    icon: Layers,
    title: "Full-stack applications",
    description:
      "Responsive interfaces, authentication, and database-backed features connected into a complete application.",
    tools: "React · Next.js · TypeScript · Node.js · Supabase",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI-powered features",
    description:
      "Useful AI integrations built into the product experience, from content generation to conversational interfaces.",
    tools: "OpenAI API · Gemini API · Firebase",
  },
  {
    number: "03",
    icon: Code2,
    title: "Websites that work",
    description:
      "Clear, responsive business websites with attention to the details that make them easy to navigate and maintain.",
    tools: "Tailwind CSS · Git / GitHub · Vercel",
  },
];
export const Expertise: React.FC = () => (
  <section id="expertise" className="expertise-section">
    <div className="section-container content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 — HOW I CAN HELP</p>
          <h2>
            Good interfaces.
            <br />
            <span>Solid foundations.</span>
          </h2>
        </div>
        <p>
          I work across the stack, connecting what people see with the systems
          that make it useful.
        </p>
      </div>
      <div className="capabilities">
        {capabilities.map((item) => (
          <article className="capability" key={item.number}>
            <div className="capability-top">
              <item.icon size={27} strokeWidth={1.4} aria-hidden="true" />
              <span>{item.number}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="capability-tools">{item.tools}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const AboutExperience: React.FC = () => (
  <section
    id="about"
    className="section-container content-section about-section"
  >
    <div className="about-photo">
      <img
        src="/images/salman.webp"
        alt="Salman Ahmad on campus in Abbottabad"
        width="1200"
        height="675"
        loading="lazy"
        decoding="async"
      />
      <div className="photo-caption">
        <span>SALMAN AHMAD</span>
        <span>ABBOTTABAD, PK</span>
      </div>
    </div>
    <div className="about-copy">
      <p className="eyebrow">03 — THE PERSON BEHIND THE CODE</p>
      <h2>
        Curious by nature.
        <br />
        <span>A builder by choice.</span>
      </h2>
      <p>
        I’m a software engineering student at COMSATS University Islamabad,
        Abbottabad Campus. I enjoy turning a real problem into something people
        can use—from student platforms to business websites and AI applications.
      </p>
      <p>
        My work spans freelance development and a completed Headstarter AI
        fellowship. I care about understanding the whole product: the interface,
        the data, and the details that connect them.
      </p>
      <div className="experience-list">
        <div>
          <span>2024 — PRESENT</span>
          <strong>Freelance Web Developer</strong>
          <p>Web development and application integrations.</p>
        </div>
        <div>
          <span>AUG — SEP 2024</span>
          <strong>Software Engineering Fellow · Headstarter AI</strong>
          <p>Project-based learning across web and AI applications.</p>
        </div>
        <div>
          <span>2023 — PRESENT</span>
          <strong>BS Software Engineering · COMSATS</strong>
          <p>Abbottabad Campus.</p>
        </div>
      </div>
      <a
        className="text-link"
        href="/Salman_Ahmad_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download size={17} aria-hidden="true" /> View full résumé{" "}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </div>
  </section>
);

export const PortfolioContact: React.FC = () => (
  <section id="contact" className="contact-section">
    <div className="section-container content-section">
      <p className="eyebrow">04 — LET’S BUILD SOMETHING</p>
      <div className="contact-heading">
        <h2>
          Have an idea?
          <br />
          <span>Let’s make it real.</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${email}`}
          aria-label="Email Salman Ahmad"
        >
          <ArrowUpRight size={52} strokeWidth={1.3} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-bottom">
        <div>
          <p>For project inquiries, opportunities, or a good conversation.</p>
          <a className="email-link" href={`mailto:${email}`}>
            {email}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <a
          className="button button-primary"
          href={`mailto:${email}?subject=Project%20inquiry`}
        >
          <Mail size={18} aria-hidden="true" /> Start a conversation
        </a>
      </div>
    </div>
  </section>
);
export const PortfolioFooter: React.FC = () => (
  <footer className="site-footer section-container">
    <a className="wordmark" href="#home" aria-label="Back to top">
      salman<span>.</span>
    </a>
    <span>© {new Date().getFullYear()} Salman Ahmad</span>
    <div>
      <a
        href="https://github.com/SalmanAhmad-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <a
        href="https://linkedin.com/in/salman-ahmad-398274290"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
);
