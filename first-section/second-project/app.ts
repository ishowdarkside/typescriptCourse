let userInput: unknown;

userInput = "5";
userInput = 10;

function generateError(message: String, code: number): never {
  throw { message, errorCode: code };
}

generateError("an error occured", 500);
