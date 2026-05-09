import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profile from "./profile.jpg";
import { QRCodeCanvas } from "qrcode.react";
import logo from "./logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const projects = [
  {
    category: "full-stack",
    badge: "Full Stack",
    title: "Stock Management",
    description: "Complete e-commerce platform with payment integration and customer analytics.",
    list: ["Payment System", "Admin Dashboard", "Real-time Inventory"],
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    category: "web-app",
    badge: "Web App",
    title: "Learning In The Home",
    description: "Advanced booking and scheduling system with real-time tracking features.",
    list: ["Real-time Tracking", "Driver Scheduling", "Payment System"],
    tech: ["React", "Express", "Socket.io"],
  },
  {
    category: "full-stack",
    badge: "Business Solution",
    title: "Wilson System",
    description: "Tenant and property management system built for companies.",
    list: ["Lease Management", "Payment Tracking", "Maintenance Requests"],
    tech: ["PHP", "JavaScript", "Bootstrap"],
  },
  {
    category: "graphic",
    badge: "Graphic Design",
    title: "Flyer Design Services",
    description: "Personal flyers and advertising designs for any occasion or business.",
    list: ["Custom Flyers with QR Code", "Invitation Design", "Banks, Restaurants & Organizations"],
    tech: ["Canva", "Photoshop", "Photo Tools", "Photo Editing Tools"],
  },
  {
    category: "technician",
    badge: "Computer Technician",
    title: "Computer Technician Services",
    description: "Professional technical support and hardware maintenance for your PC.",
    list: ["Fix Slow PC Performance", "Hard Disk Replacement", "Operating System Installation"],
    tech: [],
  },
  {
    category: "rra",
    badge: "RRA Taxes",
    title: "RRA Tax Problem Solutions",
    description: "Expert help resolving your RRA tax issues and EBM product management.",
    list: ["Enter Products into EBM", "Stock Product Management", "Tax Declaration Assistance"],
    tech: [],
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Full Stack", value: "full-stack" },
  { label: "Web App", value: "web-app" },
  { label: "Graphic Designer", value: "graphic" },
  { label: "Computer Technician", value: "technician" },
  { label: "Handling Problems Of Your RRA Taxes", value: "rra" },
];


