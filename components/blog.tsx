"use client"
import React from 'react';
import Head from 'next/head';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { blogsData } from '@/lib/data';
import BlogCard from './blogCard';

const BlogPage: React.FC = () => {
    const { ref } = useSectionInView("Blog");

    return (
        <motion.section
      id="blog"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My blog post</SectionHeading>
      {blogsData.map((blog, index) => (
          <React.Fragment key={index}>
            <BlogCard {...blog} />
          </React.Fragment>
        ))}
    </motion.section>
    );
};

export default BlogPage;