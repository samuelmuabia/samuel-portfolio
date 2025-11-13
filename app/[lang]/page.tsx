import { getDictionary } from '@/lib/dictionaries';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'de');

  return (
    <>
      <Hero dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} />
      <Projects dict={dict} />
      <Contact dict={dict} />
    </>
  );
}

