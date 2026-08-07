//---> 1. What is Angular Form?
//          --> A Form is used to collect, validate and manage the user input fields.
//          --> For Example:
//              -> Login Form
//              -> Registration Form
//              -> Customer Details Form etc.
//
//---> Types of Forms
//          --> There are two types of Forms are there in Angular.
//              -> Template-Driven Forms
//              -> Reactive Forms: (These Forms are generally recommended for enterprise applications. 
//                                  Because it will reusable, scalable and Testable.)
//
//---> Template-Driven Forms:
//          --> In this forms most of the logic will implemented in HTML, typically using ngModel.
//          --> It's simple, and it will suitable for small applications.
//          --> Basically Use this:
//              -> Small Forms
//              -> Contact Forms
//              -> Simple Search Forms

//---> Reactive Forms: ** It's Very Important
//          --> Reactive Forms are code driven. Angular creates the Form Model in Type Script using classes such as:
//              --> Form Control
//              --> Form Group
//              --> Form Array
//              --> Validators
//          --> Reactive Forms are more scalable and testable.
//--------------------------------------------------------------

//--------------------------------------------------------------
//---> Template-Driven Interview Questions & Answer:
//--------------------------------------------------------------
//---> 1. What are the Template-Driven Forms in Angular?
//          --> Template-Driven Forms are forms, here most of the form logic will written in HTML template.
//          --> We can use the Angular Directives like ngModel, ngForm and validation attributes.
//          --> We can simple and easy to create this forms.
//              -> Login Forms, Search Forms, Contact Form.

//---> 2. When would we use Template-Driven Forms?
//          --> When we need simple forms and less input fields, and basic validation, and less coding required will use this.

//---> 3. Which module is required of Template-Driven Forms?
//          --> FormsModule it will import from @angular/forms.

//---> 4. Difference between Template-Driven & Reactive Forms?
//          --> Using Template-Driven will write full logic in HTML, but in Reactive Forms will write in typeScript.
//          --> Using Template-Driven will build simple forms, and for critical and large forms will use Reactive.
//          --> Easy to learn in template, but more powerful and more concepts in Reactive forms.
//          --> Use Forms Module will build Template forms, use ReactiveForms Module will build Reactive forms.
//          --> Less testing support in Template, Better testing support in Reactive

//---> 5. What is ngModule?
//          --> ngModule is one of directive, using this will perform two-way data binding.
//          --> using this we can syncUp both html and typescript file.
//          --> If component property value changes dynamically, the input field value also change using ngModel.

//---> 6. What is ngForm?
//          --> ngForm is automatically created by Angular. It will use in every form.
//          --> Using the ngForm we can track the
//                  -> Form Values
//                  -> Validation status
//                  -> Submitted state
//                  -> Touched Fields etc...

//---> 7. Can Template-Driven Forms handle complex Forms?
//          --> Yes, we can handle, but it's not recommended, because of the below reasons.
//          --> Due to this form becomes so larger.
//          --> Html becomes messy.
//          --> Validation becomes difficult
//          --> Testing becomes harder
//          So due to this For Large applications, Reactive forms are better.

//---> 8. What are the limitations of Template-Driven Forms?
//          --> Difficult for complex forms
//          --> Harder unit testing
//          --> Less control over validation
//          --> Unable to handle Dynamic forms
//          --> Business logic get mixed in HTML.
//--------------------------------------------------------------

//--------------------------------------------------------------
//---> Reactive-Forms Interview Questions & Answer:
//--------------------------------------------------------------
//---> 1. What are the Reactive-Forms?
//          --> Reactive forms are the forms, here we can written the logic in TypeScript file instead of HTML.
//          --> It will give better control
//          --> It will give better validation.
//          --> Testing the best way in reactive forms.
//          --> So Reactive forms are commonly used in large enterprise applications.

//---> 2. Why do you prefer Reactive-forms?
//          --> We can easily handle the complex forms in Reactive-Forms.
//          --> It will support custom validation.
//          --> We can easily perform the unit testing.
//          --> It will support dynamic form creation.
//          --> And better code organization in Reactive-Forms.
//      -> So Reactive Forms provide better control, scalability and maintainability for complex applications.

//---> 3. Which module will use for Reactive Forms?
//          --> We use the ReactiveFormsModule and will import this from @angular/forms.

//---> 4. What is FormControl?
//          --> FormControl represents a single form field. It will track value, validation and status.

//---> 5. What is FormGroup?
//          --> FormGroup means collection of formControls. Using FormGroup we can handle complete form.

//---> 6. What is FormBuilder?
//          --> FormBuilder is helper service to reduce boilerplate code while creating form.

//---> 7. Difference between setValue() and patchValue()?
//          --> Basically setValue is used for update all the fields.
//          --> All controls are mandatory, if any thing miss it will throw an error.
//          --> Using patchValue we can updates the selected fields.
//          --> controls are optional, there is no error.

//---> 8. 