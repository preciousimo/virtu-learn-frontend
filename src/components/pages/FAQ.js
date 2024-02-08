import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/FAQ.css';
const baseUrl = 'http://127.0.0.1:8000/api';

function FAQ() {
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        document.title = 'Category Courses';
        try {
            axios.get(`${baseUrl}/faq/`)
                .then((res) => {
                    setFaqData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className='container mt-3'>
            <h3 className='pb-1 mb-4'>FAQs</h3>
            <div className="accordion" id="accordionExample">
                {faqData && faqData.map((row, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                                <span className="question-text">{row.question}</span>
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {row.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
