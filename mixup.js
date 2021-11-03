     ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ***      ****                 //an object built on the                                                //
   //{          *   }      PRESENTS //Dynamic Layer Object                                                  //
  //   **OFT    ****               //sophisticated layer/element targeting and animation object            //
 //       }     * RODUCT          //which provides the core functionality needed in most DHTML applications/
//   ****       *                // 19990604                                                             //
// http://daverwin.homepage.com // Copyright (C) 1999 Dan Steinman                                      //
// http://daverwin.homepage.com// Distributed under the terms of the GNU Library General Public License//
// FREEWARE FREEWARE FREEWARE // Available at http://www.dansteinman.com/dynapi/                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                    see http://daverwin.homepage.com/ for details                                 //
//                    send comments to daverwin.hotmail.com                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////
function Puzzle(n,g,W,H,q,v){this.ma=false
var c = '#FFFFFF'
this.mixem=null
this.x=new Array()
this.y=new Array()
this.n=new Array()
this.name=n
this.f=false
this.To=""
this.g=0
this.w=W/3
this.h=H/3
this.css =css(n+"kDiv",q,v,W+20,H+60,c) + css(n+"mDiv",10,50,W,H,c)
this.div ='<DIV ID="'+n+'kDiv" onclick="javascript:return true"><a href="javascript:'+n+'.scramble()">Scramble</a> | <a href="javascript:'+n+'.solve()">Solve</a>\n<DIV ID="'+n+'mDiv" onclick="javascript:return true">\n'
for(var i=0;i<8;i++){
var m=n+i
var cn1=i
var cn2=0
if(cn1>5)cn1-=6,cn2=2
if(cn1>2)cn1-=3,cn2=1
var y=this.h*cn2
this.css+=css(m+"aDiv",this.w*cn1,y,this.w,this.h,c) + css(m+"bDiv",0-this.w*cn1,0-y,W,H)
this.div+='<DIV ID="'+m+'aDiv" ><DIV ID="'+m+'bDiv"><a href="javascript:void(null)" onMouseover="javascript:'+n+'.mov('+i+')"><img src='+g+' height='+H+' width='+W+' border=0></a></div></div>\n'
this.x[i]=cn1
this.y[i]=cn2
this.n[i]=m + "a"
}
this.div+='</div></div>\n'
this.x[8]=2
this.y[8]=2
this.move=PrivateMove
this.mov=PuzzleMov
this.scramble=PuzzleScramble
this.solve=PuzzleSolve
this.mixemup=PrivateMixemup
this.stop=PrivateStop
}
function PuzzleMov(i){
if(this.ma)return
this.ma=true
this.f=false
this.To=setTimeout(this.name+'.ma=false',300)
eval(this.name+'.move(i)')
if(!this.f){
clearTimeout(this.To)
this.ma=false}
}
function PuzzleScramble(){
if(this.ma)return
this.ma=true
eval('setTimeout("'+this.name+'.stop()",8000)')
eval('this.mixem=setInterval("'+this.name+'.mixemup()",300)')
}
function PuzzleSolve(){
if(this.ma)return
this.ma=true
setTimeout(this.name+'.ma=false',4000)
for(i=0;i<3;i++){for(j=0;j<3;j++){
if(i*3+j<8)eval(this.n[i*3+j]+'.slideTo(this.w * j,this.h * i)')
this.y[i*3+j]=i
this.x[i*3+j]=j}}
}
function PrivateStop(){
eval('clearInterval('+this.mixem+')')
this.ma=false
}
function PrivateMixemup(){
this.f=false
while(!this.f){
eval(this.name+'.move('+this.g+++')')
if(this.g==8)this.g=-1}
}
function PrivateMove(n){
var x = this.x[n]
var y = this.y[n]
var w = this.x[8]
var z = this.y[8]
if(((x==w)|(y==z))&(((x-1)==w)|((x+1)==w)|((y-1)==z)|((y+1)==z))){
this.f=true
eval(this.n[n]+'.slideTo(this.w*w,this.h*z,20,40)')
this.x[n] = w
this.y[n] = z
this.x[8] = x
this.y[8] = y}
}

