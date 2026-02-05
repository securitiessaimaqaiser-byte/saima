import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the benefits of Solodev CMS?",
    answer: "Solodev CMS allows for easy content management, scalability, and security for enterprise websites."
  },
  {
    question: "How easy is it to build a website with Solodev CMS?",
    answer: "Building a website is extremely easy. With a working knowledge of HTML and CSS you will be able to have a site up and running in no time.",
    defaultOpen: true
  },
  {
    question: "What is the uptime for Solodev CMS?1",
    answer: "Uptime is guaranteed at 99.9% with redundancy protocols in place."
  },
  {
    question: "What is the uptime for Solodev CMS?2",
    answer: "Same as above, consistent reliability."
  },
  {
    question: "What is the uptime for Solodev CMS?3",
    answer: "Consistent performance across all regions."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, multi-site management is a core feature."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, absolutely."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, absolutely."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, absolutely."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, absolutely."
  },
  {
    question: "Can Solodev CMS handle multiple websites for my company?",
    answer: "Yes, absolutely."
  }
];

const FAQ = () => {
  // In the video, multiple can be open or closed. It looks like a simple toggle.
  // However, the screenshot shows only one expanded. I'll make it toggleable per item.
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
       <div className="text-center mb-12">
        <h1 className="text-3xl text-green-800 font-serif border-b inline-block pb-2 border-green-200">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-transparent">
            <button 
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between bg-green-700 text-white px-4 py-3 text-left font-serif text-lg italic hover:bg-green-800 transition-colors"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {openIndex === index && (
              <div className="bg-white p-4 border border-green-700 border-t-0 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;