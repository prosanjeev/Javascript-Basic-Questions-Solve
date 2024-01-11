function volumeOFSphare(radius){
    let volume = (4/3)*(Math.PI)*(Math.pow(radius,3));   // (4/3)*π*(r*r*r)
    document.getElementById('VolumeofSphereID').innerHTML=volume.toFixed(2);
}
// 2
function areaOfFourWall(length, breadth, height ){
    let area = (2*(length+breadth )*height )                            // A=2(l+b)h
    document.getElementById('areaOfFourWallID').innerHTML=area;
}
// 3
function areaAndVolumeOfCuboid(length, breadth, height){
    let area = (2*(length*breadth+breadth*height+height*length))    // TSA=2(lb+bh+hl)
    let volume = (length*breadth*height)          //Volume= l × b × h
    document.getElementById('areaOfCuboidID').innerHTML=area;
    document.getElementById('VolumeOfCuboidID').innerHTML=volume;
}
// 4
function areaOfCube(side){
    let area = 6*(Math.pow(side,2))
    document.getElementById('areaOfCubeID').innerHTML=area;
}
// 5
function areaOfRectangle(length,breadth){
    let area = (length*breadth)       //  area of Rectangle = l*b
    document.getElementById('areaOfRectangleID').innerHTML=area;
}
// 6
function circumferenceOfCircle (radius) {
    let circumference = (2*(Math.PI)*radius)      //circumference of circle=2πr
    document.getElementById('circumferenceOfCircleID').innerHTML=circumference.toFixed(2);
}
// 7
function areaOfTriangleWhenThreeSlidesAreGiven (slide1, slide2, slide3) {
    let s = (slide1 + slide2 + slide3)/2   //The semi-perimeter of triangle s = (a + b + c)/2
    let area = Math.sqrt(s* (s-slide1)* (s-slide2)*(s-slide3))
    document.getElementById('areaOfTriangleID').innerHTML=area.toFixed(2);
}
// 8
function areaAndCircumferenceOfCircle(radius){
    let area = (Math.PI*(Math.pow(radius,2)) )  // area = π(r*r)
    let circumference = (2*(Math.PI)*radius)     //C=2πr
    document.getElementById('areaOfCircleID').innerHTML=area.toFixed(2);
    document.getElementById('CircumferencofCircleID').innerHTML=circumference.toFixed(2);
}
// 9
function kilometerConvertIntoMiles (kilometer) {
    let miles = kilometer/1.609  //m=divide the length value by 1.609
    document.getElementById('kilometerConvertIntoMilesID').innerHTML=miles.toFixed(2);
}
// 10
function meterConvertIntoKilometer (meter) {
    let kilometer = meter/1000  //k=divide the length value by 1000
    document.getElementById('meterConvertIntoKilometerID').innerHTML=kilometer.toFixed(2);
}
// 11
function potentialEnergyOfTheBody (mass,height) {
    potentialEnergy = mass*(9.8)*height //PE =MGH , G=9.8
    document.getElementById('potentialEnergyOfTheBodyID').innerHTML=potentialEnergy.toFixed(2);
}
// 12
function premeterOfRectangle(length,width) {
    let premeter= 2*(length+width)                //P=2(l+w)
    document.getElementById('PremeterOfRectangleID').innerHTML=premeter.toFixed(2);
}
// 13
function simpleInterestAndTotalAmount (principal,rate,time) {
    let simpleInterest = ((principal/100)*rate*time) 
    let totalAmount = principal+ simpleInterest  // Total Amount = Principal+Intrest
    document.getElementById('simpleInterestID').innerHTML=simpleInterest.toFixed(2);
    document.getElementById('TotalAmountID').innerHTML=totalAmount.toFixed(2);
}
//14
function kilogramConvertIntoGram (kilogram) {
    let gram = kilogram*1000  //k=divide the length value by 1000
    document.getElementById('kilogramConvertIntoGramID').innerHTML=gram; 
}
//15
function totalSurfaceAreaAndVolumeOFSphare(radius){
    let volume = (4/3)*(Math.PI)*(Math.pow(radius,3));   // (4/3)*π*(r*r*r)
    let area = 4*Math.PI*Math.pow(radius,2)
    document.getElementById('totalSurfaceAreaAndvolumeOFSphareID').innerHTML=area.toFixed(2);
    document.getElementById('totalSurfaceAreaAndVolumeOFSphareID').innerHTML=volume.toFixed(2);
}
//16
function totalSurfaceAreaOfCylinder (radius, height) {
    let area = 2*(Math.PI)*radius*(radius+height);  //A=2πrh+2πr*r
    document.getElementById('totalSurfaceAreaOfCylinderID').innerHTML=area.toFixed(2);
}
//17
function totalSurfaceAreaOfCuboid(length, breadth, height){
    let area = (2*(length*breadth+breadth*height+height*length))    // TSA=2(lb+bh+hl)
    document.getElementById('totalSurfaceAreaOfCuboidID').innerHTML=area.toFixed(2);
}
//18
function areaAndPerimeterOfRectangle(length,breadth) {
    let perimeter= 2*(length+breadth)                //P=2(l+w)
    let area= length*breadth
    document.getElementById('AreaAndPerimeterOfRectangleID').innerHTML=area.toFixed(2);
    document.getElementById('areaAndPerimeterOfRectangleID').innerHTML=perimeter.toFixed(2);
}
//19
function totalSurfaceAreaOFSphare(radius){
    let area = 4*Math.PI*Math.pow(radius,2)
    document.getElementById('totalSurfaceAreaOFSphareID').innerHTML=area.toFixed(2);
}
//20
function distance(velocity,acceleration,time){
    Distance= velocity*time*0.5*acceleration*Math.pow(time,2)
    document.getElementById('distanceID').innerHTML=Distance.toFixed(2);
}
//21
function totalAmount (principal,rate,time) {
    let interest = ((principal/100)*rate*time) 
    let totalAmo = principal+interest   // Total Amount = Principal+Intrest
    document.getElementById('totalAmountID').innerHTML=totalAmo.toFixed(2);
}
//22
function AreaOfSquare (side) {
    let area = side*side
    document.getElementById('AreaOfSquareID').innerHTML=area.toFixed(2);
}
//23
function SumOfFirstNNaturalNumber (n) {
    let sum=0;
    for(let i=1; i<=n; i++)
    {
        sum = sum + i;
    }
    document.getElementById('23').innerHTML= sum ;
   
}
//24
function SumSquareOfFirstNNaturalNumber (n) {
    let sum=0;
    for(let i=1; i<=n; i++)
    {
        sum = sum + Math.pow(i,2);
    }
    document.getElementById('24').innerHTML= sum ;
   
}
//25
function TotalSurfaceAreaOfHemisphere (r) {
    let area = (3*(Math.PI)*Math.pow(r,2))
    document.getElementById('25').innerHTML=area.toFixed(2);
}
//26
function AreaOfCircle (r) {
    let area = Math.PI*Math.pow(r,2)
    document.getElementById('26').innerHTML=area.toFixed(2);
}
//27
function TotalSurfaceAreaAndVolumeOfCircle (radius, height) {
    let area = 2*Math.PI*radius*height+2*Math.PI*Math.pow(radius,2)  
    let volume = Math.PI*Math.pow(radius,2)*height
    document.getElementById('27a').innerHTML=area.toFixed(2);
    document.getElementById('27v').innerHTML=volume.toFixed(2);
}
