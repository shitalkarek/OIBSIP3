var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){

    // console.log("cel changed");

    let c = this.value;   //value stored.
    
    let f = (c * 9/5) + 32;   //value of c will be store in f.


   

    fah.value = f;  //f values stored in fah.



});

fah.addEventListener('input',function(){

    // console.log("fah changed");

    let f = this.value;

    let c = (f-32) * 5/9;

    

    cel.value = c; 



});


































// if(!Number.isInteger(c)) {
    //     c = c.tofixed(4);
    // }