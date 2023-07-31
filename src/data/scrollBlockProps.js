import swimmer from "../img/swimmer.png";
import wedding from "../img/wedding.png";
import bike from "../img/bike.png";

const scrollItems=[
    {
        id:1,
        img:swimmer,
        mark:'5.0',
        rating:'6',
        country:'USA',
        description: "Life lessons with Katie Zaferes",
        price:136,
        isOnline: false,
        left:0
    },
    
    {
        id:2,
        img:wedding,
        mark:'5.0',
        rating:'30',
        country:'USA',
        description: "Learn wedding photography",
        price:125,
        isOnline: true,
        left:100
    },
    
    {
        id:3,
        img:bike,
        mark:'4.8',
        rating:'2',
        country:'USA',
        description: "Group Mountain Biking",
        price:50,
        isOnline: true,
        left:2
    }
];

export default scrollItems;