let http = require('http');

let data = {
    nama: "Basori",
    usia: 21,
    alamat: "New york",
    Hobies:{
        food: 'fish',
        sport: "football",
        etc: "cycling"
    },
    etc: [3,4,5]
};

let app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 3));
});
app.listen(3000);
