import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "Who is Niklas Peterson?",
    answer:
      "Niklas Peterson is a product designer and creator from Sweden, currently shaping experiences as a Senior Product Designer at LottieFiles.",
  },
  {
    question: "What does Niklas Peterson design?",
    answer:
      "Niklas works on digital products, design systems, user interfaces, Figma plugins, and personal iOS apps.",
  },
  {
    question: "What selected work is featured in this portfolio?",
    answer:
      "The portfolio features work for Lummi, Musho, Buenoverse, and Bueno Drops, including web experiences, design systems, avatar selection UI, and Figma plugins.",
  },
  {
    question: "What side projects has Niklas Peterson created?",
    answer:
      "Niklas has created Hydrify and Titls, two iOS apps that combine design, development, and technology.",
  },
];

export { faqs };

export default function FAQ() {
  return (
    <FadeIn className="flex w-full flex-col gap-8 px-4 my-20 lg:px-20 md:my-32">
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="text-4xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 md:text-6xl">
          Frequently asked questions
        </h2>
        <p className="text-lg md:text-xl">
          Short answers about Niklas Peterson, selected work, and side projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <section key={faq.question} className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
              {faq.question}
            </h3>
            <p className="text-lg">{faq.answer}</p>
          </section>
        ))}
      </div>
    </FadeIn>
  );
}
