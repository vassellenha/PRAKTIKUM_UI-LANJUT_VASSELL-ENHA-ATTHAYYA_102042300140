export const events = [
  {
    id: 1,
    title: 'Vue.js Mastery Workshop',
    category: 'Workshop',
    date: 'Oct 12, 2026',
    time: '09:00 - 15:00',
    location: 'Tech Hub, Jakarta',
    shortDesc:
      'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.',
    description: [
      'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.',
      'This hands-on workshop walks you through building a production-ready Vue app from scratch, with live coding sessions and Q&A along the way.'
    ],
    agenda: [
      '09:00 - Registration & Morning Coffee',
      '09:30 - Composition API Deep Dive',
      '11:30 - Coffee Break',
      '12:00 - Hands-on: State Management',
      '14:30 - Q&A & Closing Remarks'
    ],
    price: 'Rp 300.000',
    ticketDesc: 'Includes full-day access, workbook, and lunch.',
    spots: 'Only 12 spots left!'
  },
  {
    id: 2,
    title: 'National Tech Meetup',
    category: 'Meetup',
    date: 'Oct 15, 2026',
    time: '13:00 - 18:00',
    location: 'Main Auditorium, City Center',
    shortDesc:
      'A gathering of hundreds of developers and tech enthusiasts to share the latest industry trends and expand professional networks.',
    description: [
      'A gathering of hundreds of developers and tech enthusiasts to share the latest industry trends and expand professional networks.',
      'Expect lightning talks from local practitioners, an open networking floor, and booths from sponsoring tech companies.'
    ],
    agenda: [
      '13:00 - Doors Open & Registration',
      '13:30 - Lightning Talks',
      '15:30 - Networking Break',
      '16:30 - Panel Discussion',
      '18:00 - Closing & Networking'
    ],
    price: 'Free',
    ticketDesc: 'Free entry, registration required.',
    spots: '60 spots left'
  },
  {
    id: 3,
    title: 'Startup Pitch Competition',
    category: 'Competition',
    date: 'Nov 2, 2026',
    time: '18:00 - 21:00',
    location: 'Innovation Center',
    shortDesc:
      'Watch the best local startup founders pitch their innovative ideas live in front of a panel of renowned investors.',
    description: [
      'Watch the best local startup founders pitch their innovative ideas live in front of a panel of renowned investors.',
      'Ten finalists will each get five minutes on stage followed by rapid-fire Q&A, with cash prizes awarded to the top three teams.'
    ],
    agenda: [
      '18:00 - Registration & Networking',
      '18:30 - Pitch Sessions Begin',
      '20:30 - Judges Deliberation & Awards',
      '21:00 - Closing Networking'
    ],
    price: 'Free',
    ticketDesc: 'Free entry, limited seats, registration required.',
    spots: '8 spots left!'
  },
  {
    id: 4,
    title: 'UI/UX Design Sprint',
    category: 'Workshop',
    date: 'Nov 10, 2026',
    time: '10:00 - 16:00',
    location: 'Creative Studio',
    shortDesc:
      'A hands-on session on designing user interfaces by implementing layout systems and visual hierarchy principles.',
    description: [
      'A hands-on session on designing user interfaces by implementing layout systems and visual hierarchy principles.',
      'Participants will work in small teams on a real design brief, applying grid systems, spacing scales, and focal point techniques to a live prototype.'
    ],
    agenda: [
      '10:00 - Registration & Icebreaker',
      '10:30 - Layout System Fundamentals',
      '12:30 - Lunch Break',
      '13:30 - Team Design Sprint',
      '15:30 - Presentations & Feedback'
    ],
    price: 'Rp 200.000',
    ticketDesc: 'Includes materials, lunch, and a design toolkit.',
    spots: '15 spots left'
  },
  {
    id: 5,
    title: 'Digital Marketing Seminar',
    category: 'Seminar',
    date: 'Nov 20, 2026',
    time: '09:00 - 12:00',
    location: 'Grand Hotel Hall',
    shortDesc:
      'An in-depth seminar dissecting modern digital marketing strategies, from SEO optimization to user conversion tactics.',
    description: [
      'An in-depth seminar dissecting modern digital marketing strategies, from SEO optimization to user conversion tactics.',
      'Industry speakers will cover content strategy, paid acquisition, and analytics-driven decision making for growing a brand online.'
    ],
    agenda: [
      '09:00 - Registration & Coffee',
      '09:30 - SEO & Content Strategy',
      '10:30 - Conversion Optimization',
      '11:30 - Q&A & Closing'
    ],
    price: 'Rp 150.000',
    ticketDesc: 'Includes seminar kit and morning refreshments.',
    spots: '25 spots left'
  },
  {
    id: 6,
    title: 'Community Leaders Summit',
    category: 'Conference',
    date: 'Dec 5, 2026',
    time: '09:00 - 17:00',
    location: 'Gatherly HQ',
    shortDesc:
      'An exclusive year-end conference for community leaders to formulate sustainable ecosystem development strategies.',
    description: [
      'An exclusive year-end conference for community leaders to formulate sustainable ecosystem development strategies.',
      'A full day of strategy workshops, leader roundtables, and a closing gala to celebrate the year\'s community milestones.'
    ],
    agenda: [
      '09:00 - Registration & Welcome Coffee',
      '10:00 - Opening Keynote',
      '12:00 - Networking Lunch',
      '13:30 - Leader Roundtables',
      '16:00 - Closing Gala'
    ],
    price: 'Rp 350.000',
    ticketDesc: 'Includes full-day access, lunch, and closing gala entry.',
    spots: 'Only 5 spots left!'
  }
]

export function getEventById(id) {
  return events.find((event) => event.id === Number(id))
}
