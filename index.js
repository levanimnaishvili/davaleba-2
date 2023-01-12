//Task 1

// შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
// ფუნქციას გადაეცით ობიექტი არგუმეტნად 

// let sampleObject = {
//     isItarable : true,
//     sampleArray : [12,63,21,34,98,57]
// }

// თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
// თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"
let sampleObject = {
    isItarable: true,
    sampleArray: [12, 63, 21, 34, 98, 57]
}

function funct1(step) {
    if (step.isItarable === true) {
        for (let i = 0; i < step.sampleArray.length; i++) {
            console.log(step.sampleArray[i]);
        }
    } else {
        console.log("provided array isn't itarable");
    }

}


funct1(sampleObject);

//Task 2
/*
შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false

*/


function checkPythagoras(x, y, z) {
    let xysorting = x ** 2 + y ** 2;
    let xzsorting = x ** 2 + z ** 2;
    let yzsorting = y ** 2 + z ** 2;

    if (xysorting === z ** 2 || xzsorting === y ** 2 || yzsorting === x ** 2) {
        return true
    } else {
        return false
    }
}

console.log(checkPythagoras(3, 4, 5));


//Task 3
/*
დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
დააბრუნოს "Min value is 2 and Max value is 75"
*/
let arr = [2, 14, 25, 75, 11, 6];
function minMax(array) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `Min value is ${min} and Max value is ${max} `
}

console.log(minMax(arr));


//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {

// }

// checkDeg(92)


function checkDeg(deg) {
    if (deg > 0 && deg < 90) {
        return 'Acute angle'
    } else if (deg === 90) {
        return 'Right angle'
    } else if (deg > 90 && deg < 180) {
        return 'Obtuse angle'
    } else if (deg === 180) {
        return 'Straight angle'
    }
}
console.log(checkDeg(92));

//Task 5
/*
დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
const array1 = [
    {
        name: 'student1',
        grade: 91
    },
    {
        name: 'student2',
        grade: 71
    },
    {
        name: 'student3',
        grade: 45
    }
];




array1.forEach((element) => {
    element.finalResult = 'finalResult F'

});

console.log(array1);
let grades = array1.map(a => a.grade);

function checkStudentGrade(objectArray) {
    for (let i = 0; i < objectArray.length; i++) {
        if (0 < objectArray[i] > 50) {
            return array1.forEach((element) => {
                element.finalResult = 'finalResult F'

            });
        }
        console.log(objectArray[i]);
    }

}
console.log(checkStudentGrade(array1));




array1.forEach((element) => {
    element.finalResult = 'E'

});