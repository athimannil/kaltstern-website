import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f7f9fc] px-5 pt-8 pb-[4.5rem] text-center text-[#0b3065] sm:px-6">
      <div
        className="pointer-events-none absolute -top-52 -left-36 size-[22rem] rounded-full border border-[#bf922d]/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -bottom-56 size-[22rem] rounded-full border border-[#bf922d]/15"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[40rem]">
        <Image
          className="mx-auto h-auto w-full max-w-[32rem]"
          src="/kaltstern-logo.svg"
          alt="Kaltstern GmbH"
          width={866}
          height={265}
          priority
        />
        <div
          className="mx-auto mt-9 mb-6 h-1 w-16 bg-[#bf922d] sm:mt-10"
          aria-hidden="true"
        />
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#bf922d] uppercase">
          Kaltstern GmbH
        </p>
        <h1 className="font-serif text-[clamp(2.25rem,7vw,4.3rem)] leading-[1.05] font-normal tracking-[-0.035em] text-[#0b3065]">
          Under maintenance
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#5b6b80] sm:text-[1.05rem] sm:leading-7">
          Our website is currently being updated; for sales inquiries, please
          contact us at{' '}
          <a
            className="font-semibold text-[#0b3065] underline decoration-[#bf922d] decoration-2 underline-offset-4 transition-colors hover:text-[#bf922d] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bf922d]"
            href="mailto:Sales@kaltstern.de"
          >
            sales@kaltstern.de
          </a>
          .
        </p>
      </div>

      <p className="absolute bottom-6 z-10 m-0 text-xs tracking-[0.04em] text-[#5b6b80]">
        © {new Date().getFullYear()} Kaltstern GmbH
      </p>
    </main>
  );
}
