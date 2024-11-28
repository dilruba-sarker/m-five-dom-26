

const makeBlue=document.getElementById("make-blue")
makeBlue.onclick=bodyBlue                
function bodyBlue(){
 document.body.style.backgroundColor='blue'
}
const makeGreen=document.getElementById('make-green')
        makeGreen.onclick=function setGreen(){
            document.body.style.backgroundColor= 'green'
        }
const makePink=document.getElementById("make-pink")
makePink.addEventListener('click', makePinkBg)
function makePinkBg() {
    document.body.style.backgroundColor= 'pink'

}   
document.getElementById("make-goldenrod").addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})                                                                                                     
        
