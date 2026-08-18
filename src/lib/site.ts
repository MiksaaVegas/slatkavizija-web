export const site = {
  name: "Слатка Приказна",
  tagline: "Торти и слатки создадени за вашите најубави моменти.",
  phone: "+389 70 123 456",
  phoneHref: "tel:+38970123456",
  instagram: "@slatkaprikazna.mk",
  instagramHref: "https://instagram.com/slatkaprikazna.mk",
  address: "ул. Македонија 25, Скопје",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.+%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0+25%2C+%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5",
  hoursShort: [
    { days: "Понеделник–Сабота", time: "09:00–20:00" },
    { days: "Недела", time: "Затворено" },
  ],
  hoursFull: [
    { day: "Понеделник", time: "09:00–20:00" },
    { day: "Вторник", time: "09:00–20:00" },
    { day: "Среда", time: "09:00–20:00" },
    { day: "Четврток", time: "09:00–20:00" },
    { day: "Петок", time: "09:00–20:00" },
    { day: "Сабота", time: "09:00–20:00" },
    { day: "Недела", time: "Затворено" },
  ],
} as const;

export const navLinks = [
  { to: "/", label: "Почетна" },
  { to: "/za-nas", label: "За нас" },
  { to: "/galerija", label: "Галерија" },
  { to: "/cenovnik", label: "Ценовник" },
  { to: "/kontakt", label: "Контакт" },
] as const;
