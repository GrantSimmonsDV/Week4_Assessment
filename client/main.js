
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

    document.getElementById("fortuneBtn").onclick = () => {
      axios.get("http://localhost:4000/api/fortune/")
        .then((res) => {
          const ftunData = res.data;
          alert(ftunData);
        });
    };

    document.getElementById("feBtn").onclick = () => {
      axios.get("http://localhost:4000/api/subjects/")
        .then((res) => {
            for (i = 0; i < res.data.length; i++) {
                let feSite = document.createElement("li");
                feSite.textContent = res.data[i];
                document.body.appendChild(feSite)  
                         
            }
            
          })
          
        }