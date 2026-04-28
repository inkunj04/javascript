const student = {
  fullName: "Kunj Mehta",
  marks: 85,
  printMarks: function () {
    console.log(this.marks); // this.marks means we're talking about student object student.marks
  },
};

const employee = {
  CalcTax() {
    // fucntion to calculate tax
    console.log("Tax rate is 10%");
  },
};

const karanArjun = {
  salary: 500000,
};

karanArjun.__proto__ = employee; // karanArjun inherits from employee

karanArjun.CalcTax(); // karanArjun can use CalcTax method from employee
karanArjun2.CalcTax(); // karanArjun2 can also use CalcTax method from employee

class ToyotaCar {
  start() {
    console.log("Car is starting...");
  }
  stop() {
    console.log("Car is stopping...");
  }
}
