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

        <article
          className="prose prose-lg dark:prose-invert max-w-none
            /* Custom styling for AsciiDoc specific elements */
            prose-headings:font-bold
            prose-a:text-blue-600
            dark:prose-a:text-blue-400"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
