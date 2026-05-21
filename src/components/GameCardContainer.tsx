import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div
      className="
        rounded-lg
        overflow-hidden
        shadow-lg
        bg-white
        dark:bg-gray-800
      "
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
