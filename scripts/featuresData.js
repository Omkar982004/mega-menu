features = [
  {
    iconSrc: "images/puzzle.svg",
    featureTitlte: "Boards",
    featureDescription: "See and track your work on Kanban boards"
  },
  {
    iconSrc: "images/inventory.png",
    featureTitlte: "Inventory",
    featureDescription: "Manage product stock in real-time"
  },
  {
    iconSrc: "images/order.png",
    featureTitlte: "Order Tracking",
    featureDescription: "Track customer orders from purchase to delivery"
  },
  {
    iconSrc: "images/analytics.png",
    featureTitlte: "Analytics",
    featureDescription: "Gain insights with sales and traffic analytics"
  },
  {
    iconSrc: "images/customers.png",
    featureTitlte: "Customer Management",
    featureDescription: "Handle customer details and support efficiently"
  },
  {
    iconSrc: "images/payments.png",
    featureTitlte: "Payments",
    featureDescription: "Securely manage multiple payment methods"
  },
  {
    iconSrc: "images/marketing.png",
    featureTitlte: "Marketing Tools",
    featureDescription: "Boost sales with discount codes and campaigns"
  },
  {
    iconSrc: "images/integrations.png",
    featureTitlte: "Integrations",
    featureDescription: "Connect with shipping, CRM, and ERP tools"
  },
  {
    iconSrc: "images/mobile.png",
    featureTitlte: "Mobile Access",
    featureDescription: "Manage your store on the go with mobile support"
  }
];


const sublistUl = document.getElementById('sublist-ul');
sublistUl.innerHTML = '';

features.forEach((feature) => {
    const sublistLi = document.createElement('li');
    sublistLi.innerHTML = `
        <img class="sublist-icons" src=${feature.iconSrc} alt="" />
        <div class="feature-details">
            <div class="feature-title">${feature.featureTitlte}</div>
            <div class="feature-description">
                ${feature.featureDescription}
            </div>
        </div>
    `
    sublistUl.appendChild(sublistLi);
})