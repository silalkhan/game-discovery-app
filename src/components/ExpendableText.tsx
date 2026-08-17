import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  // Remove HTML tags only for calculating the text length
  const plainText = children.replace(/<[^>]*>/g, "");

  const isLongText = plainText.length > limit;

  if (!isLongText) {
    return (
      <div
        className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300
                   [&_p]:mb-4 [&_p:last-child]:mb-0
                   [&_br]:block [&_br]:content-['']"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  const summary = plainText.substring(0, limit);

  return (
    <div className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
      {expanded ? (
        <div
          className="[&_p]:mb-4 [&_p:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      ) : (
        <span>{summary}...</span>
      )}

      <button
        type="button"
        onClick={() => setExpanded((expanded) => !expanded)}
        className="ml-2 font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ExpandableText;
