// Names live in the dictionaries under src/i18n.
// Photos are the files in public/girls/<folder>; the first one is the cover.
const girlPhotos = (dir: string, names: string[]) =>
  names.map((name) => `/girls/${dir}/${name}.avif`);

// The first VISIBLE_GIRLS are shown on the page; the rest appear after "All girls".
export const girls = [
  { id: "annabel", age: 25, height: 170, weight: 54, breast: 3.5, photos: girlPhotos("annabelle", ["photo_2023-02-20_16-29-20", "photo_2023-02-20_16-29-05", "photo_2023-02-20_16-29-15", "photo_2023-02-20_16-29-17", "photo_2023-02-20_16-29-22", "photo_2023-02-20_16-29-24"]) },
  { id: "vera", age: 23, height: 178, weight: 58, breast: 2, photos: girlPhotos("vera", ["Vera_2", "Vera", "Vera_3", "Vera_4", "Vera_5"]) },
  { id: "dolores", age: 19, height: 165, weight: 50, breast: 2, photos: girlPhotos("dolores", ["dolores_5", "dolores_3", "dolores_4", "dolores_6"]) },
  { id: "seville", age: 26, height: 170, weight: 59, breast: 4, photos: girlPhotos("seville", ["seville-1", "seville-2", "seville-3"]) },
  { id: "diamond", age: 26, height: 165, weight: 54, breast: 4, photos: girlPhotos("diamond", ["photo_2023-04-17_22-30-39", "photo_2023-04-17_22-30-38", "photo_2023-04-17_22-30-38-2", "photo_2023-04-17_22-30-39-2"]) },
  { id: "riana", age: 26, height: 168, weight: 58, breast: 4, photos: girlPhotos("rihanna", ["photo_2022-07-15_13-37-44-2", "photo_2022-07-15_13-34-48", "photo_2022-07-15_13-37-45-2", "photo_2022-07-15_14-20-00-3"]) },
  { id: "lola", age: 23, height: 160, weight: 47, breast: 4, photos: girlPhotos("lola", ["Leisan_5", "Leisan_1", "Leisan_3", "Leisan_4"]) },
  { id: "lara", age: 28, height: 164, weight: 54, breast: 3, photos: girlPhotos("lara", ["Lara_1", "Lara_3"]) },
  { id: "megan", age: 25, height: 168, weight: 56, breast: 3, photos: girlPhotos("megan", ["Megan_5", "Megan_1", "Megan_2", "Megan_3", "Megan_4"]) },
  { id: "louise", age: 26, height: 170, weight: 50, breast: 1.5, photos: girlPhotos("louise", ["Louisa_6", "Louisa_1", "Louisa_3", "Louisa_4", "Louisa_5"]) },
  { id: "dakota", age: 23, height: 168, weight: 55, breast: 3, photos: girlPhotos("dakota", ["unnamed-3", "unnamed", "unnamed-1", "unnamed-2", "unnamed-7"]) },
  { id: "stefania", age: 26, height: 167, weight: 61, breast: 3.5, photos: girlPhotos("stefania", ["IMG_0535", "IMG_0532", "IMG_0534"]) },
  { id: "daphne", age: 20, height: 167, weight: 54, breast: 2, photos: girlPhotos("daphne", ["Dakota_3", "Dakota_1", "Dakota_2", "Dakota_4", "Dakota_5", "Dakota_6"]) },
  { id: "penelope", age: 24, height: 172, weight: 55, breast: 3, photos: girlPhotos("penelope", ["Phenelopa_4", "Phenelopa_1", "Phenelopa_2", "Phenelopa_6", "Phenelopa_7"]) },
  { id: "blake", age: 19, height: 174, weight: 54, breast: 1.5, photos: girlPhotos("blake", ["photo_2022-01-19_12-25-52-2", "Barbara_1", "Barbara_2"]) },
] as const;

export type GirlId = (typeof girls)[number]["id"];

export const VISIBLE_GIRLS = 8;
