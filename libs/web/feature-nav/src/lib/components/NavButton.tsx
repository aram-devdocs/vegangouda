import { Button } from '@vegangouda/web/design-system';
import { Link } from 'react-router-dom';

export interface NavButtonProps {
  label: string;
  to: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavButton = ({
  label,
  to,
  onClick,
  disabled = false,
}: NavButtonProps) => {
  return (
    <Button
      variant="text"
      color="primary"
      disabled={disabled}
      label={label}
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        flex: 1,
      }}
    />
  );
};
