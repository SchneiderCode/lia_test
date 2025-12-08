
async function sendData(url, username, email,course,question) {
      //const url = 'https://script.google.com/macros/s/AKfycbwP4LGNJU7o439IZ-qP-gsPiMcmVgDXENW6X8w_bl2BSxUpw7R7Zjg_rOibLcJnrFrDaQ/exec';

      // We inject the captured selection into your JSON
      const payload = `{
          "username" : "${username}",
          "email" : "${email}", 
          "course" : "${course}",
          "course" : "${question}"
      }`;

      try {
          const response = await fetch(url, {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: payload,
          });

          // Note: With 'no-cors', we cannot read response.text(), but the request sends.
          console.log("Request sent successfully to Google Sheets");
          send.lia("true")
          return "Submission Successful"; 
      } catch (error) {
          console.error("Error:", error);
          alert(error)
          send.lia("Update Failed", [], false)
          return "Error sending data";
      }
  }