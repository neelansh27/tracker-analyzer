# Tracker Analyzer

**Tracker Analyzer** is a command-line tool that helps you analyze trackers and fingerprinting scripts on websites. It detects third-party requests and identifies various trackers such as analytics, advertising, and social media integrations, providing insight into how websites are tracking user behavior.

## Features

* Detects known tracking domains (e.g., Google Analytics, Facebook Pixel).
* Identifies third-party requests made by websites.
* Provides a fingerprinting pattern analysis for detecting browser fingerprinting scripts.
* Simple command-line interface for easy use.

## Installation

### Prerequisites

* **Node.js** (v12 or higher) must be installed on your system.
* **npm** (comes with Node.js) to install dependencies.

### Steps to install

1. Clone the repository:

   ```bash
   git clone https://github.com/neelansh27/tracker-analyzer.git
   ```

2. Navigate into the project directory:

   ```bash
   cd tracker-analyzer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. (Optional) Link the CLI tool globally for easy access:

   ```bash
   npm link
   ```

   This will allow you to run the tool as a global command from anywhere.

## Usage

### Running the Tool

To use the tool, simply run the following command, passing the URL of the website you want to analyze:

```bash
tracker-analyzer <website-url>
```

Example:

```bash
tracker-analyzer https://web.dev
```

This will fetch the website, analyze its third-party requests, and print the results to the console, including any detected trackers and fingerprinting patterns.

### Arguments

* `<website-url>`: The URL of the website you wish to analyze (e.g., `https://example.com`).
