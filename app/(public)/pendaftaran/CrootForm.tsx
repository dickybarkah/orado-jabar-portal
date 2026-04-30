"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, CheckCircle2 } from "lucide-react";

type Pengcab = { id: string; nama: string; kota_kab: string };
type State = "idle" | "submitting" | "success" | "error";

export function CrootForm({ pengcab }: { pengcab: Pengcab[] }) {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      nama_lengkap: String(fd.get("nama_lengkap") ?? "").trim(),
      nik:          String(fd.get("nik") ?? "").trim(),
      tempat_lahir: String(fd.get("tempat_lahir") ?? "").trim(),
      tanggal_lahir: String(fd.get("tanggal_lahir") ?? ""),
      jenis_kelamin: String(fd.get("jenis_kelamin") ?? "L") as "L" | "P",
      alamat:       String(fd.get("alamat") ?? "").trim(),
      kota_kab:     String(fd.get("kota_kab") ?? "").trim(),
      no_hp:        String(fd.get("no_hp") ?? "").trim(),
      email:        String(fd.get("email") ?? "").trim(),
      kategori:     String(fd.get("kategori") ?? "junior") as "junior" | "senior" | "master",
      pengcab_id:   String(fd.get("pengcab_id") ?? ""),
      status:       "pending" as const,
    };

    // Client-side validation
    if (payload.nik.length !== 16 || !/^\d{16}$/.test(payload.nik)) {
      setState("error");
      setErrorMsg("NIK harus 16 digit angka.");
      return;
    }
    if (!payload.email.includes("@")) {
      setState("error");
      setErrorMsg("Format email tidak valid.");
      return;
    }
    if (payload.no_hp.replace(/\D/g, "").length < 10) {
      setState("error");
      setErrorMsg("Nomor HP minimal 10 digit.");
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.from("anggota").insert(payload);

    if (error) {
      setState("error");
      if (error.code === "23505") {
        setErrorMsg("NIK sudah terdaftar. Hubungi sekretariat jika ini kesalahan.");
      } else {
        setErrorMsg(error.message);
      }
      return;
    }

    setState("success");
  }

  if (state === "success") {
    return (
      <div className="rounded-3xl border border-[var(--orado-emerald)]/30 bg-[var(--orado-emerald)]/5 p-12 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[var(--orado-emerald)]" strokeWidth={1.5} />
        <h2 className="mt-6 font-display text-3xl font-medium text-[var(--orado-navy)]">
          Pendaftaran terkirim.
        </h2>
        <p className="mt-3 max-w-md mx-auto text-sm text-[var(--orado-charcoal)]/75">
          Data Anda telah masuk ke antrian verifikasi. Sekretariat Pengprov akan menghubungi via email atau WhatsApp dalam 3–7 hari kerja.
        </p>
        <div className="mt-8 inline-block rounded-xl bg-[var(--orado-ivory)] px-6 py-4 font-mono text-xs uppercase tracking-wider text-[var(--orado-charcoal)]/65">
          Status: <span className="text-[var(--orado-emerald)] font-medium">PENDING VERIFIKASI</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Section title="Identitas" subtitle="Sesuai dokumen resmi (KTP)">
        <Field label="Nama Lengkap" name="nama_lengkap" required placeholder="Sesuai KTP" />
        <Field label="NIK" name="nik" required pattern="^\d{16}$" placeholder="16 digit" inputMode="numeric" maxLength={16} />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Tempat Lahir" name="tempat_lahir" required />
          <Field label="Tanggal Lahir" name="tanggal_lahir" type="date" required />
        </div>
        <RadioGroup
          label="Jenis Kelamin"
          name="jenis_kelamin"
          options={[
            { value: "L", label: "Laki-laki" },
            { value: "P", label: "Perempuan" },
          ]}
        />
      </Section>

      <Section title="Alamat & Kontak">
        <Field label="Alamat" name="alamat" required placeholder="Jalan, RT/RW, Kelurahan, Kecamatan" />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Kota / Kabupaten" name="kota_kab" required placeholder="Mis. Bandung" />
          <Field label="No. HP / WhatsApp" name="no_hp" required type="tel" placeholder="08xx atau +62" inputMode="numeric" />
        </div>
        <Field label="Email" name="email" required type="email" placeholder="email@domain.com" />
      </Section>

      <Section title="Keatletan">
        <SelectField
          label="Kategori Atlet"
          name="kategori"
          required
          options={[
            { value: "junior", label: "Junior · usia <18 tahun" },
            { value: "senior", label: "Senior · usia 18–40 tahun" },
            { value: "master", label: "Master · usia >40 tahun" },
          ]}
        />
        <SelectField
          label="Pengcab Asal"
          name="pengcab_id"
          required
          options={pengcab.map((p) => ({ value: p.id, label: `${p.nama} · ${p.kota_kab}` }))}
        />
      </Section>

      {state === "error" && errorMsg && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 border-t border-[var(--orado-navy)]/10 pt-8">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex h-12 items-center gap-3 rounded-full bg-[var(--orado-navy)] px-8 text-sm font-medium text-[var(--orado-ivory)] transition hover:bg-[var(--orado-emerald)] disabled:opacity-60"
        >
          {state === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          {state === "submitting" ? "Mengirim..." : "Kirim Pendaftaran →"}
        </button>
        <p className="text-xs text-[var(--orado-charcoal)]/60">
          Dengan submit, Anda menyetujui kebijakan data ORADO Jabar.
        </p>
      </div>
    </form>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-gold)]">
        {title}
      </legend>
      {subtitle && (
        <div className="mt-1 text-xs text-[var(--orado-charcoal)]/55">{subtitle}</div>
      )}
      <div className="mt-6 space-y-5">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  pattern,
  maxLength,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email";
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[var(--orado-navy)]">
        {label}
        {required && <span className="ml-1 text-[var(--orado-gold)]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        inputMode={inputMode}
        className="mt-2 block w-full rounded-xl border border-[var(--orado-navy)]/20 bg-white px-4 py-3 text-sm text-[var(--orado-charcoal)] placeholder:text-[var(--orado-charcoal)]/35 focus:border-[var(--orado-emerald)] focus:outline-none focus:ring-2 focus:ring-[var(--orado-emerald)]/20"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[var(--orado-navy)]">
        {label}
        {required && <span className="ml-1 text-[var(--orado-gold)]">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 block w-full appearance-none rounded-xl border border-[var(--orado-navy)]/20 bg-white px-4 py-3 text-sm text-[var(--orado-charcoal)] focus:border-[var(--orado-emerald)] focus:outline-none focus:ring-2 focus:ring-[var(--orado-emerald)]/20"
      >
        <option value="" disabled>— Pilih —</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

function RadioGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-[var(--orado-navy)]">
        {label}
      </legend>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map((o) => (
          <label
            key={o.value}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--orado-navy)]/20 bg-white px-4 py-3 text-sm has-[:checked]:border-[var(--orado-emerald)] has-[:checked]:bg-[var(--orado-emerald)]/5"
          >
            <input type="radio" name={name} value={o.value} required className="accent-[var(--orado-emerald)]" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
