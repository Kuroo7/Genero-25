'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import './Navbar.css';

const transition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1],
};

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition },
  exit: { x: '100%', transition },
};

const Sidebar = ({ navItems, onClose }) => (
  <motion.div
    className="sidebar"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={sidebarVariants}
  >
    <div className="sidebar-header">
      {/* Close button */}
      <div onClick={onClose} className="sidebar-toggle">
        <div className="burger burgerActive" />
      </div>
    </div>

    <ul className="sidebar-links">
      {navItems.map((item, index) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
          exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
        >
          <Link href={item.href} onClick={onClose}>
            {item.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Sidebar;
