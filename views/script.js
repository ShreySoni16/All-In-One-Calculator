// Simple Interest Calculator
function calculateSimpleInterest() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var time = document.getElementById("time").value;

  var simpleInterest = (principal * rate * time) / 100;
  var totalAmount = parseFloat(principal) + simpleInterest;

  document.getElementById("result").innerHTML = `
          <p>Simple Interest: <strong>${simpleInterest.toFixed(2)}</strong></p>
          <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
      `;
}

// Compound Interest Calculator
function calculateCompoundInterest() {
  var principal = document.getElementById("compound-principal").value;
  var rate = document.getElementById("compound-rate").value;
  var frequency = document.getElementById("frequency").value;
  var time = document.getElementById("compound-time").value;

  var compoundInterest =
    principal * Math.pow(1 + rate / (frequency * 100), frequency * time) -
    principal;
  var totalAmount = parseFloat(principal) + compoundInterest;

  document.getElementById("compound-result").innerHTML = `
          <p>Compound Interest: <strong>${compoundInterest.toFixed(
            2
          )}</strong></p>
          <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
      `;
}

// Currency Calculator
function convertCurrency() {
  var amount = document.getElementById("currency-amount").value;
  var sourceCurrency = document
    .getElementById("source-currency")
    .value.toUpperCase();
  var targetCurrency = document
    .getElementById("target-currency")
    .value.toUpperCase();

  // This is a placeholder logic; ideally, you would fetch conversion rates from a reliable API
  var conversionRate = 1.2; // Example conversion rate

  var convertedAmount = amount * conversionRate;

  document.getElementById("currency-result").innerHTML = `
          <p>Converted Amount: <strong>${convertedAmount.toFixed(
            2
          )} ${targetCurrency}</strong></p>
      `;
}

// Salary Calculator
function calculateNetSalary() {
  var grossSalary = document.getElementById("gross-salary").value;
  var deductions = document.getElementById("deductions").value;
  var bonuses = document.getElementById("bonuses").value;

  var netSalary =
    parseFloat(grossSalary) - parseFloat(deductions) + parseFloat(bonuses);

  document.getElementById("salary-result").innerHTML = `
          <p>Net Salary: <strong>${netSalary.toFixed(2)}</strong></p>
      `;
}

// Retirement Calculator
function calculateRetirement() {
  var currentAge = document.getElementById("current-age").value;
  var retirementAge = document.getElementById("retirement-age").value;
  var savings = document.getElementById("savings").value;
  var returnRate = document.getElementById("return-rate").value;

  var yearsToRetire = retirementAge - currentAge;
  var retirementCorpus =
    savings * Math.pow(1 + returnRate / 100, yearsToRetire);

  document.getElementById("retirement-result").innerHTML = `
          <p>Retirement Corpus: <strong>${retirementCorpus.toFixed(
            2
          )}</strong></p>
      `;
}

// Sales and Tax Calculator
function calculateSalesTax() {
  var price = document.getElementById("price").value;
  var taxRate = document.getElementById("tax-rate").value;

  var salesTax = (price * taxRate) / 100;
  var totalPrice = parseFloat(price) + salesTax;

  document.getElementById("sales-result").innerHTML = `
          <p>Sales Tax: <strong>${salesTax.toFixed(2)}</strong></p>
          <p>Total Price with Tax: <strong>${totalPrice.toFixed(2)}</strong></p>
      `;
}

// Investment Calculator
function calculateInvestment() {
  var initialInvestment = document.getElementById("initial-investment").value;
  var periodicContributions = document.getElementById(
    "periodic-contributions"
  ).value;
  var returnRate = document.getElementById("investment-rate").value;
  var time = document.getElementById("investment-time").value;

  var totalAmount = initialInvestment * Math.pow(1 + returnRate / 100, time);
  for (let i = 1; i <= time; i++) {
    totalAmount +=
      periodicContributions * Math.pow(1 + returnRate / 100, time - i);
  }

  document.getElementById("investment-result").innerHTML = `
          <p>Total Investment Returns: <strong>${totalAmount.toFixed(
            2
          )}</strong></p>
      `;
}
// BMI Calculator
function calculateBMI() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;

  var bmi = weight / (height * height);

  var category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById("bmi-result").innerHTML = `
          <p>BMI: <strong>${bmi.toFixed(2)}</strong></p>
          <p>Category: <strong>${category}</strong></p>
      `;
}

