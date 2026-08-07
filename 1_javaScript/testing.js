let a = {
        a:1,
        b:2,
        c:{
            d:2
        }
    }; 
    let b = a 
    b.a = 3 
    b.c.d = 3; 
    console.log(b.a) 
    console.log(a.a) 
    console.log(a.c.d)