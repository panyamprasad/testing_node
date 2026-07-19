//---> Pipes: Pipes means formatter
//          --> Using Pipes we can transform or format the data in angular templates without changing original value.
//          --> There are different types of Pipes are there in Angular.
//          --> UpperCase
//          --> LowerCase
//          --> TitleCasePipe
//          --> DatePipe
//          --> CurrencyPipe
//          --> PercentPipe
//          --> NumberPipe
//          --> jsonPipe
//          --> AsyncPipe
//          --> Syntax of Pipe is {{ firstName | pipeName }}
// ------------------------------------------

//---> JSON Pipe:
//          --> JSON pipe mostly will use for debugging purpose.
//          --> When data comes from it will come of complex structure.
//          --> JSON Pipe helps us display the complete data structure in the UI.
//          --> Without this will get data like Object Object. If we need Json format will use JSON Pipe.
// ------------------------------------------

//---> Async Pipe:
//          --> Async pipe is in-build Angular pipe. 
//          --> It will automatically subscribe, get data, UI updates and Unsubscribe whenever new data arrives.
//          --> And it automatically unSubscribe when the component destroyed.
//          
//---> Why we need Async Pipe?
//          --> Without Async when api call happens everything should do manually.
//          --> Like Subscribe and unsubscribe.
//          --> If we use the Async we don't need to handle these all, automatically Angular should takeover of this.
//          --> Ex; WithOut Async:
users: any[] = [];
ngOnInit(){
    this.userService.getUsers().subscribe(
        data => {
            this.users = data;
        });
}
//          --> Here angular creates the subscription. When component is destroyed.
//          --> Angular will not automatically clear it. Should we clear it manually. This can be messy.

//          --> With Async:
//          --> With Async we don't need to create these all things. In the component will call the getUsers() methods like below.
users$ = this.userService.getUsers();
//          --> In HTML will call like below:
<div * ngFor="let user of (users$ | async)" >
    {{ user.name }}
</div >
//          --> That's all ✅
//          --> No subscribe()
//          --> No unsubscribe()
//          --> Angular handles everything automatically.
//
//---> What does $ mean in Angular?
//          --> $ is a Naming convention used to indicate a variable.
//          --> Variable contains Observable, it not a angular Keyword.
// ------------------------------------------

//---> What is Custom Pipe? When to Use? Why to Use?
//          --> Custom Pipe is created by developer, when angular in built pipes are not satisfy the business requirements.
//          --> For example if we got the API response in true, we want to show it as active that time will create custom Pipe.
// ------------------------------------------

//---> Pure vs Impure Pipes ⭐ Interview Favorite
//          --> Pure Pipe runs only when the input value/reference changes, 
//          --> While Impure Pipe runs on every Angular change detection cycle. 
//          --> Pure Pipes are faster and recommended for most scenarios. [dev.to], [medium.com]



