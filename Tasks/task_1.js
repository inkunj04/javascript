
// Problem
// You are given system logs. Analyze and summarize them.
// Dataset
// const logs = [
// “INFO: Login successful”,
// “ERROR: Invalid password”,
// “INFO: Dashboard loaded”,
// “ERROR: Timeout”,
// “INFO: Logout successful”,
// “ERROR: Network failure”,
// “INFO: Profile updated”,
// “ERROR: Unauthorized access”,
// “INFO: Settings saved”,
// “ERROR: Server not responding”,
// “INFO: Payment successful”,
// “ERROR: Payment failed”,
// “INFO: Session started”,
// “ERROR: Session expired”,
// “INFO: Data synced”
// ];
// Requirements
// ● Count total INFO logs
// ● Count total ERROR logs
// ● Extract all ERROR messages

const logs = [
  "INFO: Login successful",
  "ERROR: Invalid password",
  "INFO: Dashboard loaded",
  "ERROR: Timeout",
  "INFO: Logout successful",
  "ERROR: Network failure",
    "INFO: Profile updated",
    "ERROR: Unauthorized access",
    "INFO: Settings saved",
    "ERROR: Server not responding",
    "INFO: Payment successful",
    "ERROR: Payment failed",
    "INFO: Session started",
    "ERROR: Session expired",
    "INFO: Data synced"
];

let infoCount=0;
let errorCount=0;
let errorMessages=[];

logs.forEach(log => {
  if (log.startsWith("INFO")) {
    infoCount++;
  } else if (log.startsWith("ERROR")) {
    errorCount++;
    errorMessages.push(log);
  }
}       
);

console.log("Total INFO logs:", infoCount);
console.log("Total ERROR logs:",errorCount);
console.log("ERROR messages:",errorMessages);
errorMessages.forEach(message => console.log(message));



