import { PageComponent } from "rasengan";

const Contact: PageComponent = () => {
  return (
    <section className="">
      <h1>Contact page</h1>
    </section>
  );
};

Contact.path = "/contact";
Contact.metadata = {
  title: "Contact Us",
  description: "Want to talk to us? reach out to us",
};

export default Contact;
