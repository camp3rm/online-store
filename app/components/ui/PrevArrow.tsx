type Props = {
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
};


export default function NextArrow(props : Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}