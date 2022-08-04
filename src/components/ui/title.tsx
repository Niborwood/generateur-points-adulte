const Title = ({ title, size = "3xl", bold = false }: TitleProps) => {
  return (
    <h3
      className={`text-${size} ${
        bold && "font-bold"
      } after:content-[''] after:w-full after:h-2 after:absolute relative inline-block font-headings`}
    >
      {title}
    </h3>
  );
};

interface TitleProps {
  title: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  bold?: boolean;
}

export default Title;
