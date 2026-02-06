
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="glass-card p-10 rounded-2xl"
                >
                    <motion.div variants={itemVariants} className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-accent font-mono mr-2">01.</span>
                            About Me
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="text-slate-400 space-y-4 text-lg">
                            <motion.p variants={itemVariants}>
                                Hello! I am Irfanul Hoque, a Computer Science graduate from BRAC University with a strong foundation in data analysis, software quality assurance, and full-stack systems. Through academic projects and hands-on experience, I have focused on building dependable software by analyzing data, validating business logic, and testing end-to-end user flows.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                I approach problems by understanding requirements deeply, validating data at every step, and ensuring systems behave as expected under real conditions. Beyond technical work, I value clear communication, thorough documentation, and effective collaboration, all of which I have developed through team projects and real-world experience in high-responsibility roles.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                I am committed to building robust, reliable systems that translate strong technical foundations into practical solutions with real-world impact.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="relative group mx-auto md:mx-0"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded bg-accent/20 cursor-pointer"
                            >
                                <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                {/* Image Container */}
                                <div className="absolute inset-0 bg-gray-800 rounded flex items-center justify-center overflow-hidden transition-all group-hover:filter-none">
                                    <img src="/Irfan-Photo.jpg" alt="Irfanul Hoque" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
