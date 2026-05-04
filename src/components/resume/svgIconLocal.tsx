export default function SvgIconLocal(props: {
  id: string;
  fill?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
}) {
  const { id, fill, width, height } = props;
  let finalWidth = "24px";
  let finalHeight = "24px";
  if (width && width > 0) {
    finalWidth = `${width}px`;
  }
  if (height && height > 0) {
    finalHeight = `${height}px`;
  }

  return (
    <svg style={{ width: finalWidth, height: finalHeight }}>
      <use href={`/icons/sprite.svg#${id}`} fill={fill ?? "#0077b6"} />
    </svg>
  );
}
