// 1. Q: How does [(ngModel)] update the variable automatically?
// A: 1. The [(ngModel)] directive provide the two-way data binding. Internally angular combines the property binding and event binding.
//    2. When the use types the input value, angular capture the change from ngModel and update the variable automatically.