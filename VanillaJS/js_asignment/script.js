let inputsGrid = document.createElement('div'); // a grid for all input data'
inputsGrid.className = "inputs_grid";
document.body.appendChild(inputsGrid)

inputsGrid.style.display = "grid";
inputsGrid.style.gridTemplateColumns = "repeat(6,1fr)";
inputsGrid.style.gap = "5px"

document.body.style.display = "flex";
document.body.style.justifyContent = "center"
document.body.style.alignItems = "center"
document.body.style.flexDirection = "column"

let student_notes_inputs = [];
for (let i = 0; i < 4; i++) student_notes_inputs[i] = [];
let student_notes = []; //will be populated on button press
for (let i = 0; i < 4; i++) student_notes[i] = [];


let button = document.createElement('button');
button.style.border = "0px";
button.style.height = "50px";
button.style.width = "150px";
button.style.borderRadius = "5px"
button.style.marginTop = "15px"
button.innerHTML = "click here to generate results"
document.body.appendChild(button);
button.addEventListener("click", () => {
    PopulateStudentNotes(); // populate the matrix of notes
    AverageperExercise();
    TotalScoreperStud();
})

let exerciseAverageScore = document.createElement('div');
let TotalScoreStudent = document.createElement('div');
exerciseAverageScore.style.marginTop="15px";
TotalScoreStudent.style.marginTop="15px";
inputScores();





function inputScores() {

    /*
    this function generates all the inputs necessary for
    reading the data 
    */
    //one empty space for exercise column
    let div = document.createElement('div');
    inputsGrid.appendChild(div);
    for (let i = 0; i < 5; i++) {
        //create the labels
        let div = document.createElement('div');
        div.innerHTML = `student ${i+1}`;
        div.style.textAlign = "center"
        inputsGrid.appendChild(div);
    }
    for (let i = 0; i < 4; i++) {
        //for each exercise
        //creating the exercise label column
        div = document.createElement('div');
        div.innerHTML = `exercise ${i+1}`;
        inputsGrid.appendChild(div);
        for (let j = 0; j < 5; j++) { // for each student
            //create an input 
            let input = document.createElement('input');
            inputsGrid.appendChild(input);
            student_notes_inputs[i].push(input);

        }
    }

}

function PopulateStudentNotes() {
    // data is stored in matrix like it is displayed in the grid
    //columns means the stud notes
    //rows means the exercise notes
    student_notes = []; //will be populated on button press
    for (let i = 0; i < 4; i++) student_notes[i] = [];
    for (let i = 0; i < 5; i++)
        for (let j = 0; j < 4; j++) {
            if (!isNaN(parseInt(student_notes_inputs[j][i].value)))
                student_notes[j].push(parseInt(student_notes_inputs[j][i].value));
            else student_notes[j].push(0);
        }
        // console.table(student_notes)

}

function AverageperExercise() {
    let averageScores = [];
    exerciseAverageScore.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        let s = 0;
        for (let j = 0; j < 5; j++) {
            s += student_notes[i][j];
        }
        s /= 5;
        averageScores.push(s);
    }
    for (let i = 0; i < 4; i++) {
        let div = document.createElement('div');
        div.innerHTML = ` Exercise ${i+1} average score is: ${averageScores[i]}`
        exerciseAverageScore.appendChild(div)
    }
    document.body.appendChild(exerciseAverageScore)
}

function TotalScoreperStud() {
    let TotalScore = [];
    TotalScoreStudent.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let s = 0;
        for (let j = 0; j < 4; j++) {
            s += student_notes[j][i];
        }
        TotalScore.push(s);
    }
    for (let i = 0; i < 4; i++) {
        let div = document.createElement('div');
        div.innerHTML = ` Student ${i+1} got a total score of: ${TotalScore[i]}`
        TotalScoreStudent.appendChild(div)
    }
    document.body.appendChild(TotalScoreStudent)
}