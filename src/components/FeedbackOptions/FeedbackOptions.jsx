import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <Btn type="button" onClick={() => onLeaveFeedback(options[0])}>
        {options[0]}
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback(options[1])}>
        {options[1]}
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback(options[2])}>
        {options[2]}
      </Btn>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
