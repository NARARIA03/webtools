import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { locale: string; category: string } }): Promise<Metadata> => {
  return {
    title: `${params.category} tools - WebTools`,
    description: `Discover tools for ${params.category} tasks. Improve your ${params.category} processes and find solutions for your projects with our resources designed to enhance efficiency.`,
  };
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
