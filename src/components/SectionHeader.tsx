type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-climatize-lightBlue" : "text-climatize-blue"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${light ? "text-blue-50" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
