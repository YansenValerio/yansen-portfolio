# Saran Pengembangan & Perbaikan — groly-portfolio-v3

Dokumen ini berisi catatan saran pengembangan, perbaikan teknis, dan ide fitur untuk portfolio Yansen Valerio.

---

## 1. Konten & Data

### Prioritas Tinggi
- **Ganti placeholder image** — semua gambar portfolio masih pakai `picsum.photos`. Simpan screenshot/mockup project asli di `public/portfolio/` dan update path di `lib/data.ts`.
- **Isi `personalInfo`** — beberapa field masih dummy (`email`, `phone`, `website`, `address`). Update dengan data asli agar Contact section berfungsi.
- **Tulis case study singkat** — tambah field `caseStudyUrl` di `PortfolioItem` type dan link ke Behance/Notion/halaman terpisah per project.

### Prioritas Sedang
- Tambah field `year` di `PortfolioItem` untuk menampilkan tahun project.
- Tambah field `client` (opsional, bisa di-hide jika NDA).
- Pertimbangkan `link` atau `liveUrl` per project untuk tombol "View Live".

---

## 2. Section Portfolio (Carousel)

### Perbaikan UX
- **Scroll indicator yang lebih jelas** — tambahkan teks "Scroll down to explore" dengan panah animated di atas carousel saat pertama kali section terlihat, supaya user tahu section ini scroll-jacked.
- **Keyboard navigation** — tambahkan `ArrowLeft`/`ArrowRight` listener untuk navigasi manual (sudah direncanakan di versi drag sebelumnya, belum diimplementasi di versi scroll).
- **Touch/swipe support mobile** — carousel mobile saat ini hanya scroll-snap biasa. Bisa ditingkatkan dengan swipe gesture menggunakan `useDragControls` dari framer-motion.
- **Click to jump** — klik gambar panel non-aktif langsung scroll ke posisi yang sesuai (`scrollRef.current.scrollTo`).

### Perbaikan Visual
- **Peek panel sebelah** — tampilkan ujung panel kiri/kanan secara tipis (~5–10% lebar) supaya user tahu ada item sebelum/sesudah (visual affordance).
- **Transition image** — saat berganti slide, gambar bisa diberi `clipPath` reveal atau `filter: blur` → clear untuk kesan lebih sinematik.
- **Background per slide** — setiap portfolio item bisa punya `accentColor` yang mempengaruhi warna watermark angka dan glow, membuat tiap slide terasa unik.

---

## 3. Performa

- **Lazy load images** — tambahkan `priority={i === 0}` pada gambar slide pertama, dan biarkan sisanya lazy (sudah default di `next/image` tapi perlu dicek).
- **Preload gambar berikutnya** — saat `activeIndex` berubah, preload gambar `activeIndex + 1` supaya tidak ada flash saat slide berganti.
- **Font subsetting** — Google Fonts Inter & Fraunces di-load semua weight. Batasi hanya weight yang dipakai untuk mengurangi network request.
- **Hapus `motion` package duplikat** — `package.json` memiliki dua entry: `"framer-motion"` dan `"motion"`. Keduanya adalah package yang sama (motion adalah alias baru). Pilih salah satu dan konsisten — gunakan `framer-motion` karena seluruh codebase sudah pakai itu.

---

## 4. Aksesibilitas (a11y)

- **`aria-label` pada dots navigasi** — sudah ada di versi drag, pastikan versi scroll juga memilikinya.
- **`prefers-reduced-motion`** — wrap semua animasi scroll-driven dengan `useReducedMotion()` dari framer-motion. Jika aktif, tampilkan carousel statik tanpa scroll-jacking.
- **Focus management** — section portfolio yang scroll-jacked bisa menjebak keyboard user. Tambahkan skip link (`#portfolio-end`) agar user keyboard bisa melompati section.
- **Alt text gambar** — saat gambar asli sudah diisi, pastikan `alt` berisi deskripsi project, bukan hanya judul.
- **Color contrast** — periksa rasio kontras text-gray-400 di atas `bg-white` (saat ini ~4.5:1, perlu ≥4.5:1 untuk WCAG AA).

---

## 5. Fitur Tambahan

### Jangka Pendek
- **Filter kategori** — tambahkan toggle filter (Web, Mobile, Branding) di atas carousel untuk langsung jump ke slide yang relevan.
- **Cursor custom** — ganti cursor jadi ikon panah kiri/kanan saat hover di tepi kiri/kanan viewport (reinforces scroll direction).
- **Open Graph image** — buat OG image dinamis per project menggunakan Next.js `ImageResponse` untuk share yang lebih menarik di sosial media.

### Jangka Panjang
- **Halaman detail project** — buat route `/portfolio/[slug]` dengan full case study: problem → process → solution → result.
- **Dark mode** — portfolio ini punya color system yang bisa mendukung dark mode. Tambahkan `dark:` classes dan toggle di Navbar.
- **CMS integration** — pindahkan konten portfolio dari `lib/data.ts` ke Notion, Sanity, atau Contentful agar bisa diupdate tanpa menyentuh kode.
- **Analytics** — integrasikan Vercel Analytics atau Plausible untuk tahu section mana yang paling banyak dilihat.

---

## 6. Teknis & Code Quality

- **`personalInfo.email`** masih dummy — Contact form akan gagal kirim jika tidak diupdate.
- **`navLinks`** punya dua entry untuk `#faq`** (Pricing dan FaQ). Salah satu harus dihapus atau dibedakan `href`-nya.
- **`lib/types.ts`** — tambahkan field opsional yang sudah disarankan di atas (`year`, `caseStudyUrl`, `liveUrl`, `accentColor`).
- **Konsistensi import** — beberapa file import dari `framer-motion`, pertimbangkan barrel export dari `@/lib/animations` untuk variant yang sering dipakai.
- **Environment variables** — email untuk contact form seharusnya di `.env.local`, bukan hardcoded.

---

## 7. SEO

- **Structured data** — tambahkan JSON-LD `Person` schema di `layout.tsx` untuk Google Knowledge Panel.
- **Sitemap** — buat `app/sitemap.ts` untuk generate sitemap otomatis.
- **`robots.txt`** — tambahkan `public/robots.txt` dengan konfigurasi dasar.
- **Title per section** — pertimbangkan membuat halaman terpisah (`/about`, `/contact`) agar setiap halaman punya meta title yang unik dan bisa diindex.

---

*File ini dibuat otomatis oleh Claude Code — 2026-05-29. Update sesuai perkembangan project.*
