import Image from "next/image";

export default function PerformanceImage(props: { src: string; alt: string }) {
  const { src, alt } = props;

  return (
    <div className="overflow-hidden h-fit w-fit">
      <Image
        className="object-cover"
        src={src}
        alt={alt}
        height={1200}
        width={1200}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
