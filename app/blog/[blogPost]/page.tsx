import ReactMarkdown from 'react-markdown';
import { getMarkdownFile } from '@/lib/utils';
import { JSX, SVGProps } from 'react';

export default async function BlogPost({params}: {params: {blogPost: string}}) {
  var blogData = await getMarkdownFile(params.blogPost);
  
  return (
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 ">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert blog-page">
          <a className='flex items-center'  href='/'>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Go back
          </a>
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {blogData.props.data.title}
            </h1>
            <span className="text-gray-500 dark:text-gray-400 date">Posted on {blogData.props.data.date}</span>
          </div>
        <ReactMarkdown>
          {blogData.props.content}
        </ReactMarkdown>
        </article>
      </div>
  );
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}