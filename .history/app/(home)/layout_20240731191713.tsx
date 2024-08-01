import SideBar from "./_components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full border border-white">
      <SideBar />

      {children}
    </div>
  );
}
