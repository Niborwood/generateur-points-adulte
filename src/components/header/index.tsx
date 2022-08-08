import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

export default function Header() {
  return (
    <header className="px-2 pt-12 pb-10 sm:pt-16 sm:pb-8">
      <Transition
        appear
        show
        enter="transition-opacity duration-1000 delay-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <h1 className="text-4xl font-thin tracking-wider text-center uppercase skew-x-6 skew-y-3 sm:text-5xl md:text-7xl lg:text-8xl font-headings 2xl:text-9xl text-slate-100 drop-shadow-xl shadow-white">
          <Link to="/">
            Le <br />
            ieuv- o -metre
          </Link>
        </h1>
      </Transition>
    </header>
  );
}
