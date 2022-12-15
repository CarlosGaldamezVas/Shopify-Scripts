

// Notification Function
const notification = (element, innerHTML) => {
    notificationContainer = document.createElement("div")
    notificationContainer.classList = "carlosnotif";
    notificationContainer.style.bottom = "10px";
    notificationContainer.style.right = "10px";
    notificationContainer.style.margin = "15px 0";
    notificationContainer.style.padding = "20px";
    notificationContainer.style.backgroundColor = "#deeaf7";
    notificationContainer.style.zIndex = 999999;
    notificationContainer.style.border = "1px solid #96c9ff";
    notificationContainer.style.borderRadius = ".3rem";
    notificationContainer.style.textAlign = "center";
    notificationContainer.innerHTML = innerHTML;

    element.append(notificationContainer);
}

// Thank you to https://stackoverflow.com/questions/66536154/changing-input-text-of-a-react-app-using-javascript
function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
        valueSetter.call(element, value);
    }
}

// Thank you to https://stackoverflow.com/questions/40091000/simulate-click-event-on-react-element
const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
function simulateMouseClick(element) {
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}

// Select all items for refund
const qty = document.querySelectorAll(".Polaris-Card__Section_1b1h1");

qty.forEach((el) => {
    header = el.querySelector("ul").parentElement;
    headerv = header ?? header;

    if (header) {
        
        refundcash = header.querySelector(".Polaris-TextField__Input_30ock[type=text]");        
        if (refundcash){
            setNativeValue(refundcash, refundcash.getAttribute("Max"));
            refundcash.dispatchEvent(new Event('input', { bubbles: true }));
            notification(refundcontainer, "Test");
        }
    }
            

})

// Refund Amount
setTimeout(()=> {
const refundAmount = document.querySelectorAll(".Polaris-TextContainer_szg8b");


refundAmount.forEach((el) => {
    header = el.querySelector(".Polaris-Subheadifornng_syouu");
    headerv = header ?? header;

    if (header) {
        if (header.textContent == "Refund amount") {
            refundcontainer = header.parentElement;
            refundcash = refundcontainer.querySelector(".Polaris-TextField__Input_30ock");
            setNativeValue(refundcash, 10);
            refundcash.dispatchEvent(new Event('input', { bubbles: true }));
            notification(refundcontainer, "Test");
        }
    }
})},300)

// Refund Shipping
setTimeout(()=> {
    const refundShipping = document.querySelectorAll(".Polaris-Card_yis1o");

    refundShipping.forEach((el) => {
        header = el.querySelector("h2");
        headerv = header ?? header;
    
        if (header) {
            if (header.textContent == "Refund shipping") {
                refundcontainer = header.parentElement;
                refundcash = refundcontainer.querySelector(".Polaris-TextField__Input_30ock");
                setNativeValue(refundcash, 10);
                refundcash.dispatchEvent(new Event('input', { bubbles: true }));
                notification(refundcontainer, "Test");
            }
        }
    })
},100)


