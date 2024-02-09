import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/contact/';

function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us'
  }, [])

  const [contactData, setContactData] = useState({
    'name': '',
    'email': '',
    'phone': '',
    'message': '',
    'status': '',
  });

  // Change handler
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }

  // Submit handler
  const submitForm = () => {
    const contactFormData = new FormData();
    contactFormData.append('name', contactData.name);
    contactFormData.append('email', contactData.email);
    contactFormData.append('phone', contactData.phone);
    contactFormData.append('message', contactData.message);

    try {
      axios.post(baseUrl, contactFormData)
        .then((res) => {
          setContactData(
            {
              'name': '',
              'email': '',
              'phone': '',
              'message': '',
              'status': 'success',
            }
          );
        });
    } catch (err) {
      console.log(err);
      setContactData({ 'status': 'error' });
    }
  };

  return (
    <section class="py-3 py-md-5">
      <div class="container">
        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
          <div class="col-12 col-lg-6">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-11">
                <h2 class="h1 mb-3">Get in touch</h2>
                <p class="lead fs-4 text-secondary mb-5">We're always on the lookout to work with new possibilities. If you're interested in working with us, please get in touch in one of the following ways.</p>
                <div class="d-flex mb-5">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Address</h4>
                    <address class="mb-0 text-secondary">Lagos, Nigeria</address>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-12 col-sm-6">
                    <div class="d-flex mb-5 mb-sm-0">
                      <div class="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="mb-3">Phone</h4>
                        <p class="mb-0">
                          <a class="link-secondary text-decoration-none" href="tel:+2348149960190">+234 814 996 0190</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="d-flex mb-0">
                      <div class="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                          <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="mb-3">E-Mail</h4>
                        <p class="mb-0">
                          <a class="link-secondary text-decoration-none" href="mailto:preciousimoniakemu@gmail.com">info@sonipstechnologies.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            {contactData.status === 'success' && <div className="alert alert-success" role="alert">Thanks For Contacting Us </div>}
            {contactData.status === 'error' && <div className="alert alert-danger" role="alert">Something wrong happened!</div>}
            <div class="bg-white border rounded shadow-sm overflow-hidden">
              {/* <form action="#!"> */}
                <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                  <div class="col-12">
                    <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                    <input value={contactData.name} onChange={handleChange} name='name' type="text" id="name" className="form-control" required />
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input value={contactData.email} onChange={handleChange} name='email' type="email" id="email" className="form-control" required />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <input value={contactData.phone} onChange={handleChange} name='phone' type="tel" id="phone" className="form-control" required />
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject <span class="text-danger">*</span></label>
                    <input value={contactData.subject} onChange={handleChange} name='subject' type="text" id="subject" className="form-control" required />
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                    <textarea value={contactData.message} onChange={handleChange} name='message' id="message" className='form-control' rows="3" required></textarea>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                    <button onClick={submitForm} className="btn btn-secondary btn-lg" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs