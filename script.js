function calculations(){
    let input1=Number(document.getElementById("input1").value)
    let input2=Number(document.getElementById("input2").value)
    let add =input1+input2
    let sub =input1-input2
    let mul=input1 * input2
    let div=input1/input2
    
 document.querySelector('.box2').style.display="block"
 document.getElementById(`textadd`).textContent=`Your Addition is: ${add}`  
 document.getElementById(`textsub`).textContent=`Your Subtraction is: ${sub}`  
 document.getElementById(`textmul`).textContent=`Your Multiplication is: ${mul}` 
 document.getElementById(`textdiv`).textContent=`Your Division is: ${div} `
}   

document.getElementById(`add`).addEventListener('click',calculations)
document.getElementById(`sub`).addEventListener('click',calculations)
document.getElementById(`mul`).addEventListener('click',calculations)
document.getElementById(`div`).addEventListener('click',calculations)



document.getElementById("box2").addEventListener('click',()=>{
    document.getElementById('input1').value="";
    document.getElementById('input2').value="";
    document.getElementById('textadd').textContent="";
    document.getElementById('textsub').textContent="";
    document.getElementById('textmul').textContent="";
    document.getElementById('textdiv').textContent="";
    document.getElementById("box2").style.display="none"
})