let ip = document.querySelector('#input input');

// ip.addEventListener('keydown',(e)=>{
//     console.log(e.key);
// })

let btns = document.querySelectorAll('button');

//btns is array of buttons

//btn is single item in the array of buttons

btns.forEach((btn) =>{
        btn.addEventListener('click',()=>{
        let value = btn.textContent;
        console.log(value);
        
        if(ip.value >= 'A' && ip.value <= 'z'){
            ip.value = 'Enter valid Input';
        }
        else if(value === 'AC'){
            ip.value = "";
        }

        else if(value === 'X'){
            ip.value = "";
        }

        else if(value === 'C'){
            ip.value = ip.value.slice(0,-1);
        }

        else if( value === '='){
            try {
                ip.value = eval(ip.value);  // careful with eval!
            } catch {
                ip.value = "Error";
            }
        }
        else{
            ip.value += value;
        }
    })
});