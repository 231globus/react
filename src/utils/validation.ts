export function validation(refs: React.RefObject<HTMLInputElement>[]) {
  let result = true;
  function removeError(input: React.RefObject<HTMLInputElement>) {}
  function createError(input: React.RefObject<HTMLInputElement>, message: string) {}
  refs.forEach((input) => {
    removeError(input);
    if (input.current?.value === '') {
      removeError(input);
      createError(input, 'The field is empty');
      result = false;
    }
  });
  return result;
}
