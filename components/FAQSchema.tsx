import React, { useEffect } from 'react';

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * FAQSchema Component
 * Generates structured data (JSON-LD) for FAQ pages to enable rich snippets in search results
 * This helps improve click-through rates by showing FAQ answers directly in Google search
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    // Add schema to document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};
