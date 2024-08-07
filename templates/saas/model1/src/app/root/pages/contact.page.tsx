import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { Mail01Icon, UserIcon } from 'hugeicons-react';
import { PageComponent } from 'rasengan';

//import image
import Heading from '@/components/atoms/Heading';

import image1 from '@/assets/rasengan-1.png';
import Image from '@rasenganjs/image';

const Contact: PageComponent = () => {
  return (
    <section className="w-full">
      <Heading
        title="Contact"
        description="Fill the form below to send us an email."
      />
      <div className="md:flex pt-20 flex justify-between items-center text-gray-500 w-full overflow-hidden">
        <div className="hidden md:flex w-max md:w-2/5 py-10 px-10 items-center justify-center">
          <Image
            src={image1}
            alt="signup image"
            className="h-full w-full object-contain"
            width={500}
            height={"auto"}
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full">
          <div className="flex flex-wrap w-full">
            <Input
              label="First Name"
              icon={<UserIcon size={20} className="text-gray-400 text-lg" />}
              type="text"
              placeholder="John"
              containerClassName="md:w-1/2"
            />
            <Input
              label="Last Name"
              icon={<UserIcon size={20} className="text-gray-400 text-lg" />}
              type="text"
              placeholder="Doe"
              containerClassName="md:w-1/2"
            />
          </div>
          <Input
            label="Email"
            icon={<Mail01Icon size={20} className="text-gray-400 text-lg" />}
            type="email"
            placeholder="johndoe@example.com"
          />
          <Input
            label="Message"
            type="email"
            placeholder="Enter your message"
            isTextArea
          />
          <div className="flex w-full px-3">
            <Button
              text="Send"
              className="block w-full mx-auto mt-5 bg-rasengan-light-primary hover:bg-rasengan-dark-primary focus:bg-rasengan-light-primary text-white rounded-lg py-3 font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.path = '/contact';
Contact.metadata = {
  title: 'Contact Us',
  description: 'Want to talk to us? reach out to us',
};

export default Contact;
