import Link from "next/link";

export default function NavBar(): React.JSX.Element {
  return (
    <div className="fixed flex w-full justify-center bg-primary-color z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl p-4 z-10">
        <Link href="/">
          <h1 className="font-bold text-xl text-white p-1">WebTools</h1>
        </Link>
        <div className="flex bottom-0 gap-1">
          <Link href="/ko" className="text-white p-1">
            KOR
          </Link>
          <span className="text-white p-1">|</span>
          <Link href="/en" className="text-white p-1">
            ENG
          </Link>
        </div>
      </nav>
    </div>
  );
}
