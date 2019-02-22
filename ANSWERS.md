1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are use to check what type of data is being passed around. It’s important to check our data in Javascript because it is an untyped language meaning that it does not make you define the type of a variable. PropType implementation is used to reduce and eliminate bugs which can arise as an application increases in complexity.

2. Describe a life-cycle event in React?

There are react lifecycle methods that are invoked when certain events happen in the lifecycle of a component. Some include, render, componentDidMount,componentDidUpdate. For example, when the render method is invoked, the UI gets rendered to the DOM. These “events” are used to change views as a function of state.

3. Explain the details of a Higher Order Component?

A higher Order Component is a function that receives a component as an argument. It return a component. HOC’s can be used to conditionally render a component based on some set of logic. For example, this week I implemented a HOC for the authentication of the instagram clone. The condition here was if the user had logged in before. HOC’s are usually used for higher level logic that can “branch” to different components.

4. What are three different ways to style components in React? Explain some of the benefits of each.

Three ways to style components in React: In CSS files that import into the component, Styled-components, React-strap. CSS files are good to separate the styling from the functionality. It’s hard to break your app if they are separate. Styled-components are good for adding functionality to your styling and sass support. React-strap can be good for speed because much of the styling is done for you.
