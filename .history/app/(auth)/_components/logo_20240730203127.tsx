import Image from "next/image";

export default function Logo() {
  return (
    <div className=" bg-white text-black w-22 h-22 rounded-full p-8 relative">
      <Image src={"/ico.svg"} fill alt={"Logo"} />
    </div>
  );
}
