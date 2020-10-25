
// function newWindo(){
//     // document.getElementById("newWindows").style.display = "block"
//     let outputE = document.getElementById("windowsBody")

//     let imgArray = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/1.png", 
//         "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"];
//     let match = [];
//     let counter=0;
//     let count=0;    
        
//     function shuffle(array) {
//         array.sort(() => Math.random() - 0.5);
//     }
//     shuffle(imgArray);
//     startA();
        
//     function startA(){
//         imgArray.forEach(function printM(img){
//             let imga = document.createElement("img")
//             imga.src = "img/0.png";
//             imga.id = img
//             imga.className = "first"
//             outputE.appendChild(imga)
//         });
//     }
        
        
//     let img2 = document.querySelectorAll('#windowsBody img').forEach(item => {
//         item.addEventListener('click', event => {
//             event.target.className = "second";
//             event.target.src =  event.target.id
//             match.push(event.target.id)
//             console.log(match)
//             if(match.length == 2){
//                 checkMatch()
//             }
        
//         })
//     })
    
//     function checkMatch(){
        
//         if(match[0]===match[1]){
//             setTimeout(fofo, 1000)
//             function fofo(){
//                 document.querySelectorAll(`#${CSS.escape(match[0])}`).forEach(item => {item.style.visibility= "hidden"})
//                 match = [];
//                 counter++
//                 count++
//                 if(count==8){
//                     console.log(counter)
//                 }
//             }
//         }
//         else{
//             setTimeout(soso, 1000)
//             function soso(){
//                 document.querySelectorAll(".second").forEach(item => {item.src = "img/0.png"})
//                 match = [];
//                 counter++
//             }
        
//         }
        
//     }
// }


// export default {
//     newWindo
// };
