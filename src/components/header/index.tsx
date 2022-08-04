import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-8 pt-12 pb-2 sm:pt-16 sm:pb-8">
      <div>
        <h2 className="text-3xl font-thin tracking-wider text-center uppercase skew-x-6 skew-y-3 sm:text-5xl md:text-7xl lg:text-8xl font-headings 2xl:text-9xl text-slate-100 drop-shadow-xl shadow-white">
          <Link to="/">Generateur de points d'adultes</Link>
        </h2>
      </div>
    </header>
  );
}
