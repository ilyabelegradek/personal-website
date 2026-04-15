export default function SvgIconLocal({ id }: { id: string }) {
  return (
    <svg className="w-6 h-6">
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}
