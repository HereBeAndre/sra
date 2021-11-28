import { EGetValueFromData } from './constants';

export const formatData = (data: string, formatSign: string) =>
  `${data} ${data || data !== EGetValueFromData.NOT_AVAILABLE ? formatSign : ''}`;

export const getValueFromData = (
  value?: number | string,
  modifier: EGetValueFromData = EGetValueFromData.NOT_AVAILABLE,
): string => {
  if (value) return String(value);
  switch (modifier) {
    case EGetValueFromData.NOT_AVAILABLE:
      return EGetValueFromData.NOT_AVAILABLE;
    case EGetValueFromData.EMPTY_STRING:
      return EGetValueFromData.EMPTY_STRING;
    default:
      return modifier;
  }
};
