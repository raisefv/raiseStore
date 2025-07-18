import Image from "next/image";
import { Container } from "../ui/Сontainer";
import { Title } from "./title";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="bg-white h-20 flex flex-row gap-4 justify-center items-center rounded-t-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] bottom-0 mt-8">
        <Title text={`© ${currentYear} Raise Revolution`} size="xs" />
        <section className="flex flex-row gap-2">
          <a href="#">
            <Image src={"/vk.svg"} alt="vk" width={24} height={24} />
          </a>
          <a href="#">
            <Image src={"/tg.svg"} alt="tg" width={24} height={24} />
          </a>
          <a href="#">
            <Image
              src={"/whatsapp.svg"}
              alt="whatsapp"
              width={24}
              height={24}
            />
          </a>
        </section>
      </footer>
    </Container>
  );
};
