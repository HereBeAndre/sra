import { CSSProperties } from 'react';

interface ILinkProps {
  href: string;
  title: string;
  style?: CSSProperties;
}

const Link: React.FC<ILinkProps> = ({ href, title, style }) => {
  return (
    <a href={href} style={style}>
      {title}
    </a>
  );
};

export default Link;
