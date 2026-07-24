import { clsx } from "clsx"
import type { ClassValue } from "clsx" // 🟢 Se importa explícitamente como tipo separado
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}