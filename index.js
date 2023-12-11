const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let pozitiveSum = 0;
let pozitiveAmount = 0;
let max = numbers[0];
let maxIndex = 0;
let negativeAmount = 0;
let oddPozitiveAmount = 0;
let evenPozitiveAmount = 0;
let evenPozitiveSum = 0;
let oddPozitiveSum = 0;
let pozitiveMulti = 1;

for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (current > 0) {
        pozitiveSum += current;
        pozitiveAmount++;
        if (current > max) {
            max = current;
            maxIndex = i;
        }
        if (current % 2 !== 0) {
            oddPozitiveAmount++;
            oddPozitiveSum += current;
        } else {
            evenPozitiveAmount++;
            evenPozitiveSum += current;
        }
        pozitiveMulti *= current;
    } else if (current < 0) {
        negativeAmount++;
    }
}
alert(`Sum of pozitive numbers: ${pozitiveSum}. Amount of pozitive numbers: ${pozitiveAmount}. 
Max value is: ${max} with sequence number ${maxIndex + 1}. Amount of negative numbers: ${negativeAmount}.
Amount of odd pozitive numbers: ${oddPozitiveAmount}. Amount of even pozitive numbers: ${evenPozitiveAmount}.
Sum of even pozitive numbers: ${evenPozitiveSum}. Sum of odd pozitive numbers: ${oddPozitiveSum}.
Multiplication of pozitive numbers: ${pozitiveMulti}.`)
