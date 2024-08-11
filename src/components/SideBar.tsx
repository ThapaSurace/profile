"use client";


import { AnimatePresence, motion } from "framer-motion";
import Header from '@/components/sidebar/Header'
import NavList from '@/components/sidebar/NavList'
import SocialList from '@/components/sidebar/SocialList'

export const SideBar = () => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -230 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="py-8 px-10 hidden md:block"
      >
       <Header />

        {/* navlinks */}

       <NavList />

        {/* social media */}
        <SocialList />
      </motion.div>
    </AnimatePresence>
  );
};
