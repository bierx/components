import React, { useRef, useEffect, useCallback, useState, FC, KeyboardEvent, useMemo } from 'react';
import { COLORS } from '@zenith/utils';
import { Typography } from '@zenith/components';
import Show from '@horizon/oms-show';

import { makeName, makeState, makeResult } from './misc/helpers';
import { texts } from './misc/texts';
import { onlyNumbersRegExp } from './misc/constants';
import { useIsMounted } from './misc/hooks';

import * as S from './VerificationInputGroup.styles';

import { IVerificationInputGroup } from './VerificationInputGroup.types';

const VerificationInputGroup: FC<IVerificationInputGroup> = ({
  inputsCount = 6,
  placeholder,
  onChange,
  hasError,
  errorMsg,
  isDisabled,
  value = '',
}) => {
  const inputRefs = useRef(
    Array.from({ length: inputsCount }, () => React.createRef<HTMLInputElement>())
  ).current;
  const eventListeners = [] as EventListenerOrEventListenerObject[] | void[];
  const inputsInitialState = useMemo(() => makeState(inputRefs), [inputRefs]);
  const [state, setState] = useState(inputsInitialState);
  const [validationError, setValidationError] = useState(hasError);
  const isMounted = useIsMounted();

  const onKeyDown = useCallback(
    (index) => (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.keyCode === 32) {
        event.preventDefault();
      }

      const isBackspace = event.code === 'Backspace' || event.keyCode === 8;

      if (isBackspace) {
        setState({ ...state, [makeName(index)]: '' });
      }

      if (isBackspace && index !== 0 && !state[makeName(index)]) {
        const input = inputRefs[index - 1].current;
        setState({ ...state, [makeName(index - 1)]: '' });
        input?.focus();
      }
    },
    [inputRefs, state]
  );

  const handleChange = useCallback(
    (index, length) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;

      if (nextValue || index === 0) {
        setState({ ...state, [makeName(index)]: nextValue });
      }

      if (index < length - 1 && nextValue) {
        inputRefs[index + 1]?.current?.focus();
      }
    },
    [inputRefs, state]
  );

  useEffect(() => {
    inputRefs.map(({ current }, index) => {
      if (current) {
        const listener = current.addEventListener('paste', (event) => {
          const value = event?.clipboardData?.getData('text');
          const newState = makeState(inputRefs, value);
          setState(newState);
          event.stopPropagation();
          event.preventDefault();
        });
        eventListeners[index] = listener;
      }
    });
    return () => {
      inputRefs.map(({ current }, index: number) => {
        if (current) {
          current.removeEventListener('paste', eventListeners[index] as EventListenerOrEventListenerObject);
        }
      });
    };
  }, [inputsCount]);

  useEffect(() => {
    if (value || value === null) {
      const newState = makeState(inputRefs, value ?? '');
      setState(newState);
    }
  }, [value]);

  useEffect(() => {
    setValidationError(hasError);

    if (hasError) {
      setState(inputsInitialState);
      inputRefs?.[0]?.current?.focus();
    }
  }, [hasError]);

  useEffect(() => {
    const currentToken = makeResult(state);
    const isValid = onlyNumbersRegExp.test(currentToken);
    const isFullFilled = currentToken.length === inputsCount;

    if (isMounted) {
      onChange?.(currentToken, isFullFilled, isValid);
    }

    if (isFullFilled) {
      setValidationError(!isValid);
    }
  }, [state, inputsCount, onlyNumbersRegExp, isMounted]);

  return (
    <>
      <S.InputWrapper>
        {inputRefs.map((ref: React.RefObject<HTMLInputElement>, index) => {
          const name = makeName(index);
          return (
            <S.Input
              error={validationError}
              name={name}
              placeholder={placeholder}
              maxLength={1}
              autoFocus={index === 0}
              onKeyDown={onKeyDown(index)}
              key={`${name}-${index}`}
              onChange={handleChange(index, inputsCount)}
              value={state[name]}
              ref={ref}
              disabled={isDisabled}
            />
          );
        })}
      </S.InputWrapper>
      <Show if={validationError}>
        <S.Error>
          <Typography color={COLORS.RED.SHADE_400} variant={'Body2'}>
            {errorMsg || texts.validation.invalid}
          </Typography>
        </S.Error>
      </Show>
    </>
  );
};

export default VerificationInputGroup;
