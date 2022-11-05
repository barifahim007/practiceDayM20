lear// find the grade points of my self. say your exam result is pulished. now tell what's your point

function gradepint(result) {
    if (result >= 80) {
        console.log('congratulations! you have got a+', result)
    }
    else if (result >= 70) {
        console.log('your grade is a grade', result)
    }
    else if (result >= 60) {
        console.log('your grade is a -', result)
    }
    return result;
}
const myMarks = gradepint(70);
console.log(myMarks);