import Link from "next/link";

export default function NavBar(): React.JSX.Element {
  return (
    <div className="fixed flex w-full justify-center bg-gray-100/60 z-50">
      <nav className="flex justify-between w-full max-w-7xl p-4 z-10">
        <div className="flex bottom-0 gap-2">
          <Link href="/ko">KOR</Link>
          <div>|</div>
          <Link href="/en">ENG</Link>
        </div>
      </nav>
    </div>
  );
}