export default function App() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nejypt8",
        "template_0iittkx",
        form.current,
        "wcIEcBOYsluf2BgBr"
      )
      .then(
        () => alert("Message sent ✅"),
        () => alert("Failed ❌")
      );

    e.target.reset();
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container">

          <a href="#home" className="navbar-brand logo-area">

            <img
              src={profile}
              alt="logo"
              className="logo-img"
            />

            <span className="logo-text">
              JEAN WILSON
            </span>

          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto align-items-center gap-lg-4">

              <li className="nav-item">
                <a href="#home" className="nav-link nav-link-custom">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link nav-link-custom">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="#skills" className="nav-link nav-link-custom">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a href="#projects" className="nav-link nav-link-custom">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link nav-link-custom">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="hire-btn">
                  Hire Me
                </a>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="section hero text-center">
        <motion.img
          src={profile}
          className="profile-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />

        <h1 className="text-white mt-3">
          Hi, My Name is <br /><span className="text-primary">Maniragaba Jean Wilson</span>
        </h1>

        <p className="text-light">
          Full Stack Developer  |  Graphic Designer  |  Computer Technician
        </p>

        <div className="mt-3">
          <a href="#projects" className="btn btn-primary me-2">
            View Projects
          </a>

          <a href="https://wa.me/250793055282" className="btn btn-outline-light">
            WhatsApp/ +250 793 055 282
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">

        <div className="container">

          {/* TOP TITLE */}
          <div className="text-center mb-5">

            <button className="about-btn">
              👤 About Me
            </button>

            <h1 className="about-title mt-4">
              Transforming Your Wants Project, Designing And your Needs 
              <br />
              into Wilson Solutions
            </h1>

            <p className="about-text mx-auto mt-4">
              I am a results-driven Software Developer with proven experience
              in designing, developing, and delivering production-ready web
              applications. I specialize in building scalable, secure, computer Maintenance and
              user-centered systems from concept to deployment.
            </p>

          </div>

          {/* CARDS */}
          <div className="row g-4">

            {/* EXPERIENCE */}
            <div className="col-lg-6">

              <div className="about-card">

                <div className="about-icon">
                  💼
                </div>

                <h3 className="card-title-custom">
                  Experience
                </h3>

                <div className="timeline">

                  <div className="timeline-item">
                    <h5>Full Stack Developer</h5>

                    <span>
                      Freelance • 2025 - Present
                    </span>

                    <p>
                      Building production-ready web applications
                      for various clients, focusing on scalability
                      and security.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <h5>Web Developer</h5>

                    <span>
                      Various Projects • 2025 - 2026
                    </span>

                    <p>
                      Developed and deployed multiple web
                      applications including e-commerce and
                      management systems.
                    </p>

                    <h5>Graphic Designer And Computer Technician</h5>

                    <span>
                      Various Projects • 2025 - 2026
                    </span>

                    <p>
                      Created visually appealing designs and provided
                      technical support for clients, enhancing their
                      digital presence and system performance.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* EXPERTISE */}
            <div className="col-lg-6">

              <div className="about-card">

                <div className="about-icon">
                  🎓
                </div>

                <h3 className="card-title-custom">
                  Expertise
                </h3>

                <ul className="expertise-list">

                  <li>
                    ✅ <strong>System Architecture:</strong> Designing scalable and maintainable systems
                  </li>

                  <li>
                    ✅ <strong>Computer Technician:</strong> Troubleshooting and maintaining computer systems for optimal performance
                  </li>

                  <li>
                    ✅ <strong>Database Design:</strong> Efficient schema design and optimization
                  </li>

                  <li>
                    ✅ <strong>Graphic Designer:</strong> Creating visually appealing designs for Flyer and print media
                  </li>

                  <li>
                    ✅ <strong>Performance:</strong> Optimization for speed and reliability
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section py-5">
        <div className="container text-center">

          {/* Section Badge */}
          <div className="mb-3">
            <span className="skills-badge">
              <i className="bi bi-cpu-fill me-2"></i> My Skills
            </span>
          </div>

          <h1 className="expertise-title mb-5 text-white">Technical Proffesioanl skills</h1>

          {/* Skills Grid */}
          <div className="row g-5 w-75 mx-auto">
            {[
              { name: "React & Node.js", level: 90, color: "#ffffff" },
              { name: "JavaScript (ES6+)", level: 90, color: "#ffffff" },
              { name: "PHP & MySQL", level: 85, color: "#ffffff" },
              { name: "Blockchain ", level: 80, color: "#ffffff" },
              { name: "Graphic Designer & Computer Techician ", level: 95, color: "#ffffff" },
              { name: "HTML & CSS", level: 98, color: "#ffffff" },
              { name: "Python & ML", level: 75, color: "#ffffff" },
              { name: "System Design", level: 80, color: "#ffffff" },
            ].map((skill, index) => (
              <div key={index} className="col-md-6 text-start">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="skill-name fw-bold text-white">
                    <i className="bi bi-patch-check-fill text-primary me-2"></i>
                    {skill.name}
                  </span>
                  <span className="skill-percent small text-white">{skill.level}%</span>
                </div>

                {/* Progress Bar Background */}
                <div className="progress custom-progress bg-dark" style={{ height: "8px", overflow: "visible" }}>
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                      backgroundColor: skill.color,
                      position: "relative",
                      borderRadius: "10px"
                    }}
                  >
                    {/* Animated Glow Dot */}
                    <div className="progress-dot"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
      <div className="container">

        {/* TOP */}
        <div className="text-center mb-5">
          <button className="project-top-btn">Featured Projects</button>
          <h1 className="projects-title mt-4">
            Wilson Production-Ready Solutions
          </h1>
          <p className="projects-subtitle">
            Real-world applications I've designed, developed, and deployed for
            clients | Designing Flyer And Computer Technician
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? "active-filter" : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="row g-4">
          {filtered.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card">
                <div className="p-4">

                  <span className="project-badge">{project.badge}</span>

                  <h4 className="project-name mt-3">{project.title}</h4>

                  <p className="project-text">{project.description}</p>

                  <ul className="project-list">
                    {project.list.map((item, i) => (
                      <li key={i}>✅ {item}</li>
                    ))}
                  </ul>

                  {project.tech.length > 0 && (
                    <div className="tech-stack">
                      {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>
                  )}

                  <button className="view-btn">View Details ↗</button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
      {/* CONTACT */}
      <section id="contact" className="section text-center">
        <h2 className="text-primary">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="w-50 mx-auto mt-4">

          <input
            type="text"
            name="user_name"
            className="form-control mb-2 bg-dark text-white border-primary"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            className="form-control mb-2 bg-dark text-white border-primary"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            className="form-control mb-3 bg-dark text-white border-primary"
            placeholder="Message"
            required
          ></textarea>

          <button className="btn btn-primary w-100">
            Send Message
          </button>

          <a
            href="https://wa.me/250793055282"
            className="btn btn-outline-light w-100 mt-2"
          >
            Chat on WhatsApp
          </a>

        </form>
      </section>
      {/* PROFESSIONAL FOOTER */}
      <footer className="footer-section pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">

            {/* Column 1: Brand & Contact Card */}
            <div className="col-lg-4 col-md-6 mb-4 text-start">
              <h3 className="text-primary fw-bold mb-3">Maniragaba Jean Wilson</h3>
              <p className="text-white small mb-4">
                Crafting digital experiences that solve real-world problems with scalable, secure, and user-centered solutions.
              </p>

              {/* Contact Info Box */}
              <div className="contact-info-box p-3 border border-secondary rounded">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-bg-blue rounded p-2 me-3">
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <span className="small text-light">maniragabajeanwilson@gmail.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="icon-bg-green rounded p-2 me-3">
                    <i className="bi bi-geo-alt text-white"></i>
                  </div>
                  <span className="small text-light">Kigali/Rusizi, Rwanda </span>
                  <span className="small text-light">+250793055282</span>
                </div>
              </div>
              <div className="qr-container">
                <div className="qr-card">
                  <QRCodeCanvas
                    value={`
                      Name: Maniragaba Jean Wilson
                      Phone: +250793055282
                      Email: maniragabajeanwilson@gmail.com
                      Website: https://maniragabajeanwilson.vercel.app
                      Address: Kamembe/Rusizi, Rwanda
                      `}
                    size={250}
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: logo,
                      height: 40,
                      width: 60,
                      excavate: true,
                    }}
                  />
                </div>
              </div>
            </div>


            {/* Column 2: Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4 text-start">
              <h5 className="fw-bold mb-4 text-white">Quick Links</h5>
              <ul className="list-unstyled">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item} className="mb-2">
                    <a href={`#${item.toLowerCase()}`} className="footer-link small">
                      <i className="bi bi-chevron-right me-2 text-primary" style={{ fontSize: '0.7rem' }}></i>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="col-lg-3 col-md-6 mb-4 text-start">
              <h5 className="fw-bold mb-4 text-white">Services</h5>
              <ul className="list-unstyled">
                {[
                  'Web Application Development', 'Full Stack Solutions',
                  'System Architecture', 'API Development',
                  'Database Design', 'Performance Optimization'
                ].map((service) => (
                  <li key={service} className="mb-2 text-white small">
                    <i className="bi bi-check-circle-fill me-2 text-success"></i>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="connect-section">

              <h5 className="fw-bold mb-4 text-white">
                Let's Connect
              </h5>

              <div className="social-grid">

                <a href="https://wa.me/250793055282" className="social-box whatsapp">
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a href="https://www.instagram.com/m.w_ilson" className="social-box instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="https://github.com/jea124" className="social-box github">
                  <i className="bi bi-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/maniragaba-jeanwilson-212515362/" className="social-box linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="https://mail.google.com/mail/u/0/#inbox" className="social-box email">
                  <i className="bi bi-envelope"></i>
                </a>

                <a href="tel:+250793055282" className="social-box phone">
                  <i className="bi bi-telephone"></i>
                </a>

              </div>

              <button className="project-btn mt-4">
                 Start a Project
              </button>

            </div>
          </div>

          <hr className="border-secondary mt-5" />

          {/* Bottom Bar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
            <p className="small text-white mb-3 mb-md-0">
              This Website Designed by Maniragaba Jean Wilson
            </p>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Express', 'MongoDB','Graphic Designer ' ].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/250793055282"
        className="whatsapp-float"
      >
        💬
      </a>

    </div>
  );
}