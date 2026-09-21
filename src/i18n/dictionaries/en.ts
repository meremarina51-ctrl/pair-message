import type { Dictionary } from "../types";

const BASE_INCLUDES =
  "classic body massage, foot massage with hot towels, head and face massage, Thai body massage, gentle touches to the girl, lingam massage";

const EXTENDED_INCLUDES = `${BASE_INCLUDES}, choice of poses, shower together +2 services of your choice (hot oranges, "Strawberry", brushes, "Cherry blossom branch")`;

export const en: Dictionary = {
  meta: {
    title: "Couples Massage — erotic massage in Moscow salons",
    description:
      "Erotic massage programs for couples: classic massage, Thai body massage, foot massage with hot towels and more. Salons and masseuses from the catalog.",
  },
  brand: { name: "Massage", tagline: "for couples" },
  nav: {
    programs: "Programs",
    girls: "Girls",
    salons: "Our salons",
    book: "Book",
  },
  common: { orderProgram: "Order a program" },
  header: {
    orderCall: "Request a call",
    menu: "Menu",
    close: "Close",
    mainNav: "Main navigation",
    language: "Language",
  },
  hero: {
    eyebrow: "A program for two",
    title: "Erotic massage for couples",
    included:
      "Included: classic massage, foot massage with hot towels, head massage, Thai body massage, gentle touches to the girl, lingam massage, shower.",
    extra:
      "+ 2 services of your choice (hot oranges, strawberry, brushes, cherry blossom branch)",
    sectionsNav: "Site sections",
  },
  programs: {
    label: "Programs for couples",
    minutes: "{n} min",
    items: {
      paradise: {
        title: "Paradise for Two",
        description:
          "A program designed to help a couple decide whether they are ready to let a “stranger” into their games.",
        girls: "1 girl",
        includes: `${BASE_INCLUDES}, shower together`,
      },
      temptation: {
        title: "Temptation",
        description:
          "An offer for couples who already know what they like.",
        girls: "1 girl",
        includes: `${BASE_INCLUDES}, shower together`,
      },
      youAndI: {
        title: "YOU AND I",
        description: "Spend time together after an incredible program!",
        girls: "2 girls",
        includes: EXTENDED_INCLUDES,
      },
      sodom: {
        title: "Sodom and Gomorrah",
        description:
          "Give in to the temptation to break the unity of intimacy.",
        girls: "2 girls",
        includes: EXTENDED_INCLUDES,
      },
      delights: {
        title: "1001 Delights",
        description:
          "An unforgettable program in which you and your other half will literally immerse yourselves in pleasure.",
        includes:
          "classic massage, stone therapy, foot massage with hot towels, mutual gentle kisses over the body, mutual caresses between all participants, Thai body massage, shower together, peep show, changing poses, caresses and stimulation with remote-controlled sex toys",
      },
    },
  },
  girls: {
    label: "Our girls",
    showAll: "All girls",
    hide: "Hide",
    height: "height",
    weight: "weight",
    breast: "bust",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    photoOf: "Photo {n} of {total}",
    names: {
      annabel: "Annabel",
      vera: "Vera",
      dolores: "Dolores",
      seville: "Seville",
      diamond: "Diamond",
      riana: "Riana",
      lola: "Lola",
      lara: "Lara",
      megan: "Megan",
      louise: "Louise",
      dakota: "Dakota",
      stefania: "Stefania",
      daphne: "Daphne",
      penelope: "Penelope",
      blake: "Blake",
    },
  },
  salons: {
    label: "Our salons",
    tabs: "Salons",
    priceFrom: "Price from",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    showPhoto: "Show photo {n}",
    interior: "Interior of {name} salon, photo {n}",
    items: {
      barbie: {
        body: "Barbie salon invites gentlemen to spend a wonderful time, fully relax and unwind, forget all cares and problems for a while, and take home a wealth of unforgettable impressions. Comfortable rooms with a cozy interior that invites a pleasant stay, a wonderful atmosphere and professional erotic massage performed by gorgeous girls with captivating figures await you.",
        address: "Kalanchevskaya St., 32/58, bldg 1",
        metro: "Prospekt Mira metro station",
      },
      vanilia: {
        body: "Vanilia is a three-storey venue with suites ranging from standard to VIP. Loud music greets you at the entrance, because nobody sleeps here and everyone is welcome! There are plenty of girls, and just as many ways to relax. Tasty hookahs and an indescribable atmosphere. 3 private hammams and 1 large one for a fun, noisy group of guests (up to 15 people). Parking is available for your convenience. Open 24 hours.",
        address: "Myasnitskaya St., 8/2, bldg 1",
        metro: "Lubyanka and Kitay-Gorod metro stations",
      },
      podium: {
        body: "Podium is the choice of discerning gentlemen. Only here you will find 2 halls designed in different styles. VIP suites with 4 private saunas and 4 saunas for a small group (up to 4 people), a jacuzzi, restrooms and spacious tatami mats. The venue's girls are not only wonderfully beautiful but also genuinely skilled in various massage techniques! Quality alcohol at the bar and a tasty hookah are complimentary. Inconspicuous from the outside, the venue will pleasantly surprise you inside — we guarantee it! Open 24 hours.",
        address: "Bolshaya Molchanovka St., 18",
        metro: "Arbatskaya and Kievskaya metro stations",
      },
      soho: {
        body: "A men's relaxation massage club in the very center of Moscow. We welcome you with full hospitality in the comfortable suites of our massage studio.",
        address: "Maly Kharitonyevsky Ln., 9/13, bldg 5",
        metro: "Krasnye Vorota metro station",
      },
      imperium: {
        body: "Imperium is a three-storey suite complex with a jacuzzi, 3 saunas and 3 hammams in Greek style. The girls will greet you in stylish outfits of Greek priestesses. Imperium is a chance to step into a world where any fantasy becomes reality! In the very center of Moscow, in the picturesque Chistye Prudy area, it is a modern Olympus with every amenity. Free parking and open 24 hours.",
        address: "Myasnitskaya St., 41B",
        metro: "Krasnye Vorota metro station",
      },
      dacha: {
        body: "We take an individual approach in our work. That means even your boldest wishes will be fulfilled. Our credo: what happens in the salon stays in the salon. DACHA will keep all your secrets, so you can relax to the fullest!",
        address: "Krylatskaya St., 30, bldg 1",
        metro: "Mnyovniki metro station",
      },
    },
  },
  widget: { open: "Contact us", close: "Close", call: "Call us" },
  footer: {
    disclaimer:
      "© {year}. The catalog does not provide intimate services. By visiting the salons listed in the catalog, you agree to the rules of the individual establishment.",
    nav: "Footer navigation",
    adults: "18+",
    noIntim: "WE DO NOT PROVIDE INTIMATE SERVICES",
  },
};
