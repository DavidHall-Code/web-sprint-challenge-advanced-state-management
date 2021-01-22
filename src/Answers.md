1. What problem does the context API help solve?
    - Context is used to help solve a problem in react. That is being able to share state down in a component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Redux is known as a single source of truth because it is the only way to change the data within the UI. This can only be done by using
        redux actions, which in turn will change the state in the redux reducer.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is global and Component state is local. Application state lives in a "store" so any component in the app has access to it. 
        Component state lives inside the component and only that component has access to it.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk allows us to utilize logic going into action-creators to pull data from an API. This also includes a milldeware library
        that can return the inner function within an outer function

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    - I would have to go with Redux on this. I say that because Redux is very robust and I am able to keep the top of my tree
        component free of logic. With the use of reducer and action-creators they take care of all of the information so there is no need
        for prop passing