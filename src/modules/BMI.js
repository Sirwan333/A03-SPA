export default class Memory{
   
    constructor(id) {
        this.id = id 
    }

    getBmi(w, h){
        let bmiValue =  w/(Math.pow(h,2))
        if (bmiValue < 18.5) {
            document.getElementById(`inputBmi${this.id}`).innerText = `Result: ${bmiValue} Underweight`;
        } else if (bmiValue < 25) {
            document.getElementById(`inputBmi${this.id}`).innerText = `Result: ${bmiValue} Normal`; 
        } else if (bmiValue < 30) {
            document.getElementById(`inputBmi${this.id}`).innerText = `Result: ${bmiValue} Overweight`;
        } else {
            document.getElementById(`inputBmi${this.id}`).innerText = `Result: ${bmiValue} Obese`;
        }       
    }

    createC(){
        let div = document.createElement("div")
        div.id = `container${this.id}`
        div.style.top = 0;
        div.style.left = 0;
        div.className = "divCon"
        div.draggable = "true"
        div.style.position ="absolute"
        div.innerHTML = 
        `<div id="newWindows${this.id}" class="newWindows">
            <div id="upperBar">
            <img id="smallIcon${this.id}" src="" class="smallIcon" alt="smallIcon">
            <button type="button" id="close${this.id}" class="close">X</button>
            </div>
            <div id="windowsBody${this.id}" class="windowsBody">
                <div>
                    Enter Your Weight In kg
                    <div id="" class="">
                        <input type="text" id="wightValue${this.id}" class="bmiInput">                  
                    </div>
                    Enter Your height In m
                    <div id="" class="bmi">
                        <input type="text" id="hightValue${this.id}" class="bmiInput">
                        <button id="hightButton${this.id}" class="bmiButton">Calculate</button>
                    </div>
                    <div id="inputBmi${this.id}" class="">
                    </div>
                </div>
            </div>
            <div id="windowsBottom" class="windowsBottom"></div>
        </div>`
        document.body.appendChild(div)
    }
}
