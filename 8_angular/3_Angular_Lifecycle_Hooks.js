// Phase 3. Angular Lifecycle Hooks

//     1. ngOnInit *:

//         --> ngOnInit is the Angular lifecycle hook. It will call once the component is created and after initialized all input properties.
//         --> Basically ngOnInit is using for:
//             --> API Calls
//             --> Load Data
//             --> Initialize business logic
//             --> Subscribe to observables
//             --> It will execute only once, when the component rendering.
//         --> When we load the initial data when rendered the component will use the ngOnInit, will call the api inside this.
//         --> And use this we can read the route parameter and load the corresponding data using api.

//         Questions:
//             1. Why do we use ngOnInit instead of Constructor?
//                 --> Constructor is mainly for dependency injection and object creation purpose will use.
//                 --> NgOnInit is designed for API calls, subscriptions and loading data.
            
//     2. ngOnChanges *
//     3. ngAfterViewInit
//     4. ngOnDestroy *