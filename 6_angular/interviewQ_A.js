//---> 1. Q: How does [(ngModel)] update the variable automatically?
//      A: 1. The [(ngModel)] directive provide the two-way data binding. Internally angular combines the property binding and event binding.
//         2. When the use types the input value, angular capture the change from ngModel and update the variable automatically.
//  ---------------------------------------------------------------

//---> 2. How to create the custom event.. and how will use? How will bind those event.
//  ---------------------------------------------------------------

//---> 3. What is the Template Reference Variable? Why to use this?
//         1. Template variable is a variable, will declare this in the template using the # symbol.
//         2. It will provide the reference of the DOM element.
//         3. Components and directives refer this to get the access for the template properties and methods.
//         4. Mostly will use this on the button click and catch the properties values.
//         Ex:    
//            1. Using this in Button clicks
//            2. Using this we can access the selected property form the component.
//  ---------------------------------------------------------------

//---> 4. What is the @ViewChild? When to use? what is difference between @input and ViewChild?
//         1. @ViewChild is a decorator.
//         2. It will allows the parent component to access the child component, directive, or DOM elements directly.
//         3. Mainly use this when parents needs to invoke the methods or access properties of a child component.
//  
//         @Input Vs @ViewChild:
//         1. @Input is use to pass the data from parent to child will use this.
//         2. But ViewChild is use to access the child methods and properties.
//  ---------------------------------------------------------------

//---> 5. What is ngTemplate? When should we use this?
//         1. ngTemplate is used to define HTML content that should be displayed only when needed.
//         2. Angular does not render immediately, it renders based on a condition or when we explicitly use it.
//         3. Mainly use this for alternative loading messages, no data messages or reusable UI content.
//  ---------------------------------------------------------------

//---> 6. What is ngContainer? When should we use this?
//         1. ng-container is used to group multiple elements without creating an extra HTML element in the DOM.
//         2. Mainly use this ngIf and ngFor to keep clean and avoid unnecessary div tags.
//         3. For example, if I want to apply a condition to multiple components or HTML elements,
//            I wrap them inside  an ng-container instead of creating extra div.
//  ---------------------------------------------------------------

//---> 7. What is ng-content? When should we use this? Why use this?
//         1. ng-content is used to pass the content from parent component to child component.
//         2. Mainly use this when we need reuseable components such as cards, panels and dialogs.
//         3. ng-content helps reuse the same layout with different content.

//---> 8. Difference between @Input & ng-content?
//         @Input: Pass Data from parent to child, like strings, numbers, or objects
//         @ng-content: Pass the html content from parent to child.
//  ---------------------------------------------------------------

//---> 9. ContentChild()?
//         1. ContentChild is used inside the child component.
//         2. To access the content that is passed from the parent using ng-content.
//  ---------------------------------------------------------------

// @Input
// → Pass Data

// ng-content
// → Pass HTML Content

// ContentChild
// → Access HTML Content

// ViewChild
// → Access Own Template