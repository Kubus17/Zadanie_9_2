// scrip,ts.js
var a, h, getresult, alert;
var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(15, 2),
    triangle3Area = getTriangleArea(10, 5);
function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        alert("Nieprawidłowe dane");
    }
    getresult = a * h / 2;
    return getresult;
}
console.log(getTriangleArea(10, 6));
