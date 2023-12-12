function solveQuadraticEquation() {
    const a = parseFloat(document.getElementById("input-a").value);
    const b = parseFloat(document.getElementById("input-b").value);
    const c = parseFloat(document.getElementById("input-c").value);

    var discriminant = b * b - 4 * a * c;
    var result;

    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = "Уравнение имеет два корня: x₁ = " + x1.toFixed(2) + ", x₂ = " + x2.toFixed(2);
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        result = "Уравнение имеет один корень: x = " + x.toFixed(2);
    } else {
        result = "Уравнение не имеет действительных корней";
    }

    document.getElementById("result").innerHTML = result;
}