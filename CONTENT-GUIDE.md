# Panduan Pengisian Konten Portfolio
> Semua konten dikelola dari satu file: `lib/data.ts`
> Kecuali gambar, yang disimpan di folder `public/`

---

## 1. Informasi Pribadi
**Lokasi:** `lib/data.ts` → `personalInfo`

```ts
export const personalInfo = {
  name: "Yansen",                        // Nama pendek — tampil di Hero ("Hello i'm Yansen")
  fullName: "Yansen Valerio",            // Nama lengkap — tampil di About card
  profession: "Product Designer",        // Profesi — tampil di beberapa tempat
  tagline: "Design with Intent. Create for Impact.", // Tagline — tampil di About headline
  bio: "...",                            // 2–3 kalimat tentang kamu — tampil di About card
  email: "kamu@email.com",              // ⚠️ WAJIB DIISI — dipakai di Contact section
  phone: "(+62) 000-000-0000",          // Nomor HP
  website: "www.namakamu.com",          // Website/portfolio link
  address: "Kota, Provinsi",            // Lokasi (tidak perlu detail)
};
```

**Tips bio:** Ceritakan *mengapa* kamu jadi designer, bukan hanya *apa* yang kamu bisa.
Contoh: *"Perjalanan saya ke product design berawal dari kecintaan terhadap pemecahan masalah visual. Setiap project adalah kesempatan untuk menggabungkan estetika dan fungsi menjadi pengalaman yang bermakna."*

---

## 2. Hero Section
**Lokasi:** `components/sections/Hero.tsx` → baris 9–15

```ts
const professionRoles = [
  "Product Designer",     // Teks yang di-typing satu per satu
  "Web Developer",        // Ganti/tambah sesuai keahlian kamu
  "UI/UX Specialist",
  // dst...
];
```

**Foto profil:** Ganti URL di baris ~185:
```ts
src="https://picsum.photos/seed/portrait/..."
// → ganti ke: src="/foto-profil.jpg"
// Simpan foto di: public/foto-profil.jpg
// Ukuran ideal: 600×800px, format JPG/WebP
```

---

## 3. About Section
**Lokasi:** `lib/data.ts` → `personalInfo.bio` + `experienceItems`

### Bio (About card)
```ts
bio: "Tulis 2–3 kalimat. Ceritakan latar belakang, passion, dan pendekatan kerja kamu.",
```

### Foto workspace
Ganti URL di `components/sections/About.tsx` baris ~51:
```ts
src="https://picsum.photos/seed/workspace/..."
// → src="/about-workspace.jpg"
// Simpan di: public/about-workspace.jpg
// Ukuran ideal: 1400×600px (landscape, wide)
```

### Foto portrait (di dalam card)
Ganti URL di `components/sections/About.tsx` baris ~98:
```ts
src="https://picsum.photos/seed/portrait/..."
// → src="/foto-profil.jpg"
```

### Experience items (di About, bawah)
```ts
export const experienceItems = [
  {
    number: "01",
    title: "Junior Product Designer",       // Jabatan/role
    years: "(2020–2022)",                    // Periode kerja
    description: "Ceritakan apa yang kamu kerjakan, pencapaian, atau skill yang berkembang. 1–2 kalimat cukup.",
  },
  // tambah item sesuai jumlah pengalamanmu
];
```

---

## 4. Services Section
**Lokasi:** `lib/data.ts` → `services`

```ts
export const services = [
  {
    icon: "layers",          // Nama icon Lucide React (lihat: lucide.dev/icons)
    title: "Nama Layanan",
    description: "Jelaskan layanan ini dalam 1–2 kalimat. Fokus pada MANFAAT untuk klien, bukan proses teknis.",
    featured: false,         // Set true untuk satu layanan unggulan (tampil beda warna)
  },
];
```

**Icon yang tersedia** (contoh dari Lucide): `layers`, `pen-tool`, `zap`, `monitor`, `smartphone`, `layout`, `figma`, `code`, `palette`

---

## 5. Portfolio Section
**Lokasi:** `lib/data.ts` → `portfolio`

