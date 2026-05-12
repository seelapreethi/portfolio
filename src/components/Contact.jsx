import { motion, useReducedMotion } from "framer-motion";
import { useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";

const initialForm = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Use a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a short message.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const reduceMotion = useReducedMotion();

  const onChange = useCallback((field) => {
    return (e) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
      setStatus({ type: "", text: "" });
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };
  }, []);

  const onBlur = useCallback((field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "err", text: "Please fix the fields highlighted below." });
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()} <${form.email.trim()}>`
    );
    window.location.href = `mailto:preethiseela8@gmail.com?subject=${subject}&body=${body}`;
    setStatus({
      type: "ok",
      text: "Your mail app should open. If it does not, email me directly.",
    });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader kicker="Reach out" title="Contact" id="contact-heading" />

        <div className="contact-layout">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -2 }}
          >
            <div className="contact-intro">
              <FaEnvelope aria-hidden />
              <div>
                <p>
                  Prefer email? Reach me at{" "}
                  <a href="mailto:preethiseela8@gmail.com">preethiseela8@gmail.com</a>{" "}
                  or use the form — I typically reply within a couple of days.
                </p>
              </div>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/seelapreethi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/preethiseela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin aria-hidden /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
            aria-describedby={status.text ? "form-status" : undefined}
          >
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={onChange("name")}
                onBlur={() => onBlur("name")}
                className={touched.name && errors.name ? "field-invalid" : ""}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? "err-name" : undefined}
              />
              <span id="err-name" className="field-error" role="alert">
                {touched.name ? errors.name : ""}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange("email")}
                onBlur={() => onBlur("email")}
                className={touched.email && errors.email ? "field-invalid" : ""}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? "err-email" : undefined}
              />
              <span id="err-email" className="field-error" role="alert">
                {touched.email ? errors.email : ""}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={onChange("message")}
                onBlur={() => onBlur("message")}
                className={touched.message && errors.message ? "field-invalid" : ""}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={
                  touched.message && errors.message ? "err-message" : undefined
                }
              />
              <span id="err-message" className="field-error" role="alert">
                {touched.message ? errors.message : ""}
              </span>
            </div>

            <div className="form-actions">
              <button type="submit" className="primary-btn submit-btn">
                Send message
              </button>
            </div>

            <p
              id="form-status"
              className={`form-status${status.type ? ` form-status--${status.type}` : ""}`}
            >
              {status.text}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
