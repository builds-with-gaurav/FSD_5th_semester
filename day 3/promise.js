const myPromise=new Promise((resolve, reject) => {
    let age=19;
    if (age>=18){
        resolve(" eligible to vote....");
    } else {
        reject("not eligible to vote....");
    }
})
const checkvoteEligibility=async()=> {
    try{
        const msg=await myPromise;
        console.log(msg);
    }
    catch(error){
        console.error(error);
    }
}
checkvoteEligibility()

//myPromise.then((message) => console.log(message))
//.catch((error) => console.error(error))