import { motion } from "framer-motion";

import { ExternalLink } from "./ExternalLink";

export function Footer() {
  return (
    <motion.footer
      transition={{ delay: 0.5, duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-md flex select-none flex-col items-center gap-4 pb-10 text-neutral-400 sm:flex-row sm:gap-6 sm:pb-0"
    >
      <span>
        栽种者 🌱{" "}
        <ExternalLink href="https://chester.how">Chester</ExternalLink>
      </span>
      <span className="hidden sm:block">·</span>
      <span>
        在{" "}
        <ExternalLink href="https://www.raycast.com/chesterhow/is-it-toxic-to">
          Raycast 上试试
        </ExternalLink>
      </span>
    </motion.footer>
  );
}
