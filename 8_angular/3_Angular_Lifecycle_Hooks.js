//---> Phase 3. Angular Lifecycle Hooks

//---> 1. What are Lifecycle Hooks? Why do we use Lifecycle Hooks?
//        --> Lifecycle hooks are the different types of methods, those provided by Angular.
//        --> These are work to execute our code in different stages in component life cycle.
//        --> Difference tasks need to execute difference time so will use different hooks (methods).
//        --> 1. Load data when page open.
//        --> 2. React when input changes.
//        --> 3. Access HTML elements after page loads.
//        --> 4. CleanUp subscriptions before leaving page.

//     1. ngOnInit *:
//        --> ngOnInit is the Angular lifecycle hook. 
//        --> It will execute once after Angular Initializes the component and it's input properties.
//        --> It mainly used for component initialization tasks like
//            --> API Calls
//            --> Loading data from services
//            --> Setting default values, and preparing the business logic required for the component
//            --> Since It runs only once, when the component rendering.
//            --> So it is preferred place for initialization code, instead of constructor.

//         Follow-up Interview Question
//         Interviewer: Why do you use ngOnInit instead of the constructor for API calls?
//            --> Constructor is mainly using for dependency injection and object creation. 
//            --> So in this stage Angular not fully initialized component.
//            --> NgOnInit is called after component initialized.
//            --> So Using this we can do API calls, data load and other thinks.
// ---------------------------------------------------------

//     2. ngOnChanges *
//        --> ngOnChanges() is one of the Angular Lifecycle Hooks.
//        --> It executes whenever an @Input() property receives a new value from the parent component.
//        --> It is used to detect changes in input properties and perform actions based on those changes.
//        --> It can execute multiple times during the component lifecycle (unlike ngOnInit, which executes only once).
//        --> It is commonly used to reload data, apply filters, update UI information, or perform calculations whenever the incoming input value changes.
// ---------------------------------------------------------
git c
//     3. ngAfterViewInit
//     4. ngOnDestroy *
// ---------------------------------------------------------

// solpa solpa baratha...


