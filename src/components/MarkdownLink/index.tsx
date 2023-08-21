type TProps = {
  href: string;
};

export default function MarkdownLink({
  children,
  href,
  ...props
}: React.PropsWithChildren<TProps>) {
  return (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
