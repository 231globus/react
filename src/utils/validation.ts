export function validation(refs: React.RefObject<HTMLInputElement>[]) {
  let result = true;
  function removeError(input: React.RefObject<HTMLInputElement>) {
    (input.current?.nextSibling as HTMLElement).textContent = '';
  }
  function createError(input: React.RefObject<HTMLInputElement>, message: string) {
    (input.current?.nextSibling as HTMLElement).textContent = message;
  }
  refs.forEach((input) => {
    console.log(input.current?.nextElementSibling as HTMLElement);
    removeError(input);
    if (input.current?.maxLength) {
      if (input.current?.value.length > Number(input.current.maxLength)) {
        removeError(input);
        createError(input, `Maximum length ${input.current.maxLength}`);
        result = false;
      }
    }
    if (input.current?.minLength) {
      if (input.current?.value.length < Number(input.current.minLength)) {
        removeError(input);
        createError(input, `Minimum length ${input.current.minLength}`);
        result = false;
      }
    }
    if (input.current?.value === '') {
      removeError(input);
      createError(input, 'The field is empty');
      result = false;
    }
  });
  return result;
}
