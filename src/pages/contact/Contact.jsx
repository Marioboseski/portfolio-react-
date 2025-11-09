import { useState } from "react";
import ContactBox from "./ContactBox";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Enter your name";
    if (!form.email.trim()) newErrors.email = "Enter your email";
    else if (!form.email.includes("@") || !form.email.includes(".")) newErrors.email = "Enter valid email";
    if (!form.message.trim()) newErrors.message = "You must enter a message";
    else if (form.message.length < 10) newErrors.message = "The message must be over 10 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Your message has been sent");
      setForm({
        name: "",
        email: "",
        message: ""
      });
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const handleChage = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <section className="contact-section">
      <section className="container">

        <div className="contact-info">
          <h2>Contact me</h2>

          <div className="contact-me-div">


            <div className="form-container">
              <form className="form-class" onSubmit={handleSubmit}>

                <div className="input-div">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChage}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>

                <div className="input-div">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChage}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="input-div">
                  <textarea
                    name="message"
                    placeholder="Write something..."
                    value={form.message}
                    onChange={handleChage}
                  />
                  {errors.message && <p>{errors.message}</p>}
                </div>

                <button type="submit">Submit</button>
                {success && <p id="success">{success}</p>}
              </form>
            </div>


            <div className="contact-item">
              <ContactBox label="Mail" text="crboseskimario@gmail.com" />
              <ContactBox label="LinkedIn" text="https://www.linkedin.com/in/mario-boseski-7773b630b/" />
              <ContactBox label="GitHub-Link" text="https://github.com/Marioboseski" />
            </div>

          </div>
        </div>

      </section>
    </section>
  );
};

export default Contact;
