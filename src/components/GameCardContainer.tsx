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
        dark:bg-black
      "
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
