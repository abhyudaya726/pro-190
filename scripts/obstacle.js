AFRAME.registerComponent("obstacle",{
    init:function(){
        for(var i=0;i<=500;i++){
            id = `obs${i}`
            this.create_obstacle(id,i)
        }
        
    },
    create_obstacle:function(id,position){
        var terrain = document.querySelector("#plane")
        var obstacle = document.createElement("a-entity")

        posX = (Math.random()*2) - 0.75
        obstacle.setAttribute("position",{x:posX,y:1,z:(position-20)*10})

        col = Math.random()*10000000

        obstacle.setAttribute("id",id)
        obstacle.setAttribute("material",{color:col})
        obstacle.setAttribute("geometry",{primitive:"sphere",radius:0.1})
        obstacle.setAttribute("static-body", {shape: "sphere",sphereRadius: 0.1,});
        obstacle.setAttribute("game-play",{elementID:`#${id}`})

        terrain.appendChild(obstacle)
    },
    
})