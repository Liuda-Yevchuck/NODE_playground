(async () => {
    const common = import('./types/common');
    const es = import('./types/esm'); // can't use require for es modules connection cuz they are async

    console.log(common, es);
}) ();

//self call function with imports of async modules
//import also can be used for common module types