import { slugify } from '@/lib/util';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
}

export default function AnchoredHeading({ type, children }: Props) {
  const HtmlTag = type;

  const anchor = slugify(children);

  return (
    <HtmlTag id={anchor}>
      <a href={`#${anchor}`}>{children}</a>
    </HtmlTag>
  );
}
