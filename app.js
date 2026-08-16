/* -------------------------------------------------------------------------- */
/* GALAXY EXPLORER — AURORA COSMIC INTERACTIVE ENGINE                        */
/* -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================== */
  /* 01. PLANETARY DATASTORE                                                     */
  /* ========================================================================== */
  const PLANETS_DATA = [
    {
      id: 'mercury',
      name: 'Mercury',
      type: 'inner',
      tag: 'INNER TERRESTRIAL',
      subtitle: 'The Swift & Scorched World',
      color: '#a3a3a3',
      secondaryColor: '#525252',
      radiusKm: 2439,
      massEarth: 0.055,
      distSunAU: 0.39,
      distSunMkm: 57.9,
      tempC: '167°C (Peak 430°C)',
      tempVal: 167,
      gravityMs2: 3.7,
      dayLength: '58.6 Earth Days',
      moons: 0,
      desc: 'Mercury is the smallest planet in the Solar System and closest to the Sun. Its surface is heavily cratered and resembles Earth\'s Moon.',
      atmosphere: [
        { gas: 'Oxygen (O₂)', pct: 42 },
        { gas: 'Sodium (Na)', pct: 29 },
        { gas: 'Hydrogen (H₂)', pct: 22 },
        { gas: 'Helium (He)', pct: 6 }
      ]
    },
    {
      id: 'venus',
      name: 'Venus',
      type: 'inner',
      tag: 'INNER TERRESTRIAL',
      subtitle: 'The Runaway Greenhouse Inferno',
      color: '#f59e0b',
      secondaryColor: '#d97706',
      radiusKm: 6051,
      massEarth: 0.815,
      distSunAU: 0.72,
      distSunMkm: 108.2,
      tempC: '464°C (Hottest Planet)',
      tempVal: 464,
      gravityMs2: 8.87,
      dayLength: '243 Earth Days (Retrograde)',
      moons: 0,
      desc: 'Venus is Earth\'s twin in size but a scorching hellscape with sulfuric acid clouds and atmospheric pressure 92 times greater than Earth.',
      atmosphere: [
        { gas: 'Carbon Dioxide (CO₂)', pct: 96.5 },
        { gas: 'Nitrogen (N₂)', pct: 3.5 }
      ]
    },
    {
      id: 'earth',
      name: 'Earth',
      type: 'inner',
      tag: 'INNER TERRESTRIAL',
      subtitle: 'The Blue Marble & Cradle of Life',
      color: '#3b82f6',
      secondaryColor: '#10b981',
      radiusKm: 6371,
      massEarth: 1.0,
      distSunAU: 1.0,
      distSunMkm: 149.6,
      tempC: '15°C Average',
      tempVal: 15,
      gravityMs2: 9.81,
      dayLength: '24 Hours',
      moons: 1,
      desc: 'Earth is our home planet — the third planet from the Sun and the only astronomical object known to harbor liquid oceans and life.',
      atmosphere: [
        { gas: 'Nitrogen (N₂)', pct: 78.1 },
        { gas: 'Oxygen (O₂)', pct: 20.9 },
        { gas: 'Argon (Ar)', pct: 0.93 },
        { gas: 'Carbon Dioxide (CO₂)', pct: 0.04 }
      ]
    },
    {
      id: 'mars',
      name: 'Mars',
      type: 'inner',
      tag: 'INNER TERRESTRIAL',
      subtitle: 'The Red Planet & Dusty Frontier',
      color: '#ef4444',
      secondaryColor: '#991b1b',
      radiusKm: 3389,
      massEarth: 0.107,
      distSunAU: 1.52,
      distSunMkm: 227.9,
      tempC: '-63°C Average',
      tempVal: -63,
      gravityMs2: 3.71,
      dayLength: '24 Hours 37 Mins',
      moons: 2,
      desc: 'Mars is a dusty, cold, desert world with a thin atmosphere. It holds Olympus Mons, the tallest volcano in the solar system (3× height of Everest).',
      atmosphere: [
        { gas: 'Carbon Dioxide (CO₂)', pct: 95.3 },
        { gas: 'Nitrogen (N₂)', pct: 2.6 },
        { gas: 'Argon (Ar)', pct: 1.9 }
      ]
    },
    {
      id: 'jupiter',
      name: 'Jupiter',
      type: 'outer',
      tag: 'OUTER GAS GIANT',
      subtitle: 'The King of Planets',
      color: '#f97316',
      secondaryColor: '#ca8a04',
      radiusKm: 69911,
      massEarth: 317.8,
      distSunAU: 5.2,
      distSunMkm: 778.5,
      tempC: '-110°C',
      tempVal: -110,
      gravityMs2: 24.79,
      dayLength: '9 Hours 55 Mins',
      moons: 95,
      desc: 'Jupiter is more than twice as massive as all other planets combined. Its iconic Great Red Spot is a giant storm larger than planet Earth!',
      atmosphere: [
        { gas: 'Hydrogen (H₂)', pct: 89.8 },
        { gas: 'Helium (He)', pct: 10.2 }
      ]
    },
    {
      id: 'saturn',
      name: 'Saturn',
      type: 'outer',
      tag: 'OUTER GAS GIANT',
      subtitle: 'The Ringed Jewel of Space',
      color: '#fde047',
      secondaryColor: '#eab308',
      radiusKm: 58232,
      massEarth: 95.2,
      distSunAU: 9.58,
      distSunMkm: 1434.0,
      tempC: '-140°C',
      tempVal: -140,
      gravityMs2: 10.44,
      dayLength: '10 Hours 33 Mins',
      moons: 146,
      desc: 'Adorned with thousands of beautiful ringlets made of ice and rock. Saturn is so light it has a density less than water — it would float in a giant bathtub!',
      hasRings: true,
      atmosphere: [
        { gas: 'Hydrogen (H₂)', pct: 96.3 },
        { gas: 'Helium (He)', pct: 3.25 }
      ]
    },
    {
      id: 'uranus',
      name: 'Uranus',
      type: 'outer',
      tag: 'OUTER ICE GIANT',
      subtitle: 'The Sideways Ice Giant',
      color: '#22d3ee',
      secondaryColor: '#0891b2',
      radiusKm: 25362,
      massEarth: 14.5,
      distSunAU: 19.22,
      distSunMkm: 2871.0,
      tempC: '-195°C',
      tempVal: -195,
      gravityMs2: 8.69,
      dayLength: '17 Hours 14 Mins',
      moons: 28,
      desc: 'Uranus spins nearly on its side (98° axial tilt) likely due to a colossal impact long ago. Its methane atmosphere gives it a cyan-blue tint.',
      atmosphere: [
        { gas: 'Hydrogen (H₂)', pct: 82.5 },
        { gas: 'Helium (He)', pct: 15.2 },
        { gas: 'Methane (CH₄)', pct: 2.3 }
      ]
    },
    {
      id: 'neptune',
      name: 'Neptune',
      type: 'outer',
      tag: 'OUTER ICE GIANT',
      subtitle: 'The Supersonic Wind Realm',
      color: '#60a5fa',
      secondaryColor: '#1d4ed8',
      radiusKm: 24622,
      massEarth: 17.1,
      distSunAU: 30.05,
      distSunMkm: 4495.0,
      tempC: '-200°C',
      tempVal: -200,
      gravityMs2: 11.15,
      dayLength: '16 Hours 6 Mins',
      moons: 16,
      desc: 'Neptune is dark, cold, and whipped by supersonic winds reaching 2,100 km/h — faster than the speed of sound on Earth!',
      atmosphere: [
        { gas: 'Hydrogen (H₂)', pct: 80.0 },
        { gas: 'Helium (He)', pct: 19.0 },
        { gas: 'Methane (CH₄)', pct: 1.0 }
      ]
    }
  ];

  /* ========================================================================== */
  /* 02. WEB AUDIO SYNTHESIZER                                                  */
  /* ========================================================================== */
  let audioCtx = null;
  let isSoundOn = true;
  let ambientOsc1 = null, ambientOsc2 = null, ambientGain = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Cosmic ambient drone
      ambientGain = audioCtx.createGain();
      ambientGain.gain.setValueAtTime(0.02, audioCtx.currentTime);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, audioCtx.currentTime);

      ambientOsc1 = audioCtx.createOscillator();
      ambientOsc1.type = 'sine';
      ambientOsc1.frequency.setValueAtTime(55, audioCtx.currentTime);

      ambientOsc2 = audioCtx.createOscillator();
      ambientOsc2.type = 'sawtooth';
      ambientOsc2.frequency.setValueAtTime(110.5, audioCtx.currentTime);

      ambientOsc1.connect(ambientGain);
      ambientOsc2.connect(filter);
      filter.connect(ambientGain);
      ambientGain.connect(audioCtx.destination);

      ambientOsc1.start();
      ambientOsc2.start();
    } catch (e) {
      console.warn('AudioContext not supported or blocked');
    }
  }

  function playUiSound(type) {
    if (!isSoundOn || !audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;

    if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      g.gain.setValueAtTime(0.04, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        g.gain.setValueAtTime(0.05, now + idx * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(g);
        g.connect(audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } else if (type === 'wrong') {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.2);
      g.gain.setValueAtTime(0.05, now);
      g.gain.linearRampToValueAtTime(0.001, now + 0.2);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  }

  // Audio Toggle
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundStatus = document.getElementById('sound-status');
  const soundSvg = document.getElementById('sound-svg');

  soundToggleBtn.addEventListener('click', () => {
    initAudio();
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
      soundStatus.textContent = 'ON';
      soundStatus.className = 'aurora-cyan';
      soundSvg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';
      if (ambientGain && audioCtx) ambientGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    } else {
      soundStatus.textContent = 'OFF';
      soundStatus.className = 'aurora-pink';
      soundSvg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';
      if (ambientGain && audioCtx) ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
    }
  });

  document.addEventListener('click', () => {
    initAudio();
  }, { once: true });


  /* ========================================================================== */
  /* 03. STARFIELD BACKGROUND ENGINE                                            */
  /* ========================================================================== */
  const starCanvas = document.getElementById('starfield-canvas');
  const starCtx = starCanvas.getContext('2d');
  let stars = [], shootingStars = [];
  let mouseX = 0, mouseY = 0;

  function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
    initStars();
  }
  window.addEventListener('resize', resizeStarCanvas);

  function initStars() {
    stars = [];
    const count = Math.floor((starCanvas.width * starCanvas.height) / 3200);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * starCanvas.width,
        y: Math.random() * starCanvas.height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1)
      });
    }
  }

  function spawnShootingStar() {
    if (Math.random() < 0.025 && shootingStars.length < 3) {
      shootingStars.push({
        x: Math.random() * starCanvas.width,
        y: Math.random() * (starCanvas.height / 2),
        length: Math.random() * 70 + 40,
        speed: Math.random() * 9 + 11,
        angle: Math.PI / 4,
        opacity: 1
      });
    }
  }

  function renderStarfield() {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    stars.forEach(star => {
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 0.95 || star.alpha < 0.15) star.twinkleSpeed = -star.twinkleSpeed;

      const parallaxX = (mouseX - starCanvas.width / 2) * 0.0004 * star.z;
      const parallaxY = (mouseY - starCanvas.height / 2) * 0.0004 * star.z;

      starCtx.beginPath();
      starCtx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
      starCtx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.alpha)})`;
      starCtx.shadowBlur = star.size > 1.2 ? 5 : 0;
      starCtx.shadowColor = '#06b6d4';
      starCtx.fill();
    });

    spawnShootingStar();
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.015;

      if (s.opacity <= 0 || s.x > starCanvas.width || s.y > starCanvas.height) {
        shootingStars.splice(i, 1);
        continue;
      }

      const tailX = s.x - Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;

      const grad = starCtx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(6, 182, 212, ${s.opacity})`);
      grad.addColorStop(1, 'rgba(6, 182, 212, 0)');

      starCtx.beginPath();
      starCtx.moveTo(s.x, s.y);
      starCtx.lineTo(tailX, tailY);
      starCtx.strokeStyle = grad;
      starCtx.lineWidth = 1.8;
      starCtx.stroke();
    }

    requestAnimationFrame(renderStarfield);
  }

  resizeStarCanvas();
  renderStarfield();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });


  /* ========================================================================== */
  /* 04. PROCEDURAL 3D PLANET CANVAS RENDERER                                   */
  /* ========================================================================== */
  function render3DPlanet(canvas, planetData, angleOffset = 0) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(width, height) * 0.36;

    ctx.clearRect(0, 0, width, height);

    // 1. Atmospheric Glow
    const glowGrad = ctx.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.3);
    glowGrad.addColorStop(0, planetData.color + '33');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.3, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // 2. Base Sphere Fill
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();

    const baseGrad = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
    baseGrad.addColorStop(0, planetData.color);
    baseGrad.addColorStop(1, planetData.secondaryColor || '#000000');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, width, height);

    // 3. Surface Texture Bands
    if (planetData.id === 'jupiter' || planetData.id === 'saturn') {
      for (let y = cy - r; y <= cy + r; y += 8) {
        const bandAlpha = Math.sin((y + angleOffset * 20) * 0.1) * 0.2 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${bandAlpha})`;
        ctx.fillRect(cx - r, y, r * 2, 4);
      }
      if (planetData.id === 'jupiter') {
        const spotX = cx + Math.cos(angleOffset) * (r * 0.5);
        const spotY = cy + r * 0.2;
        ctx.beginPath();
        ctx.ellipse(spotX, spotY, r * 0.25, r * 0.15, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#dc2626';
        ctx.fill();
      }
    } else if (planetData.id === 'earth') {
      for (let i = 0; i < 5; i++) {
        const cloudX = cx + Math.sin(angleOffset + i) * (r * 0.6);
        const cloudY = cy + Math.cos(angleOffset * 0.5 + i) * (r * 0.5);
        ctx.beginPath();
        ctx.arc(cloudX, cloudY, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }
    } else if (planetData.id === 'mars') {
      ctx.beginPath();
      ctx.arc(cx, cy - r * 0.75, r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
    }

    // 4. Shading
    const shadeGrad = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, r * 0.1, cx, cy, r * 1.05);
    shadeGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
    shadeGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.1)');
    shadeGrad.addColorStop(0.85, 'rgba(0, 0, 0, 0.75)');
    shadeGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    ctx.fillStyle = shadeGrad;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();

    // 5. Saturn Rings
    if (planetData.hasRings || planetData.id === 'saturn') {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.3);

      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.8, r * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.5)';
      ctx.lineWidth = r * 0.22;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.5, r * 0.38, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.35)';
      ctx.lineWidth = r * 0.1;
      ctx.stroke();

      ctx.restore();
    }
  }


  /* ========================================================================== */
  /* 05. INTERACTIVE SOLAR SYSTEM ORBIT SIMULATOR                               */
  /* ========================================================================== */
  const orbitCanvas = document.getElementById('orbit-canvas');
  const orbitCtx = orbitCanvas.getContext('2d');
  const tooltip = document.getElementById('sim-tooltip');

  let simRunning = true;
  let simSpeed = 1.0;
  let showOrbitLines = true;
  let planetAngles = PLANETS_DATA.map(() => Math.random() * Math.PI * 2);
  let hoveredSimPlanet = null;

  function renderOrbitSimulator() {
    orbitCtx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);

    const cx = orbitCanvas.width / 2;
    const cy = orbitCanvas.height / 2;

    // Sun Center
    const sunGrad = orbitCtx.createRadialGradient(cx, cy, 5, cx, cy, 35);
    sunGrad.addColorStop(0, '#ffffff');
    sunGrad.addColorStop(0.3, '#fde047');
    sunGrad.addColorStop(0.7, '#f97316');
    sunGrad.addColorStop(1, 'rgba(249, 115, 22, 0)');
    orbitCtx.beginPath();
    orbitCtx.arc(cx, cy, 45, 0, Math.PI * 2);
    orbitCtx.fillStyle = sunGrad;
    orbitCtx.fill();

    orbitCtx.beginPath();
    orbitCtx.arc(cx, cy, 16, 0, Math.PI * 2);
    orbitCtx.fillStyle = '#fde047';
    orbitCtx.shadowBlur = 20;
    orbitCtx.shadowColor = '#fde047';
    orbitCtx.fill();
    orbitCtx.shadowBlur = 0;

    const mousePos = getCanvasMousePos(orbitCanvas);
    hoveredSimPlanet = null;

    PLANETS_DATA.forEach((planet, idx) => {
      const orbitRadius = 60 + idx * 28;
      const orbitalSpeed = (1 / (idx + 1)) * 0.015 * simSpeed;

      if (simRunning) {
        planetAngles[idx] += orbitalSpeed;
      }

      const px = cx + Math.cos(planetAngles[idx]) * orbitRadius * 1.5;
      const py = cy + Math.sin(planetAngles[idx]) * orbitRadius * 0.8;

      if (showOrbitLines) {
        orbitCtx.beginPath();
        orbitCtx.ellipse(cx, cy, orbitRadius * 1.5, orbitRadius * 0.8, 0, 0, Math.PI * 2);
        orbitCtx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
        orbitCtx.lineWidth = 1;
        orbitCtx.stroke();
      }

      const dist = Math.hypot(mousePos.x - px, mousePos.y - py);
      const size = Math.max(6, 4 + idx * 1.2);

      if (dist < size + 8) {
        hoveredSimPlanet = planet;
      }

      orbitCtx.beginPath();
      orbitCtx.arc(px, py, size, 0, Math.PI * 2);
      orbitCtx.fillStyle = planet.color;
      orbitCtx.shadowBlur = dist < size + 8 ? 12 : 0;
      orbitCtx.shadowColor = planet.color;
      orbitCtx.fill();
      orbitCtx.shadowBlur = 0;

      if (hoveredSimPlanet === planet) {
        orbitCtx.strokeStyle = '#06b6d4';
        orbitCtx.lineWidth = 2;
        orbitCtx.stroke();

        tooltip.style.display = 'block';
        tooltip.style.left = `${px}px`;
        tooltip.style.top = `${py - 10}px`;
        tooltip.innerHTML = `<strong>${planet.name}</strong> (${planet.type.toUpperCase()})<br/><span class="aurora-cyan">Click to Inspect</span>`;
      }
    });

    if (!hoveredSimPlanet) {
      tooltip.style.display = 'none';
    }

    requestAnimationFrame(renderOrbitSimulator);
  }

  function getCanvasMousePos(canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (mouseX - rect.left) * (canvas.width / rect.width),
      y: (mouseY - rect.top) * (canvas.height / rect.height)
    };
  }

  renderOrbitSimulator();

  const playBtn = document.getElementById('sim-play-btn');
  const playSvg = document.getElementById('sim-play-svg');
  const playText = document.getElementById('sim-play-text');
  const speedSlider = document.getElementById('sim-speed-slider');
  const speedVal = document.getElementById('sim-speed-val');
  const linesBtn = document.getElementById('sim-lines-btn');
  const resetBtn = document.getElementById('sim-reset-btn');

  playBtn.addEventListener('click', () => {
    playUiSound('click');
    simRunning = !simRunning;
    if (simRunning) {
      playSvg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
      playText.textContent = 'PAUSE';
      playBtn.classList.add('active');
    } else {
      playSvg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
      playText.textContent = 'PLAY';
      playBtn.classList.remove('active');
    }
  });

  speedSlider.addEventListener('input', (e) => {
    simSpeed = parseFloat(e.target.value);
    speedVal.textContent = `${simSpeed.toFixed(1)}x`;
  });

  linesBtn.addEventListener('click', () => {
    playUiSound('click');
    showOrbitLines = !showOrbitLines;
    linesBtn.classList.toggle('active');
  });

  resetBtn.addEventListener('click', () => {
    playUiSound('click');
    planetAngles = PLANETS_DATA.map(() => Math.random() * Math.PI * 2);
  });

  orbitCanvas.addEventListener('click', () => {
    if (hoveredSimPlanet) {
      playUiSound('click');
      openPlanetModal(hoveredSimPlanet);
    }
  });


  /* ========================================================================== */
  /* 06. PLANETARY CATALOGUE GRID                                               */
  /* ========================================================================== */
  const gridContainer = document.getElementById('planets-grid-container');

  function renderPlanetsGrid(filter = 'all') {
    gridContainer.innerHTML = '';

    const filtered = PLANETS_DATA.filter(p => filter === 'all' || p.type === filter);

    filtered.forEach(planet => {
      const card = document.createElement('div');
      card.className = 'planet-card glass-panel';

      card.innerHTML = `
        <div class="planet-card-canvas-wrap">
          <canvas id="card-canvas-${planet.id}" width="140" height="140"></canvas>
        </div>
        <div class="planet-tag">${planet.tag}</div>
        <h3>${planet.name}</h3>
        <p class="planet-quick-desc">${planet.desc.substring(0, 75)}...</p>
        
        <div class="planet-specs-mini">
          <div class="mini-spec">
            <span class="mini-spec-lbl">DISTANCE</span>
            <span class="mini-spec-val aurora-cyan">${planet.distSunAU} AU</span>
          </div>
          <div class="mini-spec">
            <span class="mini-spec-lbl">MOONS</span>
            <span class="mini-spec-val aurora-gold">${planet.moons}</span>
          </div>
        </div>

        <button class="btn btn-primary inspect-btn" data-id="${planet.id}">
          <span>Inspect Planet</span>
          <svg class="btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      `;

      gridContainer.appendChild(card);

      const canvas = card.querySelector(`#card-canvas-${planet.id}`);
      let cardAngle = Math.random() * Math.PI;

      function cardAnimLoop() {
        cardAngle += 0.015;
        render3DPlanet(canvas, planet, cardAngle);
        requestAnimationFrame(cardAnimLoop);
      }
      cardAnimLoop();
    });

    gridContainer.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const p = PLANETS_DATA.find(x => x.id === id);
        playUiSound('click');
        openPlanetModal(p);
      });
    });
  }

  renderPlanetsGrid('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      playUiSound('click');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderPlanetsGrid(e.target.getAttribute('data-filter'));
    });
  });


  /* ========================================================================== */
  /* 07. PLANET COMPARISON ENGINE                                               */
  /* ========================================================================== */
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  const compareContainer = document.getElementById('compare-display-container');

  function initComparisonSelectors() {
    PLANETS_DATA.forEach((p, idx) => {
      const optA = document.createElement('option');
      optA.value = p.id;
      optA.textContent = `${p.name} (${p.tag})`;
      if (idx === 2) optA.selected = true;
      selectA.appendChild(optA);

      const optB = document.createElement('option');
      optB.value = p.id;
      optB.textContent = `${p.name} (${p.tag})`;
      if (idx === 3) optB.selected = true;
      selectB.appendChild(optB);
    });
  }

  function updateComparison() {
    const planetA = PLANETS_DATA.find(p => p.id === selectA.value);
    const planetB = PLANETS_DATA.find(p => p.id === selectB.value);

    if (!planetA || !planetB) return;

    compareContainer.innerHTML = `
      ${renderCompareColumn(planetA, planetB)}
      ${renderCompareColumn(planetB, planetA)}
    `;

    const canvasA = document.getElementById(`compare-canvas-${planetA.id}`);
    const canvasB = document.getElementById(`compare-canvas-${planetB.id}`);
    if (canvasA) render3DPlanet(canvasA, planetA, 0.5);
    if (canvasB) render3DPlanet(canvasB, planetB, 1.2);
  }

  function renderCompareColumn(planet, otherPlanet) {
    const maxRadius = 70000;
    const maxMass = 320;
    const maxGravity = 25;

    const radPct = Math.min(100, (planet.radiusKm / maxRadius) * 100);
    const massPct = Math.min(100, (planet.massEarth / maxMass) * 100);
    const gravPct = Math.min(100, (planet.gravityMs2 / maxGravity) * 100);

    return `
      <div class="compare-planet-col">
        <div class="compare-canvas-box">
          <canvas id="compare-canvas-${planet.id}" width="160" height="160"></canvas>
        </div>
        <h3 style="color:${planet.color}">${planet.name}</h3>

        <div class="compare-metrics-list">
          <div class="metric-bar-group">
            <div class="metric-label-row">
              <span>RADIUS</span>
              <span class="aurora-cyan">${planet.radiusKm.toLocaleString()} km</span>
            </div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill" style="width:${Math.max(5, radPct)}%; background:${planet.color};"></div>
            </div>
          </div>

          <div class="metric-bar-group">
            <div class="metric-label-row">
              <span>MASS (EARTH = 1)</span>
              <span class="aurora-purple">${planet.massEarth} M⊕</span>
            </div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill" style="width:${Math.max(5, massPct)}%; background:var(--aurora-purple);"></div>
            </div>
          </div>

          <div class="metric-bar-group">
            <div class="metric-label-row">
              <span>GRAVITY</span>
              <span class="aurora-gold">${planet.gravityMs2} m/s²</span>
            </div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill" style="width:${Math.max(5, gravPct)}%; background:var(--aurora-gold);"></div>
            </div>
          </div>

          <div class="metric-bar-group">
            <div class="metric-label-row">
              <span>MOONS COUNT</span>
              <span class="aurora-emerald">${planet.moons} Moons</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initComparisonSelectors();
  updateComparison();

  selectA.addEventListener('change', () => { playUiSound('click'); updateComparison(); });
  selectB.addEventListener('change', () => { playUiSound('click'); updateComparison(); });


  /* ========================================================================== */
  /* 08. GAMIFIED SPACE QUIZ ENGINE                                             */
  /* ========================================================================== */
  const QUIZ_QUESTIONS = [
    { q: "What is the name of our home galaxy?", opts: ["Andromeda (M31)", "Milky Way", "Triangulum Galaxy", "Sombrero Galaxy"], ans: 1 },
    { q: "Which planet is closest to the Sun?", opts: ["Venus", "Mars", "Mercury", "Earth"], ans: 2 },
    { q: "Which planet possesses the most extensive famous ring system?", opts: ["Jupiter", "Neptune", "Uranus", "Saturn"], ans: 3 },
    { q: "Which planet is known as the Red Planet due to iron oxide on its surface?", opts: ["Mercury", "Mars", "Venus", "Jupiter"], ans: 1 },
    { q: "What morphological shape is the Milky Way galaxy?", opts: ["Elliptical", "Irregular", "Barred Spiral", "Spherical"], ans: 2 },
    { q: "How many major planets orbit our Sun?", opts: ["7", "9", "10", "8"], ans: 3 },
    { q: "Which planet experiences the fastest supersonic winds in the solar system?", opts: ["Saturn", "Jupiter", "Neptune", "Uranus"], ans: 2 },
    { q: "What lies at the center of the Milky Way galaxy?", opts: ["Sagittarius A* Supermassive Black Hole", "A Massive Neutron Star", "Polaris Star", "Alpha Centauri"], ans: 0 }
  ];

  let quizIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let quizPipsState = [];

  const quizQuestionEl = document.getElementById('quiz-question-text');
  const quizOptionsEl = document.getElementById('quiz-options-grid');
  const quizFeedbackEl = document.getElementById('quiz-feedback-box');
  const quizNextBtn = document.getElementById('quiz-next-btn');
  const quizScoreVal = document.getElementById('quiz-score-val');
  const quizTotalVal = document.getElementById('quiz-total-val');
  const quizPipsContainer = document.getElementById('quiz-pips');

  quizTotalVal.textContent = QUIZ_QUESTIONS.length;

  function renderQuizPips() {
    quizPipsContainer.innerHTML = '';
    QUIZ_QUESTIONS.forEach((_, idx) => {
      const pip = document.createElement('div');
      if (idx < quizPipsState.length) {
        pip.className = `pip ${quizPipsState[idx] ? 'correct' : 'wrong'}`;
      } else if (idx === quizIdx) {
        pip.className = 'pip active';
      } else {
        pip.className = 'pip';
      }
      quizPipsContainer.appendChild(pip);
    });
  }

  function loadQuizQuestion() {
    if (quizIdx >= QUIZ_QUESTIONS.length) {
      renderQuizFinish();
      return;
    }

    quizAnswered = false;
    quizNextBtn.disabled = true;
    quizFeedbackEl.innerHTML = '';
    renderQuizPips();

    const cur = QUIZ_QUESTIONS[quizIdx];
    quizQuestionEl.textContent = `${quizIdx + 1}. ${cur.q}`;

    quizOptionsEl.innerHTML = '';
    cur.opts.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleQuizSelect(idx, btn));
      quizOptionsEl.appendChild(btn);
    });
  }

  function handleQuizSelect(chosenIdx, btn) {
    if (quizAnswered) return;
    quizAnswered = true;

    const cur = QUIZ_QUESTIONS[quizIdx];
    const isCorrect = chosenIdx === cur.ans;

    const allBtns = quizOptionsEl.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btn.classList.add('correct-opt');
      quizScore++;
      quizScoreVal.textContent = quizScore;
      quizFeedbackEl.innerHTML = '<span class="aurora-cyan">Correct Answer. Outstanding astrophysics knowledge.</span>';
      playUiSound('correct');
      quizPipsState.push(true);
    } else {
      btn.classList.add('wrong-opt');
      allBtns[cur.ans].classList.add('correct-opt');
      quizFeedbackEl.innerHTML = `<span class="aurora-pink">Incorrect. Correct answer: <strong>${cur.opts[cur.ans]}</strong></span>`;
      playUiSound('wrong');
      quizPipsState.push(false);
    }

    renderQuizPips();
    quizNextBtn.disabled = false;
  }

  quizNextBtn.addEventListener('click', () => {
    playUiSound('click');
    quizIdx++;
    loadQuizQuestion();
  });

  function renderQuizFinish() {
    renderQuizPips();
    quizQuestionEl.innerHTML = `Challenge Completed. You scored <strong class="aurora-gold">${quizScore} out of ${QUIZ_QUESTIONS.length}</strong>`;
    quizOptionsEl.innerHTML = '';

    let badgeMsg = '';
    if (quizScore === QUIZ_QUESTIONS.length) {
      badgeMsg = '<div class="aurora-cyan">Rank Unlocked: GALACTIC MASTER ASTRONOMER (Perfect Score)</div>';
    } else if (quizScore >= 5) {
      badgeMsg = '<div class="aurora-gold">Rank Unlocked: COSMIC EXPLORER</div>';
    } else {
      badgeMsg = '<div class="aurora-purple">Rank Unlocked: SPACE CADET</div>';
    }

    quizFeedbackEl.innerHTML = badgeMsg;
    quizNextBtn.disabled = false;
    quizNextBtn.innerHTML = '<span>Restart Space Challenge</span>';
    quizNextBtn.onclick = () => {
      quizIdx = 0;
      quizScore = 0;
      quizPipsState = [];
      quizScoreVal.textContent = 0;
      quizNextBtn.innerHTML = '<span>Next Question</span>';
      quizNextBtn.onclick = null;
      loadQuizQuestion();
    };
  }

  loadQuizQuestion();


  /* ========================================================================== */
  /* 09. MIND-BLOWING SPACE FACTS ENGINE                                        */
  /* ========================================================================== */
  const SPACE_FACTS = [
    { cat: 'PHYSICS', fact: 'There is complete silence in space. Because space is a vacuum with no air molecules, sound waves cannot travel.' },
    { cat: 'PLANETS', fact: 'A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to rotate once, but only 225 days to orbit the Sun.' },
    { cat: 'STARS', fact: 'Neutron stars are so dense that a single teaspoon of neutron star material would weigh approximately 10 billion tonnes on Earth.' },
    { cat: 'SOLAR SYSTEM', fact: 'The Sun accounts for 99.86% of all the total mass in our entire Solar System.' },
    { cat: 'BLACK HOLES', fact: 'Black holes have gravitational fields so intense that nothing — not even light — can escape past their event horizon.' },
    { cat: 'MOON', fact: 'The footprints left on the Moon by Apollo astronauts will remain unchanged for millions of years because there is no wind or liquid water to erode them.' },
    { cat: 'EXOPLANETS', fact: 'There are more stars in the observable universe than there are grains of sand on all the beaches on planet Earth combined.' },
    { cat: 'GALAXIES', fact: 'The Andromeda Galaxy is currently hurtling toward our Milky Way at 110 kilometers per second. They will merge in about 4.5 billion years.' }
  ];

  const factsGrid = document.getElementById('facts-grid-container');
  const factsSearch = document.getElementById('facts-search-input');
  const factsShuffleBtn = document.getElementById('facts-shuffle-btn');

  function renderFacts(filterTerm = '') {
    factsGrid.innerHTML = '';
    const filtered = SPACE_FACTS.filter(f =>
      f.fact.toLowerCase().includes(filterTerm.toLowerCase()) ||
      f.cat.toLowerCase().includes(filterTerm.toLowerCase())
    );

    filtered.forEach((f, idx) => {
      const card = document.createElement('div');
      card.className = 'fact-card glass-panel';
      card.innerHTML = `
        <span class="fact-num">0${idx + 1}</span>
        <div class="fact-cat">SECTOR / ${f.cat}</div>
        <p>${f.fact}</p>
      `;
      factsGrid.appendChild(card);
    });
  }

  renderFacts();

  factsSearch.addEventListener('input', (e) => {
    renderFacts(e.target.value);
  });

  factsShuffleBtn.addEventListener('click', () => {
    playUiSound('click');
    SPACE_FACTS.sort(() => Math.random() - 0.5);
    renderFacts(factsSearch.value);
  });


  /* ========================================================================== */
  /* 10. PLANET INSPECTOR MODAL ENGINE                                         */
  /* ========================================================================== */
  const modal = document.getElementById('planet-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCanvas = document.getElementById('modal-planet-canvas');
  let modalAnimId = null;

  function openPlanetModal(planet) {
    document.getElementById('modal-planet-name').textContent = planet.name;
    document.getElementById('modal-planet-subtitle').textContent = planet.subtitle;
    document.getElementById('modal-planet-desc').textContent = planet.desc;
    document.getElementById('modal-planet-tag').textContent = planet.tag;

    const specsGrid = document.getElementById('modal-specs-grid');
    specsGrid.innerHTML = `
      <div class="mini-spec">
        <span class="mini-spec-lbl">RADIUS</span>
        <span class="mini-spec-val aurora-cyan">${planet.radiusKm.toLocaleString()} km</span>
      </div>
      <div class="mini-spec">
        <span class="mini-spec-lbl">SURFACE TEMP</span>
        <span class="mini-spec-val aurora-gold">${planet.tempC}</span>
      </div>
      <div class="mini-spec">
        <span class="mini-spec-lbl">GRAVITY</span>
        <span class="mini-spec-val aurora-purple">${planet.gravityMs2} m/s²</span>
      </div>
      <div class="mini-spec">
        <span class="mini-spec-lbl">DAY LENGTH</span>
        <span class="mini-spec-val aurora-emerald">${planet.dayLength}</span>
      </div>
    `;

    const atmosphereBars = document.getElementById('modal-atmosphere-bars');
    atmosphereBars.innerHTML = planet.atmosphere.map(gas => `
      <div class="gas-row">
        <div class="gas-info">
          <span>${gas.gas}</span>
          <span class="aurora-cyan">${gas.pct}%</span>
        </div>
        <div class="gas-bar-bg">
          <div class="gas-bar-fill" style="width: ${gas.pct}%;"></div>
        </div>
      </div>
    `).join('');

    modal.classList.add('active');

    let angle = 0;
    function modalAnimLoop() {
      angle += 0.01;
      render3DPlanet(modalCanvas, planet, angle);
      modalAnimId = requestAnimationFrame(modalAnimLoop);
    }
    if (modalAnimId) cancelAnimationFrame(modalAnimId);
    modalAnimLoop();
  }

  function closePlanetModal() {
    modal.classList.remove('active');
    if (modalAnimId) cancelAnimationFrame(modalAnimId);
  }

  modalCloseBtn.addEventListener('click', closePlanetModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePlanetModal();
  });


  /* ========================================================================== */
  /* 11. NAVIGATION & BACK-TO-TOP HANDLERS                                      */
  /* ========================================================================== */
  const footerTopBtn = document.getElementById('back-to-top-btn');
  const floatingTopBtn = document.getElementById('floating-top-btn');

  function scrollToTop() {
    playUiSound('click');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (footerTopBtn) footerTopBtn.addEventListener('click', scrollToTop);
  if (floatingTopBtn) floatingTopBtn.addEventListener('click', scrollToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if (floatingTopBtn) floatingTopBtn.classList.add('visible');
    } else {
      if (floatingTopBtn) floatingTopBtn.classList.remove('visible');
    }
  });

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 180) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


  /* ========================================================================== */
  /* 12. CUSTOM DUST TRAIL CURSOR                                               */
  /* ========================================================================== */
  const cursorCanvas = document.getElementById('cursor-canvas');
  const cursorCtx = cursorCanvas.getContext('2d');
  let dustParticles = [];

  function resizeCursorCanvas() {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCursorCanvas);
  resizeCursorCanvas();

  window.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.35) {
      dustParticles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 2 + 1,
        alpha: 1,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: Math.random() < 0.5 ? '#06b6d4' : '#a855f7'
      });
    }
  });

  function renderCursorTrail() {
    cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
    for (let i = dustParticles.length - 1; i >= 0; i--) {
      const p = dustParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.03;

      if (p.alpha <= 0) {
        dustParticles.splice(i, 1);
        continue;
      }

      cursorCtx.beginPath();
      cursorCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      cursorCtx.fillStyle = p.color;
      cursorCtx.globalAlpha = p.alpha;
      cursorCtx.fill();
      cursorCtx.globalAlpha = 1.0;
    }
    requestAnimationFrame(renderCursorTrail);
  }
  renderCursorTrail();

});
