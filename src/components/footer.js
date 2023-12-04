import React from "react";

const Footer = () => {
  const social = [
    { name: "Instagram", href: "https://www.instagram.com/alexjcooper23/" },
    { name: "Twitter", href: "https://twitter.com/alexjcooper23" },
    { name: "YouTube", href: "https://www.youtube.com/@ENPLEINAIRFILMS" },
  ];
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:py-30 pt-12 pb-20 md:gap-24 gap-16">
          <div>
            <h3 className="md:text-display-xl text-display-md font-semibold pb-4">
              Have an idea?
            </h3>
            <a
              href="/"
              className="md:text-display-xl text-display-md font-normal hover:text-primary-100 hover:underline">
              Let’s talk ↓

            </a>
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-12 justify-between">
            <div>
              <a
                href="mailto:alexanderjohncooper23@hotmail.com"
                className="md:text-display-xs text-body-xl font-medium text-neutral-200 hover:text-primary-100 hover:underline">
                alexanderjohncooper23@hotmail.com
              </a>
            </div>
            <div className="flex justify-between md:gap-12 gap-3 md:pl-32">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="md:text-body-xl text-body-md font-normal text-neutral-200 hover:text-primary-100">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
