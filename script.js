const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.boxShadow =
    window.scrollY > 40 ? "0 2px 20px rgba(0,0,0,0.07)" : "none";
});