// BMR Calculator
function calculateBMR() {
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight-bmr").value;
  var height = document.getElementById("height-bmr").value;

  var bmr;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  document.getElementById("bmr-result").innerHTML = `
          <p>BMR: <strong>${bmr.toFixed(2)} calories/day</strong></p>
      `;
}

// Calorie Calculator
function calculateCalories() {
  var activityLevel = document.getElementById("activity-level").value;
  var age = document.getElementById("age-cal").value;
  var gender = document.getElementById("gender-cal").value;
  var weight = document.getElementById("weight-cal").value;
  var height = document.getElementById("height-cal").value;

  var bmr;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  var activityFactor;
  switch (activityLevel) {
    case "sedentary":
      activityFactor = 1.2;
      break;
    case "light":
      activityFactor = 1.375;
      break;
    case "moderate":
      activityFactor = 1.55;
      break;
    case "active":
      activityFactor = 1.725;
      break;
    case "very-active":
      activityFactor = 1.9;
      break;
  }

  var dailyCalories = bmr * activityFactor;

  document.getElementById("calorie-result").innerHTML = `
          <p>Daily Calorie Needs: <strong>${dailyCalories.toFixed(
            2
          )} calories/day</strong></p>
      `;
}

// Body Fat Calculator
function calculateBodyFat() {
  var gender = document.getElementById("gender-bodyfat").value;
  var age = document.getElementById("age-bodyfat").value;
  var waist = document.getElementById("waist-bodyfat").value;
  var neck = document.getElementById("neck-bodyfat").value;
  var height = document.getElementById("height-bodyfat").value;

  var bodyFat;
  if (gender === "male") {
    bodyFat =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else {
    var hip = document.getElementById("hip-bodyfat").value;
    bodyFat =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  }

  document.getElementById("bodyfat-result").innerHTML = `
          <p>Body Fat Percentage: <strong>${bodyFat.toFixed(2)}%</strong></p>
      `;
}

function toggleHipInput() {
  var gender = document.getElementById("gender-bodyfat").value;
  var hipInput = document.getElementById("hip-input");
  hipInput.style.display = gender === "female" ? "block" : "none";
}

// Ideal Weight Calculator
function calculateIdealWeight() {
  var gender = document.getElementById("gender-ideal").value;
  var height = document.getElementById("height-ideal").value;
  var age = document.getElementById("age-ideal").value;
  var frameSize = document.getElementById("frame-size").value;

  var idealWeight;
  if (gender === "male") {
    if (frameSize === "small") {
      idealWeight = 50 + 0.9 * (height - 152.4);
    } else if (frameSize === "medium") {
      idealWeight = 50 + 1.0 * (height - 152.4);
    } else if (frameSize === "large") {
      idealWeight = 50 + 1.1 * (height - 152.4);
    }
  } else {
    if (frameSize === "small") {
      idealWeight = 45.5 + 0.9 * (height - 152.4);
    } else if (frameSize === "medium") {
      idealWeight = 45.5 + 1.0 * (height - 152.4);
    } else if (frameSize === "large") {
      idealWeight = 45.5 + 1.1 * (height - 152.4);
    }
  }

  document.getElementById("idealweight-result").innerHTML = `
          <p>Ideal Weight Range: <strong>${idealWeight.toFixed(
            2
          )} kg</strong></p>
      `;
}
// Length Calculator
function convertLength() {
  var length = document.getElementById("length").value;
  var lengthUnit = document.getElementById("length-unit").value;
  var targetLengthUnit = document.getElementById("target-length-unit").value;

  // Conversion logic
  var conversionRates = {
    meters: { meters: 1, kilometers: 0.001, feet: 3.28084, miles: 0.000621371 },
    kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, miles: 0.621371 },
    feet: {
      meters: 0.3048,
      kilometers: 0.0003048,
      feet: 1,
      miles: 0.000189394,
    },
    miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, miles: 1 },
  };

  var convertedLength = length * conversionRates[lengthUnit][targetLengthUnit];

  document.getElementById("length-result").innerHTML = `
          <p>Converted Length: <strong>${convertedLength.toFixed(
            2
          )} ${targetLengthUnit}</strong></p>
      `;
}

