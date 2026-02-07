export interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
}
