const Title = ({ title, size = "2xl", bold = true }: TitleProps) => {
  return (
    <h3
      className={`text-${size} ${
        bold && "font-bold"
      } after:content-[''] after:w-full after:h-2 after:absolute relative after:bottom-0.5 after:bg-gradient-to-r after:from-pink-600/60 after:to-purple-800/40 inline-block after:left-1 after:-z-10`}
    >
      {title}
    </h3>
  );
};

interface TitleProps {
  title: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  bold?: boolean;
}

export default Title;
