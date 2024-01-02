const getStartedButton = document.querySelector(".landing-button");
const mainLandingPage = document.querySelector(".main");
let totalBalance = document.getElementsByClassName("main-balance")[0];
let incomeBalance = document.getElementById("incomeP2");
let expenseBalance = document.getElementById("expenseP2");
const transactionName = document.getElementById("nameInput");
const transactionType = document.getElementById("typeInput");
const transactionCategory = document.getElementById("categoryInput");
const transactionDate = document.getElementById("dateInput");
const transactionAmount = document.getElementById("amountInput");
const addTrnasactionButton = document.getElementsByClassName("addBtn")[0];
const secondSectionDiv = document.getElementsByClassName("second-section")[0];
const mainPage = document.getElementsByClassName("main-page")[0];
const typeInput = document.querySelector('#typeInput');
const categoryInput = document.querySelector('#categoryInput');
const amountInput = document.getElementById("amountInput");
const dateInput = document.getElementById("dateInput");
const typeError = document.getElementById("typeError");
const categoryError = document.getElementById("categoryError");
const dateError = document.getElementById("dateError");
const amountError = document.getElementById("amountError");
const date = new Date();

const checkTypeInput =  () => {
    if(typeInput.selectedIndex === 0){
        // alert("if of type return false");
        typeError.style.display = "block";
        return false;
    } else{
        typeError.style.display = "none";
        // alert("else of type return true")
        return true;
    }
}
const checkCategoryInput =  () => {
    if(categoryInput.selectedIndex === 0){
        // console.log("if of category return false");
        categoryError.style.display = "block";
        return false;
    } else{
        // console.log("else of category return true")
        categoryError.style.display = "none";
        return true;
    }
}
const checkDateInput =  () => {
    if(dateInput.value === ""){
        // console.log("if of date return false");
        dateError.style.display = "block";
        return false;
    } else{
        // console.log("else of category return true")
        dateError.style.display = "none";
        return true;
    }
}
const checkAmountInput =  () => {
    if(amountInput.value === ""){
        // console.log("if of amount return false");
        amountError.style.display = "block";
        return false;
    } else{
        // console.log("else of category return true")
        amountError.style.display = "none";
        return true;
    }
}

function resetOptions() {
    typeInput.selectedIndex = 0;
    categoryInput.selectedIndex = 0;
    dateInput.value = dateInput.placeholder;
    amountInput.value = "";
    typeError.style.display = "none";
    categoryError.style.display = "none";
    dateError.style.display = "none";
    amountError.style.display = "none";
}
function ashish(){
  return true;
}
typeInput.addEventListener("change",()=>{
  typeError.style.display = "none";
})
categoryInput.addEventListener("change",()=>{
  categoryError.style.display = "none";
})
dateInput.addEventListener("change",()=>{
  dateError.style.display = "none";
})
amountInput.addEventListener("change",()=>{
  amountError.style.display = "none";
})
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

getStartedButton.addEventListener("click",()=>{
    mainLandingPage.style.display = "none";
    mainPage.style.display = "block";
})

transactionType.addEventListener("change", () => {
  let transType = transactionType.value;
  loadCategories(transType);
});

const loadCategories = (transType) => {
  const incomeCategories = [
    "awards",
    "coupons",
    "grants",
    "lottery",
    "refunds",
    "rental",
    "salary",
    "sale",
    "freelance",
    "investment",
    "other",
  ];
  const expenseCategories = [
    "baby",
    "bills",
    "car",
    "clothing",
    "education",
    "electronics",
    "entertainment",
    "food",
    "health",
    "home",
    "insurance",
    "shopping",
    "skin-care",
    "social",
    "sports",
    "tax",
    "telephone",
    "transportation",
    "other",
  ];
  removeAllOptions();
  if (transType === "income") {
    // <option value="baby">Baby</option>
    for (let i = 0; i < incomeCategories.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${incomeCategories[i]}`);
      option.textContent = `${incomeCategories[i]}`;
      categoryInput.appendChild(option);
    }
  } else {
    for (let i = 0; i < expenseCategories.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${expenseCategories[i]}`);
      option.textContent = `${expenseCategories[i]}`;
      categoryInput.appendChild(option);
    }
  }
};

