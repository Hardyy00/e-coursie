import Image from "next/image";

export default function Logo() {
  return (
    <div className=" bg-white text-black w-20 h-20 lg:w-24 lg:h-24 rounded-full p-8 lg:p-114 relative">
      <Image src={"/ico.svg"} fill alt={"Logo"} />
    </div>
  );
}
