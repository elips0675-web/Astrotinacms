export interface WPPost {
  id: number;
  title: string;
  status: 'publish' | 'draft' | 'pending';
  author: string;
  date: string;
  type: 'post' | 'page';
  excerpt: string;
}

export interface WPMedia {
  id: number;
  url: string;
  title: string;
  mime: string;
  size: string;
}

export interface WPEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'past' | 'cancelled';
  description: string;
}

export interface WPService {
  id: number;
  title: string;
  description: string;
  price: string;
  status: 'active' | 'inactive';
  icon: string;
}

export interface WPPrintItem {
  id: number;
  title: string;
  description: string;
  price: string;
  format: string;
  status: 'active' | 'inactive';
}

export const MOCK_POSTS: WPPost[] = [
  {
    id: 1,
    title: 'The Future of Digital Design',
    status: 'publish',
    author: 'Admin',
    date: '2023-10-24',
    type: 'post',
    excerpt: 'Exploring the new trends in UI/UX for 2024 and beyond...',
  },
  {
    id: 2,
    title: 'Optimizing WordPress Performance',
    status: 'publish',
    author: 'Editor',
    date: '2023-10-22',
    type: 'post',
    excerpt: 'Speed is everything. Learn how to shave seconds off your load time.',
  },
  {
    id: 3,
    title: 'About Our Studio',
    status: 'publish',
    author: 'Admin',
    date: '2023-10-15',
    type: 'page',
    excerpt: 'Dedicated to creating world-class digital experiences.',
  },
  {
    id: 4,
    title: 'Product Roadmap 2024',
    status: 'draft',
    author: 'Strategy',
    date: '2023-10-25',
    type: 'post',
    excerpt: 'A sneak peek at what we are building next year.',
  },
  {
    id: 5,
    title: 'Contact Us',
    status: 'publish',
    author: 'Admin',
    date: '2023-09-30',
    type: 'page',
    excerpt: 'Get in touch with our team for your next project.',
  },
];

export const MOCK_MEDIA: WPMedia[] = [
  { id: 101, url: 'https://picsum.photos/seed/cms4/300/300', title: 'Skyline.jpg', mime: 'image/jpeg', size: '1.2MB' },
  { id: 102, url: 'https://picsum.photos/seed/cms5/300/300', title: 'Landscape.png', mime: 'image/png', size: '2.5MB' },
  { id: 103, url: 'https://picsum.photos/seed/cms1/300/300', title: 'Banner_Draft.jpg', mime: 'image/jpeg', size: '800KB' },
  { id: 104, url: 'https://picsum.photos/seed/cms2/300/300', title: 'Office_Header.jpg', mime: 'image/jpeg', size: '1.5MB' },
  { id: 105, url: 'https://picsum.photos/seed/cms3/300/300', title: 'Tools_Icon.svg', mime: 'image/svg+xml', size: '45KB' },
];

export const MOCK_EVENTS: WPEvent[] = [
  {
    id: 201,
    title: 'Studio Launch Party',
    date: '2024-05-12',
    time: '18:00',
    location: 'Main Hall',
    status: 'upcoming',
    description: 'Celebrating the official launch of StudioCMS Hub with the community.',
  },
  {
    id: 202,
    title: 'Performance Workshop',
    date: '2024-06-05',
    time: '10:00',
    location: 'Online / Zoom',
    status: 'upcoming',
    description: 'Deep dive into optimizing web performance for modern applications.',
  },
  {
    id: 203,
    title: 'Community Meetup',
    date: '2023-12-15',
    time: '15:30',
    location: 'Innovation Hub',
    status: 'past',
    description: 'End of year gathering for all local developers and designers.',
  },
];

export const MOCK_SERVICES: WPService[] = [
  {
    id: 301,
    title: 'Web Development',
    description: 'Custom website creation using modern frameworks.',
    price: 'from $999',
    status: 'active',
    icon: 'Code',
  },
  {
    id: 302,
    title: 'UI/UX Design',
    description: 'Creating beautiful and functional user interfaces.',
    price: 'from $499',
    status: 'active',
    icon: 'Palette',
  },
  {
    id: 303,
    title: 'SEO Optimization',
    description: 'Improving your visibility on search engines.',
    price: 'from $299',
    status: 'inactive',
    icon: 'Search',
  },
];

export const MOCK_PRINTING: WPPrintItem[] = [
  {
    id: 401,
    title: 'Standard Business Cards',
    description: '350gsm silk finish, double sided printing.',
    price: '$25 / 100pcs',
    format: '85x55mm',
    status: 'active',
  },
  {
    id: 402,
    title: 'A4 Flyers',
    description: '150gsm gloss finish, high quality color.',
    price: '$45 / 50pcs',
    format: 'A4',
    status: 'active',
  },
  {
    id: 403,
    title: 'Premium Brochures',
    description: '12-page booklet on premium matte paper.',
    price: '$120 / 20pcs',
    format: 'A5',
    status: 'inactive',
  },
];

export const MOCK_CHAT_USERS = [
  {
    id: '1',
    name: 'Ivan Petrov',
    lastMessage: 'Как обновить логотип?',
    time: '2м назад',
    status: 'in_progress' as const,
    unread: 1,
  },
  {
    id: '2',
    name: 'Elena Sidorova',
    lastMessage: 'Ошибка 500 при оплате',
    time: '15м назад',
    status: 'pending' as const,
  },
  {
    id: '3',
    name: 'Dmitry Volkov',
    lastMessage: 'Спасибо за помощь!',
    time: '1ч назад',
    status: 'resolved' as const,
  },
];

export const WP_STATS = {
  totalPosts: 42,
  totalPages: 8,
  mediaItems: 124,
  users: 5,
  siteHealth: 'Good',
  upcomingEvents: 2,
  totalServices: 12,
  printingItems: 8,
};