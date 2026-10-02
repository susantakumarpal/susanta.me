import { ArrowDown, ArrowRight, ArrowUpRight, CodeXml, Github, Linkedin, Mail, Menu, MoveUpRight, X } from 'lucide-react'
import { useState } from 'react'
import { certifications, contactLinks, metrics, navigation, projects, skillAreas, timeline } from './data.js'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="dark-portfolio min-h-screen overflow-x-clip bg-[#0b0f10] text-[#e7efec] antialiased">
      <header className="site-header sticky top-3 z-50 mx-auto flex h-[72px] w-[min(1200px,calc(100%-48px))] items-center justify-between rounded-[18px] border border-white/10 px-5 max-md:px-3 shadow-[0_14px_42px_rgba(0,0,0,0.22)]">
        <a className="inline-flex items-center gap-2 whitespace-nowrap text-[16px] font-extrabold tracking-normal text-slate-900 max-[360px]:text-[14px] max-[300px]:text-[13px] sm:text-[19px]" href="#top" aria-label="Susanta Kumar Pal, home">
          <CodeXml className="h-5 w-5 shrink-0 text-[#7ee0bc]" strokeWidth={2.5} aria-hidden="true" />
          Susanta Kumar{' '}Pal
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors duration-200 hover:text-[#A4462C]">
              {item.label}
            </a>
          ))}
          <a className="nav-contact inline-flex items-center gap-2 rounded-full bg-[#24463D] px-[15px] py-[11px] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F4F3EE] transition-colors duration-200 hover:bg-[#A4462C]" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>

        <button className="menu-toggle md:hidden" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="section-shell relative grid min-h-[630px] items-center gap-12 py-[48px] pb-[75px] md:grid-cols-[1.25fr_0.75fr]" id="top">
        <div className="relative z-10 pb-[20px]">
          <p className="eyebrow flex items-center gap-[10px] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#60716B]">
            <span className="status-dot h-[7px] w-[7px] rounded-full bg-[#A4462C] shadow-[0_0_0_4px_rgba(164,70,44,0.1)]" />
            SOFTWARE ENGINEER <span className="opacity-50">/</span> INDIA
          </p>

          <h1 className="mt-[28px] mb-[24px] text-[clamp(54px,6vw,80px)] font-semibold leading-[0.92] tracking-[-0.06em] text-slate-900">
            I build thoughtful<br />digital products with <em className="font-semibold not-italic text-[#A4462C]">purpose.</em>
          </h1>

          <p className="max-w-[430px] text-[15px] leading-[1.8] text-[#63706B]">
            I design dependable interfaces and robust systems that help ideas turn into products people actually enjoy using.
          </p>

          <div className="mt-[34px] flex items-center gap-[26px]">
            <a className="button-primary inline-flex min-h-[48px] items-center justify-center gap-[20px] rounded-full bg-slate-900 px-[20px] text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f9f7f4] shadow-[0_18px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#A4462C]" href="#work">
              Explore my work <ArrowRight size={16} />
            </a>
            <a className="text-link inline-flex items-center gap-[8px] text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900 transition-colors duration-200 hover:text-[#A4462C]" href="#about">
              A little about me <ArrowDown size={15} />
            </a>
          </div>

          <div className="hero-footnote absolute -bottom-[75px] left-0 flex gap-[30px] text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <span>ODISHA, IN <span className="text-[#A4462C]">✳</span></span>
          </div>
        </div>

        <div className="hero-panel relative flex min-h-[420px] flex-col justify-center rounded-[30px] border border-slate-200/80 bg-gradient-to-br from-white via-[#f9f7f3] to-[#ece9df] p-[24px] shadow-[0_28px_70px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70" aria-label="Professional profile summary">
          <div className="panel-card mb-[18px] flex min-h-[130px] flex-col justify-center gap-[10px] rounded-[22px] border border-slate-200 bg-[#F4F3EE]/90 p-[18px] shadow-sm">
            <span className="panel-kicker text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A4462C]">CURRENTLY</span>
            <strong className="text-[22px] font-semibold leading-tight tracking-[-0.04em] text-slate-900">Building product-minded software</strong>
          </div>

          <div className="grid gap-[14px]">
            <div className="flex flex-col gap-[7px] rounded-[18px] border border-slate-200 bg-slate-50/80 p-[14px_16px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Focus</span>
              <strong className="text-[15px] font-semibold tracking-[-0.04em] text-slate-900">Full-stack engineering</strong>
            </div>
            <div className="flex flex-col gap-[7px] rounded-[18px] border border-slate-200 bg-slate-50/80 p-[14px_16px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Stack</span>
              <strong className="text-[15px] font-semibold tracking-[-0.04em] text-slate-900">React · Django · Python</strong>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-cue absolute bottom-[22px] left-0 flex items-center gap-[10px] text-[8px] text-[#7B8580]" aria-label="Scroll to about section">
          <span className="h-px w-[26px] bg-[#A4462C]" /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="bg-gradient-to-r from-[#142522] to-[#1b3730] text-[#F4F3EE] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" aria-label="At a glance">
        <div className="metrics-inner mx-auto grid min-h-[132px] w-[min(1200px,calc(100%-96px))] items-center md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <p className="text-[9px] font-medium leading-[1.7] text-[#B7C2BC] md:text-left">A FEW THINGS<br />TO KNOW</p>
          {metrics.map((metric) => (
            <div className="metric min-h-[52px] border-l border-[#F4F3EE]/20 pl-[14px] md:pl-[27px]" key={metric.label}>
              <strong className="text-[22px] font-semibold md:text-[27px]">{metric.value}</strong>
              <span className="text-[10px] text-[#B7C2BC]">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad" id="about">
        <div className="section-heading flex items-center gap-[17px] text-[#7B8580]"><span className="section-number text-[10px] font-medium uppercase text-[#A4462C]">01 / ABOUT</span><span className="section-rule h-px w-full bg-[#1C2623]/16" /></div>
        <div className="about-grid grid gap-[10%] pt-[55px] md:grid-cols-[1fr_0.75fr] md:items-center">
          <h2 className="text-[clamp(43px,5vw,62px)] font-medium leading-[0.96] tracking-[-0.06em] text-slate-900">
            Curious by nature.<br /><em className="font-medium not-italic text-[#A4462C]">Developer</em> by choice.
          </h2>
          <div className="about-copy max-w-[440px]">
            <p className="text-[14px] leading-[1.9] text-[#65716C]">I&apos;m Susanta, a software developer who enjoys turning ideas into useful, considered digital experiences. I work across the stack, with a soft spot for clean interfaces and well-shaped backend logic.</p>
            <p className="mt-[15px] text-[14px] leading-[1.9] text-[#65716C]">Currently pursuing Computer Science &amp; Engineering, I bring a practical mindset, a steady appetite for learning, and care for the small details that make software feel right.</p>
            <a className="inline-link mt-[15px] inline-flex items-center gap-[9px] border-b border-[#A4462C] pb-[5px] text-[11px] font-bold uppercase tracking-[0.12em]" href="#background">
              More about my journey <MoveUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section section-shell section-pad" id="skills">
        <div className="section-heading flex items-center gap-[17px] text-[#7B8580]"><span className="section-number text-[10px] font-medium uppercase text-[#A4462C]">02 / TOOLKIT</span><span className="section-rule h-px w-full bg-[#1C2623]/16" /><span className="section-aside hidden whitespace-nowrap text-[9px] md:inline">TOOLS I REACH FOR</span></div>
        <div className="skills-grid grid gap-0 pt-[42px] md:grid-cols-4">
          {skillAreas.map((area) => (
            <article className="skill-area min-h-[205px] rounded-[22px] border border-slate-200/80 bg-white/40 p-[22px_20px] shadow-[0_6px_16px_rgba(15,23,42,0.03)] md:mx-2 md:first:ml-0 md:last:mr-0" key={area.number}>
              <span className="skill-number text-[10px] font-medium text-[#A4462C]">{area.number}</span>
              <h3 className="mt-[21px] mb-[14px] text-[15px] font-semibold text-slate-900">{area.title}</h3>
              <ul className="flex flex-wrap gap-[7px]">
                {area.items.map((item) => (
                  <li key={item} className="rounded-full border border-slate-200 bg-white/70 px-[10px] py-[6px] text-[10px] font-medium uppercase tracking-[0.08em] text-slate-600">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section bg-gradient-to-b from-[#101716] to-[#0e1313] section-pad" id="work">
        <div className="section-shell">
          <div className="section-heading flex items-center gap-[17px] text-[#7B8580]"><span className="section-number text-[10px] font-medium uppercase text-[#A4462C]">03 / SELECTED WORK</span><span className="section-rule h-px w-full bg-[#1C2623]/16" /><span className="section-aside hidden whitespace-nowrap text-[9px] md:inline">A SMALL SELECTION, FOR NOW</span></div>
          <div className="work-title-row flex items-end justify-between pb-[32px] pt-[48px]">
            <h2 className="text-[clamp(43px,5vw,62px)] font-medium leading-[0.99] tracking-[-2.5px] text-[#1C2623]">Made with<br /><em className="font-medium not-italic text-[#A4462C]">intention.</em></h2>
            <p className="mb-[5px] ml-[20px] max-w-[250px] text-[12px] leading-[1.9] text-[#65716C]">Some things I&apos;ve built while learning, experimenting, and figuring it out.</p>
          </div>

          <div className="project-list border-t border-[#1C2623]/22">
            {projects.map((project) => (
              <article className="project-row grid gap-[15px] border-b border-[#1C2623]/22 py-[30px] md:grid-cols-[75px_1fr_44px]" key={project.number}>
                <span className="project-number pt-[2px] text-[11px] font-medium text-[#A4462C]">{project.number}</span>
                <div className="project-main">
                  <span className="project-type text-[9px] font-medium uppercase text-[#79837D]">{project.type}</span>
                  <h3 className="mt-[9px] mb-[8px] text-[25px] font-semibold tracking-[-0.05em] text-slate-900">{project.name}</h3>
                  <p className="max-w-[565px] text-[12px] leading-[1.8] text-[#65716C]">{project.description}</p>
                  <div className="project-tags mt-[16px] flex flex-wrap gap-[7px]">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white/60 px-[8px] py-[5px] text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-600">{item}</span>
                    ))}
                  </div>
                </div>
                <a className="project-arrow grid h-[40px] w-[40px] place-items-center rounded-full border border-slate-300 bg-white/70 transition-colors duration-200 hover:bg-[#24463D] hover:text-[#F4F3EE]" href="#contact" aria-label={`Ask me about ${project.name}`}>
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad" id="background">
        <div className="section-heading flex items-center gap-[17px] text-[#7B8580]"><span className="section-number text-[10px] font-medium uppercase text-[#A4462C]">04 / THE PATH SO FAR</span><span className="section-rule h-px w-full bg-[#1C2623]/16" /><span className="section-aside hidden whitespace-nowrap text-[9px] md:inline">A WORK IN PROGRESS</span></div>
        <div className="background-grid grid gap-[10%] pt-[55px] md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[clamp(43px,5vw,62px)] font-medium leading-[0.96] tracking-[-0.06em] text-slate-900">Learning<br />as I <em className="font-medium not-italic text-[#A4462C]">go.</em></h2>
            <p className="background-note mt-[22px] max-w-[255px] text-[14px] leading-[1.9] text-[#65716C]">Each step has left me with a new question worth exploring.</p>
            <div className="certifications mt-[65px]">
              <span className="project-type text-[9px] font-medium uppercase text-[#79837D]">CERTIFICATIONS</span>
              {certifications.map((certification) => (
                <p key={certification} className="border-b border-[#1C2623]/13 py-[10px] text-[10px] text-[#68736E]">{certification}</p>
              ))}
            </div>
          </div>

          <div className="timeline border-t border-[#1C2623]/18">
            {timeline.map((item) => (
              <article className="timeline-item grid gap-[20px] border-b border-[#1C2623]/18 py-[20px] md:grid-cols-[130px_1fr]" key={`${item.date}-${item.title}`}>
                <div className="timeline-date text-[9px] font-medium uppercase text-[#A4462C]">{item.date}</div>
                <div className="timeline-content">
                  <span className="project-type text-[9px] font-medium uppercase text-[#79837D]">{item.type}</span>
                  <h3 className="mt-[8px] mb-[5px] text-[15px] font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-[11px] leading-[1.7] text-[#68736E]">{item.place}</p>
                  {item.detail && <span className="timeline-detail mt-[7px] inline-block text-[10px] font-medium uppercase text-[#24463D]">{item.detail}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#080c0d] pb-[25px] pt-[68px] text-[#F4F3EE]" id="contact">
        <div className="section-shell">
          <div className="section-heading flex items-center gap-[17px] text-[#AEB9B3]"><span className="section-number text-[10px] font-medium uppercase text-[#A4462C]">05 / GET IN TOUCH</span><span className="section-rule h-px w-full bg-[#F4F3EE]/20" /><span className="section-aside hidden whitespace-nowrap text-[9px] md:inline">GOOD THINGS START WITH A HELLO</span></div>

          <div className="contact-main py-[80px]">
            <p className="eyebrow text-[#ADBBB3]">HAVE A PROJECT OR AN IDEA?</p>
            <h2 className="mt-[22px] mb-[25px] text-[clamp(56px,7vw,88px)] font-medium leading-[0.95] tracking-[-0.06em] text-[#F4F3EE]">
              Let&apos;s make<br /><em className="not-italic text-[#BF765B]">something matter.</em>
            </h2>
            <a className="contact-cta inline-flex items-center gap-[35px] border-b border-[#BF765B] pb-[14px] text-[12px] font-semibold uppercase tracking-[0.14em]" href="mailto:susantapal687@gmail.com">
              Start a conversation <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="contact-bottom flex flex-col gap-[15px] border-t border-[#F4F3EE]/20 pt-[23px] md:flex-row md:items-center md:justify-between">
            <a className="footer-email inline-flex items-center gap-[9px] text-[11px] text-[#C0C9C3]" href="mailto:susantapal687@gmail.com"><Mail size={15} /> susantapal687@gmail.com</a>
            <div className="social-links flex gap-[10px]">
              <a className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#F4F3EE]/24 bg-white/5 transition-colors duration-200 hover:bg-[#A4462C]" href="https://github.com/susantakumarpal" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#F4F3EE]/24 bg-white/5 transition-colors duration-200 hover:bg-[#A4462C]" href="https://linkedin.com/in/susanta-kumar-pal-1668731b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
            <span className="copyright text-[8px] font-medium uppercase tracking-[0.12em] text-[#87948D]">© 2026 SUSANTA KUMAR PAL</span>
          </div>

          <div className="contact-details flex justify-end pt-[15px] text-[9px] font-medium uppercase text-[#87948D]">
            {contactLinks.filter((link) => link.label === 'Phone').map((link) => (
              <a href={link.href} key={link.label}>{link.value}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App