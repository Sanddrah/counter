let count = 0;
const btns = document.querySelectorAll(".btn");
const num = document.querySelector(".number");

 
btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count --;
        } else if(styles.contains("increase")){
            count++;
        }else{
            count =0;
        }

        if(count > 0){
            num.style.color = "green"
        }
         if(count < 0){
            num.style.color = "red"
        }

        if(count ===0){
            num.style.color = "black"
        }
        num.textContent = count;
    })
})

