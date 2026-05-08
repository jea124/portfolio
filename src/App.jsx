import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profile from "./profile.jpg";
import { QRCodeCanvas } from "qrcode.react";
import logo from "./logo.png";

export default function App() {
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
          Hi, I'm <span className="text-primary">Wilson</span>
        </h1>

        <p className="text-light">
          Full Stack Developer
        </p>

        <div className="mt-3">
          <a href="#projects" className="btn btn-primary me-2">
            View Projects
          </a>

          <a href="https://wa.me/250793055282" className="btn btn-outline-light">
            WhatsApp
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
              Transforming Business Requirements
              <br />
              into Technical Solutions
            </h1>

            <p className="about-text mx-auto mt-4">
              I am a results-driven Software Developer with proven experience
              in designing, developing, and delivering production-ready web
              applications. I specialize in building scalable, secure, and
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
                    ✅ <strong>API Development:</strong> RESTful APIs with proper documentation
                  </li>

                  <li>
                    ✅ <strong>Database Design:</strong> Efficient schema design and optimization
                  </li>

                  <li>
                    ✅ <strong>Security:</strong> Authentication, authorization, and data protection
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
              { name: "JavaScript (ES6+)", level: 95, color: "#ffffff" },
              { name: "PHP & MySQL", level: 85, color: "#ffffff" },
              { name: "HTML5 & CSS3", level: 98, color: "#ffffff" },
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

            <button className="project-top-btn">
              Featured Projects
            </button>

            <h1 className="projects-title mt-4">
              Production-Ready Solutions
            </h1>

            <p className="projects-subtitle">
              Real-world applications I've designed,
              developed, and deployed for clients
            </p>

          </div>

          {/* FILTER BUTTONS */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">

            <button className="filter-btn active-filter">
              All Projects
            </button>

            <button className="filter-btn">
              Full Stack
            </button>

            <button className="filter-btn">
              Web App
            </button>

            <button className="filter-btn">
              Business Solution
            </button>

            <button className="filter-btn">
              Marketplace
            </button>

          </div>

          {/* PROJECT CARDS */}
          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6">

              <div className="project-card">

                <div className="p-4">

                  <span className="project-badge">
                    Full Stack
                  </span>

                  <h4 className="project-name mt-3">
                    Stock Management
                  </h4>

                  <p className="project-text">
                    Complete e-commerce platform with
                    payment integration and customer analytics.
                  </p>

                  <ul className="project-list">
                    <li>✅ Payment System</li>
                    <li>✅ Admin Dashboard</li>
                    <li>✅ Real-time Inventory</li>
                  </ul>

                  <div className="tech-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MySQL</span>
                  </div>

                  <button className="view-btn">
                    View Details ↗
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6">

              <div className="project-card">

                <div className="p-4">

                  <span className="project-badge">
                    Web App
                  </span>

                  <h4 className="project-name mt-3">
                    Learning In The Home
                  </h4>

                  <p className="project-text">
                    Advanced booking and scheduling
                    system with tracking features.
                  </p>

                  <ul className="project-list">
                    <li>✅ Real-time Tracking</li>
                    <li>✅ Driver Scheduling</li>
                    <li>✅ Payment System</li>
                  </ul>

                  <div className="tech-stack">
                    <span>React</span>
                    <span>Express</span>
                    <span>Socket.io</span>
                  </div>

                  <button className="view-btn">
                    View Details ↗
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6">

              <div className="project-card">

                <div className="p-4">

                  <span className="project-badge">
                    Business Solution
                  </span>

                  <h4 className="project-name mt-3">
                    wilson System
                  </h4>

                  <p className="project-text">
                    Tenant and property management
                    system for companies.
                  </p>

                  <ul className="project-list">
                    <li>✅ Lease Management</li>
                    <li>✅ Payment Tracking</li>
                    <li>✅ Maintenance Requests</li>
                  </ul>

                  <div className="tech-stack">
                    <span>PHP</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                  </div>

                  <button className="view-btn">
                    View Details ↗
                  </button>

                </div>

              </div>

            </div>

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
              <h3 className="text-primary fw-bold mb-3">Jean Wilson</h3>
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
                  <span className="small text-light">Kigali, Rwanda </span>
                </div>
              </div>
              <div className="qr-container">
                <div className="qr-card">
                  <QRCodeCanvas
                    value={`
                      Name: Jean Wilson
                      Phone: +250793055282
                      Email: maniragabajeanwilson@gmail.com
                      Website: https://yourportfolio.com
                      Address: Kamembe/Rusizi, Rwanda
                      `}
                    size={200}
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

            {/* Column 4: Let's Connect */}
            <div className="col-lg-3 col-md-6 mb-4 text-start">
              <h5 className="fw-bold mb-4 text-white">Let's Connect</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {/* Social Icons */}
                <div className="social-icon-box"><i className="bi bi-whatsapp"></i></div>
                <div className="social-icon-box"><i className="bi bi-instagram"></i></div>
                <div className="social-icon-box"><i className="bi bi-github"></i></div>
                <div className="social-icon-box"><i className="bi bi-linkedin"></i></div>
              </div>
              <button className="btn btn-primary w-100 py-2 fw-bold d-flex align-items-center justify-content-center">
                <i className="bi bi-send-fill me-2"></i> Start a Project
              </button>
            </div>
          </div>

          <hr className="border-secondary mt-5" />

          {/* Bottom Bar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
            <p className="small text-white mb-3 mb-md-0">
              This Website Designed by Jean Wilson
            </p>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Express', 'MongoDB'].map((tech) => (
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