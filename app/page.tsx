import { ProductList } from "@/components/shared/Product-list";
import { Title } from "@/components/shared/title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* welcome секция */}
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-8">
        <Link href="#">
          <section className="flex flex-col gap-2 items-center">
            <Title text={`ПОПУЛЯРНЫЕ БРЕНДЫ`} size="md" />
            <Title text={`Собрали подборку из новинок недели моды`} size="xs" />
          </section>
        </Link>
        <Link href="#">
          <Image src={"/swag.webp"} alt="swag" width={320} height={320} />
        </Link>
      </div>

      {/* карточки продуктов */}
      <ProductList />
    </>
  );
}
