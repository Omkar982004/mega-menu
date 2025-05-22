const pricingPlans = [
  {
    price: "$9",
    duration: "/month",
    title: "Basic Plan",
    benefits: [
      "Product Listing Management",
      "Inventory Tracking",
      "Email Support",
    ],
  },
  {
    price: "$19",
    duration: "/month",
    title: "Pro Plan",
    benefits: [
      "Advanced Analytics",
      "Multiple Storefronts",
      "Priority Support",
    ],
  },
  {
    price: "$29",
    duration: "/month",
    title: "Enterprise Plan",
    benefits: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Support",
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const pricingContainer = document.querySelector(".prices");
  pricingContainer.innerHTML = ''
  pricingPlans.forEach(plan => {
    const li = document.createElement("li");
    li.className = "priceLi";

    li.innerHTML = `
      <div class="price">
        <p>${plan.price}</p>
        <div class="duration">${plan.duration}</div>
      </div>
      <ul class="benefits">
        <li><span>${plan.title}</span></li>
        ${plan.benefits.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `;

    pricingContainer.appendChild(li);
  });
});