// Age Calculator
function calculateAge() {
  var birthdate = new Date(document.getElementById("birthdate").value);
  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthdate.getFullYear();
  var m = currentDate.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }

  document.getElementById("age-result").innerHTML = `
          <p>Age: <strong>${age} years</strong></p>
      `;
}

// Hour to Minute & Seconds Calculator
function convertHours() {
  var hours = document.getElementById("hours").value;

  var minutes = hours * 60;
  var seconds = hours * 3600;

  document.getElementById("hours-result").innerHTML = `
          <p>Minutes: <strong>${minutes}</strong></p>
          <p>Seconds: <strong>${seconds}</strong></p>
      `;
}

// Date Calculator
function calculateDateDifference() {
  var startDate = new Date(document.getElementById("start-date").value);
  var endDate = new Date(document.getElementById("end-date").value);

  var timeDifference = endDate - startDate;
  var daysDifference = timeDifference / (1000 * 3600 * 24);

  document.getElementById("date-result").innerHTML = `
          <p>Time Duration: <strong>${daysDifference} days</strong></p>
      `;
}

// GPA Calculator
function calculateGPA() {
  var courseCredits = document
    .getElementById("course-credits")
    .value.split(",")
    .map(Number);
  var courseGrades = document
    .getElementById("course-grades")
    .value.split(",")
    .map(Number);

  var totalCredits = courseCredits.reduce((acc, credit) => acc + credit, 0);
  var weightedGrades = courseCredits.map(
    (credit, index) => credit * courseGrades[index]
  );
  var totalWeightedGrades = weightedGrades.reduce(
    (acc, grade) => acc + grade,
    0
  );

  var gpa = totalWeightedGrades / totalCredits;

  document.getElementById("gpa-result").innerHTML = `
          <p>GPA: <strong>${gpa.toFixed(2)}</strong></p>
      `;
}
// Height Calculator
function convertHeight() {
  var height = document.getElementById("height").value;
  var heightUnit = document.getElementById("height-unit").value;
  var targetHeightUnit = document.getElementById("target-height-unit").value;

  // Conversion logic
  var conversionRates = {
    centimeters: {
      centimeters: 1,
      meters: 0.01,
      inches: 0.393701,
      feet: 0.0328084,
    },
    meters: { centimeters: 100, meters: 1, inches: 39.3701, feet: 3.28084 },
    inches: { centimeters: 2.54, meters: 0.0254, inches: 1, feet: 0.0833333 },
    feet: { centimeters: 30.48, meters: 0.3048, inches: 12, feet: 1 },
  };

  var convertedHeight = height * conversionRates[heightUnit][targetHeightUnit];

  document.getElementById("height-result").innerHTML = `
          <p>Converted Height: <strong>${convertedHeight.toFixed(
            2
          )} ${targetHeightUnit}</strong></p>
      `;
}
// Bill and Tip Calculator
function calculateBillAndTip() {
  var billAmount = document.getElementById("bill-amount").value;
  var tipPercentage = document.getElementById("tip-percentage").value;

  var tipAmount = (billAmount * tipPercentage) / 100;
  var totalAmount = parseFloat(billAmount) + tipAmount;

  document.getElementById("bill-result").innerHTML = `
          <p>Tip Amount: <strong>${tipAmount.toFixed(2)}</strong></p>
          <p>Total Bill with Tip: <strong>${totalAmount.toFixed(2)}</strong></p>
      `;
}
// Password Generator
function generatePassword() {
  var length = document.getElementById("password-length").value;
  var includeSymbols = document.getElementById("include-symbols").checked;
  var includeNumbers = document.getElementById("include-numbers").checked;
  var includeUppercase = document.getElementById("include-uppercase").checked;

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  var allCharacters = lowerCase;
  if (includeSymbols) allCharacters += symbols;
  if (includeNumbers) allCharacters += numbers;
  if (includeUppercase) allCharacters += upperCase;

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  document.getElementById("password-result").innerHTML = `
          <p>Generated Password: <strong>${password}</strong></p>
      `;
}
// 2D Distance Calculator
function calculate2DDistance() {
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;

  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById("2d-distance-result").innerHTML = `
          <p>Distance: <strong>${distance.toFixed(2)}</strong></p>
      `;
}

