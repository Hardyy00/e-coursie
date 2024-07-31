import Logo from "./_components/logo";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Logo />

      {children}
    </div>
  );
}
