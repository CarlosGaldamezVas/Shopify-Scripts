

// React Helpers
// Thank you to https://stackoverflow.com/questions/66536154/changing-input-text-of-a-react-app-using-javascript
var setNativeValue = (element, value) => {
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
var mouseClickEvents = ['mousedown', 'click', 'mouseup'];
var simulateMouseClick = (element) => {
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    )
}

// Notification Function
// notification(HTML Element, Inner HTML, 1=notification with background / 2=notification with text only,prepend or append, Text Position )
var notification = (el, b, c, p, ta) => {
    notificationContainer = document.createElement("div")
    txtalign = ta ? ta : "left";
    if (c == 1 || !c) {
        notificationContainer.classList = "carlosnotif";
        notificationContainer.style.border = "1px solid #edeeef";
        notificationContainer.style.padding = ".3rem";
        notificationContainer.style.backgroundColor = "#00626a";
        notificationContainer.style.borderRadius = "5px";
        notificationContainer.style.textAlign = txtalign;
        notificationContainer.style.color = "#d82c0d";
        notificationContainer.innerHTML = b;
    } else if (c == 2 && c) {
        notificationContainer.classList = "carlosnotif";
        notificationContainer.style.margin = "5px 0";
        notificationContainer.style.zIndex = 999999;
        notificationContainer.style.textAlign = txtalign;
        notificationContainer.style.color = "#00626a";
        notificationContainer.innerHTML = b;
    } else {

    }

    if (p = "prepend") {
        el.prepend(notificationContainer);
    } else if (p = "append") {
        el.append(notificationContainer);
    } else {
        el.append(notificationContainer);
    }

}



//uncheck Specific Checkboxes Function
//unchecker(Title, Notification Message, Delay Timer, Prepend or Append);

var unchecker = (h, m, t, p) => {
    setTimeout(() => {
        restockandnotifcheck = document.querySelectorAll(".Polaris-Card__Section_1b1h1");

        restockandnotifcheck.forEach((el) => {
            header = el.querySelector(".Polaris-Choice_j5gzq");
            if (header && header.textContent == h) {
                headerh = header.parentElement;
                container = headerh.querySelector(".Polaris-Checkbox__Input_30ock")
                simulateMouseClick(container);
                notification(headerh, m, 2, p)
            }
        });

    }, t)
}

// Real unchecker Examples
unchecker("Restock items", "Restock Has Been Toggled", 600, "prepend");
unchecker("Restock item", "Restock Has Been Toggled", 600, "append");
unchecker("Send a notification to the customer", "Notification Has Been Toggled", 600, "append");

// Select all items for refund
var qty = document.querySelectorAll(".Polaris-Card__Section_1b1h1 ul > li");

qty.forEach((el) => {
    header = el.querySelector(".Polaris-TextField__Input_30ock");
    headerv = header ?? header;

    if (header) {
        qtyContainer = header.parentElement.parentElement;
        qtyElement = qtyContainer.querySelector(".Polaris-TextField__Input_30ock");
        setNativeValue(qtyElement, qtyElement.getAttribute("Max"));
        qtyElement.dispatchEvent(new Event('input', { bubbles: true }));
        notification(header.parentElement.parentElement.parentElement,
            `<svg style="vertical-align:middle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="1rem" height="1rem" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
<path fill="#006d41" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5
	c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5
	c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"/>
</svg>`
            , 2, "append", "center");
    }


})

// Refund Shipping (Max)
var refundShipping = document.querySelectorAll(".Polaris-Card_yis1o");

refundShipping.forEach((el) => {
    header = el.querySelector("h2");
    headerv = header ?? header;

    if (header) {
        if (header.textContent == "Refund shipping") {
            refundcontainer = header.parentElement.parentElement;
            refundamount = refundcontainer.querySelector(".Polaris-TextStyle--variationStrong_rpyvj").textContent.replace(`$`, '');
            refundcash = refundcontainer.querySelector(".Polaris-TextField__Input_30ock");

            notification(refundcash.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, `Refund Amount set to ${refundamount}(Max)`, 2);

            setNativeValue(refundcash, refundamount);
            refundcash.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
})


// Refund Amount

const refundAmount = document.querySelectorAll(".Polaris-TextContainer_szg8b");

setTimeout(() => {
    refundAmount.forEach((el) => {
        header = el.querySelector("h3");
        headerv = header ?? header;

        if (header) {
            if (header.textContent == "Refund amount") {
                refundcontainer = header.parentElement;
                refundcash = refundcontainer.querySelector(".Polaris-TextField__Input_30ock");
                setNativeValue(refundcash, 0);
                refundcash.dispatchEvent(new Event('input', { bubbles: true }));
                notification(refundcash.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, "Refund Amount Set to $0.00", 2, null, "left");
            }
        }
    })
}, 1700) 
