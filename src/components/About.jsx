
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-10 rounded-2xl"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-accent font-mono mr-2">01.</span>
                            About Me
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="text-slate-400 space-y-4 text-lg">
                            <p>
                                Hello! My name is Irfanul Hoque and I enjoy creating things that live on the internet. My interest in web development started back when I was exploring different technologies, and I've since developed a strong foundation in both frontend and backend development.
                            </p>
                            <p>
                                Fast-forward to today, I've had the privilege of working on various projects from <span className="text-accent">machine learning models</span> to <span className="text-accent">full-stack web applications</span>. My main focus these days is building accessible, inclusive products and digital experiences.
                            </p>
                            <p>
                                Here are a few technologies I've been working with recently:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>JavaScript (ES6+)</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>React</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>Node.js</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>TypeScript</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>Python</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span>Tailwind CSS</li>
                            </ul>
                        </div>

                        <div className="relative group mx-auto md:mx-0">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded bg-accent/20 cursor-pointer">
                                <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                {/* Placeholder for profile image - using div for now */}
                                <div className="absolute inset-0 bg-gray-800 rounded flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
                                    <span className="text-6xl">👨‍💻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
