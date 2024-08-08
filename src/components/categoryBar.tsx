import { useTranslations } from "next-intl";
import Link from "next/link";
import { categoryKeys } from "@/utils/webToolKeys";

interface Props {
  locale: string;
}

export default function CategoryBar({ locale }: Props): React.JSX.Element {
  const t = useTranslations("MainPage");

  return (
    <ul className="flex items-center justify-center flex-wrap mx-4">
      {categoryKeys.map((key) => {
        return (
          <li key={key} className="m-2">
            <Link
              className="block p-2 rounded-2xl bg-white hover:bg-secondary-color text-text-color hover:text-white hover:scale-[115%] transition-all"
              href={`/${locale}/${key}`}
            >
              {t(`categories.${key}.value`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
