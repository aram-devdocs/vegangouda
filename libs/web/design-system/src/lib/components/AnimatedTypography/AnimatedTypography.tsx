import { Typography, TypographyProps } from '../../core/Typography/Typography';
import { animationProps } from '../../constants';

interface AnimatedTypographyProps {
  text: string;
  variant: TypographyProps['variant'];
  animation?: 'smooth' | 'fadeIn' | 'fadeOut' | 'slow' | 'fast' | 'default';
}

export const AnimatedTypography = ({
  text,
  variant,
  animation = 'default',
}: AnimatedTypographyProps) => {
  return (
    <Typography
      key={text + variant + animation + 'animated-typography' + Math.random()}
      component={'span'}
      variant={variant || undefined}
      sx={{
        ...animationProps[animation],
      }}
    >
      {text}
    </Typography>
  );
};
