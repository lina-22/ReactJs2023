import React, { useState } from "react";
import { faqsData } from "./data.js";
import FAQ from "./FAQ.js";
import style from "./faqs.module.css";

export default function FAQS() {
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}
