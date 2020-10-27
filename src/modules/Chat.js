export default class Chat{
   
    constructor(id) {
        this.id = id
        this.url = "ws://vhost3.lnu.se:20080/socket/"
        this.websocket=null;
    }

    connect(){
       this.websocket = new WebSocket(this.url);
       return this.websocket
    }

    sendMessage(messageText){
        this.websocket.send(messageText);
    }

    close(){
        this.websocket.close();
    }
    createC(){
        let div = document.createElement("div")
        div.id = `container${this.id}`
        div.style.top = 0;
        div.style.left = 0;
        div.className = "divCon"
        div.draggable = "true"
        div.style.position ="absolute"
        div.innerHTML = `<div id="newWindows${this.id}" class="newWindows">
        <div id="upperBar">
          <button type="button" id="close${this.id}" class="close">X</button>
        </div>
        <div id="windowsBody${this.id}" class="windowsBody">
            <div id ="messageWindow${this.id}" class ="messageWindow">
        
            </div>
            
            <div>
                <input type="text" name="" id="inputArea${this.id}" class="inputArea">
            </div>
            <div>
                <button id="buttonSend${this.id}" class="buttonSend">Send</button>
            </div>
        </div>
        <div id="windowsBottom"></div>
      </div>`
        document.body.appendChild(div)
    }
}