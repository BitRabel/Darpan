import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Using placeholder images from Picsum
const faqImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

const faqs = [
  { 
    question: "Which subjects does Darpan offer tutoring in for the curriculum?", 
    answer: "Darpan offers tutoring in a wide range of subjects including Mathematics, Science, Humanities, and Languages." 
  },
  { 
    question: "How are classes personalized for each student at Darpan?", 
    answer: "Classes are tailored based on each student's needs, learning pace, and academic goals through initial assessments and regular progress tracking." 
  },
  { 
    question: "Does Darpan provide eAssessment practice for the MYP?", 
    answer: "Yes, we offer extensive eAssessment practice including mock exams, timed exercises, and detailed feedback to help MYP students prepare effectively." 
  },
  { 
    question: "Will I get access to previous years' questions and resources?", 
    answer: "Yes, students have access to a comprehensive repository of past papers, mark schemes, and specially curated study materials." 
  },
  { 
    question: "How does Darpan prepare students for DP final exams?", 
    answer: "Darpan provides structured revision sessions, full-length mock tests, exam strategy workshops, and targeted practice based on assessment criteria." 
  },
  { 
    question: "How qualified are Darpan's tutors?", 
    answer: "Our tutors are certified educators with 5+ years of teaching experience, many of whom are examiners or workshop leaders." 
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tutoring services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src={faqImage} 
              alt="Students learning together" 
              className="rounded-lg shadow-md w-full h-auto max-w-md mx-auto object-cover"
              style={{ height: "400px" }}
            />
          </div>

          <div className="lg:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-lg font-medium text-left text-gray-800">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaMinus className="text-blue-600" />
                  ) : (
                    <FaPlus className="text-blue-600" />
                  )}
                </button>
                
                <div
                  id={`faq-content-${index}`}
                  className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96 p-6" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}