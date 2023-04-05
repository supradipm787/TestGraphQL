 displayMessage = (message) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if(message == 'Using Await in Callback2'){
                return reject ('You missed the Callback2')
            }
            resolve (message);
        }, 3000)
    })
}

//creating promise
/*displayMessage ('Test Message in Callback1').then (result =>
{
    console.log ("Result : ", result);
    displayMessage ('Test Message in Callback2').then (result =>
    {
        console.log ("Result : ", result)
        displayMessage ('Test Message in Callback3').then (result =>
            {
                console.log ("Result : ", result)
            }).catch(error => 
            {
                    console.log('Error in Callback3', error)
            })
    }).catch(error => 
    {
            console.log('Error in Callback2', error);
            
    })

})
.catch(error => 
{
            console.log('Error in Callback1', error)
})
*/
greetings = async () => {
    return "How are you?"
}

const myFunc = async () => {
    result = '';
    try{
        result = await displayMessage ("Using Await in Callback1");        
        console.log ("Result:", result);
        try{
            result = await greetings ();
            console.log ("Result:", result);
            }catch (error){
                console.log ("Error in greetings", error);
            }
        } 
    catch (error){
        console.log ("Error in Await Callback1", error);
    }
    try{
        result = await displayMessage ("Using Await in Callback2");
        console.log ("Result:", result);
        } 
    catch (error){
        console.log ("Error in Await Callback2", error);
    }

}

myFunc();



