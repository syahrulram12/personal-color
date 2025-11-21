"use client";

import Cookies from "js-cookie";

const SKIN_TONE_KEY = "selectedColorSkinTone";
const UNDER_TONE_KEY = "selectedColorUnderTone";


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

export const getUnderTone = (): string[] => {
  const raw = Cookies.get(UNDER_TONE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const clearUnderTone = () => {
  Cookies.remove(UNDER_TONE_KEY);
};
