console.log("JS file connected");

/* Variables */
const burger = document.querySelector("#burger");
const nav = document.querySelector("#burger-con");

const products = document.querySelectorAll(".product-img");
const liteBox = document.querySelector("#litebox");
const closeBtn = document.querySelector("#close-btn");
const lbTitle = document.querySelector("#litebox-title");
const lbDesc = document.querySelector("#litebox-desc");
const lbBtn = document.querySelector("#litebox-btn");
const lbImage = document.querySelector("#litebox-img");

const emailField = document.querySelector("#email-field");
const submitBtn = document.querySelector("#goBtn");

const storyBtn = document.querySelector("#story-btn");
const storyTxt = document.querySelector("#story-text");
const story = "In the 90s, Squeezit used to be the flavors beloved by all kinds of kids. That is, until some other heroes arise. But now, more kids everywhere is facing the problem of the Thirst. When other drinks have seemed to be ineffective, Squeezit return to the battle with its old sting.";
let ogTxt = null;

let isStoryExpanded = false;

let timer = null;

let openedItem = {
    item: null,
    img: null
};

let productInfo = {
    cherry: {
        title: "Chucklin' Cherry",
        desc: `Why is it chucklin'? That's because you will also chuckle when you drink this. Chuckle because you are relieved from thirst, of course`,
        image: "squeezit_bottle_pink.png",
        btnColor: "#FF0026",
    },

    orange: {
        title: "Streetwise Orange",
        desc: `Once labeled as a drink for the nerdy, Orange now has been through a lot on the streets. No longer book smart, but street smart. In other words, absolutely cool.`,
        image: "squeezit_bottle_orange.png",
        btnColor: "#FF6A00",
    },

    blueberry: {
        title: "Berry B. Wild",
        desc: `Berry is being wild as ever, because he ain't gonna let any thirst escape. And, don't forget to be wild is to be natural. This is natural stuff, kids`,
        image: "squeezit_bottle_blue.png",
        btnColor: "#2E1DA4",
    },

}

let notification = {
    element: document.querySelector("#news-text"),
    previousText: "Join us and get fun news & on products, promotions and events. Just enter your email address below",

    update: function(text) {
        this.element.textContent = text;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            this.element.textContent = this.previousText;
        }, 2000)
    }
}


/* Functions */
function toggleMenu() {
    console.log("burger clicked");
    nav.classList.toggle("collapsible");
    burger.classList.toggle("clicked");
}

function openLiteBox() {
    let name = this.dataset.product;
    console.log(`You clicked on ${name}`);
    liteBox.classList.remove("hidden");

    openedItem.item = this;

    if (!(name in productInfo)) return;
    console.log(`Title is ${productInfo[name].title}`);
    lbTitle.textContent = `${productInfo[name].title} Time!`;
    lbDesc.textContent = productInfo[name].desc;
    lbBtn.style.backgroundColor = productInfo[name].btnColor;

    // store the image into this object here
    openedItem.img = this.querySelector("img");
    if(!openedItem.img) return;
    lbImage.appendChild(openedItem.img);
}

function closeLiteBox() {
    liteBox.classList.add("hidden");
    // append them back
    openedItem.item.appendChild(openedItem.img);
    // remove references
    openedItem.item = null;
    openedItem.img = null;
}

function showStory() {
    if(!isStoryExpanded){
        ogTxt = storyTxt.textContent;
        storyTxt.textContent = story;
        this.textContent = "Show Original";
        isStoryExpanded = true;
    } else {
        storyTxt.textContent = ogTxt;
        this.textContent = "↪  See Story";
        isStoryExpanded = false;
    }
}

function submitting(e) {
    e.preventDefault();
    let email = emailField.value;
    clearTimeout(timer);

    //if email is valid, reload
    if(validateEmail(email)){
        notification.update("Thanks for subscribing!");
        this.disabled = true;
        setTimeout(() => window.location.reload(),2000);
    } else {
        notification.update("Check your email again.");
    }
}

/*courtesy of stackoverflow */
function validateEmail(emailValue){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailValue) == false) 
        {
            return false;
        }

        return true;
}


/* Event Listener */
burger.addEventListener("click", toggleMenu);
if(products)
products.forEach((item) => {
    item.addEventListener("click", openLiteBox);
})

if(closeBtn)
closeBtn.addEventListener("click", closeLiteBox);

if(storyBtn)
storyBtn.addEventListener("click", showStory);

if(submitBtn)
submitBtn.addEventListener("click", submitting);

