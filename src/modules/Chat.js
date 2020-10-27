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
        div.draggable = "true"
        div.style.position ="absolute"
        div.innerHTML = `<div id="newWindows${this.id}" class="newWindows">
        <div id="upperBar">
          <button type="button" id="close${this.id}" class="close">X</button>
        </div>
        <div id="windowsBody${this.id}" class="windowsBody">
            <div>
                <input type="text" name="" id="inputArea${this.id}">
            </div>
            <div>
                <button id="but${this.id}">X</button>
            </div>
        </div>
        <div id="windowsBottom"></div>
      </div>`
        document.body.appendChild(div)
    }
}