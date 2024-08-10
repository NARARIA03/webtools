import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string; category: string; webtools: string };
}): Promise<Metadata> => {
  return {
    title: `${params.webtools} - WebTool Stack`,
    description: `Use ${params.webtools} to streamline your tasks. This tool is designed to enhance your workflow and improve efficiency with ${params.webtools} features.`,
  };
};

export default function WebtoolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
