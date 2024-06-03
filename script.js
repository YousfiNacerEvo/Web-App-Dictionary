//constent
const input = document.querySelector("input");
const button = document.querySelector("#srch-btn");
const foundCase = document.querySelector(".found-case");
const notFoundCase = document.querySelector(".notFound-case");
const emptyInput = document.querySelector(".empty-input");

//main
button.addEventListener("click", SearchFun);
//function
function SearchFun(){
    if(input.value == ""){
        console.log("yeeh")
        emptyInput.textContent = "please enter the input field";
        emptyInput.classList.remove("dont-show");
        emptyInput.classList.add("show");

        foundCase.classList.remove("show");
        foundCase.classList.add("dont-show");
        notFoundCase.classList.remove("show");
        notFoundCase.classList.add("dont-show");

    }else{
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
        fetch(url)
        .then(r => r.json())
        .then(data => {
            try{
                let defenition = data[0].word+ " " + data[0].phonetics[2].text + " " + data[0].meanings[0].definitions[0].definition;
                foundCase.innerHTML=`<p style = 'color:gray'>Defenition</p><br>${defenition}`;
                foundCase.classList.remove("dont-show");
                foundCase.classList.add("show");

                emptyInput.classList.remove("show");
                emptyInput.classList.add("dont-show");

                notFoundCase.classList.remove("show");
                notFoundCase.classList.add("dont-show");

            }catch(err){
                notFoundCase.textContent = "word not found";
                notFoundCase.classList.remove("dont-show");
                notFoundCase.classList.add("show");

                setTimeout(()=>{
                    notFoundCase.classList.remove("show");
                    notFoundCase.classList.add("dont-show");

                },2000);

                foundCase.classList.remove("show");
                foundCase.classList.add("dont-show");

                emptyInput.classList.remove("show");
                emptyInput.classList.add("dont-show");
            }
                
        })
        
    }
}