"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt={title}
        style={{ width: "16px", marginRight: "8px" }}
      />
      {title}
    </a>
  </li>
);

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          <SocialMediaItem
            url="https://www.facebook.com/hackyourfuturedenmark"
            title="Facebook"
            icon="/socialmedia/facebook.png"
          />
          <SocialMediaItem
            url="https://www.instagram.com/hackyourfuture.dk"
            title="Instagram"
            icon="/socialmedia/instagram.png"
          />
          <SocialMediaItem
            url="https://tiktok.com"
            title="Tiktok"
            icon="/socialmedia/tiktok.png"
          />
          <SocialMediaItem
            url="https://google.com"
            title="On the streets at night"
            icon="/socialmedia/street.png"
          />
        </ul>
      </div>
    </footer>
  );
};
