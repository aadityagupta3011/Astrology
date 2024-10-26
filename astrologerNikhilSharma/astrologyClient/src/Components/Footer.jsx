import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareThreads } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import takmonLogo from "../images/takmonLogo.png"

const Footer = () => {
  return (
    <section id="bottom" className="bg-gray-900 text-white py-10">
      {/* Disclaimer */}
      <div className="container mx-auto">
        <div className="disclaimerTxt text-center">
          <span className="bg-green-500 text-black font-bold px-2 py-1 rounded-lg">
            Disclaimer<sup>*</sup>
          </span>
          No guarantee is given for the best results to All. Results may vary
          from person to person, owing to some uncontrollable reasons.
        </div>
      </div>

      <div className="container mx-auto mt-6">
        {/* Main Title */}
        <div className="text-center text-2xl font-bold text-cyan-300">
          I <span className="text-blue-400">Shared</span> My{" "}
          <span className="text-blue-400">Knowledge</span> To{" "}
          <span className="text-blue-400">Help</span> People
        </div>

        {/* Client Success Stories and Social Responsibility */}
        

        {/* Contact Information */}
        <div className="mt-10 text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-lg">
            CONTACT ASTROLOGER Nikhil SHARMA
          </h3>
          <p className="mt-4">
            <i>Dubai:</i> Al furjan east {" "} +97152791261
          </p>
          <p>
            <i>India   ( Himachal Pradesh  )      :</i> Maha Laxmi astro dham  Kangra Himachal Pradesh +919509168369
          </p>
          <p className="mt-4">
            <i>Mode of Payment</i>: <br />
            <b>For India:</b> Bank Transfer
            <br />
            <b>International:</b> PayPal,  Bank Transfer, Money
            Gram
          </p>
          <p className="mt-4">
            <i>Mobile/WhatsApp/Viber India</i>:{" "}
            <a href="tel:+91-95091-68369" className="text-green-400">
            +91-95091-68369
            </a>
            <br />
            <i>Mobile/WhatsApp/Viber Dubai</i>:{" "}
            <a href="tel: +97 1527912616" className="text-green-400">
            +97 1527912616
            </a>
            <br />
            <i>Email</i>:{" "}
            <a
              href="mailto:info@astrologerNikhilsharma.com"
              className="text-green-400">
              info@AstrologerNikhilSharma.com
            </a>
            <br />
            <i>Skype</i>: Nikhil.sharma0007
          </p>
        </div>

        {/* Social Media Section */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-bold">FOLLOW GURUJI AT SOCIAL MEDIA</h4>
          <ul className="flex justify-center space-x-4 mt-4">
            <li>
              <a
                href="https://www.instagram.com/Astrologer.Nikhil.Sharma/"
                target="_blank"
                rel="nofollow"
                className="text-cyan-400 w-52">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/AstrologerNikhilSharma"
                target="_blank"
                rel="nofollow"
                className="text-red-500">
                  <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Astrologer.Nikhil.Sharma/"
                target="_blank"
                rel="nofollow"
                className="text-blue-600">
                  <CiFacebook />

              </a>
            </li>
            <li>
              <a
                href="https://www.threads.net/@astrologer.Nikhil.sharma"
                target="_blank"
                rel="nofollow">
                  <FaSquareThreads />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/astrologer-Nikhil-sharma-ji/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/astrologerNikhil"
                target="_blank"
                rel="nofollow"
                className="text-blue-400">
                  <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/astrologerNikhil/"
                target="_blank"
                rel="nofollow"
                className="text-red-600">
                  <FaPinterest />
              </a>
            </li>
            
            <li>
              <a
                href="https://www.quora.com/profile/Astrologer-Nikhil-Sharma"
                target="_blank"
                rel="nofollow">
                  <FaQuora />

              </a>
            </li>
          </ul>
        </div>

        {/* DMCA Section */}
        <div className="mt-10 text-center">
          <div className="text-green-500 font-bold flex flex-col items-center justify-center">
          Copyright © 2024 All Rights Reserved By TAKMON BOOST <a href="https://takmonboost.com/"> <img src={takmonLogo} alt="" srcSet="" className="mt-2 w-[8vw]"/></a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Footer;
