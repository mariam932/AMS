"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "../../lib/types";
import { t } from "../../lib/copy";

export default function ContactForm({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem("name");
    const phone = form.elements.namedItem("phone");
    const email = form.elements.namedItem("email");
    if (
      !(name instanceof HTMLInputElement) ||
      !(phone instanceof HTMLInputElement) ||
      !(email instanceof HTMLInputElement)
    ) {
      throw new Error("Contact form fields are missing from the form.");
    }
    if (!name.value.trim() || !phone.value.trim()) {
      setNotice(copy.formRequired);
      return;
    }
    if (email.value && !email.validity.valid) {
      setNotice(copy.formInvalidEmail);
      return;
    }
    setNotice(copy.formNotice);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        {copy.formName} <span>*</span>
        <input autoComplete="name" name="name" required />
      </label>
      <label>
        {copy.formPhone} <span>*</span>
        <input autoComplete="tel" name="phone" required type="tel" />
      </label>
      <label>
        {copy.formEmail}
        <input autoComplete="email" name="email" type="email" />
      </label>
      <label className="form-message">
        {copy.formMessage}
        <textarea name="message" rows={5} />
      </label>
      <button className="button button-primary" type="submit">
        {copy.formSend}
        <span aria-hidden="true">↗</span>
      </button>
      <p aria-live="polite" className="form-notice">
        {notice}
      </p>
    </form>
  );
}
