
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { containerVariants, itemVariants } from '../utils/animations';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-accent font-mono mr-2">02.</span>
                            Skills
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items]) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="glass-card p-6 rounded-xl transition-colors duration-300 hover:border-accent/30"
                            >
                                <h3 className="text-xl font-bold text-slate-200 mb-4 capitalize border-b border-gray-700 pb-2">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-mono"
                                        >
                                            {skill}
                                        </span>
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

export default Skills;
