// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/shared/ThemeProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Zorvyn Finance-Dashboard",
//   description: "Personal finance dashboard to track and understand your financial activity",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
//       <body className="min-h-screen antialiased bg-background text-foreground overflow-x-hidden">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zorvyn • Finance Dashboard",
  description:
    "A modern finance dashboard to track expenses, income, and financial insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        
        {/* 🌈 Background Glow (optimized, no warnings) */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 📦 Main Layout Wrapper */}
          <main className="relative flex min-h-screen flex-col">
            
            {/* Optional container for spacing */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
              {children}
            </div>

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}