
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const technologies = [
        'JavaScript (ES6+)',
        'React',
        'Node.js',
        'TypeScript',
        'Python',
        'Tailwind CSS',
    ];

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
                                Hello! My name is Irfanul Hoque and I enjoy creating things that live on the internet. My interest in web development started back when I was exploring different technologies, and I've since developed a strong foundation in both frontend and backend development.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Fast-forward to today, I've had the privilege of working on various projects from <span className="text-accent">machine learning models</span> to <span className="text-accent">full-stack web applications</span>. My main focus these days is building accessible, inclusive products and digital experiences.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Here are a few technologies I've been working with recently:
                            </motion.p>

                            <motion.ul
                                className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm"
                                variants={containerVariants}
                            >
                                {technologies.map((tech) => (
                                    <motion.li
                                        key={tech}
                                        variants={itemVariants}
                                        whileHover={{ x: 5, color: "#64ffda" }}
                                        className="flex items-center transition-colors cursor-default"
                                    >
                                        <span className="text-accent mr-2">▹</span>{tech}
                                    </motion.li>
                                ))}
                            </motion.ul>
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
