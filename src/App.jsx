import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Workflow, Server, Rocket, Cog, Phone, Mail, MapPin, CheckCircle2, HardDrive, Wrench, Sparkles } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "windows", label: "Windows" },
    { id: "solutions", label: "Solutions" },
    { id: "case-studies", label: "Case Studies" },
    { id: "partners", label: "Partners" },
    { id: "contact", label: "Contact" },
  ];

  const partners = [
    {
      name: "Refex Mobility",
      url: "https://www.linkedin.com/company/refex-mobility/",
      logo: "public/refex_mobility.png",
      blurb:
        "Edge-to-cloud architecture for EV operations—CI/CD for telemetry services, observability dashboards, and resilient Windows services for on‑prem nodes.",
    },
    {
      name: "Neev Global",
      url: "https://www.linkedin.com/company/neevglobal/posts/?feedView=all",
      logo: "public/neev.png",
      blurb:
        "Multi-cloud enablement and Windows hardening playbooks—consistent deployments, faster incident response, and measurable cost optimizations.",
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <BrandLogo />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm hover:text-sky-700">
                  {n.label}
                </button>
              ))}
              <a href="#contact" onClick={(e) => {e.preventDefault(); scrollTo("contact");}} className="inline-flex items-center rounded-2xl border border-sky-600 px-3 py-1.5 text-sm font-medium text-sky-700 hover:bg-sky-50">
                Talk to an Expert
              </a>
            </nav>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 flex flex-col gap-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="mt-2 inline-flex items-center rounded-2xl border border-sky-600 px-3 py-2 text-sm font-medium text-sky-700">
                Talk to an Expert
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Accelerate Your <span className="text-sky-600">Cloud Journey</span>
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                We design, migrate, and operate secure, scalable, and cost‑efficient cloud platforms across AWS, Azure, and GCP. From on‑prem to multi‑cloud, Techzilla Solutions has you covered.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo("contact");}} className="rounded-2xl bg-sky-600 px-5 py-3 text-white font-medium shadow hover:shadow-md">Get Started</a>
                <a href="#services" onClick={(e)=>{e.preventDefault(); scrollTo("services");}} className="rounded-2xl border px-5 py-3 font-medium hover:bg-slate-50">Explore Services</a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24/7 Support
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Certified Cloud & DevOps Engineers
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Proven Cost Savings
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200/40 to-indigo-200/40 blur-3xl rounded-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <Card icon={<Server />} title="Cloud Migrations" subtitle="Zero‑downtime strategies" />
                  <Card icon={<Workflow />} title="DevOps & CI/CD" subtitle="Pipelines that ship faster" />
                  <Card icon={<Shield />} title="Security & Compliance" subtitle="Guardrails & best practices" />
                  <Card icon={<Cog />} title="Cost & Observability" subtitle="FinOps + monitoring" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we do" title="End‑to‑End Cloud Services" subtitle="Practical engineering to build, modernize, and run your infrastructure." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<Rocket />} title="Cloud Setup & Migration" points={["Assessments & landing zones","On‑prem to cloud / re‑platform","Zero‑trust networking"]} />
            <ServiceCard icon={<Workflow />} title="DevOps Automation" points={["CI/CD pipelines & GitOps","IaC with Terraform/Ansible","Kubernetes, containers"]} />
            <ServiceCard icon={<Shield />} title="Security & Compliance" points={["IAM hardening & guardrails","Backup/DR & resilience","ISO/SOC2/GDPR readiness"]} />
            <ServiceCard icon={<Cog />} title="Cost Optimization (FinOps)" points={["Rightsizing & autoscaling","Savings plans & budgets","Dashboards & alerts"]} />
            <ServiceCard icon={<Server />} title="Managed Cloud Ops" points={["24/7 monitoring & SRE","Patch & incident response","SLAs & runbooks"]} />
            <ServiceCard icon={<Cloud />} title="Multi‑Cloud & Hybrid" points={["AWS • Azure • GCP","Private + public integrations","Observability across estates"]} />
          </div>
        </div>
      </section>

      {/* WINDOWS SERVER MANAGEMENT */}
      <section id="windows" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Microsoft stack" title="Windows Server Management" subtitle="Hardened, compliant, and always‑on Windows environments for your business applications." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<HardDrive />} title="Active Directory & GPO" points={["Design & forests/domains","Group Policy baselines","Azure AD Connect / Entra ID"]} />
            <ServiceCard icon={<Wrench />} title="Patch & Config Management" points={["WSUS configuration","Automated patch windows","Desired State (DSC)"]} />
            <ServiceCard icon={<Shield />} title="Hardening & Security" points={["CIS benchmarks","Privilege access mgmt","Certificate Services (AD CS)"]} />
            <ServiceCard icon={<Server />} title="Hyper‑V & Clustering" points={["Failover Cluster setup","Live migration","Storage Spaces Direct"]} />
            <ServiceCard icon={<Server />} title="IIS, RDS & File Services" points={["App pools & SSL","Remote Desktop Services","DFS‑R & SMB shares"]} />
            <ServiceCard icon={<Cloud />} title="Backup & DR for Windows" points={["VSS‑aware backups","Azure Backup & Site Recovery","Runbooks & test failover"]} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo("contact");}} className="rounded-2xl bg-sky-600 px-5 py-3 text-white font-medium shadow hover:shadow-md">Request a Windows Audit</a>
            <a href="#case-studies" onClick={(e)=>{e.preventDefault(); scrollTo("case-studies");}} className="rounded-2xl border px-5 py-3 font-medium hover:bg-slate-50">See Outcomes</a>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Tailored playbooks" title="Solutions for Every Stage" subtitle="From scrappy startups to regulated enterprises." />
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <SolutionCard title="Startups" bullets={["Ready‑to‑ship landing zone","Secure by default CI/CD","Scale‑friendly architecture"]} />
            <SolutionCard title="Enterprises" bullets={["Migration factories","Policy‑as‑code & governance","Modernization roadmaps"]} />
            <SolutionCard title="FinTech & SaaS" bullets={["High availability & DR","Data protection & audit trails","Performance at scale"]} />
          </div>
        </div>
      </section>

