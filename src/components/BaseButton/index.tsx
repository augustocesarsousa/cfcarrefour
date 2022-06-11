import React from 'react';
import './styles.css';

type Props = {
  text: string;
};

const BaseButton = ({ text }: Props) => {
  return (
    <button className="btn btn-primary btn-container" data-testid="button-submit">
      {text}
    </button>
  );
};

export default BaseButton;
