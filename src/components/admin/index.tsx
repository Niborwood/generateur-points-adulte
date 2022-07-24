import { useRef, useState } from "react";
import { CardWrapper, Input, Button } from "../../components/ui";

const Admin = () => {
  // Input refs
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // Error state
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  // Tab state
  const [tab, setTab] = useState<"login" | "signup">("login");

  // Handle for submit
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handling validation
    if (!email.current?.value.match(/^[^@]+@[^@]+\.[^@]+$/))
      error.email = "Merci d'entrer une adresse email valide.";
    else error.email = "";

    if (password.current?.value.length || 0 < 6)
      error.password = "Le mot de passe doit faire a minima 6 caractères.";
    else error.password = "";

    setError({ ...error });
  };

  return (
    <CardWrapper>
      <div className="flex gap-4 mx-4 text-2xl font-bold">
        <button
          className={`font-bold ${
            tab === "login" ? "text-pink-700" : "text-pink-700/25"
          }`}
          onClick={() => setTab("login")}
        >
          Log In
        </button>
        <button
          className={`font-bold ${
            tab === "signup" ? "text-pink-700" : "text-pink-700/25"
          }`}
          onClick={() => setTab("signup")}
        >
          Sign Up
        </button>
      </div>
      <div className="my-4">
        <form onSubmit={handleFormSubmit}>
          <div className="my-4 mt-8">
            <Input name="email" ref={email} error={error.email} label="Email" />
            <Input
              name="password"
              type="password"
              ref={password}
              error={error.password}
              label="Mot de passe"
            />
            {tab === "signup" && (
              <Input
                name="password"
                type="password"
                ref={password}
                error={error.password}
                label="Confirmer le mot de passe"
              />
            )}
          </div>
          <Button text={tab === "login" ? "Se connecter" : "S'inscrire"} />
        </form>
      </div>
    </CardWrapper>
  );
};

export default Admin;
