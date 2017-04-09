var people  = [
    {name : "Rajini" , gender : "m" , dob : new Date(1990,12,12)},
    {name : "Kamal" , gender : "m" , dob : new Date(1980,9,24)},
    {name : "Siva Karthikeyan" , gender : "m" , dob : new Date(1980,9,24)},
    {name : "Keerthy Suresh" , gender : "f" , dob : new Date(1980,9,24)},
    {name : "Dhanush" , gender : "m" , dob : new Date(1980,9,24)},
    {name : "Sridivya" , gender : "f" , dob : new Date(1980,9,24)},
    {name : "Vijay" , gender : "m" , dob : new Date(1980,9,24)},
    {name : "Thrisha" , gender : "f" , dob : new Date(1980,9,24)},
];
var movies = [];
movies.push({ name : "Kodi" , actors : ["Dhanush","Keerthy Suresh"], releaseDate : new Date(2017,1,12)});
movies.push({ name : "Remo" , actors : ["Siva Karthikeyan","Keerthy Suresh"], releaseDate : new Date(2016,11,12)});
movies.push({ name : "Kabali" , actors : ["Rajini","Rathika Apte"], releaseDate : new Date(2015,11,12)});
movies.push({ name : "Manmadhan Ambu" , actors : ["Kamal","Thrisha"], releaseDate : new Date(2010,11,12)});

module.exports = {
    movies : movies,
    people : people
}