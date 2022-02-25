import Answer from "../answer";

export default function Card() {
  return (
    <div className="relative px-4 py-8 bg-white rounded-xl drop-shadow-xl skew-y-1">
      <h3 className="mb-4 text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae
        doloribus ullam optio beatae officiis unde ipsum iusto sit. Nobis dolore
        earum repudiandae debitis.
      </h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
}
