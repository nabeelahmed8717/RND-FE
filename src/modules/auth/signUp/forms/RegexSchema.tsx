const hasDot = new RegExp(/[.]/);
const hasSmallLetter = new RegExp(/[a-z]/);
const hasCapitalLetter = new RegExp(/[A-Z]/);
const hasNumber = new RegExp(/\d/);
const hasSpecialCharacter = new RegExp(
  /[*/@!#%&()$`',?";:-=+_|><^~{}\]]/
);
export const passwordSchema = {hasDot,hasSmallLetter,hasCapitalLetter,hasNumber, hasSpecialCharacter}