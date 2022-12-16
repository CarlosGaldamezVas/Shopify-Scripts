let lineItem = document.querySelectorAll(".Polaris-Card__Section_1b1h1 ul > li");
let brandURL = window.location.origin;

lineItem.forEach((el)=> {
    line = el.querySelector(".Polaris-Link_yj5sy")

    if(line) {
        query = line.getAttribute("href");
        lineCont = el;
        querySplit = query.split("/");
        pID = querySplit[3];
        varID = querySplit[5]

        fetch(`${brandURL}/admin/api/2022-04/variants/${varID}.json`)
        .then((response) => response.json())
        .then((data) => {
            datacont = document.createElement("table");
            datacont.innerHTML = `<table align="left">
                <th align="center" style="border-bottom: 1px solid #e1e3e5">
                    Inventory Qty
                </th>
            </tr>
            <tr >
                <td align="center" style="padding: .5rem 0">
                    <span style="background-color:#91e0d6;padding:3px;border-radius:.5rem">${data.variant.inventory_quantity}</span>
                </td>
            </tr>`;
            datacont.style.border = "1px #e1e3e5 solid"
            datacont.style.borderRadius = "1em"
            datacont.style.padding = ".5em"
            datacont.style.width = "100%"
            el.append(datacont)
        });
    }
    
})
