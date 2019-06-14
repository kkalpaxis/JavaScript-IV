// CODE here for your Lambda Classes

class Person {
    constructor (individual) {
      this.name = individual.name;
      this.age = individual.age;
      this.location = individual.location; 
    };
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor (teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
        this.subject = teacher.subject;
    };
    demo () {
        return `Today we are learning about ${this.subject}.`;
    };
    grade (Student) {
        return `${Student.name} receives a perfect score on ${Student.subject}.`;
    };
    randomGrade (Student) {
       return Student.grade - randomPoints();
    };
    /* graduate () { 
        if (this.randomGrade() > 70) {
            return ` is ready to graduate!`
        } else {
            return ` is not quite ready to graduate.`
        }
    }; */
};

class Student extends Person {
    constructor (pupil) {
        super(pupil);
        this.previousBackground = pupil.previousBackground;
        this.className = pupil.className;
        this.favSubjects = pupil.favSubjects;
        this.subject = pupil.subject;
        this.grade = pupil.grade;
    };
    listsSubjects () {
        return `${this.name}'s favorite subjects are ${this.favSubjects}.`;
    };
    PRAssignment () {
        return `${this.name} has submitted a PR for ${this.subject}.`;
    };
    sprintChallenge () {
        return `${this.name} has begun sprint challenge on ${this.subject}.`;
    };
};

class ProjectManager extends Instructor {
    constructor (PM) {
        super(PM);
        this.gradClassName = PM.gradeClassName;
        this.favInstructor = PM.favInstructor;
        this.channel = PM.channel;
    };
    standUp () {
        return `${this.name} announces to ${this.channel} @channel standy times!`;
    };
    debugsCode (Student) {
        return `${this.name} debugs ${Student.name}'s code on ${Student.subject}.`;
    };
};

const KarinaTest = new Person ({
    'name': 'Karina',
    'age' : '20',
    'location' : 'New York',
});

const Dan = new Instructor ({
    'name': 'Dan Levy',
    'age' : 'Oh boy, I do not want to guess and accidentally offend him',
    'location' : 'Denver',
    'specialty' : 'Javascript',
    'favLanguage' : 'Java',
    'catchPhrase' : 'The idea is called kitten mittens...',
    'subject' : 'Javascript',
});

const Karina = new Student ({
    'name': 'Karina',
    'age' : '20',
    'location' : 'New York',
    'previousBackground' : 'minimal',
    'className' : 'WEB21',
    'favSubjects' : ['HTML', ' CSS', ' and Javascript'],
    'subject' : 'Javascript IV',
    'grade' : 95,
});

const Brandon = new ProjectManager ({
    'name': 'Brandon',
    'age' : 'not this again...',
    'location' : 'Maine',
    'gradClassName' : 'WEB18',
    'favInstructor' : 'Josh',
    'channel' : 'best channel',
});

var randomPoints = function () {
    return Math.round(Math.random() * 100);   
};


console.log(KarinaTest.speak());
console.log(Dan.demo());
console.log(Dan.grade(Karina));  
console.log(Karina.listsSubjects());
console.log(Karina.PRAssignment());
console.log(Karina.sprintChallenge());
console.log(Brandon.standUp());
console.log(Brandon.debugsCode(Karina));







