## CHOICES MADE

## React + TypeScript + Vite
Vite uses the esbuild bundler, which is much faster than the Webpack used in CRA. It owes its speed to the fact that it is written in Go
— a fast, multithreaded language compiled to machine code,
unlike Webpack, written using JavaScript, which is interpreted and single-threaded, which in turn makes it slower.

## MSW
I used MSW to mock the API calls. It is a tool to mock API calls and test the application without the need of a real server.

## VITEST
I used VITEST to test the application. It is a tool to test the application in a Vite environment.


# Assignment

Please create a page that contains an input field.
When the user enters _at least_ three characters into this input field,
you should display all flight information from the `flights.json` file where the destination airport matches the entered input.
Limit the search result to a maximum of 5 flights.

Please implement it using React. Try to keep it simple.

We think 4 hours should be enough to spend on this assignment.
Please don't spend more than that unless you're having fun and want to show off :)

## Requirements:

- Use React. Create your app with React but try to limit the use of third party UI libraries.
- Use Typescript. Make sure your app is typed correctly.
- Make it look nice. Make use of the provided colors. How you want to implement them is entirely your choice ;)
- Your application should treat the contents of `flights.json` as the output of an API endpoint.
  It should load this asynchronously using XHR or Fetch API and should not require a page reload when the user changes their input.
- Make sure the results are sortable. The filtered flight data should be sortable on date and (expected) time. Initial expected sorting is early to late.

## Submission:

- Create a clone of this repository locally.
  Then push it to **your GitHub account** and continue working from there.
  Once you have finished, please send us the URL of the repository you have created.

### Some things to consider:

- We like DRY and KISS
- We like tested code
- We like readable code
- We like using the latest features of ES6 where applicable
- Last but not least, have fun!




