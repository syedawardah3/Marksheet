import inquirer from "inquirer";
//Asking for Roll Number
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "Enter your roll number:",
});
// Roll Number
let rollNum = roll.num1;
//Checking Roll Number
if (rollNum === 323245) {
    //asking roll number
    let marks = await inquirer.prompt([
        {
            name: "english",
            type: "number",
            message: "Please Enter your english number:"
        },
        {
            name: "urdu",
            type: "number",
            message: "Please Enter your urdu number:"
        },
        {
            name: "biology",
            type: "number",
            message: "Please Enter your biology number:"
        },
        {
            name: "physics",
            type: "number",
            message: "Please Enter your physics number:"
        },
        {
            name: "chemistry",
            type: "number",
            message: "Please Enter your chemistry number:"
        },
    ]);
    // extract marks
    let eng = marks.english;
    let ud = marks.urdu;
    let bio = marks.biology;
    let phy = marks.physics;
    let chem = marks.chemistry;
    //Percentage
    let totalMaeks = 500;
    let obtainMarks = eng + ud + bio + phy + chem;
    let percent = ((obtainMarks / totalMaeks) * 100);
    //answers
    console.log("Name: Wardah Shah");
    console.log("Father Name: Zahid Hussain");
    console.log(`English marks = ${eng} out of 100`);
    console.log(`Urdu marks = ${ud} out of 100`);
    console.log(`Biology marks = ${bio} out of 100`);
    console.log(`Physics marks = ${phy} out of 100`);
    console.log(`chemistry marks = ${chem} out of 100`);
    console.log(`Obtain Marks = ${obtainMarks} Total Marks = ${totalMaeks}`);
    console.log(`Percentage = ${percent} %`);
}
else {
    console.log("Invalid Roll Number");
}
