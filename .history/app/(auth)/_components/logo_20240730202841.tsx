import Image from "next/image";

export default function Logo() {
  return (
    <div className=" bg-white text-black w-20 h-20 rounded-full p-8">
      <Image src={"/icon.svg"} fill />
    </div>
  );
}
