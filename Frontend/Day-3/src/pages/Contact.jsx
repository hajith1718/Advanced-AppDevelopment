import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xr8l2tq",
        "template_s55kpqm",
        form.current,
        "HoVhfLFbUEnyvWcX7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message has been sent");
        },
        (error) => {
          console.log(error.text);
          alert("Message has not been sent");
        }
      );
  };

  const [questions] = useState([
    {
      id: 1,
      question: "How can I contact your customer support?",
      answer: "You can contact our customer support team by sending an email to support@example.com."
    },
    {
      id: 2,
      question: "What are your office hours?",
      answer: "Our office hours are from 9:00 AM to 5:00 PM, Monday to Friday."
    },
    {
      id: 3,
      question: "Do you offer refunds for your products?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our products."
    }
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleViewAnswer = (id) => {
    setSelectedQuestion(id);
  };

  return (
    <>
    <div className="main-contact bg-gray-100 py-10">
      <div className="contact-container1 max-w-5xl mx-auto flex justify-between items-center">
        <div className="TitleContact">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <div className="contact-img1"><img
          src="https://res.cloudinary.com/dnngdn8ev/image/upload/v1695534347/wired-lineal-177-envelope-mail-send_cs1pis.gif"
          alt="Envelope icon"
          className="w-20"
        /></div>
      </div>
    </div>
    <div className="contact-container2 max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="contact-container">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <p className="mb-6 text-gray-700">
          Feel free to get in touch with me with anything related to Web Development or you can just say hi. I will get back to you as soon as possible.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <input type="email" name="user_email" placeholder="Email address" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <textarea name="message" placeholder="Message" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button className="submitcontact bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
        </form>
        <Link className='homebtnn block mt-4 text-blue-500 hover:underline' to="/">Go back to Home ↺</Link>
      </div>
      <div className="contact-us">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="question-list">
          {questions.map((question) => (
            <li key={question.id} className="mb-4">
              <div className="question text-blue-500 font-semibold mb-2">
                {question.question}
              </div>
              {selectedQuestion === question.id ? (
                <div className="answer text-gray-700">
                  {question.answer}
                </div>
              ) : (
                <button
                  className="view-answer-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleViewAnswer(question.id)}
                >
                  View Answer
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
};

export default Contact;
