import Link from "next/link";
import LanguageSwitch from "./languageSwitch";

export default function NavBar(): React.JSX.Element {
  return (
    <header className="fixed flex w-full justify-center bg-primary-color z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl p-4 z-10">
        <Link href="/">
          <h1 className="font-bold text-xl text-white p-1">WebTool Stack</h1>
        </Link>
        <LanguageSwitch />
      </nav>
    </header>
  );
}
