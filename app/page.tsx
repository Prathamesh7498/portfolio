"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, MoveUpRight, Orbit, Shield, Cpu, Code2, Sparkles } from "lucide-react";

const projects = [
  { n: "01", name: "NetScope", type: "NETWORK ANALYSIS · CYBERSECURITY", desc: "An educational network operations platform for exploring packet captures, decoding protocols, aggregating traffic flows, and spotting suspicious patterns.", stack: ["React", "TypeScript", "Vite", "Tailwind", "Python / Flask"], status: "IN DEVELOPMENT", href: "https://github.com/Prathamesh7498/NetScope", mark: "NS" },
  { n: "02", name: "Friday", type: "LOCAL-FIRST AI · PERSONAL ASSISTANT", desc: "A planned local-first assistant platform spanning web, mobile, and API—with a strong focus on privacy, permissions, auditability, and human approval.", stack: ["Python", "TypeScript", "PostgreSQL", "Redis"], status: "PLANNING & FOUNDATION", href: "https://github.com/Prathamesh7498/Friday-", mark: "FR" },
  { n: "03", name: "OpenJarvis", type: "PERSONAL AI · OPEN SOURCE", desc: "Exploring the OpenJarvis personal-AI ecosystem and its approach to running capable assistants on personal devices.", stack: ["Python", "Local AI"], status: "REPOSITORY", href: "https://github.com/Prathamesh7498/OpenJarvis", mark: "OJ" }
];

