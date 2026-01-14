import { getAllCaseStudySlugs, getCaseStudyContent } from "@/world/case-study/asciidoc";
import { notFound } from "next/navigation";
import Link from "next/link";

// Tell Next.js which paths to pre-render for SSG
// Else you'll get 500 Error: Page "/projects/[slug]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config. at DevServer.renderToResponseWithComponentsImpl
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const content = await getCaseStudyContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f1415] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>

        {/* Overriding default styles with tailwind typography */}
        <article
          className="max-w-none
          prose dark:prose-invert
          prose-a:text-blue-600 dark:prose-a:text-yellow-200
          hover:prose-a:text-blue-800 dark:hover:prose-a:text-yellow-400

          prose-table:border
          prose-table:border-gray-300 dark:prose-table:border-gray-600
          prose-th:p-2
          prose-td:p-2
          prose-th:bg-gray-100 dark:prose-th:bg-gray-700

          prose-code:before:hidden
          prose-code:after:hidden
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
