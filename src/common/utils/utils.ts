import { ansArray, compareAns } from "../mockData/questions/answer";





export const isEmptyObj = (obj: {}) => {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};

export function getBasePath(url: string) {
  let parts = url.split("/");
  return parts[1];
}
export function getChildPath(url: string) {
  let parts = url.split("/") || url.split("?");
  return parts[2]; 
}


export function checkForCorrectAns(answer:any,index:number,companyName:string){

  let ansArray=compareAns(companyName);
  
  const manipulatedState=Object.entries(answer)
  let temp=[]
  let find=0
  let questionIndex=index
  let indexOfStateName=0 //gives state name for example firstValue,secondValue,thirdValue
  let correctAnsArray=[]
  
  // manipulatedState= [ [ 'isApplicant', 'No' ,....], [ 'subjectToCorporateTax', 'Yes',.... ] ] key comes first and values comes after
  //
  for (
    let stateNumber = 0;
    stateNumber < manipulatedState.length;
    stateNumber++
  ) {
    const stateValuesArray =
      ansArray[questionIndex][manipulatedState[stateNumber][indexOfStateName]];
    const typeOfAns = typeof manipulatedState[stateNumber][1];
    //isApplicant:[['No','message',1],['Yes','message',2]]
    // we access the array by isApplicant property name results  [['No','message',1],['Yes','message',2]]
    //stateValuesArray [['No','message',1],['Yes','message',2]]
    for (let i = 0; i < stateValuesArray.length; i++) {
      // we are looping through each item of stateValuesArray ['No','message',1]
      let stateValue = stateValuesArray[i];
      stateValue.forEach((e) => {
        if (
          typeOfAns === "string" ||
          typeOfAns === "boolean" ||
          typeOfAns === "number"
        ) {
          if (manipulatedState[stateNumber].includes(e)) {
            temp.push(e);
          }
        } else {
          if (manipulatedState[stateNumber][1].includes(e)) {
            temp.push(e);
          }
        }
      });
      //
      if (
        typeOfAns === "string" ||
        typeOfAns === "boolean" ||
        typeOfAns === "number"
      ) {
        if (
          temp.length === stateValue.length - 3 &&
          temp.length === manipulatedState[stateNumber].length - 1
        ) {
          correctAnsArray = stateValue;
          // find++
          break;
        }
      } else {
        if (
          temp.length === stateValue.length - 3 &&
          temp.length === manipulatedState[stateNumber][1].length
        ) {
          correctAnsArray = stateValue;
          //     find++
          break;
        }
      }
    }
    if (correctAnsArray.includes("End")) {
      break;
    }
    temp = [];
  }

  return correctAnsArray;
}

// Email validation schema
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// Email validate function
export const ValidateEmail = (email: string) => email.match(validRegex);
