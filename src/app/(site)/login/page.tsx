"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — autenticação será integrada posteriormente
  }

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="relative flex min-h-[calc(100dvh-3.5rem-1px)] items-center justify-center px-4 py-20 sm:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold-500/8 blur-[150px]" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/6 blur-[120px]" />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          className="relative w-full max-w-md"
        >
          {/* Card */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 30, scale: 0.97 },
              animate: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="rounded-2xl border border-white/[0.07] bg-[#0A1A17]/90 backdrop-blur-xl p-8 shadow-xl shadow-black/40 sm:p-10"
          >
            {/* Header do card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20">
                <svg
                  className="h-7 w-7 text-navy-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Entrar no{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
                  SaúdeGPT
                </span>
              </h1>
              <p className="mt-2 text-sm text-muted sm:text-base">
                Acesse sua conta para continuar seus estudos
              </p>
            </motion.div>

            {/* Formulário */}
            <motion.form
              custom={1}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground/90 mb-1.5"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  autoComplete="email"
                  className="block w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-white/30 transition-colors focus:border-gold-400/50 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                />
              </div>

              {/* Senha */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-foreground/90"
                  >
                    Senha
                  </label>
                  <Link
                    href="/recuperar-senha"
                    className="text-xs font-medium text-gold-400/80 transition-colors hover:text-gold-400"
                  >
                    Esqueci minha senha
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua senha"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 pr-12 text-sm text-foreground placeholder:text-white/30 transition-colors focus:border-gold-400/50 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Botão Entrar */}
              <motion.div
                custom={2}
                variants={fadeUp}
              >
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-navy-700 shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/30 active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Entrar
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.form>

            {/* Separador */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-white/8" />
              <span className="text-xs font-medium text-white/30">ou</span>
              <div className="h-px flex-1 bg-white/8" />
            </motion.div>

            {/* Criar conta */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted">
                Ainda não tem conta?{" "}
                <Link
                  href="/#matricula"
                  className="font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  Criar conta
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            custom={5}
            variants={fadeUp}
            className="mt-6 text-center text-xs text-white/25 leading-relaxed"
          >
            Ao acessar, você concorda com nossos{" "}
            <Link href="/termos" className="underline underline-offset-2 hover:text-white/40 transition-colors">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="underline underline-offset-2 hover:text-white/40 transition-colors">
              Política de Privacidade
            </Link>
            .
          </motion.p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
