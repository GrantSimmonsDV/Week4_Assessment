
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4005/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

    document.getElementById("fortuneBtn").onclick = () => {
      axios.get("http://localhost:4005/api/fortune/")
        .then((res) => {
          const ftunData = res.data;
          alert(ftunData);
        });
    };

    document.getElementById("submit").addEventListener("click", () => {
      axios.post("http://localhost:4005/api/register/")
      .then((res) => {
        alert(`Welcome ${res.data}`)
      })
    })

    let goalsArrayLength = 5;

    document.getElementById("getGoals").onclick = () => {
      axios.get("http://localhost:4005/api/list/")
        .then((res) => {
          goalsArrayLength = res.data.length;
            for (i = 0; i < res.data.length; i++) {
                let gList = document.createElement("li");
                gList.textContent = res.data[i];
                document.body.appendChild(gList)  
                         
            }
            
          })
          
        }

    document.getElementById("deleteGoal").addEventListener("click", () => {
      if ( goalsArrayLength <= 0) {
        alert ('There are no goals to delete')
        return;
      }
      const goalToDelete = prompt(`Choose an index up to ${goalsArrayLength - 1}`);
//Need to ask about how the temporate literal works in the line below
      axios.delete(`http://localhost:4005/api/list/${goalToDelete}`)
      .then((res) => {
        goalsArrayLength = res.data.length;
        alert(res.data)
      })
      })

    

      document.getElementById('addGoal').addEventListener('click', () => {

        const addGl = document.getElementById('addGl').value
        if (!addGl.trim()) {
          alert("Cannot add empty value");
          return;
        }

        const body = { addGl}; 


        //why does body need to be added to the axios call?
        axios.post('http://localhost:4005/api/list/', body)
        .then ((res) => {
          goalsArrayLength = res.data.length;
          alert('Goal added')
        })
      })