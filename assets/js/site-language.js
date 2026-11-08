// The content itself is statically rendered in each language; enhance the shared theme navigation.
(() => {
  const korean = location.pathname.startsWith("/ko/");
  document.documentElement.lang = korean ? "ko" : "en";
  if (!korean) return;
  const labels = { "/": "소개", "/publications/": "논문", "/experience/": "경력", "/writing/": "발표 및 글", "/cv/": "이력서" };
  document.querySelectorAll("header a, .navbar a").forEach((link) => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !(url.pathname in labels)) return;
    const path = url.pathname;
    link.href = "/ko" + path;
    if (link.closest(".nav-item") || link.classList.contains("nav-link")) {
      link.textContent = labels[path];
      const current = location.pathname === "/ko" + path;
      link.classList.toggle("active", current);
      link.closest(".nav-item")?.classList.toggle("active", current);
      if (current) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  });
  const contact = document.querySelector(".contact-note");
  if (contact) contact.textContent = "협업 및 연구 관련 문의는 이메일로 연락해 주세요.";
})();
