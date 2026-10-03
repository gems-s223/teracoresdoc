// Teracores landing page — interactions
(function () {
  "use strict";

  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Intro bump: play on load, then collapse ---------- */
  (function initBump() {
    var bump = document.getElementById("bump");
    var v = document.getElementById("bumpVideo");
    var skip = document.getElementById("bumpSkip");
    if (!bump || !v) return;

    var done = false;
    function collapse() {
      if (done) return;
      done = true;
      bump.classList.add("bump--collapsed");
      // The tall bump pushes the hero below the fold on load, so its scroll
      // reveal may not have fired — show it as the intro clears.
      var heroReveals = document.querySelectorAll(".hero .reveal");
      for (var i = 0; i < heroReveals.length; i++) {
        heroReveals[i].classList.add("is-visible");
      }
      window.setTimeout(function () {
        if (bump.parentNode) bump.parentNode.removeChild(bump);
      }, 800);
    }

    // Respect reduced motion: skip the intro entirely.
    if (prefersReduced) { collapse(); return; }

    v.addEventListener("ended", collapse);
    v.addEventListener("error", collapse);
    if (skip) skip.addEventListener("click", collapse);

    // Safety net: collapse even if "ended" never fires.
    var hardCap = window.setTimeout(collapse, 12000);
    v.addEventListener("loadedmetadata", function () {
      window.clearTimeout(hardCap);
      window.setTimeout(collapse, Math.ceil((v.duration || 5) * 1000) + 2500);
    });

    // Kick off playback; if autoplay is blocked, don't leave a frozen frame.
    var p = v.play && v.play();
    if (p && p.catch) p.catch(collapse);
  })();

  /* ========================================================
     Language toggle (EN ⇄ ID)
     English lives in the HTML and is cached on load; the
     dictionary below only holds the Bahasa Indonesia strings.
     Choice persists in localStorage.
     ======================================================== */
  var I18N = {
    "nav.features": "Fitur",
    "nav.workflow": "Alur Kerja",
    "nav.gallery": "Galeri",
    "nav.lifecycle": "Siklus",
    "nav.cta": "Hubungi kami",

    "bump.skip": "Lewati ▸",

    "hero.eyebrow": "Platform simulasi panas bumi terintegrasi",
    "hero.h1": "Dari model geologi ke simulasi numerik",
    "hero.lede": "Teracores menghubungkan pemodelan geologi dengan simulasi panas bumi dinamis. Impor model statis, bangun model simulasi, jalankan di Waiwera atau TOUGH2, lakukan kalibrasi dalam 3D, lalu integrasikan kembali hasilnya ke dalam alur kerja geologi — semuanya dalam satu lingkungan kerja terintegrasi.",
    "hero.cta1": "Hubungi kami",
    "hero.cta2": "Lihat alur kerjanya",
    "hero.point1": "Terintegrasi dengan Petrel, Leapfrog &amp; lainnya",
    "hero.point2": "Jalankan dengan Waiwera atau TOUGH2",
    "hero.point3": "Visualisasi 3D · 2D · Penampang",

    "promise.eyebrow": "Tantangan pemodelan",
    "promise.h2": "Pemodelan panas bumi sering melibatkan berbagai perangkat dan alur kerja yang belum terintegrasi.",
    "promise.body": "Model geologi dan simulator numerik memiliki struktur data serta kebutuhan input yang berbeda. Perpindahan antarperangkat sering membutuhkan konversi manual dan penyiapan input berulang, sehingga proses dari pemodelan hingga pengambilan keputusan menjadi kurang efisien.",
    "promise.card.eyebrow": "Dengan Teracores",
    "promise.card.h3": "Satu alur kerja terintegrasi, dari pemodelan hingga keputusan",
    "promise.card.li1": "Impor model geologi dari workflow yang sudah Anda gunakan",
    "promise.card.li2": "Bangun grid reservoir dan input simulasi secara visual",
    "promise.card.li3": "Jalankan simulasi dengan Waiwera atau TOUGH2 dan lakukan kalibrasi dalam 3D",
    "promise.card.li4": "Ekspor grid dan hasil simulasi kembali ke Petrel atau Leapfrog",

    "features.eyebrow": "Fitur utama",
    "features.h2": "Dari model geologi hingga hasil simulasi",
    "features.sub": "Teracores menyediakan satu ruang kerja visual yang menghubungkan model geologi, simulasi reservoir, pemodelan wellbore, kalibrasi, dan interpretasi hasil simulasi.",

    "feat1.h3": "Visualisasi dalam tiga tampilan",
    "feat1.p": "Bangun dan periksa model yang sama melalui tampilan <strong>3D, layer 2D, dan penampang</strong> yang tersinkron. Buat penampang dan lihat bagaimana model mengikuti kondisi topografi sebenarnya.",
    "feat2.h3": "Integrasikan model geologi",
    "feat2.p": "Mulai dari model geologi yang sudah Anda miliki dan ubah menjadi grid reservoir yang siap disimulasikan. Teracores bersifat <strong>platform-agnostik</strong>, sehingga dapat digunakan bersama berbagai perangkat pemodelan geologi.",
    "feat3.h3": "Siapkan dan jalankan simulasi",
    "feat3.p": "Siapkan input dan jalankan simulasi <strong>Waiwera atau TOUGH2</strong> langsung dari GUI, dengan pemantauan konvergensi secara real time. Tidak perlu menyunting file JSON atau mesh secara manual maupun menggunakan command line.",
    "feat4.h3": "Simulasi reservoir–wellbore terkopel",
    "feat4.p": "Lakukan <strong>simulasi reservoir–wellbore terkopel secara iteratif</strong>. Model wellbore berinteraksi dengan model reservoir sehingga kondisi wellhead dan respons reservoir tetap konsisten secara fisik.",
    "feat5.h3": "Kalibrasi dalam lingkungan 3D",
    "feat5.p": "Gunakan slider waktu untuk mengamati perubahan suhu, tekanan, dan saturasi pada ketiga tampilan secara bersamaan. Tampilkan data survei downhole untuk mendukung <em>history matching</em> terhadap data lapangan.",
    "feat6.h3": "Integrasikan hasil simulasi kembali ke model geologi",
    "feat6.p": "Ekspor grid dan hasil simulasi ke <strong>Petrel, Leapfrog</strong>, perangkat berbasis Eclipse (GRDECL), atau listing TOUGH2 untuk PyTOUGH — sehingga hasil simulasi tetap terhubung dengan workflow geologi Anda.",

    "showcase.eyebrow": "Visualisasi model",
    "showcase.h2": "Dirancang untuk memahami model secara visual",
    "showcase.sub": "Jelajahi model dan hasil simulasi secara visual. Periksa, bandingkan, dan komunikasikan perilaku reservoir yang kompleks tanpa harus bergantung pada tabel angka semata.",
    "sp1.k": "3D / 2D / Penampang",
    "sp1.h3": "Tiga tampilan yang tersinkron",
    "sp1.p": "Eksplorasi seluruh mesh dalam 3D, lihat layer tertentu, atau buat penampang — semuanya dari model yang sama.",
    "sp2.k": "Properti",
    "sp2.h3": "Dari jenis batuan hingga hasil simulasi",
    "sp2.p": "Visualisasikan sel berdasarkan jenis batuan, batas, kondisi awal, atau berbagai properti hasil simulasi.",
    "sp3.k": "Waktu",
    "sp3.h3": "Amati perubahan reservoir",
    "sp3.p": "Gunakan satu slider waktu untuk menelusuri perubahan model, dari kondisi alami hingga tahapan prakiraan terakhir.",

    "how.eyebrow": "Workflow terintegrasi",
    "how.h2": "Model geologi → simulasi dinamis → interpretasi",
    "how.sub": "Teracores menyatukan pemodelan geologi, simulasi dinamis, kalibrasi, dan interpretasi dalam satu workflow visual yang konsisten — mengurangi perpindahan data dan pekerjaan manual antarperangkat.",
    "step1.h3": "Impor &amp; bangun model",
    "step1.p": "Impor model geologi dan bangun grid reservoir yang siap disimulasikan, termasuk mesh, jenis batuan, batas, sumber, dan sumur.",
    "step2.h3": "Siapkan &amp; jalankan simulasi",
    "step2.p": "Siapkan input simulasi secara visual dan jalankan di Waiwera atau TOUGH2, termasuk model wellbore terkopel, sambil memantau proses simulasi.",
    "step3.h3": "Kalibrasi &amp; interpretasikan",
    "step3.p": "Visualisasikan hasil simulasi, bandingkan dengan data lapangan, dan integrasikan kembali grid serta hasil ke dalam workflow geologi untuk mendukung pengambilan keputusan.",
    "how.label": "Model Geologi → Simulasi Dinamis → Interpretasi &nbsp;·&nbsp; Petrel · Leapfrog · Waiwera · TOUGH2 · PyTOUGH",

    "well.eyebrow": "Model wellbore terkopel",
    "well.h2": "Reservoir dan sumur, diselesaikan bersama",
    "well.body": "Sumur panas bumi dan reservoir yang diproduksinya adalah satu sistem: tekanan di zona umpan menggerakkan aliran, aliran menentukan penurunan tekanan dan suhu sepanjang wellbore, dan drawdown tersebut langsung memengaruhi reservoir. Teracores memodelkan keduanya sekaligus — model wellbore terintegrasi beriterasi dengan simulasi reservoir hingga kondisi wellhead dan respons reservoir saling konsisten.",
    "well.li1": "Zona umpan bertukar massa dan panas dengan grid reservoir di kedalaman.",
    "well.li2": "Penurunan tekanan dan flashing dihitung di sepanjang wellbore.",
    "well.li3": "Kedua model beriterasi menuju satu solusi wellhead yang konsisten secara fisik.",

    "video.eyebrow": "Visualisasi model",
    "video.h2": "Patahan, layer, dan setiap sel — dalam 3D",
    "video.sub": "Model reservoir panas bumi berpatahan yang dibangun dan dieksplorasi di Teracores.",

    "life.eyebrow": "Siklus pemodelan",
    "life.h2": "Satu model untuk setiap tahap pengembangan lapangan",
    "life.sub": "Teracores memungkinkan model yang sama digunakan dari tahap karakterisasi kondisi awal hingga simulasi produksi dan prakiraan jangka panjang.",
    "phase1.tag": "Fase 1",
    "phase1.h3": "Kondisi Awal",
    "phase1.p": "Karakterisasi kondisi awal reservoir sebelum pengembangan, mencakup distribusi suhu, tekanan, dan kondisi geologi.",
    "phase2.tag": "Fase 2",
    "phase2.h3": "History Matching Produksi",
    "phase2.p": "Kalibrasi model terhadap riwayat produksi dan data sumur untuk meningkatkan keandalan model reservoir.",
    "phase3.tag": "Fase 3",
    "phase3.h3": "Prakiraan &amp; Skenario",
    "phase3.p": "Lakukan prakiraan jangka panjang dan bandingkan berbagai skenario, termasuk rencana pengeboran, strategi injeksi, dan pengembangan lapangan.",

    "proof.eyebrow": "Pengakuan Akademik &amp; Profesional",
    "proof.h2": "Diakui oleh akademisi dan praktisi panas bumi",
    "award.title": "Presenter Terbaik · Kategori Inovasi",
    "award.meta": "15th ITB International Geothermal Workshop (IIGW) 2026 · Forum Akademisi &amp; Praktisi Panas Bumi",
    "proof.org": "Dikembangkan di <strong>PT Pertamina Geothermal Energy (PGE)</strong> dan mendapatkan pengakuan melalui presentasi serta penghargaan pada forum yang mempertemukan akademisi dan praktisi panas bumi.",
    "proof.cap1": "Penghargaan Presenter Terbaik — 15th ITB International Geothermal Workshop, 2026.",
    "proof.cap2": "Presenter Terbaik, Sesi Inovasi — Mesias Piere Canilandi, PT Pertamina Geothermal Energy.",

    "voices.eyebrow": "Testimoni",
    "voices.h2": "Perspektif dari pimpinan PGE",
    "voices.sub": "Perspektif pimpinan senior eksplorasi dan eksploitasi PT Pertamina Geothermal Energy mengenai peran Teracores dalam mendukung pekerjaan reservoir sehari-hari.",
    "voices.role1": "VP Eksploitasi · PGE",
    "voices.role2": "Direktur Eksplorasi &amp; Pengembangan · PGE",

    "cta.h2": "Siap mengembangkan workflow simulasi panas bumi Anda?",
    "cta.p": "Ceritakan tantangan pemodelan Anda dan lihat bagaimana Teracores dapat mendukung workflow simulasi panas bumi di tim Anda.",
    "cta.btn": "Hubungi kami",
    "cta.note": "Dikembangkan dan didukung oleh tim Teracores di PT Pertamina Geothermal Energy.",

    "footer.copy": "Platform terintegrasi untuk simulasi numerik reservoir–wellbore panas bumi."
  };
  var TITLES = {
    en: "Teracores — Integrated Geothermal Reservoir & Wellbore Simulation",
    id: "Teracores — Simulasi Reservoir & Wellbore Panas Bumi Terintegrasi"
  };

  (function initI18n() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
    if (!nodes.length) return;
    var enCache = {};
    nodes.forEach(function (n) { enCache[n.getAttribute("data-i18n")] = n.innerHTML; });
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".langsw__btn"));
    var STORE = "teracores-lang";

    function apply(lang) {
      var isId = lang === "id";
      nodes.forEach(function (n) {
        var key = n.getAttribute("data-i18n");
        var val = isId && I18N[key] != null ? I18N[key] : enCache[key];
        if (val != null && n.innerHTML !== val) n.innerHTML = val;
      });
      document.documentElement.lang = isId ? "id" : "en";
      document.documentElement.classList.toggle("lang-id", isId);
      if (TITLES[lang]) document.title = TITLES[lang];
      buttons.forEach(function (b) {
        var on = b.getAttribute("data-lang") === lang;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      try { localStorage.setItem(STORE, lang); } catch (e) {}
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });

    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved === "id") apply("id");
  })();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!prefersReduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ========================================================
     Hero viewer — real product footage, scrubbable in place.
     The slider seeks the video; the button plays / pauses.
     ======================================================== */
  initHeroVideo();

  function initHeroVideo() {
    var v = document.getElementById("heroVideo");
    if (!v) return;
    var slider = document.getElementById("timeSlider");
    var readout = document.getElementById("timeReadout");
    var playBtn = document.getElementById("playBtn");

    var dur = 0;
    var scrubbing = false;
    var resumeAfterScrub = false;

    function fmt(t) {
      t = Math.max(0, t || 0);
      var m = Math.floor(t / 60), s = Math.floor(t % 60);
      return m + ":" + (s < 10 ? "0" : "") + s;
    }
    function setFill(t) {
      if (slider && dur) slider.style.setProperty("--fill", (t / dur * 100) + "%");
    }
    function setReadout(t) {
      if (readout) readout.textContent = fmt(t) + " / " + fmt(dur);
    }
    function syncIcon() {
      var playing = !v.paused && !v.ended;
      if (playBtn) {
        playBtn.textContent = playing ? "⏸" : "▶";
        playBtn.setAttribute("aria-pressed", playing ? "true" : "false");
      }
    }

    v.addEventListener("loadedmetadata", function () {
      dur = v.duration || 26;
      if (slider) {
        slider.min = 0;
        slider.max = dur;
        slider.step = Math.max(0.03, dur / 600);
        slider.value = 0;
      }
      setReadout(0);
      setFill(0);
    });

    v.addEventListener("timeupdate", function () {
      if (scrubbing) return;
      if (slider) slider.value = v.currentTime;
      setFill(v.currentTime);
      setReadout(v.currentTime);
    });

    if (slider) {
      slider.addEventListener("input", function () {
        var t = Number(slider.value);
        v.currentTime = t;
        setFill(t);
        setReadout(t);
      });
      // pause playback while actively dragging, resume after
      var startScrub = function () {
        scrubbing = true;
        resumeAfterScrub = !v.paused;
        if (resumeAfterScrub) { v.pause(); }
      };
      var endScrub = function () {
        if (!scrubbing) return;
        scrubbing = false;
        if (resumeAfterScrub) { playSafely(); }
        syncIcon();
      };
      slider.addEventListener("pointerdown", startScrub);
      slider.addEventListener("pointerup", endScrub);
      slider.addEventListener("pointercancel", endScrub);
      // keyboard scrubbing (arrow keys fire input, no pointer events)
      slider.addEventListener("keydown", function () { scrubbing = true; });
      slider.addEventListener("keyup", function () { scrubbing = false; });
    }

    function toggle() {
      if (v.paused) { playSafely(); } else { v.pause(); }
      syncIcon();
    }
    function playSafely() {
      var p = v.play();
      if (p && p.catch) p.catch(function () { syncIcon(); });
    }

    if (playBtn) playBtn.addEventListener("click", toggle);
    v.addEventListener("click", toggle);
    v.addEventListener("play", syncIcon);
    v.addEventListener("pause", syncIcon);

    // Autoplay the loop, unless the visitor prefers reduced motion —
    // then leave it paused on the poster, fully scrubbable on demand.
    if (prefersReduced) {
      v.pause();
    } else {
      playSafely();
    }
    syncIcon();
  }
})();
