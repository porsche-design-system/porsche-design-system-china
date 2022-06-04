#### Some definitions:

* Fired events(have more api)

* User events（have more event types）
a fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.

Whenever possible, use userEvent over fireEvent when using React Testing Library. At the time of writing this, userEvent doesn't include all the features of fireEvent, however, this may change in the future.



REACT TESTING LIBRARY: CALLBACK HANDLERS


Anyway, React Testing Library <u>encourages you to test your React components not too much in isolation, but in integration (integration test) with other components. Only this way you can actually test whether state changes were applied in the DOM and whether side-effects took effect</u>.


* RTL: ASYNCHRONOUS / ASYNC
Before we render the App component, we make sure that the API gets mocked. In our case, axios' return value from its get method gets mocked. However, if you are using another library or the browser's native fetch API for data fetching, you would have to mock these.

After mocking the API and rendering the component, we use the userEvent API to click to the button which leads us to the API request. Since the request is asynchronous, we have to wait for the component to update. As before, we are using RTL's findBy search variant to wait for element(s) which appear eventually.

we can also mock the api error:
```
axios.get.mockImplementationOnce(() =>
    Promise.reject(new Error())
);
```







please see details :

1. test intro
2. test events & async update




























