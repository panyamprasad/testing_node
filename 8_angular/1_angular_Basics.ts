//     1. Project Structure
//     2. Components
//     3. Data Binding
//          Data binding is a mechanism for connecting the typeScript code and the HTML template in angular.
//          It allows data to flow between the component to HTML automatically.
//          With Data Binding: Angular automatically updates the UI whenever the component data changes.
//          Data Binding achieve in two ways: One-way Binding and Two-way Binding.
//          One-way Binding: Data flows in one direction, from the component to HTML template or Html to component.
//          Two-way Binding: Data flows in both directions, from the component to HTML template and HTML to Component. Both should stay in sync.
//          
//          Again One-way binding can achieve in two ways: String Interpolation and Property Binding.

//          a. Interpolation{{}}
//              1. Using this we can display the data from the component to HTML template. Using the {{}} syntax.
//              2. It is One-way Binding.
//          b. Property Binding []
//              1. Using this we can bind the component property to an HTML element.
//              2. Basically both string Interpolation and Property binding are used to achieve one-way binding to display the component element property value in the HTML. 
//              3. But Property binding is used in Disabled input field, Image src, Hidden input filed etc. In these cases we can't use string Interpolation.
//              2. It is One-way Binding.
//          c. Event Binding ( )
//              1. Using this we can bind the HTML element event to a component method.
//              2. Basically it is used like click event, change event, mouseover event etc.
//          d. Two-way Binding [(ngModel)]
//              1. It is combination of Property binding and Event binding. Using the ngModel directive we can achieve two-way binding.
//              1. Using this both component and View should stay in sync.
//              2. It is used in forms to bind the input field value to the component property value. Both should stay in sync.
//              3. If Component property value changes dynamically, the input field value should also change.
//   ---------------------------------------------

//     4. Directives: 
//         1. Directives are classes used to manipulate the DOM elements I mean modify the behavior, appearance, or structure. 
//         2. It is a class with @Directive decorator. There are three types of directives in angular:
//            a. Component Directives: 
//                  1. Each and every component is a directive.
//                  2. Basically using this to create a component.
//                  3. It contains a template, style and behavior. It is used to create a UI element.

//            b. Structural Directives: 
//                  1. It is used to change the structure of the DOM elements. 
//                  2. It can add or remove the DOM elements dynamically.
//                  3. There are three different types of structural directives in angular:
//                      a. *ngIf: It is used to add or remove the DOM elements from the webpage based on the condition.
//                      b. *ngFor: It is used to iterate an array and show the elements dynamically. Is is used to create a list of items.
//                      c. *ngSwitch:

//            c. Attribute Directives: 
//                  1. It is used to change the appearance or behavior of the DOM elements. 
//                  2. It can change the style, class, or attribute of the DOM elements dynamically.
//                  3. There are three different types of attribute directives in angular:
//                      a. ngClass: 
//                          1. It is attribute directive, it will changes the look or behavior of the HTML element. 
//                          2. Used this we can set a CSS class dynamically on an HTML element based on typeScript expression.
//                      b. ngStyle: 
//                          1. ngStyle directive is used to set a css style dynamically on the HTML element based on the TS expression.
//                          2. ngStyle is the Attribute directive, it will change the look and behavior of an HTML element.
//                          3. Used this we can set many inline styles of an HTML element based on expression.
//                      c. ngModel: It is also attribute directive, used this we can add or remove css classes to HTML element dynamically, based on typeScript expression.                  
//   ---------------------------------------------

// Different types of selectors in angular component are:
//     1. Element Selector
//     2. Attribute Selector
//     3. Class Selector
//     4. Comment Selector

//  ------------------------------

// 4. Custom Property Binding:
//          1. Custom property binding is used to transfer the data from parent component to child component. 
//          2. The parent binds the value using [property], and the child using the @input() decorator.
//          3. For example if we have the E-commerce application, we get the product list from API.
//          4. Now we show the data in product-list component.
//          5. Then we have another component like product-card component, we have to show the product details here.
//          6. So Instead of duplicate the same code here, we can use the custom property binding, we can pass the product details here.
//          Ex: Product Cards, Employee cards, User profiles, Order details and Dashboard Widgets.

// There are different types of component communications will be there, based on our requirement will use it.
//     1. Parent ---> Child
//     2. Child ---> Parent
//     3. Sibling ---> Sibling
//     4. Unrelated Components
//
//     1. Parent ---> Child: One component to Another component.
//      --> Here will use the @Input() decorator and process the data from parent to child.
//      --> For example we have the User details page & User Card component, we want to pass the data from user details to user card, using the @Input will get the data from parent to child.

//     2. Child ---> Parent: One component to Another component.
//      --> Here will use the @Output() and EventEmitter will communicate child to parent.
//      --> For example from child component will click the delete button, using the eventEmitter will pass the event from child to parent. In parent will process the request and delete the data.

//     3. Sibling ---> Sibling: Sibling means one parent component multiple child components. 
//      --> Sibling components cannot communicate directly in Angular.
//      --> We typically use a shared service with RxJS Behavior Subject.
//      --> The one sibling component sends the data to the service, and the other service subscribe to the service and receive the data.
//      --> For example: When product is added in the product list component, the Cart component automatically update using shared service.

//     4. Unrelated Components ---> Unrelated component means there is no Parent-Child relation and no Sibling relation. Both components are completely independent.
//      --> For Example: Login Component -- NavBar Component -- Profile Component
//      --> When ever user login to the account using the used data, after user authentication.
//      --> Login component store the user details in a shared service using Behavior subject.
//      --> After this NavBar and Profile component subscribe to that, and automatically receive updates whenever user data changes.
//      --> Interview Answer:
//          --> Unrelated components are components, that do not have any Parent-child and Sibling relationship.
//          --> In Angular generally use a shared service with BehaviorSubject for communication.
//          --> For Example in an e-commerce application when we add the product in cart from product component.
//          --> Both header & cart components are receive the data and update the information through the Shared Service.
//          --> This approach keeps components loosely coupled and supports reactive updates.
//  -----------------------------------

// Angular Lifecycle Hooks
//     1. ngOnInit *
//      --> ngOnInit is the Angular lifecycle hook. It will call once the component is created and after initialized all input properties.
//      --> Basically ngOnInit is using for:
//              --> API Calls
//              --> Load Data
//              --> Initialize business logic
//              --> Subscribe to observables
//              --> It will execute only once, when the component rendering.
//      --> When we load the initial data when rendered the component will use the ngOnInit, will call the api inside this.
//      --> And use this we can read the route parameter and load the corresponding data using api.

// Questions:
//     1. Why do we use ngOnInit instead of Constructor?
//          --> Constructor is mainly for dependency injection and object creation purpose will use.
//          --> NgOnInit is designed for API calls, subscriptions and loading data.
//     2. ngOnChanges *
//     3. ngAfterViewInit
//     4. ngOnDestroy *
//  ------------------------------

// Pipes
//     1. Build In Pipes
//     2. Custom Pipes
//  ------------------------------
