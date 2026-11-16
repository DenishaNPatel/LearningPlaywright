import { BASE_URL as url_testutil, formatUpperCaseString } from "./testutils";
import { BASE_URL as url_util, formatTestName } from "./utils";
import log from "./logger"; //if not default export, import as obj, {obj}

console.log(url_testutil);
console.log(url_util);

let result=formatUpperCaseString("Pond");
console.log(result);

console.log(formatTestName("Login"));

log("Starting the test cases");