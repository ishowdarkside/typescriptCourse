type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType == "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  /*
  if (resultType === "as-number") {
    return +result;
  } else result.toString();*/
  return result;
}

const combinedAges = combine("Max ", "Anna", "as-text");
const combinedNumbers = combine(5, 5, "as-number");
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedAges);
console.log(combinedAges);
