// 1. Project Structure

// 2. Components

// 3. Data Binding
//     - Data binding is a mechanism for connecting the typeScript code and the HTML template in angular.
//     - It allows data to flow between the component to HTML automatically.
//     - With Data Binding: Angular automatically updates the UI whenever the component data changes.
//     - Data Binding achieve in two ways: One-way Binding and Two-way Binding.
//     - One-way Binding: Data flows in one direction, from the component to HTML template or Html to component.
//     - Two-way Binding: Data flows in both directions, from the component to HTML template and HTML to Component. Both should stay in sync.
          
//     Again One-way binding can achieve in two ways: String Interpolation and Property Binding.

//         a. Interpolation{{}}
//             1. Using this we can display the data from the component to HTML template. Using the {{}} syntax.
//             2. It is One-way Binding.

//         b. Property Binding []
//             1. Using this we can bind the component property to an HTML element.
//             2. Basically both string Interpolation and Property binding are used to achieve one-way binding to display the component element property value in the HTML. 
//             3. But Property binding is used in Disabled input field, Image src, Hidden input filed etc. In these cases we can't use string Interpolation.
//             4. It is One-way Binding.

//         c. Event Binding ( )
//             1. Using this we can bind the HTML element event to a component method.
//             2. Basically it is used like click event, change event, mouseover event etc.

//         d. Two-way Binding [(ngModel)]
//             1. It is combination of Property binding and Event binding. Using the ngModel directive we can achieve two-way binding.
//             1. Using this both component and View should stay in sync.
//             2. It is used in forms to bind the input field value to the component property value. Both should stay in sync.
//             3. If Component property value changes dynamically, the input field value should also change.

// 4. Directives: 
//     1. Directives are classes used to manipulate the DOM elements I mean modify the behavior, appearance, or structure. 
//     2. It is a class with @Directive decorator. There are three types of directives in angular:
//     a. Component Directives: 
//             1. Each and every component is a directive.
//             2. Basically using this to create a component.
//             3. It contains a template, style and behavior. It is used to create a UI element.

//     b. Structural Directives: 
//             1. It is used to change the structure of the DOM elements. 
//             2. It can add or remove the DOM elements dynamically.
//             3. There are three different types of structural directives in angular:
//                 a. *ngIf: It is used to add or remove the DOM elements from the webpage based on the condition.
//                 b. *ngFor: It is used to iterate an array and show the elements dynamically.It is used to create a list of items.
//                 c. *ngSwitch:

//     c. Attribute Directives: 
//             1. It is used to change the appearance or behavior of the DOM elements. 
//             2. It can change the style, class, or attribute of the DOM elements dynamically.
//             3. There are three different types of attribute directives in angular:
//                 a. ngClass: 
//                     1. It is attribute directive, it will changes the look or behavior of the HTML element. 
//                     2. Used this we can set a CSS class dynamically on an HTML element based on typeScript expression.
//                 b. ngStyle: 
//                     1. ngStyle directive is used to set a css style dynamically on the HTML element based on the TS expression.
//                     2. ngStyle is the Attribute directive, it will change the look and behavior of an HTML element.
//                     3. Used this we can set many inline styles of an HTML element based on expression.
//             c. ngModel: It is also attribute directive, used this we can add or remove css classes to HTML element dynamically, based on typeScript expression.         