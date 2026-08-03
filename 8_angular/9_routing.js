//---> What is Routing?
//      -> Angular Routing is used to Navigate between the components without reload the full page.
//      -> In small applications we can maintain routes in app.route.ts file.
//      -> But coming to the large or enterprise applications we have the more features.
//      -> So it will complex and unable to handle the all features in single routing file.
//      -> So we create separate routing file in each feature (Employee, Reports, Admin, Settings etc).
//      -> And will use lazy loading to maintain the performance.
//  --------------------------------------------------

//---> Why do we use Lazy loading in Angular?
//      -> Lazy loading helps improve application performance by loading feature modules.
//      -> These modules only when the user navigates to them.
//      -> Instead of loading all modules at once, based on navigation it will load, it will call lazy loading.
//  --------------------------------------------------

//---> What is Auth Module? Why use Auth Module?
//      -> Auth module is feature module, it contains authentication related components, routes, services and guards.
//      -> It improves code organization, maintainability, scalability and it will support lazy loading.
//      -> Uses:
//          -> Better organization
//          -> Routing
//          -> Support lazy loading
//          -> Team-friendly development
//  --------------------------------------------------

// After Basic Routing + Auth Module + Lazy Loading, learn:
//     1. router.navigate()
//     2. Route Parameters (:id)
//     3. Child Routes
//     4. Route Guards
//     5. Resolver
//     6. Reactive Forms

//---> Final Enterprise Structure
// │
// ├── core
// │   ├── guards
// │   ├── interceptors
// │   └── services
// │
// ├── shared
// │   ├── components
// │   ├── pipes
// │   └── directives
// │
// ├── features
// │   ├── auth
// │   ├── dashboard
// │   ├── employees
// │   ├── departments
// │   └── reports
// │
// └── app-routing.module.ts

// Under Auth I have like file structure
// auth
//  │
//  ├── login
//  ├── signup
//  ├── forgot-password
//  ├── reset-password
//  ├── change-password
//  │
//  ├── auth-routing.module.ts
//  ├── auth.module.ts
//  │
//  ├── services
//  │     └── auth.service.ts
//  │
//  └── guards
//        └── auth.guard.ts