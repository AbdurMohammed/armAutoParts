const customers = [];
var customerForm = document.getElementById("customerForm");

if (customerForm) {
    customerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var customer = {
            name: document.getElementById("customerName").value,
            phone: document.getElementById("customerPhone").value,
            email: document.getElementById("customerEmail").value,
            vehicle: document.getElementById("vehicleType").value,
            password: document.getElementById("accountPassword").value
        };

        customers.push(customer);
        
        var submitMessage = document.getElementById("submitMessage");
        submitMessage.textContent = " Submitted!";
        submitMessage.style.color = "green";
        
        console.clear();
        console.log(customers);
    });
}