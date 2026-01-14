import asciidoctor from "@asciidoctor/core";
import fs from "fs";
import path from "path";

const processor = asciidoctor();
const contentDirectory = path.join(process.cwd(), 'public/case-studies');

// Get a list of all .adoc filenames (slugs)
export function getAllCaseStudySlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory)
    .filter(file => file.endsWith('.adoc'))
    .map(file => file.replace(/\.adoc$/, ''));
}

export async function getCaseStudyContent(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.adoc`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Convert to HTML
  const html = processor.convert(fileContent, {
    attributes: {
      showtitle: true,
      icons: 'font',
      // This helps if you want to use Tailwind classes inside Asciidoc
      sectanchors: true,
      // 'source-highlighter': 'highlightjs', // or 'prism'
    },
    standalone: true,
    safe: 'safe'
  });

  return html.toString();
}
