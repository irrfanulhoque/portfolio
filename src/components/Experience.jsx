
import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 rounded-2xl"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-accent font-mono mr-2">04.</span>
                            Experience & Education
                        </h2>
                        <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                    </div>

                    <div className="space-y-12">
                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
                                <span className="text-accent mr-2">💼</span> Work Experience
                            </h3>
                            <div className="border-l-2 border-gray-700 ml-3 md:ml-6 space-y-8">
                                {experience.map((job, index) => (
                                    <div key={index} className="relative pl-8 md:pl-12">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-dark"></div>
                                        <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                                        <p className="text-accent font-mono text-sm mb-2">
                                            {job.company} | {job.period}
                                        </p>
                                        <ul className="text-slate-400 space-y-2 max-w-2xl">
                                            {job.description.map((desc, i) => (
                                                <li key={i} className="flex"><span className="mr-2">▹</span>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
                                <span className="text-accent mr-2">🎓</span> Education
                            </h3>
                            <div className="border-l-2 border-gray-700 ml-3 md:ml-6 space-y-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 md:pl-12">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-dark"></div>
                                        <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                                        <p className="text-accent font-mono text-sm mb-2">
                                            {edu.institution} | {edu.period}
                                        </p>
                                        <p className="text-slate-400">CGPA: {edu.gpa}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
