'use client'
import { useState } from 'react';

export function FAQ() {
  // Array of FAQs, each with a question and answer
  const faqs = [
    { question: "How do I get access?", answer: "Access can be granted by signing up for our early access Beta on this page." },
    { question: "When will I be accepted into the Beta?", answer: "We review submissions every month and add people based on a first-come-first-serve basis." },
    { question: "Do I have to pay to be in the Beta Program?", answer: "No! as long as you're actively testing and submitting your feedback to us, you will have access to the program you're testing for free." },
    { question: "What is Output actually developing?", answer: "Output is currently developing leading tools for the music industry." }
  ];

  // Use useState to handle which FAQ is currently expanded
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the FAQ
  const toggleFAQ = (index: number) => {
    // Toggle the clicked FAQ, close if it's already open
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="faq" className="bg-[#121212] text-white p-8 max-w-4xl mx-auto my-16 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">FAQ</h2>
        <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
        <p className="text-gray-400">Please contact us if your questions are not answered here</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-opacity-50 bg-black p-6 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <PlusIcon className={`text-white ${activeIndex === index ? 'rotated' : ''}`} />
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


function PlusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
