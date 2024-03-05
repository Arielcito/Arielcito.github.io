//create a component in nextjs for a blog card

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

interface BlogCardProps {
    title: string;
    description: string;
    slug: string;
    date: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, description, slug, date }) => {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <motion.div
            className="mb-10"
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <Link href={`/blog/${slug}`}>
                
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-500">{date}</p>
                
            </Link>
        </motion.div>
    );
};

export default BlogCard;