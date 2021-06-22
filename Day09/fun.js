console.log("Start Program...");
function helloWorld(username) {
    console.log("Hello " + username);
}
function add(x, y) {
    console.log("X + Y = ", x + y);
}
/*
Not => !
Equal => ==
Not Equal => !=
Greater Than => >
Less Than => <
Greather Than Equal => >=
Less Than Equal => <=
*/
function compareHeight(name1, height1, name2, height2) {
    if (height1 > height2) {
        console.log(name1 + " is taller than " + name2);
    } else if (height1 < height2) {
        console.log(name2 + " is taller than " + name1);
    } else {
        console.log(name1 + " and " + name2 + " are same height.");
    }
}
/*
Condition Group
and => &&
or => ||
group => ()
And Table             OR Table          Not Table
T && T => T         T || T => T         !T => F
T && F => F         T || F => T         !F => T
F && T => F         F || T => T
F && F => F         F || F => F
(T && F) || (F && T) || (T || T) => T
(F || F) && !((F && T) || (T && F)) || (F && T) => F
F && !(F || F) || F
F && T || F
F || F => F
*/
function getD(name, subject, mark) {
    if ((subject == "Mya" || subject == "Eng" || subject == "Bio") && mark >= 75) {
        console.log(name + " gets " + subject + " D*.");
    } else if (mark >= 80) {
        console.log(name + " gets " + subject + " D*");
    } else if (mark < 40) {
        console.log(name + " fails " + subject + ".");
    } else {
        console.log(name + " passes " + subject + ".");
    }
}
console.log("Build Functions...");
let student1 = "Mg Mg";
let student1Height = 67;
let student2 = "Mg Ba";
let student2Height = 64;
compareHeight(student1, student1Height, student2, student2Height);
