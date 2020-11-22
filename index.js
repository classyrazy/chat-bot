var robot = {
    userMsg: document.querySelector("#main-input"), 
    chats:[],
    brain:{
        hi:"how are you",
        "how far":"how are you",
        hello:"how are you",
        hey:"how are you",
    }
}
var submit = document.querySelector(".submit")
submit.addEventListener("click",function(e){
    e.preventDefault()
    console.log(robot.userMsg.value);
    var uMsg = robot.userMsg.value;
    robot.chats.push({
        msg: uMsg,
        sender:"user"
    })
    if(robot.brain[robot.userMsg.value] === undefined){
        console.log("i dont get")
        return
    }
    console.log(robot.brain[robot.userMsg.value])
    var botMsg = robot.brain[robot.userMsg.value];
    robot.chats.push({
        msg: botMsg,
        sender:"bot"
    })
    var html = "";
    for(let chat of robot.chats){
        console.log(chat.msg)
        html+= `<p class = "${chat.sender === "user"? 'user-talk':'chat-talk'}">${chat.msg}</p>`
    }
    console.log(html)
    var chatsInHtml = document.querySelector(".chats")
    chatsInHtml.innerHTML = html;

    document.querySelector("#main-input").value ="";
})

 