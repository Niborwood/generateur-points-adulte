const Title = ({ title }: TitleProps) => {
  return <h3 className="text-2xl font-bold">{title}</h3>;
};

interface TitleProps {
  title: string;
}

export default Title;
