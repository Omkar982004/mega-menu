const learn = [
  {
    iconSrc: "images/training.png",
    featureTitle: "Training Hub",
    featureDescription: "Best practices to upskill your knowledge"
  },
  {
    iconSrc: "images/help-centre.png",
    featureTitle: "Help Center",
    featureDescription: "Support and Product Documentation"
  },
  {
    iconSrc: "images/order.png",
    featureTitle: "Release Notes",
    featureDescription: "Our latest releases"
  },
];

const connect = [
  {
    iconSrc: "images/about-us.png",
    featureTitle: "About Us",
  },
  {
    iconSrc: "images/community.png",
    featureTitle: "Community and Events",
  },
  {
    iconSrc: "images/security.png",
    featureTitle: "Security",
  },
  {
    iconSrc: "images/short-cut.png",
    featureTitle: "Shortcut Blog",
  },
];
const stories = [
  {
    iconSrc: "images/Panera-Bread-Logo.png",
    featureTitle: "Panera streamlined online orders and minimized waste with real-time inventory tracking.",
  },
  {
    iconSrc: "images/skittles.png",
    featureTitle: "Skittles boosted fan engagement by launching vibrant, interactive campaign events online.",
  },
  {
    iconSrc: "images/hellman.jpg",
    featureTitle: "Hellmann’s fortified customer trust by adopting our secure checkout and fraud detection tools.",
  },
];


const learnUl = document.getElementById('learn');
learnUl.innerHTML = '';

learn.forEach((item) => {
    const learnLi = document.createElement('li');
    learnLi.innerHTML = `
        <img src=${item.iconSrc} alt="" />
        <div class="learn-details">
            <div class="learn-title">${item.featureTitle}</div>
            <div class="learn-description">
                ${item.featureDescription}
            </div>
        </div>
    `
    learnUl.appendChild(learnLi);
})

const connectUl = document.getElementById('connect')
connectUl.innerHTML = ''

connect.forEach((item) =>{
    const connectLi = document.createElement('li');
    connectLi.innerHTML = `
        <img src=${item.iconSrc} alt="" />
        <div class="learn-title">${item.featureTitle}</div>
    `
    connectUl.appendChild(connectLi);
})

const storiesUl = document.getElementById('stories')
storiesUl.innerHTML = ''
stories.forEach((item) => {
    const storiesLi = document.createElement('li');
    storiesLi.innerHTML = `
        <img src=${item.iconSrc} alt="" />
        <div class="learn-description">${item.featureTitle}</div>
    `
    storiesUl.appendChild(storiesLi);
})