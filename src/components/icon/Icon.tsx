import svgSprite from '../../assets/images/sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || '40'}
      height={props.height || '40'}
      viewBox={props.viewBox || '0 0 40 40'}
      fill={props.fill || 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${svgSprite}#${props.iconId}`}></use>
    </svg>
  );
};
