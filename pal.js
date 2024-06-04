const btn=document.getElementById("check-button");
const result = document.getElementById("result");
btn.addEventListener("click",checkPalindrome)
input.addEventListener("keydown",function(event){
    if(event.key === 'Enter'){
        checkPalindrome();
    }
});
input.classList.add("inp");

function checkPalindrome(){
    const input=document.getElementById("text-input").value;
    const isPalindrome = palcheck(input);
    
    result.classList.add("result");
    result.textContent = isPalindrome? input+ " is a palindrome" : input+" is not a palindrome";

};
function palcheck(input){
    const content = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l,h;
    l=0;
    h=content.length-1;
    
    if(content.length!=0){
        while(l<h){
            if(content[l]!=content[h]){
               return false;
            }
            l++;
            h--;
    
        }
        return true;
    }
    else{
        alert("Please input a value");
    }
    }

    


    



