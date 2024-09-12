import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Sign in bro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  // for all the logic
}>) {
  return (
    <div>
      <div className="text-center text-green-400 py-6">
        save <b>20%</b> on your first purchase
      </div>
      {children}
    </div>
  );
}
