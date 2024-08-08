import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  locale: string;
  toolKeys: string[];
}

/**
 *
 * @description toolKeys 배열과 locale 정보를 입력받아서, toolKeys에 해당하는 페이지 링크들을 반환하는 컴포넌트
 */
export default function RenderWebToolList({ locale, toolKeys }: Props): React.JSX.Element {
  const t = useTranslations("WebToolsData");

  if (toolKeys.length === 0) {
    return (
      <div className="py-4 flex flex-col justify-center items-center text-text-color">
        <p className="tex-lg font-semibold text-text-color">{t("notFindWebtools")}</p>
      </div>
    );
  } else {
    return (
      <ul className="py-4 flex flex-col justify-center items-center text-text-color">
        {toolKeys.map((key: string) => {
          return (
            <li key={key} className="w-full max-w-4xl p-4 m-3 bg-white shadow-lg rounded-lg hover:scale-[103%] transition-all">
              <Link href={`/${locale}/${t(`${key}.category`)}/${key}`}>
                <p>{t(`${key}.title`)}</p>
                <p className="text-xs">{t(`${key}.explain`)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
