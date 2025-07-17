import { Input } from "../ui/input";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white h-20 flex flex-row gap-4 justify-center items-center rounded-b-xl shadow-lg sticky z-10 top-0 max-w-7xl mx-auto">
      <Link href="/">
        <h1 className="text-7xl font-semibold">RR</h1>
      </Link>
      <Input type="search" className="max-w-90" placeholder="Поиск.." />
      <section className="flex flex-row gap-2">
        <Link href="#">
          <User size={24} />
        </Link>
        <Link href="#">
          <Heart size={24} />
        </Link>
        <Link href="#">
          <ShoppingCart size={24} />
        </Link>
      </section>
    </header>
  );
};
