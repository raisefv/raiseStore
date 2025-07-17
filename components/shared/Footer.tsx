import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white h-20 flex flex-row gap-4 justify-center items-center rounded-t-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] bottom-0 max-w-7xl mx-auto mt-8">
      <p className="text-gray-600">© {currentYear} raiselfg</p>
      <section className="flex flex-row gap-2">
        <a href="#">
          <Image src={"/vk.svg"} alt="vk" width={24} height={24} />
        </a>
        <a href="#">
          <Image src={"/tg.svg"} alt="tg" width={24} height={24} />
        </a>
        <a href="#">
          <Image src={"/whatsapp.svg"} alt="whatsapp" width={24} height={24} />
        </a>
      </section>
    </footer>
  );
};
