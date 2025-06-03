// Practice Matters Site - JS Activated
console.log("Welcome to Practice Matters");

// Example: Add gentle fade-in to body
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = 1;
  }, 100);
});
