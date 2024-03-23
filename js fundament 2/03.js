const students = [
    {
        name: "Mithun",
        marks: 45,
    },

    {
        name: "alka",
        marks: 90,
    },

    {
        name: "raj",
        marks: 92,
    },

    {
        name: "rohit",
        marks: 95,
    },

    {
        name: "shailesh",
        marks: 75,
    },
];

const checkResults = (name) => {
    for (let student of students) {
        if (student.name === name) {
            return student.marks >= 90
                ? console.log(
                    `Congratulations ${student.name}! You have cleared the exam.`
                )
                : console.log(`Sorry ${student.name}! You have not cleared the exam.`);
        }
    }
    console.log("Invalid User !!!");
};

checkResults("Mithun");
checkResults("rohit");
checkResults("vikash");
checkResults("alka");