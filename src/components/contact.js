import React from "react";
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_q90w18i"
const TEMPLATE_ID = "template_bfpdtet"
const USER_ID = "pHbZlqhd1bwHlXb6j"

const onSubmit = e => {
  e.preventDefault()
  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then(alert("Message Sent!"))
  e.target.reset()
}

const Contact = () => {
  return (
    <div id="#contact">
      <div className="container mx-auto">
        <div className="md:py-10 pt-5 mb-12 lg:py-12 py-8">
          <div className="flex flex-col relative lg:py-0 py-10">
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
                <h2 className="lg:text-display-lg text-display-md font-semibold pb-4">
                  Contact me
                </h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  Drop me an email and i'll get back to you.
                </p>
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center lg:pl-0 relative">
                <div className="flex flex-col lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-2xl">
                    <form
                      action="mailto:alexanderjohncooper23@hotmail.com"
                      class="text-black px-6 py-4"
                      method="POST"
                      onSubmit={onSubmit}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="">
                          <input
                            class="appearance-none mt-1 w-full bg-white text-gray-700 border-b py-3 px-2 focus:outline-none"
                            id="grid-first-name"
                            name="first_name"
                            type="text"
                            htmlFor="from_name"
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <input
                            class="appearance-none mt-1 w-full bg-white text-gray-700 border-b py-3 px-2 focus:outline-none"
                            id="grid-last-name"
                            name="last_name"
                            type="text"
                            htmlFor="from_name"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          class="mt-1 block w-full bg-white text-gray-700 border-b border-gray-200 py-3 px-4 leading-tight focus:outline-none"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mt-2">
                        <textarea
                          name="message"
                          class="no-resize appearance-none mt-1 block w-full bg-white text-gray-700 border-b border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none h-32 resize-none"
                          id="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <button
                        text="SEND"
                        type="submit"
                        className="text-center border rounded-full border-gray-200 focus:outline-none text-white bg-black font-medium py-2 px-4 mt-2 hover:bg-primary-600 "
                      >
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
