# ReaLLM Tests

This directory contains automated tests for ReaLLM's core functionality.

## Purpose

These tests verify the correctness of key logic used in the ReaLLM application, providing:
- **Reproducibility**: Demonstrates that core functions work as described
- **Regression Prevention**: Catches bugs when code changes
- **Documentation**: Shows expected behavior of functions

## What We Test

### Text Formatting (`formatText`)
- Markdown to HTML conversion (**bold**, *italic*)
- XSS prevention (HTML escaping)
- Line break handling

### Data Structures
- Message creation and validation
- Insight card data structures
- Role validation

### Parsing Logic
- Transparency insight parsing from API responses

## Running Tests

### Prerequisites
Install dependencies:
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Watch Mode (for development)
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

## Test Structure

- `utils.test.js` - Tests for utility functions in `src/utils.js`

## Note for Researchers

These tests validate the **logic patterns** used in the ReaLLM prototype. The main application code is in `index.html`, while `src/utils.js` contains extracted, testable versions of core functions for verification purposes.

This testing approach balances research prototype pragmatism with software engineering rigor.
