import SideBar from "./_components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex">
      <SideBar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
