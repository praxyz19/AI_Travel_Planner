export const SelectTravelList=[
    {
        id:1,
        title:'Solo',
        desc:'A soul travels in exploration.',
        // Exploring the world on your own? Discover destinations perfect for solo adventurers.
        icon : '🎒',
        people: '2'
    },
    {
        id:2,
        title:'Couple',
        desc:'Two travelers, one adventure.',
        // Romantic escapes and couple-friendly experiences tailored for two
        icon : '👩‍❤️‍👨',
        people: '2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun-loving travelers.',
        // Family-friendly destinations and activities for all ages — safe, fun, and memorable.
        icon : '🏡',
        people: '3-5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seeking travelers.',
        // From wild adventures to chill getaways — plan unforgettable trips with your crew.
        icon : '🍻',
        people: '5-10 people'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Explore More, Spend Less',
        icon: '💸',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Smart Stays, Smooth Travels',
        icon: '💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'First-Class Journeys Await',
        icon: '💎',
    },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveller} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.";