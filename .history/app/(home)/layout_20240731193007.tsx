import SideBar from "./_components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex">
      <SideBar />

      <div className="flex-1 p-2 pr-4">
        <div className="bg-white h-full rounded-l-[2rem] p-2">{children}</div>
      </div>
    </div>
  );
}