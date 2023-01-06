# Test-Data-Seed-Plugin

<p align="center">
  <img src="banner.png" alt="image alt text">
</p>

![GitHub last commit](https://img.shields.io/github/last-commit/chanjunren/test-data-seed-plugin)
![Commit Activity](https://img.shields.io/github/last-commit/chanjunren/test-data-seed-plugin)

--- 

## Setup
```
// Not sure if necessary
npx mrm@2 lint-staged

yarn install
```

## Motivation
Creating CSV files while testing 

## Idea
- Browser plugin that intercept requests
- Parses request parameters for GET requests, and RequestBody for POST requests into CSV files
- Use generated CSV files for automated API testing

## Planned Features
- Specify endpoint to capture
  - Save requestParams for GET, requestBody for POST
  - Save corresponding Response
  - Upon reply from server, create prompt to input description of current test case
- Display recorded test cases 
- Clear recorded test cases
- Export recorded test cases 
- Add additional headers 
  - For Android / IOS build version

| Unfortunately, unable to get ResponseBody because this information can only be received
| through the `devtools` API, which is not available for non - devtool plugins
## Other features

## References
- https://developer.chrome.com/docs/extensions/mv3/getstarted/
- https://parceljs.org/recipes/web-extension/
- https://prettier.io/docs/en/index.html
- https://eslint.org/docs/latest/user-guide/getting-started

## Contributions 
- Japan icon created by Freepik - Flaticon
