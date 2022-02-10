//  function greetuser(){
//      let name=document.getElementById("kl").value;
//      alert("Hello !! "+name+" thanks for subscribing")

//  }
//  function askjoin(){
//     console.log("welcome to our community,")
//     let emailAddress=prompt('enter your email address: ')
//     alert("thanks for your patience")
//     alert("this might take some minutes")
//     let phonenumber=prompt('enter your phone number ')
//     alert("set back and relax feedback will come in the blink of an eye")
//     if(phonenumber.length<=10){
    
//     alert(`crosscheck if your number is correct ${phonenumber}`)
//     prompt('verify your phonenumber please !!')
//     }
//      alert('your request has been successful')
// }
// var num =5001;
// var reverse = num.toString().split('').reverse().join('');
// var result = parseInt(reverse)*Math.sign(num);
// console.log(result);
const images = ["D:\\my workspace\\medival\\k-lix\\back1.png","D:\\my workspace\\medival\\k-lix\\back2.jpg","D:\\my workspace\\medival\\k-lix\\back3.jpg","D:\\my workspace\\medival\\k-lix\\back4.jpg"];
function generateRandomPic () {
    const imgel = document.getElementsByClassName("homepg");
    const randomId = Math.floor(Math.random()*images.length);
    imgel.background = `url('${images[randomId]}') !important;`;
    console.log(`url('${images[randomId]}')`);
    
}

generateRandomPic();