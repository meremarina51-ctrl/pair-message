import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/ApplicationForm";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { htmlLang, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/vacancies">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { vacancies } = await getDictionary(lang);
  return {
    title: vacancies.meta.title,
    description: vacancies.meta.description,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [htmlLang[locale], `/${locale}/vacancies`]),
      ),
    },
  };
}

export default async function Vacancies({ params }: PageProps<"/[lang]/vacancies">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { vacancies } = dict;

  return (
    <>
      <div className="relative">
        <Header
          locale={lang}
          brand={dict.brand}
          nav={dict.nav}
          labels={dict.header}
          current="vacancies"
        />
      </div>
      <main className="motif flex-1 px-5 pb-8 pt-32 md:px-12 md:pt-40">
        <div className="mx-auto grid max-w-325 gap-10 lg:grid-cols-[1fr_minmax(0,640px)] lg:gap-16">
          <div className="lg:pt-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent-soft">
              {vacancies.eyebrow}
            </span>
            <h1 className="mb-5 mt-4 text-balance font-display text-[40px] font-bold leading-[1.1] md:text-[50px]">
              {vacancies.title}
            </h1>
            <p className="max-w-[48ch] text-sm leading-relaxed text-foreground/65">
              {vacancies.intro}
            </p>
          </div>
          <div className="rounded-[10px] border border-foreground/10 bg-[#180a0c]/55 p-6 backdrop-blur-lg md:p-10">
            <ApplicationForm labels={vacancies} />
          </div>
        </div>
      </main>
      <Footer locale={lang} dict={dict} />
      <FloatingContact labels={dict.widget} />
    </>
  );
}