const addTransaction = () => {
  if(ashish() && checkTypeInput() && checkCategoryInput() && checkDateInput() && checkAmountInput()){
    const firstSection = () => {
    function updateIncome() {
        let transType = transactionType.value;
        if (transType === "income") {
        let transAmount = transactionAmount.value;
        transAmount = Number.parseInt(transAmount);
    
        let incBalance = incomeBalance.innerText.substring(2);
        incBalance = Number.parseInt(incBalance);
    
        let totBalance = totalBalance.innerText.substring(2);
        totBalance = Number.parseInt(totBalance);
    
        incomeBalance.innerHTML = `₹ ${transAmount + incBalance}`;
        totalBalance.innerText = `₹ ${transAmount + totBalance}`;
        } else {
        let transAmount = transactionAmount.value;
        transAmount = Number.parseInt(transAmount);
    
        let expBalance = expenseBalance.innerText.substring(2);
        expBalance = Number.parseInt(expBalance);
    
        let totBalance = totalBalance.innerText.substring(2);
        totBalance = Number.parseInt(totBalance);
    
        expenseBalance.innerHTML = `₹ ${transAmount + expBalance}`;
        totalBalance.innerText = `₹ ${totBalance - transAmount}`;
        }
    }
    updateIncome();
    };
    const secondSection = () => {
    let transCategory = transactionCategory.value;
    let transDate = transactionDate.value;
    let transAmount = transactionAmount.value;
    let transType = transactionType.value;
    
    // <div class="transaction transactionExpense">
    // <img src="images/education.png" alt="">
    // <img src="images/delete2.png" class="deleteImage" onclick="deleteImage(this)" alt="">
    // <div id="transactionBills">
    //     <p>Education</p>
    //     <p>Yesterday</p>
    // </div>
    // <p>- ₹ 250</p>
    // </div>
    
    let div = document.createElement("div");
    div.classList.add("transaction");
    transType === "income"
        ? div.classList.add("transactionIncome")
        : div.classList.add("transactionExpense");
        
        let img = document.createElement("img");
    img.setAttribute("src", `images/${transCategory}.png`);
    div.appendChild(img);
    
    let img2 = document.createElement("img");
    img2.setAttribute("src", "images/delete2.png");
    img2.classList.add("deleteImage");
    img2.setAttribute("onclick", "deleteImage(this)");
    div.appendChild(img2);
    
    let secondDiv = document.createElement("div");
    secondDiv.setAttribute("id", "transactionBills");
    
    let p1 = document.createElement("p");
    p1.textContent = transCategory;
    secondDiv.appendChild(p1);
    
    let p2 = document.createElement("p");
    let today = date.getDate();
    let yesterday = date.getDate() - 1;
    let selectedDate = transDate.substring(8, 10);
    if (selectedDate == today) {
        p2.textContent = "today";
    } else if (selectedDate == yesterday) {
        p2.textContent = "yesterday";
    } else {
        let selectedMonth = transDate.substring(5, 7);
        let selectedYear = transDate.substring(0, 4);
        p2.textContent = `${
        months[selectedMonth - 1]
        } ${selectedDate}, ${selectedYear}`;
    }
    secondDiv.appendChild(p2);
    
    let p3 = document.createElement("p");
    p3.classList.add("transactionsHistoryAmount");
    p3.textContent =
        transType === "income" ? `+ ₹ ${transAmount}` : `- ₹ ${transAmount}`;
    
    div.appendChild(secondDiv);
    div.appendChild(p3);
    
    secondSectionDiv.appendChild(div);
    
    transactionType.selectedIndex = 0;
    transactionCategory.selectedIndex = 0;
    transactionAmount.value = transactionAmount.placeholder;
    };

    firstSection();
    secondSection();
    setTimeout(() => {
    setLocalStorage();
    }, 1000);
    resetOptions();
  }else{
    
  }
};