{/* PARTNERS */}
<section id="partners" className="py-20 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Satisfied partners"
      title="Trusted by forward-thinking teams"
      subtitle="Strategic partnerships that value reliability, security, and speed."
    />

    {/* ✅ Centered container */}
    <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {partners.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow w-full sm:w-[300px]"
        >
          <div className="h-12 grid place-items-center">
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              className="max-h-10 w-auto object-contain logo-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden text-base font-medium" aria-hidden>
              {p.name}
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">{p.blurb}</p>
          <div className="mt-4 inline-flex items-center text-sky-700 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-1" /> View partnership
          </div>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* CASE STUDIES */}
      <section id="case-studies" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Impact" title="Sample Outcomes" subtitle="Representative results from typical client engagements." />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <OutcomeCard percent="38%" text="lower monthly cloud spend after rightsizing & autoscaling." />
            <OutcomeCard percent="4x" text="faster deployments by introducing CI/CD & IaC." />
            <OutcomeCard percent="99.95%" text="achieved availability with multi‑AZ architecture & DR runbooks." />
          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Let’s talk"
      title="Schedule a Free Consultation"
      subtitle="Tell us your goals—we’ll share an actionable roadmap."
    />
    <div className="mt-8 grid lg:grid-cols-2 gap-10">
      {/* Contact Form */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <form className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" placeholder="Full name" />
            <input className="input" type="email" placeholder="Work email" />
          </div>
          <input className="input" placeholder="Company" />
          <select className="input">
            <option>Service of interest</option>
            <option>Cloud Migration</option>
            <option>DevOps & CI/CD</option>
            <option>Security & Compliance</option>
            <option>Cost Optimization</option>
            <option>Managed Ops</option>
            <option>Windows Server Management</option>
          </select>
          <textarea
            className="input min-h-[120px]"
            placeholder="Briefly describe your needs"
          />
          <button
            type="button"
            className="rounded-2xl bg-sky-600 px-5 py-3 text-white font-medium w-max"
          >
            Request Callback
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-6">
        {/* India Operations */}
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-sky-600 mt-1" />
          <div>
            <div className="font-medium"> India Operations</div>
            <a href="tel:+919940015065" className="text-slate-600">
              +91 99400 15065
            </a>
          </div>
        </div>

        {/* UK & Europe Operations */}
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-sky-600 mt-1" />
          <div>
            <div className="font-medium"> UK & Europe Operations</div>
            <a href="tel:+447393239659" className="text-slate-600">
              +44 7393 239659
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-sky-600 mt-1" />
          <div>
            <div className="font-medium">Email</div>
            <a
              href="mailto:hello@techzillasolutions.com"
              className="text-slate-600"
            >
              hello@techzillasolutions.com
            </a>
          </div>
        </div>

        {/* Headquarters - India */}
<div className="flex items-start gap-3">
  <MapPin className="w-5 h-5 text-sky-600 mt-1" />
  <div>
    <div className="font-medium">Headquarters (India)</div>
    <div className="text-slate-600">Chennai, Tamil Nadu, India</div>
  </div>
</div>

{/* UK Branch */}
<div className="flex items-start gap-3">
  <MapPin className="w-5 h-5 text-sky-600 mt-1" />
  <div>
    <div className="font-medium">UK Branch</div>
    <div className="text-slate-600">London, England, United Kingdom</div>
  </div>
</div>


        {/* Extra Info */}
        <div className="rounded-2xl border p-4 bg-white/50">
          <div className="font-medium">Trusted by growing teams</div>
          <p className="text-slate-600 mt-1">
            We partner long-term as your cloud & Windows engineering squad—strategy to run-state.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex items-center gap-2">
              <BrandLogo small />
              <div>
                <div className="font-semibold">Techzilla Solutions</div>
                <div className="text-sm text-slate-600">© {new Date().getFullYear()} All rights reserved.</div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-medium mb-2">Company</div>
                <ul className="space-y-2 text-slate-600">
                  <li><button onClick={()=>scrollTo("home")} className="hover:text-sky-700">About</button></li>
                  <li><button onClick={()=>scrollTo("services")} className="hover:text-sky-700">Services</button></li>
                  <li><button onClick={()=>scrollTo("windows")} className="hover:text-sky-700">Windows</button></li>
                  <li><button onClick={()=>scrollTo("solutions")} className="hover:text-sky-700">Solutions</button></li>
                  <li><button onClick={()=>scrollTo("partners")} className="hover:text-sky-700">Partners</button></li>
                </ul>
              </div>
              <div>
                <div className="font-medium mb-2">Offerings</div>
                <ul className="space-y-2 text-slate-600">
                  <li>Cloud Migration</li>
                  <li>DevOps & CI/CD</li>
                  <li>Security & Compliance</li>
                  <li>FinOps & Observability</li>
                  <li>Windows Server Mgmt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .input { @apply rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-sky-200; }
        .logo-img { image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; }
      `}</style>
    </div>
  );
}

function BrandLogo({ small = false }) {
  // Prefer SVG -> PNG. Exact wordmark only.
  const px = small ? 40 : 56; // header size

  return (
    <div className="flex items-center gap-3 select-none">
      <picture>
        <source srcSet="public/TechZilla.png" type="image/svg+xml" />
        <img
          src="public/TechZilla.png"
          alt="Techzilla Solutions"
          className="block object-contain"
          style={{
            height: px,
            width: "auto",
            imageRendering: "auto",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
          // prevent the browser from shrinking it too much
          sizes={`${px}px`}
        />
      </picture>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-sky-700 font-semibold">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Card({ icon, title, subtitle }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-sky-50 grid place-items-center text-sky-700">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-slate-600">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, points }) {
  return (
    <div className="rounded-2xl border p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-sky-50 grid place-items-center text-sky-700">{icon}</div>
        <div className="font-medium text-lg">{title}</div>
      </div>
      <ul className="mt-4 space-y-2 text-slate-600 text-sm">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />{p}</li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({ title, bullets }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="text-lg font-medium">{title}</div>
      <ul className="mt-4 space-y-2 text-slate-600 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />{b}</li>
        ))}
      </ul>
    </div>
  );
}

function OutcomeCard({ percent, text }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="text-4xl font-semibold text-sky-700">{percent}</div>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}
