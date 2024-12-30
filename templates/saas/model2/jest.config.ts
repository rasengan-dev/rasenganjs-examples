import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // Use ts-jest preset
  testEnvironment: "jsdom", // Set the test environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Point to the setup file
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
  },
};

export default config;
