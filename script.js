let timer=10;
        let time = document.getElementById('count');
        let box =document.getElementById('box');

        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "display-1 h1 text-primary bg-dark";
                
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "display-1 h1 bg-secondary";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "display-1 h1 text-dark";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "display-1 h1  bg-danger";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "display-1 h1 text-dark";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "display-1 h1 text-primary";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "display-1 h1 text-primary";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "display-1 h1 text-primary";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.className = "display-1 h1 text-primary";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.className = "display-2 h1 text-primary";
                                                    time.style.backgroundColor= "white";
                                                    time.innerHTML = "Happy Independence Day"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 
    