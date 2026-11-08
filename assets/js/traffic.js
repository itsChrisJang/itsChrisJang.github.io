(() => {
  const panel = document.querySelector("[data-traffic-endpoint]");
  if (!panel) return;
  let endpoint;
  try {
    endpoint = new URL(panel.dataset.trafficEndpoint);
    if (endpoint.protocol !== "https:") return;
  } catch {
    return;
  }
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const first = new Date(today + "T00:00:00Z");
  first.setUTCDate(first.getUTCDate() - 6);
  const dates = { today, week: first.toISOString().slice(0, 10), total: null };
  let failed = false;
  Promise.all(
    Object.entries(dates).map(async ([key, start]) => {
      const url = new URL("/counter/TOTAL.json", endpoint);
      if (start) {
        url.searchParams.set("start", start);
        url.searchParams.set("end", today);
      }
      try {
        const result = await fetch(url, { signal: AbortSignal.timeout(8000), credentials: "omit" });
        if (!result.ok) throw new Error("Statistics unavailable");
        const data = await result.json();
        if (typeof data.count !== "string" && typeof data.count !== "number") throw new Error("Invalid count");
        panel.querySelector('[data-count="' + key + '"]').textContent = String(data.count);
      } catch {
        failed = true;
      }
    })
  ).then(() => {
    if (failed)
      panel.querySelector('[role="status"]').textContent = location.pathname.startsWith("/ko/")
        ? "일부 방문 통계를 불러오지 못했습니다. 잠시 후 다시 확인해 주세요."
        : "Some visit statistics are temporarily unavailable. Please try again later.";
  });
})();
