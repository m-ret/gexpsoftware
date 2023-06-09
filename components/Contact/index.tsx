'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { ENV_VARS } from '@/utils/config';
import { showToast } from '@/utils/toast';
import NewsLatterBox from './NewsLatterBox';

const Contact = () => {
  const { USER_ID, SERVICE_ID, TEMPLATE_ID } = ENV_VARS;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formRef = form.current;

    if (!formRef) {
      console.error('Form is not defined.');
      return;
    }

    const successMessage = 'Message sent successfully!';
    const sendEmailPromise = new Promise(async (resolve, reject) => {
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, USER_ID);
        resolve(successMessage);
      } catch (error) {
        reject(error);
      }
    });

    showToast({
      type: 'custom',
      promise: sendEmailPromise,
      promiseMessages: {
        success: successMessage,
        loading: 'Sending message...',
        error: 'Something went wrong.'
      }
    });

    try {
      await sendEmailPromise;
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    const { current: formRef } = form;

    if (!formRef) {
      console.error('Form is not defined.');
      return;
    }

    formRef.reset
      ? formRef.reset()
      : console.error('Reset function is not defined.');
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              data-wow-delay=".15s"
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
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
                        required
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
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
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
                        required
                        rows={5}
                        name="message"
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
