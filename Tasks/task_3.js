//Task 3: Booking Slot Conflict Detection
// Problem
// You are given a list of booking time slots for a resource (like a charger / meeting room).
// Your job is to detect:
// 1. Overlapping bookings
// 2. Invalid bookings (end time before start time)
// Dataset
// const bookings = [
// { id: 1, start: 10, end: 12 },
// { id: 2, start: 11, end: 13 },
// { id: 3, start: 14, end: 16 },
// { id: 4, start: 15, end: 17 },
// { id: 5, start: 18, end: 17 },
// { id: 6, start: 17, end: 19 },
// { id: 7, start: 19, end: 21 }
// ];
// Requirements
// 1. Identify all invalid bookings
// (where end <= start)
// 2. Identify all overlapping booking pairs
// Expected Output Format
// {
// invalidBookings: [5],
// overlapping: [
// [1, 2],
// [3, 4]
// ]
// }

const bookings= [
    { id: 1, start: 10, end: 12 },
    { id: 2, start: 11, end: 13 },
    { id: 3, start: 14, end: 16 },
    { id: 4, start: 15, end: 17 },
    { id: 5, start: 18, end: 17 },
    { id: 6, start: 17, end: 19 },
    { id: 7, start: 19, end: 21 }
];


let invalidBookings=[];
let overlapping=[];

bookings.forEach((booking, index) => {
    if (booking.end <= booking.start) {
        invalidBookings.push(booking.id);
    }   
});

for (let i = 0; i < bookings.length; i++) {
    for (let j = 0; j < bookings.length; j++) {
        if (bookings[i].start < bookings[j].end && bookings[i].end > bookings[j].start) {
            overlapping.push([bookings[i].id, bookings[j].id]);
        }
    }
}   

const result = {
    invalidBookings: invalidBookings,
    overlapping: overlapping
};

console.log(result);   