```ts
{
  number: "01",              // Jangan diubah (urutan slide)
  title: "Company Profile",  // Nama kategori project
  description: "Tulis 2 kalimat: (1) apa yang dikerjakan, (2) pendekatan atau hasil yang dicapai.",
  tags: ["Tag1", "Tag2", "Tag3", "Tag4"],   // Maks 4 tag, singkat
  images: [
    "/portfolio/company-profile-1.jpg",     // Ganti dengan path gambar asli
    "/portfolio/company-profile-2.jpg",     // Minimal 1 gambar, maks bebas
    "/portfolio/company-profile-3.jpg",
  ],
  liveUrl: "https://link-ke-project.com",  // Link Behance, Dribbble, atau live site
},
```

### Struktur folder gambar:
```
public/
  portfolio/
    company-profile-1.jpg    (landscape 16:9 — min 1400×787px)
    company-profile-2.jpg
    marketplace-1.jpg
    marketplace-2.jpg
    saas-1.jpg
    saas-2.jpg
    portfolio-1.jpg
    portfolio-2.jpg
    mobile-1.jpg             (portrait 3:4 — min 900×1200px)
    mobile-2.jpg
```

> **01–04** (Company Profile, Marketplace, SaaS, Portfolio): format **landscape 16:9**
> **05** (Mobile App): format **portrait 3:4**

---

## 6. Testimonials Section
**Lokasi:** `lib/data.ts` → `testimonials`

```ts
{
  name: "Nama Klien",
  role: "Jabatan, Nama Perusahaan",     // Contoh: "CEO, TechWave"
  avatar: "/testimonials/nama.jpg",      // Foto klien — simpan di public/testimonials/
  quote: "Testimoni asli dari klien. Semakin spesifik semakin kredibel — sebaiknya menyebut hasil nyata atau pengalaman konkret.",
},
```

**Foto avatar:** Simpan di `public/testimonials/`. Ukuran ideal: 80×80px, format JPG.
Kalau belum ada foto klien, biarkan pakai picsum sementara.

---

## 7. FAQ Section
**Lokasi:** `lib/data.ts` → `faqItems`

```ts
{
  question: "Pertanyaan yang sering ditanya klien?",
  answer: "Jawaban jelas dan langsung. Boleh 2–4 kalimat. Hindari jargon teknis.",
},
```

**Pertanyaan yang disarankan:**
- Apa saja layanan yang kamu tawarkan?
- Bagaimana cara hire kamu?
- Berapa biaya projeknya?
- Berapa lama waktu pengerjaan?
- Apakah kamu menerima revisi?
- Apakah bisa remote/kerja jarak jauh?

---

## 8. Contact Section
**Lokasi:** `lib/data.ts` → `personalInfo.email`, `personalInfo.phone`

⚠️ **Penting:** Pastikan `email` di `personalInfo` sudah diisi dengan email asli kamu, karena Contact form mengirimkan pesan ke sini.

---

## 9. Footer
**Lokasi:** `lib/data.ts` → `footerLinks`

```ts
export const footerLinks = {
  Services: [
    { label: "Web Design", href: "#services", active: true },  // active: true = dibold/highlighted
    { label: "UI/UX Design", href: "#services" },
  ],
  Portfolio: [
    { label: "Company Profile", href: "#portfolio" },
    // dst — bisa link ke Behance/Dribbble juga
  ],
  // Ganti key "Resources" dan "Freelancer" sesuai kategori yang relevan
};
```

---

## 10. Marquee (Client Logos)
**Lokasi:** `lib/data.ts` → `clientLogos`

```ts
export const clientLogos = [
  "NamaKlien1",
  "NamaKlien2",
  // Tulis nama perusahaan/klien yang pernah bekerja sama
  // Ditampilkan sebagai teks berjalan di bawah Portfolio section
];
```

---

## Checklist Konten

| # | Item | Status |
|---|------|--------|
| 1 | `personalInfo` lengkap (nama, email, bio) | ☐ |
| 2 | Foto profil di Hero | ☐ |
| 3 | Foto profil di About card | ☐ |
| 4 | Foto workspace di About | ☐ |
| 5 | `experienceItems` diisi data asli | ☐ |
| 6 | `services` sesuai layanan yang ditawarkan | ☐ |
| 7 | Gambar portfolio 01–05 diupload ke `public/portfolio/` | ☐ |
| 8 | `liveUrl` per portfolio item diisi link asli | ☐ |
| 9 | `testimonials` dari klien nyata | ☐ |
| 10 | `faqItems` sesuai pertanyaan umum kamu | ☐ |
| 11 | `clientLogos` diisi nama klien/perusahaan | ☐ |

---

*Dibuat oleh Claude Code — 2026-05-29*
