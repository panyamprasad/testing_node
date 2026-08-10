//---> Phase 2. Custom Property Binding:
//      1. Custom property binding is used to transfer the data from parent component to child component. 
//      2. The parent binds the value using[property], and the child using the @input() decorator.
//      3. For example if we have the E - commerce application, we get the product list from API.
//      4. Now we show the data in product - list component.
//      5. Then we have another component like product - card component, we have to show the product details here.
//      6. So Instead of duplicate the same code here, we can use the custom property binding, we can pass the product details here.
//      Ex: Product Cards, Employee cards, User profiles, Order details and Dashboard Widgets.

// There are different types of component communications will be there, based on our requirement will use it.
//      1. Parent-- -> Child
//      2. Child-- -> Parent
//      3. Sibling-- -> Sibling
//      4. Unrelated Components

// @Input:
//      1. Parent-- -> Child: One component to Another component.
//         --> Here will use the @Input() decorator and process the data from parent to child.
//         --> For example we have the User details page & User Card component, 
//         --> We want to pass the data from user details to user card, using  the @Input will get the data from parent to child.

// @Output
//      2. Child-- -> Parent: One component to Another component.
//         --> Here will use the @Output() and EventEmitter will communicate child to parent.
//         --> For example from child component will click the delete button, 
//         --> Using the eventEmitter will pass the event from child to parent.In parent will process the request and delete the data.

// @ViewChild Or services
//      3. Sibling-- -> Sibling: Sibling means one parent component multiple child components. 
//         --> Sibling components cannot communicate directly in Angular.
//         --> We typically use a shared service with RxJS Behavior Subject.
//         --> The one sibling component sends the data to the service, and the other component subscribe to the service and receive the data.
//         --> For example: When product is added in the product list component, the Cart component automatically update using shared service.

//      4. Unrelated Components
//       ---> Unrelated component means there is no Parent - Child relation and no Sibling relation.Both components are completely independent.
//          --> For Example: Login Component-- NavBar Component-- Profile Component
//          --> When ever user login to the account using the used data, after user authentication.
//          --> Login component store the user details in a shared service using Behavior subject.
//          --> After this NavBar and Profile component subscribe to that, and automatically receive updates whenever user data changes.

//       ---> Interview Answer:
//          --> Unrelated components are components, that do not have any Parent - child and Sibling relationship.
//          --> In Angular generally use a shared service with BehaviorSubject for communication.
//          --> For Example in an e - commerce application when we add the product in cart from product component.
//          --> Both header & cart components are receive the data and update the information through the Shared Service.
//          --> This approach keeps components loosely coupled and supports reactive updates.

// @ViewChild:
//      ---> ViewChild is used to when a parent component needs direct access to a child component.
//          --> And DOM elements access, directive.
//          --> Practically will use this open and close the reusable model dialogs.
//          --> After saving the data to reset the forms will use ViewChild decorator.And focus on input fields automatically.
//          --> ViewChild is used when the parent needs to invoke methods or properties on the child component.

// Common Uses:
//         --> @Input()
//             -----------
//             Pass Data

//         --> @Output()
//             -----------
//             Send Events

//         --> @ViewChild()
//             -----------
//             Access Child Directly
//            -> Common Uses:
//              ✓ Open Modal
//              ✓ Close Modal
//              ✓ Reset Form
//              ✓ Refresh Grid
//              ✓ Focus Input
//              ✓ Access DOM Element