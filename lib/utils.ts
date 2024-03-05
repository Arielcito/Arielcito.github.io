
import path from "path";
import fs from 'fs';
import matter from "gray-matter";

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getMarkdownFile = async ( post :string ) => {
  const filePath = path.join(process.cwd(), '/posts/',post+'.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Convert the data to JSON and generate the markdownString
  return {
    props: {
      content,
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};

