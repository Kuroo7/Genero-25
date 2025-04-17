import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "../../../data/navData.js";
import { perspective } from "./anim";
import Link from "next/link";

export default function NavItems({ toggleMenu }) {
  return (
    <div className={styles.nav}>
      <div className={styles.body + " pl-10"}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <Link href={href} legacyBehavior passHref>
                <motion.a
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  onClick={toggleMenu}
                >
                  {title}
                </motion.a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
