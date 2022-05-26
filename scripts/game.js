AFRAME.registerComponent("game-play",{
    schema:{
        elementID:{type:"string",default:"#obs1"}
    },
    tick:function(){
      this.isCollided(this.data.elementID)
    },
    isCollided: function (elementId) {
        const element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
          if (elementId.includes("#obs")) {
            console.log(elementId+" collision");
            this.gameOver()
          }
        });
    },
    gameOver:function(){
        var char = document.querySelector("#main_char")
        var element = document.querySelector("#game_over_text")
        pos = char.getAttribute("position")
        char.setAttribute("dynamic-body",{mass:1})
        element.setAttribute("position",{x:pos.x,y:(pos.y+1.5),z:(pos.z-4)})
        element.setAttribute("visible",true)
    }
})