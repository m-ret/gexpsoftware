'use client';

import React, { useRef, useState  } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import NewsLatterBox from './NewsLatterBox';

const Contact = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const form = useRef<HTMLFormElement>(null);
  const [emailError, setEmailError] = useState<string>('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { current: formRef } = form;
    if (!formRef) {
      console.log('Form is not defined.');
      return;
    }
    const email = formRef.email.value.trim();
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidate.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, USER_ID).then(
      result => {
        clearForm();
        toast.success('Message sent successfully!', {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#3B82F6',
            color: '#FFFFFF'
          }
        });
      },
      (error) => {
        toast.error('Message could not be sent. Please try again later.', {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#EF4444',
            color: '#FFFFFF'
          }
        });
      }
    );
  };
  const clearForm = () => {
    const { current: formRef } = form;
    if (!formRef) {
      console.log('Form is not defined.');
      return;
    }
    formRef.reset
      ? formRef.reset()
      : console.log('Reset function is not defined.');
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Talk To Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-white">
                Please don’t hesitate to reach out to us if you have any
                questions or concerns. We are here to assist and help find
                solutions.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <Toaster />
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                      <span style={{ color: 'red' }}>{emailError}</span>
                      <br />
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
