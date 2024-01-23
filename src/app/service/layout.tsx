import ReduxProvider from "@/components/Provider";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <div className="relative">
          <SideBar />
          <div className="fixed inset-0 pl-[250px] duration-300 bg-zinc-100 dark:bg-zinc-800">
            {children}
          </div>
        </div>
      </ReduxProvider>
    </ThemeProvider>
  );
}
