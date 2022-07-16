import Button from "../ui/button";

const CardName = ({ setName, setHasSetName }: CardNameProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Quel est votre nom ?</h3>
      <input
        type="text"
        className="w-full p-4 mt-8 mb-2 font-bold text-slate-900 transition-all ease-in-out rounded-xl drop-shadow-sm bg-purple-600/40 border-2 border-fuchsia-600"
        onChange={(e) => setName(e.target.value)}
      />
      <Button text="Commencer" onClick={() => setHasSetName(true)} />
    </div>
  );
};

type CardNameProps = {
  setName: (name: string) => void;
  setHasSetName: (boolean: boolean) => void;
};

export default CardName;
