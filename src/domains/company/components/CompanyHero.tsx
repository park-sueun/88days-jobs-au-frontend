// domain/companies/components/CompanyHero.tsx

type Props = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function CompanyHero({
  title,
  subtitle,
  backgroundImage,
}: Props) {
  return (
    <section
      className="relative h-[260px] flex items-center px-10 text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-5xl">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg opacity-90">{subtitle}</p>
      </div>
    </section>
  );
}