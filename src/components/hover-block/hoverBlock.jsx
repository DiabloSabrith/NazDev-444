import  "./HoverBlock.scss"

export default function HoverBlock(){
     return(
      <div className="all">
       <div className="lefter">
      <p className="p-hoverBlock">Код — стиль</p>
       </div>
       <div className="left">
       <p className="p-hoverBlock">Вид — огонь</p>
       </div>
       <div className="center">
         <div className="explainer"><span className="hoverBlock-span">NazDev</span></div>
       
         </div>
       <div className="right">
       <p className="p-hoverBlock" >17 — не рано</p>
       </div>
       <div className="righter">
       <p className="p-hoverBlock">  Учимся в бит</p>
       </div>
       </div>
     )
}