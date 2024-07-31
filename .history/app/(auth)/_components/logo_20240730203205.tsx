import Image from "next/image";

export default function Logo() {
  return (
    <div className=" bg-white text-black w-20 h-20 md: rounded-full p-8 relative">
      <Image src={"/ico.svg"} fill alt={"Logo"} />
    </div>
  );
}
