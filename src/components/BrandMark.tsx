import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
};

export default function BrandMark({
  className = "",
  imageClassName = "",
}: BrandMarkProps) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/[0.03] shadow-[0_0_30px_rgba(163,230,53,0.12)] ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/brand-mark.svg"
        alt=""
        width={64}
        height={64}
        className={`h-full w-full object-contain ${imageClassName}`}
      />
    </span>
  );
}
