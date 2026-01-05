
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-12 rounded-2xl"
                >
                    <p className="text-accent font-mono mb-4">05. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:irrfanulhoque@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors text-lg"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="mt-20 flex justify-center gap-8">
                        <a href="#" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1"><Github size={24} /></a>
                        <a href="#" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1"><Linkedin size={24} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
