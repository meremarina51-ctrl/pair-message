import { notFound } from "next/navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Girls } from "@/components/Girls";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Salons } from "@/components/Salons";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <main>
        <Hero locale={lang} dict={dict} />
        <Programs locale={lang} dict={dict} />
        <Girls locale={lang} dict={dict} />
        <Salons locale={lang} dict={dict} />
      </main>
      <Footer locale={lang} dict={dict} />
      <FloatingContact labels={dict.widget} />
    </>
  );
}