// 3D Distance Calculator
function calculate3DDistance() {
  var x1 = document.getElementById("x1-3d").value;
  var y1 = document.getElementById("y1-3d").value;
  var z1 = document.getElementById("z1-3d").value;
  var x2 = document.getElementById("x2-3d").value;
  var y2 = document.getElementById("y2-3d").value;
  var z2 = document.getElementById("z2-3d").value;

  var distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
  );

  document.getElementById("3d-distance-result").innerHTML = `
          <p>Distance: <strong>${distance.toFixed(2)}</strong></p>
      `;
}

// Equilateral Triangle Calculator
function calculateEquilateralTriangle() {
  var side = document.getElementById("side-equilateral").value;

  var area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
  var perimeter = 3 * side;

  document.getElementById("equilateral-triangle-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Perimeter: <strong>${perimeter.toFixed(2)}</strong></p>
      `;
}
// Isosceles Triangle Calculator
function calculateIsoscelesTriangle() {
  var base = document.getElementById("base-isosceles").value;
  var side = document.getElementById("side-isosceles").value;

  var height = Math.sqrt(Math.pow(side, 2) - Math.pow(base / 2, 2));
  var area = (base * height) / 2;
  var perimeter = 2 * side + base;

  document.getElementById("isosceles-triangle-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Perimeter: <strong>${perimeter.toFixed(2)}</strong></p>
      `;
}

// Right-Angled Triangle Calculator
function calculateRightAngledTriangle() {
  var base = document.getElementById("base-right").value;
  var height = document.getElementById("height-right").value;

  var area = (base * height) / 2;
  var hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));

  document.getElementById("right-angled-triangle-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Hypotenuse Length: <strong>${hypotenuse.toFixed(2)}</strong></p>
      `;
}
// Cube Calculator
function calculateCube() {
  var side = document.getElementById("side-cube").value;

  var volume = Math.pow(side, 3);
  var surfaceArea = 6 * Math.pow(side, 2);

  document.getElementById("cube-result").innerHTML = `
          <p>Volume: <strong>${volume.toFixed(2)}</strong></p>
          <p>Surface Area: <strong>${surfaceArea.toFixed(2)}</strong></p>
      `;
}
// Cone Calculator
function calculateCone() {
  var radius = document.getElementById("radius-cone").value;
  var height = document.getElementById("height-cone").value;

  var volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  var surfaceArea =
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));

  document.getElementById("cone-result").innerHTML = `
          <p>Volume: <strong>${volume.toFixed(2)}</strong></p>
          <p>Surface Area: <strong>${surfaceArea.toFixed(2)}</strong></p>
      `;
}
// Circle Calculator
function calculateCircle() {
  var radius = document.getElementById("radius-circle").value;

  var area = Math.PI * Math.pow(radius, 2);
  var circumference = 2 * Math.PI * radius;

  document.getElementById("circle-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Circumference: <strong>${circumference.toFixed(2)}</strong></p>
      `;
}
// Square Calculator
function calculateSquare() {
  var side = document.getElementById("side-square").value;

  var area = Math.pow(side, 2);
  var perimeter = 4 * side;

  document.getElementById("square-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Perimeter: <strong>${perimeter.toFixed(2)}</strong></p>
      `;
}

// Rectangle Calculator
function calculateRectangle() {
  var length = document.getElementById("length-rectangle").value;
  var width = document.getElementById("width-rectangle").value;

  var area = length * width;
  var perimeter = 2 * (length + width);

  document.getElementById("rectangle-result").innerHTML = `
          <p>Area: <strong>${area.toFixed(2)}</strong></p>
          <p>Perimeter: <strong>${perimeter.toFixed(2)}</strong></p>
      `;
}
// Sphere Calculator
function calculateSphere() {
  var radius = document.getElementById("radius-sphere").value;

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  var surfaceArea = 4 * Math.PI * Math.pow(radius, 2);

  document.getElementById("sphere-result").innerHTML = `
          <p>Volume: <strong>${volume.toFixed(2)}</strong></p>
          <p>Surface Area: <strong>${surfaceArea.toFixed(2)}</strong></p>
      `;
}
// Cylinder Calculator
function calculateCylinder() {
  var radius = document.getElementById("radius-cylinder").value;
  var height = document.getElementById("height-cylinder").value;

  var volume = Math.PI * Math.pow(radius, 2) * height;
  var surfaceArea = 2 * Math.PI * radius * (radius + height);

  document.getElementById("cylinder-result").innerHTML = `
          <p>Volume: <strong>${volume.toFixed(2)}</strong></p>
          <p>Surface Area: <strong>${surfaceArea.toFixed(2)}</strong></p>
      `;
}
// Complex Number Calculator
function calculateComplexNumber() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var imag1 = parseFloat(document.getElementById("imag1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var imag2 = parseFloat(document.getElementById("imag2").value);

  var addition = `${real1 + real2} + ${imag1 + imag2}i`;
  var subtraction = `${real1 - real2} + ${imag1 - imag2}i`;
  var multiplication = `${real1 * real2 - imag1 * imag2} + ${
    real1 * imag2 + imag1 * real2
  }i`;

  document.getElementById("complex-number-result").innerHTML = `
          <p>Addition: <strong>${addition}</strong></p>
          <p>Subtraction: <strong>${subtraction}</strong></p>
          <p>Multiplication: <strong>${multiplication}</strong></p>
      `;
}

// Boolean Algebra Simplifier
function simplifyBooleanExpression() {
  var expression = document.getElementById("boolean-expression").value;

  // Placeholder for boolean simplification logic
  var simplifiedExpression = expression; // Replace this with actual simplification logic

  document.getElementById("boolean-result").innerHTML = `
          <p>Simplified Expression: <strong>${simplifiedExpression}</strong></p>
      `;
}

// Partial Fraction Decomposer
function decomposePartialFraction() {
  var rationalFunction = document.getElementById("rational-function").value;

  // Placeholder for partial fraction decomposition logic
  var decomposition = rationalFunction; // Replace this with actual decomposition logic

  document.getElementById("partial-fraction-result").innerHTML = `
          <p>Decomposition: <strong>${decomposition}</strong></p>
      `;
}

// Inequality Calculator
function solveInequality() {
  var inequalityExpression = document.getElementById(
    "inequality-expression"
  ).value;

  // Placeholder for inequality solving logic
  var solutionSet = inequalityExpression; // Replace this with actual solving logic

  document.getElementById("inequality-result").innerHTML = `
          <p>Solution Set: <strong>${solutionSet}</strong></p>
      `;
}

// Flow Rate Calculator
function calculateFlowRate() {
  var diameter = document.getElementById("pipe-diameter").value;
  var velocity = document.getElementById("velocity").value;

  var radius = diameter / 2;
  var area = Math.PI * Math.pow(radius, 2);
  var flowRate = area * velocity;

  document.getElementById("flow-rate-result").innerHTML = `
          <p>Flow Rate: <strong>${flowRate.toFixed(2)}</strong></p>
      `;
}

// Impulse Calculator
function calculateImpulse() {
  var force = document.getElementById("force").value;
  var time = document.getElementById("time").value;

  var impulse = force * time;

  document.getElementById("impulse-result").innerHTML = `
          <p>Impulse: <strong>${impulse.toFixed(2)}</strong></p>
      `;
}

// Factorization Calculator
function calculateFactorization() {
  var integer = document.getElementById("integer").value;

  var factors = [];
  for (let i = 2; i <= integer; i++) {
    while (integer % i === 0) {
      factors.push(i);
      integer /= i;
    }
  }

  var uniqueFactors = [...new Set(factors)];
  var factorCount = uniqueFactors
    .map((factor) => {
      var count = factors.filter((f) => f === factor).length;
      return `${factor}^${count}`;
    })
    .join(" * ");

  document.getElementById("factorization-result").innerHTML = `
          <p>Prime Factorization: <strong>${factorCount}</strong></p>
      `;
}
// Percentage Calculator
function calculatePercentage() {
  var originalValue = document.getElementById("original-value").value;
  var percentageChange = document.getElementById("percentage-change").value;

  var newValue = originalValue * (1 + percentageChange / 100);

  document.getElementById("percentage-result").innerHTML = `
          <p>New Value: <strong>${newValue.toFixed(2)}</strong></p>
      `;
}
// Exponential Formulas Calculator
function calculateExponential() {
  var base = document.getElementById("base").value;
  var exponent = document.getElementById("exponent").value;

  var result = Math.pow(base, exponent);

  document.getElementById("exponential-result").innerHTML = `
          <p>Result: <strong>${result.toFixed(2)}</strong></p>
      `;
}
// Cube of a Number Calculator
function calculateCubeNumber() {
  var number = document.getElementById("cube-number").value;

  var cube = Math.pow(number, 3);

  document.getElementById("cube-number-result").innerHTML = `
          <p>Cube: <strong>${cube.toFixed(2)}</strong></p>
      `;
}
// Cube Root Calculator
function calculateCubeRoot() {
  var number = document.getElementById("cube-root-number").value;

  var cubeRoot = Math.cbrt(number);

  document.getElementById("cube-root-result").innerHTML = `
          <p>Cube Root: <strong>${cubeRoot.toFixed(2)}</strong></p>
      `;
}

// Scientific Calculator
let memory = 0;
const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function scientificCalculate(func) {
  const value = display.value;
  let result;

  if (func === "sqrt" || func === "log" || func === "ln") {
    // For sqrt, log, and ln, use the current display value
    result = performScientificCalculation(func, parseFloat(value));
  } else {
    // Append function to display for other scientific calculations
    display.value += func;
  }

  if (result !== undefined) {
    display.value = result.toFixed(4);
  }
}

function calculate(operation) {
  try {
    // Check for scientific functions first
    const scientificFuncs = ["sin", "cos", "tan", "cot", "sqrt", "log", "ln"];
    for (let func of scientificFuncs) {
      if (display.value.includes(func)) {
        const parts = display.value.split(func);
        const number = parseFloat(parts[1]);

        if (!isNaN(number)) {
          const result = performScientificCalculation(func, number);
          display.value = result.toFixed(4);
          return;
        }
      }
    }

    // Check for power operation
    if (display.value.includes("^")) {
      const parts = display.value.split("^");
      const base = parseFloat(parts[0]);
      const exponent = parseFloat(parts[1]);

      if (!isNaN(base) && !isNaN(exponent)) {
        display.value = Math.pow(base, exponent).toFixed(4);
        return;
      }
    }

    // Standard arithmetic evaluation
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function performScientificCalculation(func, value) {
  switch (func) {
    case "sin":
      return Math.sin(toRadians(value));
    case "cos":
      return Math.cos(toRadians(value));
    case "tan":
      return Math.tan(toRadians(value));
    case "cot":
      // Cotangent = 1 / tan(x)
      return 1 / Math.tan(toRadians(value));
    case "sqrt":
      return Math.sqrt(value);
    case "log":
      return Math.log10(value);
    case "ln":
      return Math.log(value);
    default:
      return value;
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function memoryStore() {
  memory = parseFloat(display.value);
}

function memoryRecall() {
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}
