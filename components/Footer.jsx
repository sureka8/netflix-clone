import React from "react";

const Footer = () => {
  return (
    <div>
      <h1 className="text-sm text-white underline md:py-10 py-5">
        Questions? Contact us.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <ul className="flex flex-col gap-y-3 text-sm underline">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-3 text-sm underline">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-3 text-sm underline">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-3 text-sm underline">
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
