
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';
import { projects } from '../data/projects';
import { containerVariants, itemVariants } from '../utils/animations';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-accent font-mono mr-2">03.</span>
                            Things I've Built
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="glass-card p-6 rounded-xl flex flex-col h-full transition-all duration-300 group hover:border-accent/30 relative overflow-hidden"
                            >
                                {/* Glow Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="text-accent">
                                        <Folder size={40} />
                                    </div>
                                    <div className="flex gap-4 text-slate-400">
                                        <a href={project.github} className="hover:text-accent transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <div className="text-slate-400 text-sm mb-4 flex-grow space-y-2">
                                    {project.description.map((desc, i) => (
                                        <p key={i}>• {desc}</p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto text-xs font-mono text-slate-400">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="mr-2">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
