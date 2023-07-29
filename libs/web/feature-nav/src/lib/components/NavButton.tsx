import { Button } from '@vegangouda/web/design-system';
import { Link } from 'react-router-dom';

export interface NavButtonProps {
  label: string;
  to: string;
  onClick?: () => void;
}

export const NavButton = ({ label, to, onClick }: NavButtonProps) => {
  return (
    <Button
      variant="text"
      color="primary"
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
