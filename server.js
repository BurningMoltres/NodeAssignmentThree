//area of circle
//pi=3.14
//radius=radius*radius
//pi*radius

//volume of surface area
//surface area of sphere(4*3.14*radius*radius)
//volume of a sphere((4/3)*pi*radius*radius)

//parameter list (object ,metric,radius)
//circle or sphere


var http=require("http");
var url=require("url");

const server=http.createServer(function(req,res)
{

let alpha=url.parse(req.url,true).query;
let myObject=alpha.object;
let myMetric=alpha.metric;
let myRadius=alpha.radius;
let area="";

if(myObject==="circle" || myObject==="Circle" && metric==="area")
{
    area=3.14*(myRadius*myRadius);
    res.write("Area of circle is"+area);
    res.end();
}
else if(myObject==="sphere"||myObject==="sphere" &&metric==="volume")
{
    area=4/3 * 3.14 * (myRadius*myRadius*myRadius);
    res.write("Volume of Sphere is"+Math.ceil(area));
    res.end();
}

else if(myObject==="sphere"||myObject==="sphere" &&metric==="surfaceArea")
{
    area=(4)*(3.14)*(myRadius*myRadius);
    res.write("Volume of Sphere is"+Math.ceil(area));
    res.end();
}

res.end();

}).listen(5000,"localhost",()=>{
    console.log("Server is running on port 5000");
})




