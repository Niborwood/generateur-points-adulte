const Title = ({ title }: TitleProps) => {
  return (
    <h3 className="text-3xl font-bold after:content-[''] after:w-full after:h-2 after:absolute relative after:bottom-0.5 after:bg-gradient-to-r after:from-pink-600/60 after:to-purple-800/40 inline-block after:left-1 after:-z-10">
      {title}
    </h3>
  );
};

interface TitleProps {
  title: string;
}

export default Title;
