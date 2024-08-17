interface PublishLayoutProps {
  children: React.ReactNode;
}

export default function PublishLayout({ children }: PublishLayoutProps) {
  return <div className="w-full h-full border border-white">{children}</div>;
}
