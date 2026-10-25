// Wedding details that are the same in every language. Translated text lives
// in src/i18n/locales/*.json. Anything marked TODO still needs the real value.

export const wedding = {
  couple: 'Emily & Sven',
  initials: 'E&S',
  date: '17 . 07 . 2027',
  shortDate: '17.07.27',
  hashtag: '#Svemily2027',
  email: 'hello@example.com', // TODO
}

export const navLinks = [
  { key: 'ourStory', to: '/our-story' },
  { key: 'gettingThere', to: '/getting-there' },
  { key: 'gifts', to: '/gifts' },
] as const

export const events = [
  {
    key: 'ceremony',
    time: 'Time TBA', // TODO
    place: 'Venue TBA', // TODO
    address: ['Street', 'Postcode City'], // TODO
  },
  {
    key: 'reception',
    time: 'Time TBA', // TODO
    place: 'Venue TBA', // TODO
    address: ['Street', 'Postcode City'], // TODO
  },
] as const

export const gettingThere = {
  walkMinutes: 15,
  parking: {
    name: 'Parking TBA', // TODO
    address: 'Parking address', // TODO: anything Google Maps can find
  },
  venue: {
    name: 'Venue TBA', // TODO
    address: 'Venue address', // TODO
  },
}

export const rsvp = {
  // TODO: Google Form → Send → link icon → paste the link here (…/viewform)
  formUrl: '',
  deadline: '', // TODO: YYYY-MM-DD, shown in each language's date format
}

export const gifts = {
  accountHolder: 'Emily & Sven', // TODO: exact name on the account
  iban: 'XX00 0000 0000 0000 0000 00', // TODO
}
