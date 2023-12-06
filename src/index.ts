import { getInput, setFailed } from "@actions/core";

try {
  const testSuiteId = getInput("test-suite-id");
  const path = getInput("path");
  console.log(`Send output from ${path} to test suite ${testSuiteId}`);
} catch (error) {
  setFailed((error as Error).message);
}
