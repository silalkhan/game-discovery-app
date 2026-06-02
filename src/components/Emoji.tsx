import bullsEye from "../assets/Bullseye--Streamline-Twemoji-Emoji.webp";
import meh from "../assets/Expressionless-Face--Streamline-Kawaii-Emoji.webp";
import thumbUp from "../assets/Thumbs-Up--Streamline-Kawaii-Emoji.webp";

interface Props {
  rating: number;
}

interface EmojiData {
  src: string;
  alt: string;
  className: string;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: Record<number, EmojiData> = {
    3: {
      src: meh,
      alt: "meh",
      className: "w-6 h-6",
    },
    4: {
      src: thumbUp,
      alt: "recommended",
      className: "w-6 h-6",
    },
    5: {
      src: bullsEye,
      alt: "exceptional",
      className: "w-8 h-8",
    },
  };

  const emoji = emojiMap[Math.round(rating)];

  if (!emoji) return null;

  return (
    <img
      src={emoji.src}
      alt={emoji.alt}
      className={`${emoji.className} inline-block ml-2`}
    />
  );
};

export default Emoji;
