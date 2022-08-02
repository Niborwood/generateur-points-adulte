import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 px-8 mb-8">
      <div>
        <h2 className="text-6xl font-semibold tracking-wider text-center uppercase text-slate-100">
          <Link to="/">Générateur de points d'adultes</Link>
        </h2>
      </div>
    </header>
  );
}