const nav = [{ label: "Work", href: "#work" }, { label: "About", href: "#about" }, { label: "Approach", href: "#approach" }, { label: "Contact", href: "#contact" }];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 32);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main id="top">
    <div className="scroll-line" style={{ transform: `scaleX(${progress})` }} />
    <header className={scrolled ? "site-header solid" : "site-header"}>
      <a className="wordmark" href="#top" aria-label="Prathamesh home"><span className="mark">P.</span><span>PRATHAMESH<span className="wordmark-dot">/</span></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}<span>↗</span></a>)}</nav>
      <a className="availability" href="mailto:hello@prathamesh.dev"><i /> OPEN TO OPPORTUNITIES</a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"}>{menu ? <X /> : <Menu />}</button>
    </header>
    {menu && <nav className="mobile-nav">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenu(false)}>{item.label}<ArrowUpRight size={17}/></a>)}</nav>}

    <section className="hero">
      <div className="hero-grid" />
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="hero-top mono"><span>INDEPENDENT DEVELOPER / INDIA</span><span>LAT 18.5204° N · LON 73.8567° E</span></div>
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE, SYSTEMS & IDEAS</p>
        <h1>BUILDING<br/><span className="outline">BEYOND</span><br/>THE <span className="serif">obvious.</span></h1>
        <div className="hero-bottom"><p className="hero-copy">I’m Prathamesh — a developer drawn to the intersection of <em>web technology, cybersecurity, and personal AI.</em> I turn ambitious ideas into thoughtful, useful software.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={25}/></a></div>
      </div>
      <div className="hero-index mono"><span>PORTFOLIO — 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro section-pad" id="about" data-reveal>
      <div className="section-kicker mono"><span>01 / A LITTLE ABOUT ME</span><span>THE BUILDER’S MINDSET</span></div>
      <div className="intro-layout"><h2>Curiosity is<br/>my <span className="serif">starting point.</span></h2><div className="intro-text"><p>I enjoy understanding how things work beneath the surface — from the interfaces people use to the systems and networks that power them.</p><p>My current focus moves between building web experiences, learning security through hands-on projects, and designing privacy-conscious AI tools. I value clear thinking, careful engineering, and learning by making.</p><a className="text-link" href="https://github.com/Prathamesh7498" target="_blank" rel="noreferrer">EXPLORE MY GITHUB <ArrowUpRight size={15}/></a></div></div>
      <div className="stats-row"><div><strong>03</strong><span>FEATURED REPOSITORIES</span></div><div><strong>03</strong><span>AREAS OF EXPLORATION</span></div><div><strong>∞</strong><span>THINGS LEFT TO LEARN</span></div></div>
    </section>

    <section className="work section-pad" id="work">
      <div className="section-kicker mono" data-reveal><span>02 / SELECTED WORK</span><span>IDEAS MADE TANGIBLE</span></div>
      <div className="work-heading" data-reveal><h2>Projects with<br/><span className="serif">a purpose.</span></h2><p>A selection of repositories and experiments. Each one is a chance to understand a problem more deeply and build a considered solution.</p></div>
      <div className="project-list">{projects.map(p => <article className="project" key={p.name} data-reveal>
        <div className="project-num mono">{p.n}</div><div className="project-mark">{p.mark}<span>↗</span></div>
        <div className="project-info"><p className="project-type mono">{p.type}</p><h3>{p.name}</h3><p className="project-desc">{p.desc}</p><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div>
        <div className="project-action"><span className="status mono"><i/> {p.status}</span><a href={p.href} target="_blank" rel="noreferrer" aria-label={`View ${p.name} on GitHub`}><ArrowUpRight/></a></div>
      </article>)}</div>
    </section>

    <section className="approach section-pad" id="approach">
      <div className="section-kicker mono" data-reveal><span>03 / WHAT I’M INTO</span><span>THE AREAS I KEEP EXPLORING</span></div>
      <h2 data-reveal>Different layers.<br/><span className="serif">One curiosity.</span></h2>
      <div className="focus-grid">
        <article data-reveal><div className="focus-icon"><Code2/></div><span className="mono">01 — WEB ENGINEERING</span><h3>Interfaces that<br/>feel intentional.</h3><p>Responsive frontend experiences, component systems, and the engineering that makes products feel effortless.</p><div className="focus-foot">BUILD · ITERATE · REFINE</div></article>
        <article data-reveal><div className="focus-icon"><Shield/></div><span className="mono">02 — CYBERSECURITY</span><h3>Understand the<br/>attack surface.</h3><p>Network fundamentals, packet inspection, security-minded design, and learning to see systems from every angle.</p><div className="focus-foot">OBSERVE · ANALYSE · PROTECT</div></article>
        <article data-reveal><div className="focus-icon"><Cpu/></div><span className="mono">03 — PERSONAL AI</span><h3>Intelligence with<br/>more ownership.</h3><p>Local-first assistants, practical AI workflows, and building with privacy, control, and trust in mind.</p><div className="focus-foot">EXPLORE · DESIGN · BUILD</div></article>
      </div>
    </section>

    <section className="contact section-pad" id="contact" data-reveal>
      <div className="contact-glow"/><div className="section-kicker mono"><span>04 / YOUR TURN</span><span>LET’S MAKE SOMETHING MATTER</span></div>
      <p className="eyebrow"><span className="eyebrow-line"/> HAVE A GOOD PROBLEM?</p><h2>Let’s build<br/><span className="serif">what’s next.</span></h2>
      <div className="contact-bottom"><p>I’m always interested in thoughtful conversations, collaborative projects, and opportunities to grow as a developer.</p><a className="contact-cta" href="https://github.com/Prathamesh7498" target="_blank" rel="noreferrer">START A CONVERSATION <ArrowUpRight size={18}/></a></div>
    </section>

    <footer><a className="wordmark" href="#top"><span className="mark">P.</span><span>PRATHAMESH<span className="wordmark-dot">/</span></span></a><span className="mono footer-note">DESIGNED TO KEEP EXPLORING.</span><div className="socials"><a href="https://github.com/Prathamesh7498" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="mailto:hello@prathamesh.dev" aria-label="Email"><Mail/></a></div><span className="mono copyright">© 2026 · BUILT WITH INTENTION</span></footer>
  </main>;
}