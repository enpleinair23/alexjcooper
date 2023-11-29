import React from "react";
import Button from "./button";
import { Link } from "react-scroll";

const Header = () => {
  const navigation = [
    { name: "WORK", href: "#work" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#about" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <p className="text-body-lg font-bold text-neutral-900">
                Alexander J Cooper
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-6 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-semibold text-neutral-700 hover:text-primary-600 px-4">
                  {item.name}
                </Link>
              ))}
            </div>
            <Button label="CONTACT" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
