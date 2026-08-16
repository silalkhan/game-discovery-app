import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 50;

  if (children.length <= limit) {
    return (
      <p className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
        {children}
      </p>
    );
  }

  const summary = children.substring(0, limit);

  return (
    <p className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
      {expanded ? children : `${summary}...`}

      <button
        type="button"
        onClick={() => setExpanded((expanded) => !expanded)}
        className="ml-2 font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </p>
  );
};

export default ExpandableText;
