import React from 'react';

import { Button, Icon } from './styles';

interface LinkButtonProps {
  label: string;
  to: string;
  icon: string;
  primary: boolean;
}

const LinkButton = ({ label, to, icon, primary }: LinkButtonProps) => {
  return (
    <Button {...{ to, primary }}>
      <Icon src={icon} alt={label} />
      { label }
    </Button>
  );
}

LinkButton.defaultProps = {
  primary: false,
}

export default LinkButton;