"use client";

import Cookies from "js-cookie";

const SKIN_TONE_KEY = "selectedColorSkinTone";
const UNDER_TONE_KEY = "selectedColorUnderTone";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToCookies = (key: string, value: any, days = 7) => {
  Cookies.set(key, JSON.stringify(value), {
    expires: days,
  });
};

export const getFromCookies = <T>(key: string): T | null => {
  const data = Cookies.get(key);
  return data ? JSON.parse(data) : null;
};

// HAPUS COOKIE
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};

export const saveSkinTone = (color: string) => {
  const data = { color };

  Cookies.set(SKIN_TONE_KEY, JSON.stringify(data), { expires: 7 });
};

export const getSkinTone = (): string | null => {
  const raw = Cookies.get(SKIN_TONE_KEY);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    return data.color ?? null;
  } catch {
    return null;
  }
};

export const appendUnderTone = (color: string) => {
  const raw = Cookies.get(UNDER_TONE_KEY);

  let current: string[] = [];

  if (raw) {
    try {
      current = JSON.parse(raw);
    } catch {
      current = [];
    }
  }

  const updated = [...current, color];

  Cookies.set(UNDER_TONE_KEY, JSON.stringify(updated), { expires: 7 });

  return updated;
};

export const setUnderToneByPage = (color: string, pageIndex: number) => {
  const raw = Cookies.get(UNDER_TONE_KEY);
  let current: string[] = [];

  if (raw) {
    try {
      current = JSON.parse(raw);
    } catch {
      current = [];
    }
  }

  // Update atau tambahkan warna sesuai pageIndex
  current[pageIndex] = color;

  // Hapus trailing undefined atau empty string agar rapi
  const cleaned = current.filter((c) => c !== undefined && c !== "");

  Cookies.set(UNDER_TONE_KEY, JSON.stringify(cleaned), { expires: 7 });

  return cleaned;
};

export const getUnderTone = (): string[] => {
  const raw = Cookies.get(UNDER_TONE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const getAllColorCookies = () => {
  return {
    skinTone: getSkinTone(),
    underTone: getUnderTone(),
  };
};

export const clearCookies = () => {
  Cookies.remove(UNDER_TONE_KEY);
  Cookies.remove(SKIN_TONE_KEY);
};
