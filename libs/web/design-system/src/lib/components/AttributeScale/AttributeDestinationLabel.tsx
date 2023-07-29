import { Typography } from '../../../index';
import { AttributeDestinationLabelProps } from './types';
export const AttributeDestinationLabel = ({
  clusterSelected,
  destinationLabel,
  sortedBubbles,
}: AttributeDestinationLabelProps) => {
  const textColor = clusterSelected
    ? sortedBubbles[0].position > 51
      ? 'on.background.highEmphasis'
      : sortedBubbles[0].position > 49
      ? 'on.background.highEmphasis'
      : 'on.background.disabled'
    : 'on.background.highEmphasis';

  return (
    <Typography
      variant="caption"
      textAlign={clusterSelected ? 'right' : 'left'}
      sx={{
        width: clusterSelected ? 230 : 96,
        color: textColor,
      }}
    >
      {destinationLabel}
    </Typography>
  );
};
