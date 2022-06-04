
#### Some definitions:
* test runner

* test suite
* test case
* assertions
* valid / invalid
* spies
* mocks
* stubs, etc.

#### Development flow:
0.all tests must come with a spec.js suffix
1.run development
2.run test:watch mean while

[**Jest**](https://www.jestjs.cn/docs/getting-started) is a test runner, which gives you the ability to run tests with Jest from the command line. 
In addition, Jest offers you functions for test suites, test cases, and assertions. 

React Testing Library(RTL)([**@testing-library/react**](https://github.com/testing-library/react-testing-library)), in contrast to Jest, is one of the testing libraries to test React components.

Test types:
* Snapshot Test
* Unit/Integration test
* Plane function logic test 

* Component test [Use React Testing Library](https://www.robinwieruch.de/react-testing-library)


Shell:
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press u to update failing snapshots.
 #accept the "failed" test as being valid, then store it as new 
 
 › Press i to update failing snapshots interactively.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

Examples of RTL:

* RENDERING A COMPONENT:
**/Users/rockwang/develop/spike/test/first/src/App.js**
* SELECTING ELEMENTS (**getByText**):
select elements with RTL's screen object's functions.
**/Users/rockwang/develop/spike/test/first/src/App.spec.js**

* SEARCH TYPES (**getByRole**):
**/Users/rockwang/develop/spike/test/first/src/App-Role.spec.js**

* Others:
1. LabelText: getByLabelText: <label for="search" />
2. PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
3. AltText: getByAltText: <img alt="profile" />
4. DisplayValue: getByDisplayValue: <input value="JavaScript" />

* SEARCH VARIANTS: getBy, queryBy and findBy
queryBy with all its search types:
1. queryByText
2. queryByRole
3. queryByLabelText
4. queryByPlaceholderText
5. queryByAltText
6. queryByDisplayValue

And findBy with all its search types:
1. findByText
2. findByRole
3. findByLabelText
4. findByPlaceholderText
5. findByAltText
6. findByDisplayValue

Diff from getBy & queryBy:
getBy throws an error before we can make the assertion. In order to assert elements which aren't there, we can exchange getBy with queryBy.

**Questions:**
When to use findby?
For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. If you assert for a missing element, use queryBy. Otherwise default to getBy.


* Assertive Functions for multiple elements

[jest-dom](https://github.com/testing-library/jest-dom)has some assertive functions:










Refer:
[How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library)

[How to test React with Jest](https://www.robinwieruch.de/react-testing-jest)

[How to shallow render Jest Snapshot Tests](https://www.robinwieruch.de/jest-snapshot-shallow-render)
[How to Jest Snapshot Test the Difference](https://www.robinwieruch.de/jest-snapshot-test-difference)
[How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test)








