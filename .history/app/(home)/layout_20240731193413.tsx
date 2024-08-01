import SideBar from "./_components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex ">
      <SideBar />

      <div className="flex-1 p-2 pr-3 bg-[#131063a1] ">
        <div className="bg-white h-full rounded-[2rem] p-4">{children}</div>
      </div>
    </div>
  );
}
