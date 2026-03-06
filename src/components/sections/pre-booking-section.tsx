"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { EVENT_TYPES, GUEST_RANGES, SPACE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PreBookingFormData {
  date: string;
  eventType: string;
  guestRange: string;
  space: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const availabilityDates = [
  { date: "Samedi 14 Juin 2025", status: "Disponible", color: "text-emerald-600", dot: "bg-emerald-500" },
  { date: "Samedi 21 Juin 2025", status: "En option", color: "text-amber-600", dot: "bg-amber-500" },
  { date: "Samedi 28 Juin 2025", status: "Sur demande", color: "text-blue-600", dot: "bg-blue-500" },
];

const inputClasses =
  "rounded-xl bg-ivory border border-beige p-3 focus:border-gold outline-none transition w-full";

const labelClasses =
  "block text-sm text-taupe uppercase tracking-wider mb-1";

export function PreBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { register, handleSubmit, formState: { errors } } = useForm<PreBookingFormData>();

  const onSubmit = (data: PreBookingFormData) => {
    console.log("Pre-booking form data:", data);
    setSubmitted(true);
  };

  return (
    <section id="prereservation" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          overtitle="Réservation"
          title="Pré-réserver votre date"
        />

        <p className="text-sm text-taupe italic max-w-xl mx-auto text-center mb-12">
          La pré-réservation constitue une demande de blocage temporaire et reste
          soumise à validation par notre équipe.
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* LEFT — Availability Calendar */}
          <div className="bg-ivory rounded-2xl p-8 premium-shadow premium-border h-fit">
            <h3 className="font-serif text-xl mb-4 text-anthracite">
              Disponibilités
            </h3>

            <div className="space-y-4">
              {availabilityDates.map((item) => (
                <div
                  key={item.date}
                  className="flex items-center justify-between py-3 border-b border-beige last:border-b-0"
                >
                  <span className="font-sans text-anthracite">{item.date}</span>
                  <span className={cn("flex items-center gap-2 text-sm font-medium", item.color)}>
                    <span className={cn("w-2 h-2 rounded-full", item.dot)} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-taupe mt-6">
              Les disponibilités sont indicatives. Contactez-nous pour
              confirmation.
            </p>
          </div>

          {/* RIGHT — Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-ivory rounded-2xl p-8 premium-border text-center"
              >
                <h3 className="font-serif text-2xl text-anthracite mb-4">
                  Demande envoyée
                </h3>
                <p className="text-taupe leading-relaxed">
                  Merci pour votre demande de pré-réservation. Notre équipe vous
                  recontactera sous 48h pour confirmer la disponibilité de votre
                  date.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Date souhaitée */}
                <div>
                  <label className={labelClasses}>Date souhaitée</label>
                  <input
                    type="date"
                    className={inputClasses}
                    {...register("date", { required: true })}
                  />
                </div>

                {/* Type d'événement */}
                <div>
                  <label className={labelClasses}>Type d&apos;événement</label>
                  <select
                    className={inputClasses}
                    {...register("eventType", { required: true })}
                  >
                    <option value="">Sélectionner</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre d'invités */}
                <div>
                  <label className={labelClasses}>Nombre d&apos;invités</label>
                  <select
                    className={inputClasses}
                    {...register("guestRange", { required: true })}
                  >
                    <option value="">Sélectionner</option>
                    {GUEST_RANGES.map((g) => (
                      <option key={g.value} value={g.value}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Espace souhaité */}
                <div>
                  <label className={labelClasses}>Espace souhaité</label>
                  <select
                    className={inputClasses}
                    {...register("space", { required: true })}
                  >
                    <option value="">Sélectionner</option>
                    {SPACE_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Prénom & Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Prénom</label>
                    <input
                      type="text"
                      className={inputClasses}
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Nom</label>
                    <input
                      type="text"
                      className={inputClasses}
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClasses}>Email</label>
                  <input
                    type="email"
                    className={inputClasses}
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className={labelClasses}>Téléphone</label>
                  <input
                    type="tel"
                    className={inputClasses}
                    {...register("phone", { required: true })}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={labelClasses}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Précisez vos souhaits ou questions..."
                    className={inputClasses}
                    {...register("message")}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 accent-gold"
                    {...register("consent", { required: true })}
                  />
                  <label className="text-sm text-taupe leading-relaxed">
                    J&apos;accepte que mes données soient traitées pour le
                    traitement de ma demande.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-gold to-bronze text-white px-8 py-3 font-medium transition hover:opacity-90"
                >
                  Pré-réserver cette date
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
