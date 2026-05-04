import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Who is Niklas Peterson?",
    a: "Niklas Peterson is a Product Designer and creator from Sweden. He is currently a Senior Product Designer at LottieFiles and brings digital products to life with pixels and code.",
  },
  {
    q: "What does Niklas Peterson design?",
    a: "Niklas designs digital products, including web apps, marketing websites, design systems, and Figma plugins. His work spans UI design, brand identity, animation, and front-end implementation.",
  },
  {
    q: "What products has Niklas worked on?",
    a: "Selected work includes the Lummi web app and Lummi Figma plugin, the Musho website and Musho Figma plugin, the Buenoverse avatar selection UI, and the Bueno Drops Figma plugin — most created during his time at Blush Design Inc.",
  },
  {
    q: "What apps has Niklas built on his own?",
    a: "Niklas builds two iOS apps as personal projects, Hydrify and Titls, and a web app called Timestamps. These let him combine design, development, and tech.",
  },
  {
    q: "How can I contact Niklas Peterson?",
    a: "You can email mail@niklaspeterson.com or reach out via X (@niklas_peterson), Threads, LinkedIn, or the Figma Community.",
  },
];

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <FadeIn
      id="faq"
      className="flex flex-col gap-8 px-4 my-20 lg:px-20 md:my-32 scroll-mt-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 dark:text-zinc-50">
        Frequently asked questions
      </h2>
      <dl className="flex flex-col gap-8 max-w-3xl">
        {faqs.map(({ q, a }) => (
          <div key={q} className="flex flex-col gap-2">
            <dt className="text-lg md:text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              {q}
            </dt>
            <dd className="text-base md:text-lg">{a}</dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
