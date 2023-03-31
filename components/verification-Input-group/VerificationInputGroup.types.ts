export type CBOnChange = (value: string, isFullFilled: boolean, isValid: boolean) => void;

export interface IVerificationInputGroup {
  /**
   * number of inputs
   */
  inputsCount?: number;
  /**
   * inputs placeholder
   */
  placeholder?: string;
  /**
   * @function
   * Runs when input changes
   * @param {string} value concatenated value consisting of all inputs
   * @param {boolean} isValid check if all inputs are filled
   * @returns {undefined} undefined
   */
  onChange?: CBOnChange;
  /**
   * styled input as error
   */
  hasError?: boolean;
  /**
   * Input error message
   */
  errorMsg?: string;
  /**
   * boolean for input disabled state
   */
  isDisabled?: boolean;
  /**
   * inputs controlled value
   */
  value?: string | null;
}
