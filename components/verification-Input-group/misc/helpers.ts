export const makeName = (index: string | number) => `val_${index}`;

export const makeResult = (state: Record<string, string>) => Object.values(state).join('');

export const makeState = (items: React.RefObject<HTMLInputElement>[], token = '') =>
  items.reduce((acc, _curr, index) => {
    acc[makeName(index)] = token[index] || '';
    return acc;
  }, {} as Record<string, string>);
