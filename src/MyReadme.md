### Containers are the divs or html elements to which we map our jsx elements.

## Components are basic building blocks of react application. They can be either function component or class component.

## Name of the component should start with a capital letter.

## Properties(props) are read only in react. Arguments passed to function component or properties to a class component cannot be changed.

## A class component in react inherits from React.Component to treat a class as component.

## To access props inside constructor pass the props inside the constructor and super constructor both.

## Classes will be used while:
        Managing state of components
        Adding life cycle methods to components.
        Need to write logic for event handlers.
    Otherwise in all cases functions can be used.


## State Lifting is used to make a callback from child to parent component.
    Requirements:
        call child component from parent component. create a property inside child component call and set it to function present in parent.
        call that property from child class from ex: onchange function(define this function called on onchange) inside the function called on onchange and pass the arguments required
        Handle this call above in a function in parent and do the needful inside.

## List or array can be mapped using map function . Use key to set an id and data to pass values.
        listelemens.map((emp)=> <div key={emp.id}><label>{emp.name}</label></div>);


## Lifecycle methods in react used inside component classes are called while components are mounted. We can API calls inside this.

### React Fragments are used when a parent html element is not need to render child elements <React.Fragment> or <>(empty tag) instead of <div>


### PureComponents do not get Rerendered while the parent component updates. It can also be done by returning False from shouldcomponenetupdate method in a regular component. Regular components return True byDefault.