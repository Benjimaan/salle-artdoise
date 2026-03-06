"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  EVENT_TYPES,
  GUEST_RANGES,
  SPACE_OPTIONS,
  NEED_TYPES,
  BUDGET_OPTIONS,
} from "@/lib/constants";

const quoteSchema = z.object({
  eventType: z.string().min(1),
  date: z.string().optional(),
  flexible: z.boolean().optional(),
  guests: z.string().min(1),
  spaces: z.string().min(1),
  needType: z.string().min(1),
  budget: z.string().min(1),
  firstName: z.string().min(2, "Veuillez entrer votre prénom"),
  lastName: z.string().min(2, "Veuillez entrer votre nom"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z.string().min(8, "Veuillez entrer un numéro valide"),
  details: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const TOTAL_STEPS = 8;

const stepFields: Record<number, (keyof QuoteFormData)[]> = {
  0: ["eventType"],
  1: ["date"],
  2: ["guests"],
  3: ["spaces"],
  4: ["needType"],
  5: ["budget"],
  6: ["firstName", "lastName", "email", "phone"],
  7: ["details"],
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function QuoteMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [direction, setDirection] = useState(1);

  const {
    register,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      eventType: "",
      date: "",
      flexible: false,
      guests: "",
      spaces: "",
      needType: "",
      budget: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  const formValues = watch();

  const goNext = () => {
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const handleAutoAdvance = (field: keyof QuoteFormData, value: string) => {
    setValue(field, value, { shouldValidate: true });
    setTimeout(() => {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }, 300);
  };

  const handleContinue = async () => {
    const fields = stepFields[currentStep];
    const valid = await trigger(fields);
    if (valid) goNext();
  };

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote request submitted:", data);
    setCompleted(true);
  };

  const progressPercent = ((currentStep + 1) / TOTAL_STEPS) * 100;

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto flex flex-col items-center justify-center py-20 px-6 text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-gold mb-6" strokeWidth={1.5} />
        <h2 className="font-serif text-2xl md:text-3xl text-anthracite mb-4">
          Votre demande a bien été transmise
        </h2>
        <p className="text-taupe text-lg leading-relaxed max-w-md">
          Notre équipe reviendra vers vous rapidement pour imaginer avec vous
          une réception à la hauteur de votre événement.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-taupe font-sans uppercase tracking-wider">
            Étape {currentStep + 1}/{TOTAL_STEPS}
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-beige overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-gold to-bronze"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={direction}>
          {/* STEP 1 - Event Type */}
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Quel type d&apos;événement organisez-vous ?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {EVENT_TYPES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleAutoAdvance("eventType", item.value)}
                    className={cn(
                      "rounded-xl p-6 border-2 cursor-pointer text-center font-sans text-lg transition-all duration-200",
                      formValues.eventType === item.value
                        ? "border-gold bg-champagne-light text-anthracite"
                        : "border-beige bg-ivory text-anthracite hover:border-taupe"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 - Date */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Quand souhaitez-vous célébrer votre événement ?
              </h2>
              <div className="flex flex-col items-center gap-6">
                <input
                  type="date"
                  {...register("date")}
                  className="w-full max-w-sm rounded-xl bg-ivory border border-beige p-4 text-anthracite focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans"
                />
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    {...register("flexible")}
                    className="w-5 h-5 rounded border-beige text-gold focus:ring-gold/20 accent-gold"
                  />
                  <span className="text-taupe font-sans">
                    Je suis flexible sur la date
                  </span>
                </label>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="mt-4 rounded-full bg-gradient-to-r from-gold to-bronze text-white px-8 py-3 font-medium font-sans transition hover:opacity-90 cursor-pointer"
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 - Guests */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Combien d&apos;invités attendez-vous ?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {GUEST_RANGES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleAutoAdvance("guests", item.value)}
                    className={cn(
                      "rounded-xl p-6 border-2 cursor-pointer text-center font-sans text-lg transition-all duration-200",
                      formValues.guests === item.value
                        ? "border-gold bg-champagne-light text-anthracite"
                        : "border-beige bg-ivory text-anthracite hover:border-taupe"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4 - Spaces */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Quels espaces vous intéressent ?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {SPACE_OPTIONS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleAutoAdvance("spaces", item.value)}
                    className={cn(
                      "rounded-xl p-6 border-2 cursor-pointer text-center font-sans text-lg transition-all duration-200",
                      formValues.spaces === item.value
                        ? "border-gold bg-champagne-light text-anthracite"
                        : "border-beige bg-ivory text-anthracite hover:border-taupe"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 5 - Need Type */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Comment pouvons-nous vous accompagner ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {NEED_TYPES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleAutoAdvance("needType", item.value)}
                    className={cn(
                      "rounded-xl p-6 border-2 cursor-pointer text-center font-sans text-lg transition-all duration-200",
                      formValues.needType === item.value
                        ? "border-gold bg-champagne-light text-anthracite"
                        : "border-beige bg-ivory text-anthracite hover:border-taupe"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 6 - Budget */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Quel est votre budget indicatif ?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {BUDGET_OPTIONS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleAutoAdvance("budget", item.value)}
                    className={cn(
                      "rounded-xl p-6 border-2 cursor-pointer text-center font-sans text-lg transition-all duration-200",
                      formValues.budget === item.value
                        ? "border-gold bg-champagne-light text-anthracite"
                        : "border-beige bg-ivory text-anthracite hover:border-taupe"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 7 - Contact Info */}
          {currentStep === 6 && (
            <motion.div
              key="step-6"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Comment vous contacter ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-taupe uppercase tracking-wider font-sans">
                    Prénom
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    className="rounded-xl bg-ivory border border-beige p-4 focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans text-anthracite"
                  />
                  {errors.firstName && (
                    <span className="text-sm text-red-400">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-taupe uppercase tracking-wider font-sans">
                    Nom
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className="rounded-xl bg-ivory border border-beige p-4 focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans text-anthracite"
                  />
                  {errors.lastName && (
                    <span className="text-sm text-red-400">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-taupe uppercase tracking-wider font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="rounded-xl bg-ivory border border-beige p-4 focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans text-anthracite"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-taupe uppercase tracking-wider font-sans">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="rounded-xl bg-ivory border border-beige p-4 focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans text-anthracite"
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-400">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="rounded-full bg-gradient-to-r from-gold to-bronze text-white px-8 py-3 font-medium font-sans transition hover:opacity-90 cursor-pointer"
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 8 - Details */}
          {currentStep === 7 && (
            <motion.div
              key="step-7"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-taupe hover:text-anthracite transition text-sm mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
              <h2 className="font-serif text-2xl md:text-3xl text-anthracite text-center mb-8">
                Parlez-nous de votre projet
              </h2>
              <div className="flex flex-col items-center gap-6">
                <textarea
                  {...register("details")}
                  placeholder="Décrivez votre vision, vos envies, tout ce qui rend votre événement unique..."
                  className="w-full rounded-xl bg-ivory border border-beige p-4 min-h-[150px] focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition font-sans text-anthracite resize-y placeholder:text-taupe/60"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-gold to-bronze text-white px-10 py-4 text-lg font-medium font-sans transition hover:opacity-90 cursor-pointer"
                >
                  Envoyer ma demande
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
