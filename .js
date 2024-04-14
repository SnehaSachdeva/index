let result =
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "snehasachdeva10",
    "email": "snehasachdeva10@gmail.com",
    "score": 0.80,
    "state": "deliverable",
    "domain": "gmail.com", 
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }

  console.log("this is my script");
  let key = "ema_live_pxNUGdbpXKzD7gKqCBJVaUeQbNNbwXuynwhbABMy";
  

  document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const emailInput = document.getElementById("username");
    const resultContainer = document.getElementById("resultCont");
  
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("Clicked!");
  
      const email = emailInput.value;
      if (validateEmail(email)) {
        const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  
        try {
          let res = await fetch(url);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          let result = await res.json();
  
          console.log(result);
  
          // Display the result in your HTML
          resultContainer.textContent = JSON.stringify(result, null, 2);
        } catch (error) {
          console.error(`Error: ${error.message}`);
        }
      } else {
        console.error("Invalid email address");
      }
    });
  });
  
  function validateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
