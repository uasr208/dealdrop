import "./globals.css";

export const metadata = {
  title: "Deal Drop",
  description:
    "A price tracker app where you can add any online product and get notified when the price drops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
