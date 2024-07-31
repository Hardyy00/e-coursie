import Logo from "./_components/logo";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex items-center justify-center">
      <Logo />

      {children}
    </div>
  );
}
