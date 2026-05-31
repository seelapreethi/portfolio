import { motion, useReducedMotion } from "framer-motion";
import { useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";
import Magnetic from "./motion/Magnetic.jsx";

const EMAIL = "preethiseela8@gmail.com";
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

function FloatingField({
  id,
  label,
  type = "text",
  autoComplete,
  value,
  onChange,
  onBlur,
  error,
  touched,
  as = "input",
}) {
  const Input = as;
  const filled = Boolean(value);
  const invalid = Boolean(touched && error);

  return (
    <div
      className={`form-field form-field--float${filled ? " form-field--filled" : ""}${invalid ? " form-field--invalid" : ""}`}
    >
      <Input
        id={id}
        name={id.replace("contact-", "")}
        type={as === "input" ? type : undefined}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        aria-invalid={invalid}
      />
      <label htmlFor={id}>{label}</label>
      <span className="field-error" role="alert">
        {touched ? error : ""}
      </span>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [copied, setCopied] = useState(false);
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

  const onBlur = useCallback(
    (field) => {
      setTouched((t) => ({ ...t, [field]: true }));
      setErrors(validate(form));
    },
    [form]
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

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
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus({
      type: "ok",
      text: "Your mail app should open. If it does not, email me directly.",
    });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader kicker="Reach out" title="Contact" id="contact-heading" variantIndex={3} />

        <div className="contact-layout">
          <motion.div
            className="contact-card contact-card--premium"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <div className="contact-intro">
              <FaEnvelope aria-hidden />
              <div>
                <p>
                  Prefer email? Reach me at{" "}
                  <button type="button" className="email-copy-btn" onClick={copyEmail}>
                    {EMAIL}
                    {copied ? (
                      <motion.span
                        className="email-copy-success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <FaCheck aria-hidden /> Copied
                      </motion.span>
                    ) : null}
                  </button>{" "}
                  or use the form — I typically reply within a couple of days.
                </p>
              </div>
            </div>

            <div className="contact-links">
              <Magnetic strength={0.25}>
                <a
                  href="https://github.com/seelapreethi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden /> GitHub
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="https://www.linkedin.com/in/preethiseela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin aria-hidden /> LinkedIn
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.form
            className="contact-form contact-form--premium"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            aria-describedby={status.text ? "form-status" : undefined}
          >
            <FloatingField
              id="contact-name"
              label="Name"
              autoComplete="name"
              value={form.name}
              onChange={onChange("name")}
              onBlur={() => onBlur("name")}
              error={errors.name}
              touched={touched.name}
            />

            <FloatingField
              id="contact-email"
              label="Email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={onChange("email")}
              onBlur={() => onBlur("email")}
              error={errors.email}
              touched={touched.email}
            />

            <FloatingField
              id="contact-message"
              label="Message"
              as="textarea"
              value={form.message}
              onChange={onChange("message")}
              onBlur={() => onBlur("message")}
              error={errors.message}
              touched={touched.message}
            />

            <div className="form-actions">
              <motion.button
                type="submit"
                className="primary-btn submit-btn btn-shine"
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Send message
              </motion.button>
            </div>

            <motion.p
              id="form-status"
              className={`form-status${status.type ? ` form-status--${status.type}` : ""}`}
              animate={
                status.type === "ok" && !reduceMotion ? { scale: [1, 1.02, 1] } : undefined
              }
            >
              {status.text}
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
