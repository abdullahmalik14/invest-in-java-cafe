import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [active, setActive] = useState(null); // Start with null for no active item

  const handleItemClick = (index) => {
    setActive(active === index ? null : index); // Toggle active state
  };

  const faqs = [

    {
      question: "What is Java Times Caffe?",
      answer:
        "Java Times Caffe is a company with over 15 years of experience in coffee shops in Mexico. Now, we want to revamp and implement a new way of selling coffee through shares. We are offering an investment opportunity to become partners in our Java 300 project, which involves opening 300 new coffee shops across Mexico. Join us to be a part of our success in the coffee industry",
    },
    {
      question: "What is the guarantee that the project will continue?",
      answer:
      "The Java 300 project issues a total of 120,000,000 shares with an initial value of 20 MXN each. These shares will increase in value over time, providing opportunities for investor growth. As an investor, you can benefit from the increasing valuation of the shares and receive dividends for life."
    },
    {
      question: "What is the minimum and maximum investment range?",
      answer:
      "You can invest from 500 MXN up to 5,000,000 MXN if you are from the general public, and from 3,000 MXN if you are an employee of Java 300. This will allow you to be a part of this project and increase your sources of income."
    },
    {
      question: "When to withdraw my winnings?",
      answer:
      "The goal of Java 300 is to establish 300 coffee shops throughout Mexico, expanding the presence of our concept and creating employment and opportunities across the country. In addition to the coffee shops, the project will include innovative systems such as mobile applications and e-commerce, ensuring sustainable and multiple streams of return."
    },
    {
      question: "What are the risk factors of the project?",
      answer:
      "The inclusion of innovative systems such as mobile applications and e-commerce in Java 300 guarantees adaptation to changing market trends and long-term sustainability. The project is designed to remain relevant and successful in the future."
    },
    {
      question: "What are the risk factors of the project?",
      answer:
      "Investing in Java Times Caffe goes beyond a simple investment in a coffee shop. It's a movement that aims to transform lives, create a positive social impact, and build a community of individuals committed to mutual success. Our innovative and people-centered approach has the potential to inspire others and change the way business and investment are approached in the future."
    },
   
  ];

  return (
    <section className='faq-section'>
      <h1>Find the answers to all of our most frequently asked questions.</h1>

      <div className="faq-container">
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <div className="one" onClick={() => handleItemClick(index)}>
              <p>{faq.question}</p>
              <div className="border">
                {active !== index && <FaPlus style={{color:"Red"}}/>}
                {active === index && (
                <FiMinus style={{color:"Red"}}/>
                )}
              </div>
            </div>
            {active === index && <div className="two">{faq.answer}</div>}
          </li>
        ))}
      </ul>
     
    </div>
    </section>
  )
}

export default FAQ
