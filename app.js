(function () {
  const D = POCKETBOOK_DATA;

  function sectorColor(id) {
    const s = D.sectors.find(s => s.id === id);
    return s ? s.color : "#999";
  }
  function sectorName(id) {
    const s = D.sectors.find(s => s.id === id);
    return s ? s.name : id;
  }

  // ---------- Meta / hero ----------
  document.getElementById("institution").textContent = D.meta.institution;
  document.getElementById("title").textContent = D.meta.title;
  document.getElementById("tagline").textContent = D.meta.tagline;
  document.getElementById("dateRange").textContent = D.meta.dateRange;
  document.getElementById("locationsSummary").textContent = D.meta.locationsSummary;
  document.getElementById("focusAreas").textContent = D.meta.focusAreas.join(" · ");
  document.documentElement.style.setProperty("--teal", D.meta.themeColor || "#0f4c5c");

  const narrativeEl = document.getElementById("narrative");
  D.narrative.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    narrativeEl.appendChild(el);
  });

  // ---------- Profil Kabupaten ----------
  const profileBlock = document.getElementById("block-profile");
  if (D.profile && D.profile.stats && D.profile.stats.length) {
    document.getElementById("profile-narrative").textContent = D.profile.narrative;
    const statsEl = document.getElementById("profile-stats");
    D.profile.stats.forEach(s => {
      const div = document.createElement("div");
      div.className = "profile-stat";
      div.innerHTML = `<div class="value">${s.value}</div><div class="label">${s.label}</div>`;
      statsEl.appendChild(div);
    });
  } else {
    profileBlock.style.display = "none";
  }

  // ---------- Trend chart ----------
  const trendBlock = document.getElementById("block-trend");
  if (D.trend && D.trend.series && D.trend.series.length) {
    document.getElementById("trend-title").textContent = D.trend.title;
    document.getElementById("trend-desc").textContent = D.trend.description;

    const datasets = D.trend.series.map(s => ({
      label: s.name,
      data: s.data,
      borderColor: s.color,
      backgroundColor: s.color,
      tension: 0.25,
      pointRadius: 4
    }));

    if (D.trend.target) {
      datasets.push({
        label: D.trend.target.label,
        data: D.trend.years.map((_, i) =>
          i === D.trend.years.length - 1 ? D.trend.target.value : null
        ).map((v, i, arr) => i === arr.length - 1 ? D.trend.target.value : v),
        borderColor: "#999",
        borderDash: [5, 5],
        pointRadius: 0
      });
    }

    new Chart(document.getElementById("trendChart"), {
      type: "line",
      data: { labels: D.trend.years, datasets },
      options: {
        plugins: { legend: { position: "bottom", labels: { font: { family: "IBM Plex Sans" } } } },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    trendBlock.style.display = "none";
  }

  // ---------- Comparison chart ----------
  const comparisonBlock = document.getElementById("block-comparison");
  if (D.comparison && D.comparison.series && D.comparison.series.length) {
    document.getElementById("comparison-title").textContent = D.comparison.title;
    document.getElementById("comparison-desc").textContent = D.comparison.description;

    new Chart(document.getElementById("comparisonChart"), {
      type: "bar",
      data: {
        labels: D.comparison.categories,
        datasets: D.comparison.series.map(s => ({
          label: s.name,
          data: s.data,
          backgroundColor: s.color
        }))
      },
      options: {
        plugins: { legend: { position: "bottom", labels: { font: { family: "IBM Plex Sans" } } } },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    comparisonBlock.style.display = "none";
  }

  // ---------- IKB spiderweb ----------
  const ikbBlock = document.getElementById("block-ikb");
  if (D.ikb && D.ikb.dimensions && D.ikb.dimensions.length) {
    document.getElementById("ikb-title").textContent = D.ikb.title || "Indeks Kota Berkelanjutan (IKB)";
    document.getElementById("ikb-desc").textContent = D.ikb.description || "";
    new Chart(document.getElementById("ikbChart"), {
      type: "radar",
      data: {
        labels: D.ikb.dimensions.map(d => d.label),
        datasets: [{
          label: D.ikb.title || "IKB",
          data: D.ikb.dimensions.map(d => d.score),
          borderColor: "#0f4c5c",
          backgroundColor: "rgba(15,76,92,0.15)",
          pointBackgroundColor: "#c8862d"
        }]
      },
      options: {
        scales: { r: { min: 0, max: D.ikb.maxScore || 100, ticks: { showLabelBackdrop: false } } },
        plugins: { legend: { display: false } }
      }
    });
  } else {
    ikbBlock.style.display = "none";
  }

  // ---------- Profil kawasan utama ----------
  const locationProfilesBlock = document.getElementById("block-location-profiles");
  if (D.locationProfiles && D.locationProfiles.length) {
    const container = document.getElementById("location-profiles");
    D.locationProfiles.forEach(lp => {
      const div = document.createElement("div");
      div.className = "location-profile";
      div.innerHTML = `<span class="name">${lp.name}</span><p>${lp.description}</p>`;
      container.appendChild(div);
    });
  } else {
    locationProfilesBlock.style.display = "none";
  }

  // ---------- Map ----------
  const mapSection = document.getElementById("block-map");
  if (D.locations && D.locations.length) {
    document.getElementById("map-desc").textContent =
      `${D.locations.length} titik kunjungan tersebar di ${D.meta.locationsSummary}.`;

    const legend = document.getElementById("legend");
    D.sectors.forEach(s => {
      const item = document.createElement("span");
      item.className = "legend-item";
      item.innerHTML = `<span class="legend-dot" style="background:${s.color}"></span>${s.name}`;
      legend.appendChild(item);
    });

    const map = L.map("map");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19
    }).addTo(map);

    const bounds = [];
    D.locations.forEach(loc => {
      const marker = L.circleMarker([loc.lat, loc.lng], {
        radius: 8,
        color: "#fff",
        weight: 2,
        fillColor: sectorColor(loc.sector),
        fillOpacity: 0.9
      }).addTo(map);
      marker.bindPopup(
        `<strong>${loc.name}</strong><br>${loc.city} · ${sectorName(loc.sector)}<br>${loc.address}<br><em>${loc.notes || ""}</em>`
      );
      bounds.push([loc.lat, loc.lng]);
    });
    map.fitBounds(bounds, { padding: [30, 30] });
  } else {
    mapSection.style.display = "none";
  }

  // hide whole context section only if trend, comparison, and map are all empty
  if (
    trendBlock.style.display === "none" &&
    comparisonBlock.style.display === "none" &&
    mapSection.style.display === "none"
  ) {
    document.getElementById("section-data").style.display = "none";
  }

  // ---------- Itinerary ----------
  const itinerarySection = document.getElementById("section-itinerary");
  if (D.itinerary && D.itinerary.length) {
    const container = document.getElementById("itinerary");
    D.itinerary.forEach(day => {
      const dayEl = document.createElement("div");
      dayEl.className = "itinerary-day";
      dayEl.innerHTML = `<div class="itinerary-day-label">${day.day} — ${day.date}</div>`;
      day.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "itinerary-item";
        row.innerHTML = `
          <div class="itinerary-time">${item.time}</div>
          <div>
            <div class="itinerary-title">${item.title}</div>
            <div class="itinerary-location">${item.location}</div>
            ${item.notes ? `<div class="itinerary-notes">${item.notes}</div>` : ""}
          </div>`;
        dayEl.appendChild(row);
      });
      container.appendChild(dayEl);
    });
  } else {
    itinerarySection.style.display = "none";
  }

  // ---------- Methodology ----------
  const sources = D.methodology.sources || [];
  let sourceSentence = "";
  if (sources.length === 1) {
    sourceSentence = `Konteks dan data disusun dari ${sources[0]}.`;
  } else if (sources.length > 1) {
    const allButLast = sources.slice(0, -1).join(", ");
    const last = sources[sources.length - 1];
    sourceSentence = `Konteks dan data disusun dari ${allButLast}, serta ${last}.`;
  }
  document.getElementById("methodology-text").textContent =
    [sourceSentence, D.methodology.disclaimer].filter(Boolean).join(" ");
  document.getElementById("footer-institution").textContent = D.meta.institution;
})();
