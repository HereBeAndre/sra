import { CSSProperties } from 'react';

interface LinkProps {
  href: string;
  title: string;
  style?: CSSProperties;
}

const Link: React.FC<LinkProps> = ({ href, title, style }) => {
  return (
    <a href={href} style={style}>
      {title}
    </a>
  );
};

export default Link;
