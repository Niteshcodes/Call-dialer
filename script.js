
      var hist = [];
      var repete = {};
      var repetet = 1;
      const msg = document.getElementById("msg");
      const btnhandle = (e) => {
        if (e.target.value !== undefined) {
          msg.innerText = msg.innerHTML + e.target.value;
        }
      };

      const callBtn = () => {
        if (msg.innerText !== "") {
          const msgtxt = msg.innerText;

          // console.log("first",msgtxt)

          if (hist.includes(msgtxt)) {
            const ind = hist.indexOf(msgtxt);
            let a = hist.splice(ind, 1)[0];
            hist.push(a);
            repete[a] = repete[a] + 1;
            console.log("repete", repete);
          } else {
            hist.push(msgtxt);
            repete[msgtxt] = repetet;
            // console.log("repete",repete)
          }
          // console.log(hist)
          clearmsg();
        }
        // console.log(hist)
        history();
      };
      const clearmsg = () => {
        console.log(msg.innerText);
        msg.innerHTML = "";
        // console.log(hist)
      };

      // const history = () => {
      //   let ele = document.getElementById("history");
      //   let d = document.createElement("li");
      //   let b = document.createElement("ul");

      //   ele.appendChild("h1");
      //   console.log("history", ele);
      // };
      const history = () => {

        let ele = document.getElementById("history");
        ele.innerHTML=''
        let numb=hist.reverse();
        for (x of hist) {
          let b = document.createElement("ul");
          let listItem = document.createElement("li");
          listItem.textContent = x +" repete-> "+ repete[x];
          b.appendChild(listItem);
          ele.appendChild(b);
        }

        console.log("history", ele);
      };
    