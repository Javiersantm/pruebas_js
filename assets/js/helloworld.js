document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("boton")
    myButton.addEventListener("click", function() {
        const inputField = document.getElementById("aNumber");
        const aNumber = inputField.value;

        getData("GET", "http://localhost:8080/number/" + aNumber, showNumber)

        function getData(method, url, callback) {
            const request = new XMLHttpRequest();

            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        try {
                            const response = request.responseText;
                            console.log("Raw response:", response);

                            const data = JSON.parse(response);
                            callback(data);
                        } catch (err) {
                            console.error("Error parsing JSON:", err);
                            console.log("Response text was:", request.responseText);
                        }
                    } else {
                        console.error("HTTP error:", request.status);
                    }
                }
            };
            try{
                request.open(method,url);

                request.send();
            } catch(e) {
                console.log(e);
            }

        }

//        function showNumber(aNumber) {
//                    console.log(aNumber);
//                    const pElements = document.getElementsByTagName("p");
//                    console.log(pElements);
//                    for (let i = 0; i < pElements.length; i++) {
//                    const pElement = pElements[1];
//                    const innerHTML = pElement.innerHTML;
//                    if (innerHTML.includes("(5)")){
//                    pElement.innerHTML = pElement.innerHTML + aNumber;
//                    }
//                    }
//                    if (pElements.length === 1){
//                        const pElement = pElements[0];
//                        // const innerHTML = pElement.innerHTML;
//                        pElement.innerHTML = pElement.innerHTML + aNumber;
//                    }
//                }
//        function showNumber(aNumber) {
//            console.log(aNumber);
//            const idElement = document.getElementById("1");
//            console.log(idElement);
//            const innerHTML = idElement.innerHTML;
//            idElement.innerHTML = idElement.innerHTML + aNumber;
//            }
//
    })


// ClassName
// ClassList
})