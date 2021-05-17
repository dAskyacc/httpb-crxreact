import React from 'react';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className="options-container">{title.toUpperCase()} Page </div>;
};

export default Options;
