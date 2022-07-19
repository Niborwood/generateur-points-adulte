import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 px-8 mb-8 bg-stone-100">
      <div>
        <h2 className="text-2xl font-semibold uppercase text-fuchsia-700">
          <Link to="/">Générateur de points d'adultes</Link>
        </h2>
      </div>
    </header>
  );
}
