import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  githubAccount,
  linkedInAccount,
  mailTo,
  siteRoutes,
} from "../../constants";
import LogoUrl from "../../assets/images/logo.svg";
import MailIconUrl from "../../assets/images/mail.svg";
import LinkedInIconUrl from "../../assets/images/linkedin.svg";
import GithubIconUrl from "../../assets/images/github.svg";

function Footer() {
  return (
    <div className="footer__wrapper">
      <Link to={siteRoutes.home}>
        <img src={LogoUrl} className="footer__logo" alt="Go to Homepage" />
      </Link>
      <section className="footer__copyright">
        <p>© The Movies {new Date().getFullYear()}</p>
        <p>By Khaled Taymour</p>
      </section>
      <Link to={siteRoutes.about}>About</Link>
      <section className="footer__contact-us">
        <p>Contact Us</p>
        <section className="footer__social-media">
          <a
            title="send email"
            href={`mailto:${mailTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={MailIconUrl} alt="send email" />
          </a>
          <a
            title="LinkedIn"
            href={linkedInAccount}
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIconUrl} alt="LinkedIn" />
          </a>
          <a
            title="Github"
            href={githubAccount}
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIconUrl} alt="Github" />
          </a>
        </section>
      </section>
    </div>
  );
}

export default Footer;
