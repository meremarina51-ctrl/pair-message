// Texts (title, description, includes) live in the dictionaries under src/i18n.
export const programs = [
  {
    id: "paradise",
    minutes: 60,
    price: 10000,
    image: "/programms/photo_2022-11-09_18-59-49.avif",
  },
  {
    id: "temptation",
    minutes: 120,
    price: 16000,
    image: "/programms/photo_2022-11-09_19-11-37.avif",
  },
  {
    id: "youAndI",
    minutes: 60,
    price: 18000,
    image: "/programms/photo_2022-11-09_19-11-38.avif",
  },
  {
    id: "sodom",
    minutes: 120,
    price: 24000,
    image: "/programms/photo_2022-11-09_19-11-39.avif",
  },
  {
    id: "delights",
    minutes: 90,
    price: 55000,
    image: "/programms/photo_2022-11-09_19-11-39-2.avif",
  },
] as const;

export type ProgramId = (typeof programs)[number]["id"];
