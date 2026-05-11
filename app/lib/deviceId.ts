import { cookies } from "next/headers";
import crypto from "node:crypto";

const COOKIE_NAME = "device_id";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Lê o device_id do cookie (se existir) ou retorna null sem escrever.
 * Usado em Server Components puros (sem permissão de write).
 */
export async function readDeviceId(): Promise<string | null> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value ?? null;
}

/**
 * Garante um device_id: lê do cookie se existir, ou cria um novo UUID e
 * persiste no cookie. Use apenas em Route Handlers / Server Actions, onde
 * o set do cookie é permitido.
 */
export async function ensureDeviceId(): Promise<string> {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;
  if (existing) return existing;

  const id = crypto.randomUUID();
  store.set(COOKIE_NAME, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ONE_YEAR,
  });
  return id;
}

export const DEVICE_COOKIE_NAME = COOKIE_NAME;
