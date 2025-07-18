import { Input } from "../ui/input";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Сontainer";
import Image from "next/image";

export const Header = () => {
  return (
    <Container className="bg-white h-35 sm:h-20 rounded-b-xl shadow-lg sticky z-10 top-0 flex items-center justify-center">
      <header className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <Image
              className="order-1"
              src={"/logo.svg"}
              alt="logo"
              width={64}
              height={64}
            />
          </Link>
          <section className="order-2 sm:order-3 flex flex-row gap-2">
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
        </div>

        <Input
          type="search"
          className="order-3 sm:order-2 w-75"
          placeholder="Поиск.."
        />
      </header>
    </Container>
  );
};
