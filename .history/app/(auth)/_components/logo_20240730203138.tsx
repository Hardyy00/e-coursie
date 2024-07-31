import Image from "next/image";

export default function Logo() {
  return (
    <div className=" bg-white text-black w-24 h-24 rounded-full p-8 relative">
      <Image src={"/ico.svg"} fill alt={"Logo"} />
    </div>
  );
}
