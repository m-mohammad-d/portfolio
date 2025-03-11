import { useState, FormEvent } from "react";
import "./ContcatMe.css";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabase";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactMe = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="contact-container">
      <h2>{t("contact.title")}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t("contact.name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.name")}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("contact.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.email")}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">{t("contact.message")}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.message")}
            className={errors.message ? "error" : ""}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("contact.sending") : t("contact.send")}
        </button>
        {submitStatus.type && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
      <div className="social-icons">
        <a
          href="https://github.com/m-mohammad-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="GitHub" />
        </a>
        <a
          href="https://t.me/silver_shade1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/telegram.png" alt="Telegram" />
        </a>
        <a
          href="https://linkedin.com/in/silver-shade-90b2a6302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
