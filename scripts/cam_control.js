AFRAME.registerComponent("cam-control",{
    schema:{
        z_pos:{type:"number",default:0}
    },
    tick:function(){
        this.data.z_pos -= 0.05
        pos = this.el.getAttribute("position")

        window.addEventListener("keydown",(e)=>{
            if(e.key === "ArrowUp"){
                this.data.z_pos -= 0.1
            }
        })

        pos.z = this.data.z_pos

        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})