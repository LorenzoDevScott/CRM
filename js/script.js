                                    // Ticket Page Javascript

            // Creating the ticket Form 

// Grabbing Create Ticket button
const ticketButton = document.getElementById("createticket");

// Adding event listener to button
ticketButton.addEventListener("click", ()=> displayTicketForm("block"));

// Create the form tag that will be used for the ticket creation interface
const ticketCreateFormTag = document.createElement("form");

// Grab the parent node to place the new form after it
const ticketSearchParent = document.getElementById("ticketSearchBar");

// Add the form
ticketSearchParent.insertAdjacentElement('afterend',ticketCreateFormTag);

// Grab the new form
const ticketForm = document.getElementsByTagName("form")[1];

// Create the form body elements
const ticketBodyElements = '<label for="firstName">First Name: </label>' +
'<input type="text" placeholder="Enter your first name"><br>' +
'<label for="lastName">Last Name: </label>' +
'<input type="text" placeholder="Enter your last name"><br>' +
'<label for="device">Device</label>' +
'<select name="device" id="">' +
'   <option value="phone">Phone</option>' +
'    <option value="tablet">Tablet</option>' +
'    <option value="computer">Computer</option>' +
'    <option value="misc">Miscellaneous</option>' +
'</select> <br>' +
'<label for="repairType">Repair Type</label>' +
'<input type="text" placeholder="Enter the repair type"><br>' +
'<label for="customerSummary">Customer Summary</label><br>' +
'<input style="width: 50%;"type="text">' +
'<input type="button" value="Submit">';

// Create the ticket creation interface
let ticketCreateForm = ticketForm.innerHTML = ticketBodyElements;

// Set ticket creation form no display
ticketForm.style.display = "none";

// Display the ticket form
function displayTicketForm(x) {
    if (x === "block") {
        ticketForm.style.display = x;
    } else if (x === "none") {
        ticketForm.style.display = x;
    } else {
        console.log("You didn't set the right value");
        ticketForm.style.display = "none";
    }
}

            // Adding Ticket Creation content to add to the ticket table below

