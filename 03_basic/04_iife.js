// Immediately Invoked Function Expressions (IIFE)

(function code(){
    //named iife
    console.log("DB Connected");
}
)();

((name)=>{ //unnamed iife
    console.log(`DB2 Connected ${name}`);
})('Arman');