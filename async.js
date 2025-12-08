setTimeout(() => {console.log("hello");
},2000);



console.log("hi")

//callback hell
//nested callback   

setTimeout(() => {console.log("hello");
    setTimeout(() => {console.log("1");
        setTimeout(() => {console.log("2");
            //return;
                
            setTimeout(() => {console.log("3");
                setTimeout(() => {console.log("4");
                    setTimeout(() => {console.log("5");
                        setTimeout(() => {console.log("6");
},2000);

},2000);

},2000);

},2000);

},2000);

},2000);

},2000);
