/**
 * Calculează distanțele rutiere și timpii de condus de la balastieră la localitățile
 * din paginile pe județ, folosind OpenStreetMap (Nominatim pentru coordonate, OSRM pentru rute).
 * Se rulează din workflow-ul GitHub Actions „Distanțe rutiere” (runner-ul are acces la internet)
 * și afișează rezultatul ca JSON între markerii DISTANCES_BEGIN / DISTANCES_END.
 *
 *   node scripts/distances.mjs
 */
const ORIGIN = { lat: 47.909954, lng: 23.08848 }; // balastiera / sediul (src/data/company.ts → contact.location)
/**
 * OSRM presupune viteze mai mici decât Google Maps pentru autoturism. Factorul de mai jos este media
 * Google / OSRM pe reperele verificate de client (Seini 23 min, Baia Mare 61 min, Sighetu Marmației 101 min).
 */
const TIME_FACTOR = 0.86;

const DESTINATIONS = [
  ["satu-mare", "Livada", "Livada, Satu Mare, România"],
  ["satu-mare", "Halmeu", "Halmeu, Satu Mare, România"],
  ["satu-mare", "Negrești-Oaș", "Negrești-Oaș, Satu Mare, România"],
  ["satu-mare", "Satu Mare", "Satu Mare, România"],
  ["satu-mare", "Ardud", "Ardud, Satu Mare, România"],
  ["satu-mare", "Carei", "Carei, Satu Mare, România"],
  ["satu-mare", "Tășnad", "Tășnad, Satu Mare, România"],
  ["maramures", "Seini", "Seini, Maramureș, România"],
  ["maramures", "Baia Mare", "Baia Mare, Maramureș, România"],
  ["maramures", "Baia Sprie", "Baia Sprie, Maramureș, România"],
  ["maramures", "Târgu Lăpuș", "Târgu Lăpuș, Maramureș, România"],
  ["maramures", "Sighetu Marmației", "Sighetu Marmației, Maramureș, România"],
  ["maramures", "Vișeu de Sus", "Vișeu de Sus, Maramureș, România"],
  ["bihor", "Valea lui Mihai", "Valea lui Mihai, Bihor, România"],
  ["bihor", "Săcueni", "Săcueni, Bihor, România"],
  ["bihor", "Marghita", "Marghita, Bihor, România"],
  ["bihor", "Oradea", "Oradea, Bihor, România"],
  ["bihor", "Salonta", "Salonta, Bihor, România"],
  ["bihor", "Beiuș", "Beiuș, Bihor, România"],
  ["salaj", "Cehu Silvaniei", "Cehu Silvaniei, Sălaj, România"],
  ["salaj", "Șimleu Silvaniei", "Șimleu Silvaniei, Sălaj, România"],
  ["salaj", "Jibou", "Jibou, Sălaj, România"],
  ["salaj", "Zalău", "Zalău, Sălaj, România"],
];

const UA = "tomi-and-alex-srl distance script (github.com/brixwave-technology/tomi-and-alex-srl)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
    if (res.ok) return res.json();
    await sleep(1500 * attempt);
  }
  throw new Error(`Request failed: ${url}`);
}

async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=ro&q=${encodeURIComponent(query)}`;
  const [hit] = await getJson(url);
  if (!hit) throw new Error(`Nu am găsit: ${query}`);
  return { lat: Number(hit.lat), lng: Number(hit.lon), label: hit.display_name };
}

async function route(to) {
  const url = `https://router.project-osrm.org/route/v1/driving/${ORIGIN.lng},${ORIGIN.lat};${to.lng},${to.lat}?overview=false&alternatives=false`;
  const data = await getJson(url);
  if (data.code !== "Ok") throw new Error(`OSRM: ${data.code}`);
  return { meters: data.routes[0].distance, seconds: data.routes[0].duration };
}

const out = [];
for (const [region, name, query] of DESTINATIONS) {
  const geo = await geocode(query);
  await sleep(1100); // politețe față de Nominatim (max 1 cerere/s)
  const r = await route(geo);
  out.push({ region, name, lat: geo.lat, lng: geo.lng, label: geo.label, km: Math.round(r.meters / 100) / 10, minutes: Math.round((r.seconds / 60) * TIME_FACTOR) });
  console.log(`${region.padEnd(10)} ${name.padEnd(20)} ${out.at(-1).km} km  ${out.at(-1).minutes} min  (${geo.label})`);
  await sleep(300);
}
console.log("DISTANCES_BEGIN");
console.log(JSON.stringify(out));
console.log("DISTANCES_END");
