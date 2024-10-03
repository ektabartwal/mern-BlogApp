import { Footer } from "flowbite-react";
import {
  DribbbleIcon,
  Facebook,
  FacebookIcon,
  GithubIcon,
  Instagram,
  InstagramIcon,
  LucideInstagram,
  TwitchIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footercomponent = () => {
  return (
    <>
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  Ekta's
                </span>
                Blog
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.100jsproject.com"
                    target="_blank"
                    rel="noapener noreferrer"
                  >
                    100 Js Project
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noapener noreferrer"
                  >
                    Ekta's blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.github.com/ektabathwal"
                    target="_blank"
                    rel="noapener noreferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full  flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Ekta's blog"
              year={new Date().getFullYear()}
            />
            <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={FacebookIcon} />
              <Footer.Icon href="#" icon={Instagram} />
              <Footer.Icon href="#" icon={TwitchIcon} />
              <Footer.Icon href="#" icon={GithubIcon} />
              <Footer.Icon href="#" icon={DribbbleIcon} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footercomponent;