const ifSecondSectionEmpty = () => {
  let numberOfChildrenOfsecondSectionDiv = secondSectionDiv.children.length;
  // <div class="emptySecondSection">
    // <img src="images/money-transfer.png" alt="">
    // <p>You haven't added any transactions yet...</p>
  // </div>
  let div = document.createElement("div");
  div.classList.add("emptySecondSection");
  let img = document.createElement("img");
  img.setAttribute("src", "images/money-transfer.png");
  let p = document.createElement("p");
  p.textContent = "You haven't added any transaction yet...";
  div.appendChild(img);
  div.appendChild(p);
  let a = document.getElementsByClassName("emptySecondSection")[0];
  if (numberOfChildrenOfsecondSectionDiv <= 2) {
    secondSectionDiv.appendChild(div);
  }
  if (document.contains(a)) {
    let emptySecondSection = document.getElementsByClassName("emptySecondSection")[0];
    secondSectionDiv.removeChild(emptySecondSection);
  }
};
ifSecondSectionEmpty();

const changeDateFormat = () => {
  transactionDate.value = transactionDate.placeholder;
};
const removeAllOptions = () => {
  while (transactionCategory.options.length > 1) {
    transactionCategory.remove(1);
  }
};
const deleteImage = (e) => {
  if(e.parentNode.classList.contains("transactionIncome")){
    let transactionsHistoryAmount  = e.nextSibling;
    transactionsHistoryAmount = Number.parseInt(transactionsHistoryAmount.nextSibling.innerText.substring(4))

    let incBalance = incomeBalance.innerText.substring(2);
    incBalance = Number.parseInt(incBalance);

    let totBalance = totalBalance.innerText.substring(2);
    totBalance = Number.parseInt(totBalance);

    incomeBalance.innerHTML = `₹ ${incBalance - transactionsHistoryAmount}`;
    totalBalance.innerText = `₹ ${totBalance - transactionsHistoryAmount}`;
  } else if(e.parentNode.classList.contains("transactionExpense")){
    console.log("else if running");
    let transactionsHistoryAmount  = e.nextSibling;
    transactionsHistoryAmount = Number.parseInt(transactionsHistoryAmount.nextSibling.innerText.substring(4))
    
    let expBalance = expenseBalance.innerText.substring(2);
    expBalance = Number.parseInt(expBalance);
    console.log(expBalance);
    
    let totBalance = totalBalance.innerText.substring(2);
    totBalance = Number.parseInt(totBalance);
    console.log(totBalance);

    expenseBalance.innerHTML = `₹ ${expBalance - transactionsHistoryAmount}`;
    totalBalance.innerText = `₹ ${totBalance + transactionsHistoryAmount}`;
  }
  e.parentNode.remove();
  ifSecondSectionEmpty();
  setLocalStorage();
};
const setLocalStorage = () => {
  const totalBalanceUpload = () => {
    localStorage.setItem("totalBalance",totalBalance.innerText);
  }
  const incomeUpload = () => {
    localStorage.setItem("incomeBalance",incomeBalance.innerText);
  }
  const expenseUpload = () => {
    localStorage.setItem("expenseBalance",expenseBalance.innerText);
  }
  const transactionUpload = () => {
    localStorage.setItem("secondSectionDiv",secondSectionDiv.innerHTML);
  }
  totalBalanceUpload();
  incomeUpload();
  expenseUpload();
  transactionUpload();
}
const getLocalStorage = () => {
  const totalBalanceGet = () => {
    totalBalance.innerText = localStorage.getItem("totalBalance");
  }
  const incomeBalanceGet = () => {
    incomeBalance.innerText = localStorage.getItem("incomeBalance");
  }
  const expenseBalanceGet = () => {
    expenseBalance.innerText = localStorage.getItem("expenseBalance");
  }
  const secondSectionDivGet = () => {
    secondSectionDiv.innerHTML = localStorage.getItem("secondSectionDiv");
  }
  totalBalanceGet();
  incomeBalanceGet();
  expenseBalanceGet();
  secondSectionDivGet();
}
const firstTimeLoading = () => {
  if (localStorage.getItem("totalBalance") !== null && localStorage.getItem("incomeBalance") !== null) {
    // console.log("if running");
  } else {
    localStorage.clear();
    // console.log("else running")
  }
  if(localStorage.length === 0){
    // console.log("if running of simple if");
  }else{
    getLocalStorage();
  }
}
firstTimeLoading();

