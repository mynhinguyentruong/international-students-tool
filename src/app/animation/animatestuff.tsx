'use client';

import { motion } from "framer-motion";

export default function Animation() {
    return (
        <motion.div
            className="box"
            animate={{
                scale: [1, 0, 0.5, 1, 0],
                rotate: [0, 0, 360, 180, 0],
                borderRadius: ["0%", "100%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.2, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
    );
}
