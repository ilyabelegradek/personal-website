import Image from "next/image";

export default function PerformanceImage(props: { src: string; alt: string }) {
  const { src, alt } = props;

  return (
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        height={0}
        width={0}
        priority
        sizes="50vw"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
