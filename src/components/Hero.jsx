
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent text-lg mb-4 font-mono"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
                    >
                        Irfanul Hoque.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
                    >
                        I build things for the web.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 max-w-xl text-lg mb-8 md:mx-0 mx-auto"
                    >
                        I am a Computer Science Graduate, Full Stack Developer, and Data Analyst specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors flex items-center gap-2 group"
                        >
                            Check out my work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex items-center gap-6 md:ml-6 mt-4 md:mt-0">
                            <a href="https://github.com/tahmid37" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1"><Github size={24} /></a>
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1"><Linkedin size={24} /></a>
                            <a href="mailto:irrfanulhoque@gmail.com" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1"><Mail size={24} /></a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
