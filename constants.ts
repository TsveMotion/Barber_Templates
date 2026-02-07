import { Barber, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    title: 'Signature Haircut',
    price: '€45',
    duration: '45 mins',
    description: 'Precision cut styled to perfection. Includes hot towel finish.',
  },
  {
    id: 'beard',
    title: 'Beard Sculpting',
    price: '€30',
    duration: '30 mins',
    description: 'Trimming, shaping, and conditioning for the modern gentleman.',
  },
  {
    id: 'shave',
    title: 'Royal Hot Shave',
    price: '€40',
    duration: '45 mins',
    description: 'Traditional straight razor shave with essential oils and hot towels.',
  },
  {
    id: 'full',
    title: 'The Gentleman’s Full',
    price: '€75',
    duration: '75 mins',
    description: 'Combination of signature haircut and beard sculpting or shave.',
  },
];

export const BARBERS: Barber[] = [
  {
    id: '1',
    name: 'James "The Blade"',
    role: 'Master Barber',
    image: 'https://picsum.photos/id/338/400/500',
    specialties: ['Fades', 'Classic Cuts'],
  },
  {
    id: '2',
    name: 'Marcus Sterling',
    role: 'Senior Stylist',
    image: 'https://picsum.photos/id/996/400/500',
    specialties: ['Beard Sculpting', 'Hot Shaves'],
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Style Director',
    image: 'https://picsum.photos/id/64/400/500',
    specialties: ['Modern Textures', 'Scissor Cuts'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Arthur Morgan',
    rating: 5,
    text: "Best grooming experience in the city. The attention to detail is unmatched.",
    date: 'Oct 2023',
  },
  {
    id: '2',
    name: 'Thomas Shelby',
    rating: 5,
    text: "A proper establishment. Sharp cuts and good conversation.",
    date: 'Nov 2023',
  },
  {
    id: '3',
    name: 'John Wick',
    rating: 5,
    text: "Efficient, professional, and precise. Exactly what I need.",
    date: 'Dec 2023',
  },
];
