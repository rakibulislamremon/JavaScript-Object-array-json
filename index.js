/*Object*/
var linkdIn={
    "name":"Md Remon",
    "age":"20",
    "city":"Cumilla"
}
//console.log(linkdIn)

//console.log(linkdIn.city) /*Single Value er jonno*/

/* Json array */
var JSONArray=[
    { 
        titel:"web development"
    },

    {
        titel:"Graphic Design"
    },

    {
        titel:"Ui Design"
    },

    {
        titel:"Video editing"
    }

]
//console.log(JSONArray)
//console.log(JSONArray[3].titel) /*single value*/

/*Javascript array */

var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
//console.log(cities)
//console.log(cities [4]) /*single value*/

/*Loop over Array */

var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
    cities.forEach(item =>{
        // console.log(item)    
    });

/*Array method */
// concat

var arr1=["A","B"]
        var arr2=["C","D"]
        var arr3=arr1.concat(arr2)
//console.log(arr3)


// Array from

var name="MD REMON"
    var arr=Array.from(name)
//console.log(arr)

//Includes method
var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
    var res=cities.includes("chandina")
    //var res=cities.includes("Dhaka")
    //console.log(res)

//IndexOf method
var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
var res=cities.indexOf("Sylhet")
//console.log(res)    


//Pop method
var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
cities.pop()
//console.log(cities)

//Pop method
var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
cities.pop()
//console.log(cities)



//push method
var cities=["Dhaka","Comilla","Sylhet","Rangpur","Rajshahi"]
    cities.push("khulna")
    //console.log(cities)

//string method
        //UpperCase method 
        /*var r="I am Bangladeshi  "
        console.log(r.toUpperCase())
        console.log(r.toLowerCase())
        console.log(r.trim())
        console.log(r.indexOf("d"))
        console.log(r.lastIndexOf("i")) */

        var r="I am Bangladeshi  "
        var res=r.replace("Bangladeshi","Japanees")
        //console.log(res)

        //slice
        var r="I am Bangladeshi  "
        var res=r.slice(0,13)
        console.log(res)