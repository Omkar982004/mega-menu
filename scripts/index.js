// Map of nav-item IDs to their corresponding sub-list IDs
const dropdownMap = [
  { navId: 'nav-item', subListId: 'sub-list' },
  { navId: 'navItemResources', subListId: 'resourcesDropDown' },
  { navId: 'nav-pricing', subListId: 'pricing' },
];

dropdownMap.forEach(({ navId, subListId }) => {
  const navItem = document.getElementById(navId);
  const subList = document.getElementById(subListId);

  if (!navItem || !subList) return;

  // Show sublist on nav hover
  navItem.addEventListener('mouseenter', () => {
    subList.classList.add('active');
  });

  // Keep sublist open if hovered directly
  subList.addEventListener('mouseenter', () => {
    subList.classList.add('active');
  });

  // Hide when mouse leaves nav
  navItem.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!subList.matches(':hover')) {
        subList.classList.remove('active');
      }
    }, 100);
  });

  // Hide when mouse leaves sublist
  subList.addEventListener('mouseleave', () => {
    subList.classList.remove('active');
  });
});
