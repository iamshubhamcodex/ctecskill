import Main from "@/components/About/Main";

export const metadata = {
  title: "About | Computer Technical Skills",
  description: "Welcome to Computer Technical Skills",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Main />
      <div className="maxWidth">{children}</div>
    </>
  );
}
