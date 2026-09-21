// Descriptions, addresses and metro stations live in the dictionaries under src/i18n.
export type Salon = {
  id: SalonId;
  /** Brand name; identical in every language. */
  name: string;
  logo: string;
  /** Starting price in rubles. */
  price: number;
  /** Bare domain, e.g. "www.example.ru". */
  website: string;
  /** Gallery; the first photo is the cover. */
  photos: string[];
};

const salonPhotos = (dir: string, names: string[]) =>
  names.map((name) => `/salons/${dir}/${name}.avif`);

export const salons = [
  {
    id: "barbie",
    name: "BARBIE SPA",
    logo: "/salons/barbie/logo.avif",
    price: 4500,
    website: "www.barbiespa.ru",
    photos: salonPhotos("barbie", ["IMG_0687", "IMG_0689-scaled", "IMG_0695", "IMG_0696", "IMG_0698", "IMG_0708", "IMG_0711-scaled", "IMG_0712-scaled", "IMG_0726", "IMG_0727-scaled", "IMG_0732-scaled", "IMG_0733-scaled"]),
  },
  {
    id: "vanilia",
    name: "Vanilia SPA",
    logo: "/salons/vanilia/logo.avif",
    price: 5000,
    website: "www.5massage.ru",
    photos: salonPhotos("vanilia", ["1", "2", "3", "4", "5", "6"]),
  },
  {
    id: "podium",
    name: "PODIUM",
    logo: "/salons/podium/logo.avif",
    price: 6000,
    website: "www.eroticmassaj.ru",
    photos: salonPhotos("podium", ["IMG_9282", "IMG_9281", "IMG_9284", "IMG_9288", "IMG_9289", "IMG_9296", "IMG_9298", "IMG_9303", "IMG_9320", "IMG_9328", "IMG_9333", "IMG_9334", "IMG_9354", "IMG_9356", "IMG_9358"]),
  },
  {
    id: "soho",
    name: "SOHO SPA",
    logo: "/salons/soho/logo.avif",
    price: 4500,
    website: "www.soho-spa.com",
    photos: salonPhotos("soho", ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1"]),
  },
  {
    id: "imperium",
    name: "IMPERIUM",
    logo: "/salons/imperium/logo.avif",
    price: 5000,
    website: "www.imperiumspa.ru",
    photos: salonPhotos("imperium", ["6-1", "1-3", "2-3", "3-3", "4-2", "5-1"]),
  },
  {
    id: "dacha",
    name: "DACHA",
    logo: "/salons/dacha/logo.avif",
    price: 10000,
    website: "www.dachaspa.ru",
    photos: salonPhotos("dacha", ["DSC06485-HDR-scaled", "DSC06488-HDR-scaled", "DSC06494-HDR-scaled", "DSC06500-HDR-scaled", "DSC06521-HDR-scaled", "DSC06530-HDR-scaled", "DSC06533-HDR-scaled", "DSC06542-HDR-scaled", "DSC06554-HDR-scaled", "DSC06563-HDR-scaled", "DSC06566-HDR-scaled"]),
  },
] as const satisfies readonly Salon[];

export type SalonId = "barbie" | "vanilia" | "podium" | "soho" | "imperium" | "dacha";
