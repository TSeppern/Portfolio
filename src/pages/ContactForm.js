import React, { Component } from "react";
import { ValidationError } from "@formspree/react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/f/xlekwzzq" method="POST">
        <input id="email" type="email" name="email" placeholder="Your email address" required />
        <ValidationError prefix="Email" field="email" errors={[]} />
        <textarea id="message" name="message" placeholder="Type your message" cols={ 80 } required></textarea>
        <ValidationError prefix="Message" field="message" errors={[]} />
        {status === "SUCCESS" ? (
          <p>Email sent!</p>
        ) : (
          <button type="submit" disabled={status === "SUBMITTING"}>
            Send
          </button>
        )}
        {status === "ERROR" && <p>Oops! There was an error.</p>}
      </form>
    );
  }
}

export default ContactForm;