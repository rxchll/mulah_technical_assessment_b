document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkButton").addEventListener("click", function() {
      const phoneNumber = document.getElementById("phone").value.trim();
      if (phoneNumber === "173527250") {
        window.location.href = "Page2.html";
      } else {
        alert("Invalid phone number for loyalty points check.");
      }
    });
  });
  