import React, { useState } from 'react';

const FAQAccordion = () => {
  // State to track which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle function for expanding/collapsing the FAQ
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close the FAQ if it's already open
    } else {
      setOpenFAQ(index); // Open the clicked FAQ and close others
    }
  };

  // FAQ data (questions and answers)
  const faqs = [
    {
      question: "Who is the best Indian astrology counsellor?",
      answer: (
        <>
          Pt. Nikhil Sharma Ji is considered the best Indian astrology counsellor because he has been offering relieving astrology services efficiently for more than two decades. He offers solutions for numerous life issues including:
          <ul className="list-none mt-3 space-y-1">
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Failing relationship</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Problem in marriage</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Health issues</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Business losses</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Family disputes</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Financial crisis</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Why choose services of Pt. Nikhil Sharma Ji?",
      answer: (
        <>
          People all over the world come to guruji for availing his exceptional services and solutions to make life happier and prospering. The highlights of his services are:
          <ul className="list-none mt-3 space-y-1">
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Safe and secure</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Reasonable</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Effective</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Permanent impact</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span>Swift action</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How can I contact the best Indian astrology counsellor?",
      answer: "You can contact Pt. Nikhil Sharma Ji via his official website, phone number, or email for consultations and appointments.",
    },
    {
      question: "What are the client reviews for the services offered by Pt. Nikhil Sharma Ji?",
      answer: "Pt. Nikhil Sharma Ji has received positive reviews from clients all over the world, praising his effective solutions and accurate predictions.",
    },
  ];

  return (
    <div className="bg-[#fceacc]  lg:px-24 mt-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-t border-b  mb-4 py-4  text-gray-900"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span>{openFAQ === index ? '➖' : '➕'}</span>
          </div>

          {openFAQ === index && (
            <div className="mt-4 text-sm bg-white p-4 rounded-md shadow-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
