import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: ReactNode;
  lede?: string;
  hand?: string;
  children?: ReactNode;
};

export function PageHeader({ kicker, title, lede, hand, children }: PageHeaderProps) {
  return (
    <header className="rise mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-14">
      <p className="eyebrow text-electric">{kicker}</p>
      <h1 className="display mt-4 max-w-4xl text-[2.9rem] sm:text-7xl lg:text-[5.4rem]">{title}</h1>
      {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lede}</p>}
      {hand && <p className="hand mt-3 text-2xl text-electric sm:text-3xl">{hand}</p>}
      {children}
    </header>
  );
}
