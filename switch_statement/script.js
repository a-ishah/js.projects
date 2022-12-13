// // the switch statement
const day = `friday`;

switch (day) {
    case `monday`: // day === `monday
        console.log (`plan course`);
        console.log (`go to coding meetup`);
    break;
    case `tuesday`: 
        console.log (`prepare theory videos`);
    break;
    case`wednesday`:
    case `thursday`:
        console.log (`write code examples`);
    break;
    case`friday`:
        console.log (`record videos`);
    break;
    case `saturday`:
    case  `sunday`:
        console.log (`enjoy the weekend`);
     break;
     default:
     console.log (`not a valid day!`);

}



