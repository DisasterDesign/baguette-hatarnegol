export const siteConfig = {
  name: 'באגט התרנגול',
  nameEn: 'Baguette HaTarnegol',
  slogan: 'המבחר שלנו, התיאבון שלכם',
  description:
    'מסעדת באגטים ועוף כשרה — באגטים טריים, מנות עוף מיוחדות, ואוכל איכותי במחירים נוחים',
  phone: '03-1234567', // PLACEHOLDER
  whatsapp: '9721234567', // PLACEHOLDER
  address: {
    street: 'רחוב הרצל 42', // PLACEHOLDER
    city: 'תל אביב', // PLACEHOLDER
    full: 'רחוב הרצל 42, תל אביב', // PLACEHOLDER
  },
  coordinates: {
    lat: 32.0853, // PLACEHOLDER (Tel Aviv)
    lng: 34.7818,
  },
  wazeLink: 'https://waze.com/ul?ll=32.0853,34.7818&navigate=yes', // PLACEHOLDER
  googleMapsLink: 'https://maps.google.com/?q=32.0853,34.7818', // PLACEHOLDER
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0!2d34.7818!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuNSJF!5e0!3m2!1siw!2sil!4v1700000000000', // PLACEHOLDER
  social: {
    instagram: 'https://instagram.com/baguette_hatarnegol', // PLACEHOLDER
    facebook: 'https://facebook.com/baguettehatarnegol', // PLACEHOLDER
    tiktok: '',
  },
  hours: {
    sunday: '10:00 - 23:00',
    monday: '10:00 - 23:00',
    tuesday: '10:00 - 23:00',
    wednesday: '10:00 - 23:00',
    thursday: '10:00 - 23:00',
    friday: '10:00 - 15:00',
    saturday: 'סגור',
  },
  kosher: true,
  kosherType: 'כשר', // PLACEHOLDER
  priceRange: '₪',
  navigation: [
    { label: 'בית', href: '#hero' },
    { label: 'על המסעדה', href: '#about' },
    { label: 'אירועים', href: '#events' },
    { label: 'גלריה', href: '#gallery' },
    { label: 'צרו קשר', href: '#contact' },
  ],
  url: 'https://baguette-hatarnegol.co.il', // PLACEHOLDER
};

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  isKosher: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'baguettes',
    label: 'באגטים',
    items: [
      {
        name: 'באגט שניצל קלאסי',
        description: 'שניצל עוף פריך עם חסה, עגבנייה ומיונז',
        price: 42,
        isKosher: true,
      },
      {
        name: 'באגט שווארמה',
        description: 'שווארמת עוף עסיסית עם חומוס, סלט ירקות וטחינה',
        price: 48,
        isKosher: true,
      },
      {
        name: 'באגט קבב',
        description: 'קבב טרי על האש עם סלט ירקות, חריף וטחינה',
        price: 50,
        isKosher: true,
      },
      {
        name: 'באגט פרגית',
        description: 'פרגית צלויה במרינדה ביתית עם ירקות קלויים',
        price: 46,
        isKosher: true,
      },
    ],
  },
  {
    id: 'chicken',
    label: 'מנות עוף',
    items: [
      {
        name: 'שניצל ביתי',
        description: 'שניצל עוף מטוגן בציפוי פריך עם צ׳יפס',
        price: 52,
        isKosher: true,
      },
      {
        name: 'כנפיים ברוטב',
        description: 'כנפי עוף ברוטב ברביקיו / חריף / סויה דבש',
        price: 45,
        isKosher: true,
      },
      {
        name: 'שיפודי פרגית',
        description: 'שיפודי פרגית על האש עם אורז ותוספות',
        price: 58,
        isKosher: true,
      },
      {
        name: 'חזה עוף צלוי',
        description: 'חזה עוף צלוי עם ירקות בתנור ופירה',
        price: 55,
        isKosher: true,
      },
    ],
  },
  {
    id: 'sides',
    label: 'תוספות',
    items: [
      {
        name: 'צ׳יפס ביתי',
        description: 'צ׳יפס טרי מטוגן עם מלח ותבלינים',
        price: 18,
        isKosher: true,
      },
      {
        name: 'טבעות בצל',
        description: 'טבעות בצל מטוגנות בציפוי פריך',
        price: 22,
        isKosher: true,
      },
      {
        name: 'סלט ירקות',
        description: 'סלט עגבניות, מלפפונים, בצל ושמן זית',
        price: 16,
        isKosher: true,
      },
      {
        name: 'חומוס ביתי',
        description: 'חומוס חלק עם טחינה, שמן זית ופפריקה',
        price: 20,
        isKosher: true,
      },
    ],
  },
  {
    id: 'drinks',
    label: 'שתייה',
    items: [
      {
        name: 'קולה / זירו',
        description: 'פחית 330 מ״ל',
        price: 10,
        isKosher: true,
      },
      {
        name: 'לימונדה ביתית',
        description: 'לימונדה טרייה עם נענע ולימון',
        price: 16,
        isKosher: true,
      },
      {
        name: 'מים מינרלים',
        description: 'בקבוק 500 מ״ל',
        price: 8,
        isKosher: true,
      },
      {
        name: 'אייס טי',
        description: 'אפרסק / לימון',
        price: 12,
        isKosher: true,
      },
    ],
  },
  {
    id: 'combos',
    label: 'קומבו / מבצעים',
    items: [
      {
        name: 'קומבו באגט',
        description: 'באגט לבחירה + צ׳יפס + שתייה',
        price: 55,
        isKosher: true,
      },
      {
        name: 'קומבו משפחתי',
        description: '3 באגטים + 2 צ׳יפס + 3 שתיות',
        price: 145,
        isKosher: true,
      },
      {
        name: 'קומבו זוגי',
        description: '2 באגטים + צ׳יפס גדול + 2 שתיות',
        price: 99,
        isKosher: true,
      },
    ],
  },
];

export const galleryImages = [
  { src: '/images/gallery/01.jpg', alt: 'באגט שניצל קלאסי' },
  { src: '/images/gallery/02.jpg', alt: 'מנות עוף מיוחדות' },
  { src: '/images/gallery/03.jpg', alt: 'חלל המסעדה' },
  { src: '/images/gallery/04.jpg', alt: 'באגט שווארמה' },
  { src: '/images/gallery/05.jpg', alt: 'צ׳יפס ביתי' },
  { src: '/images/gallery/06.jpg', alt: 'המטבח שלנו' },
  { src: '/images/gallery/07.jpg', alt: 'שיפודי פרגית' },
  { src: '/images/gallery/08.jpg', alt: 'עיצוב המסעדה' },
  { src: '/images/gallery/09.jpg', alt: 'קומבו משפחתי' },
];

export const aboutContent = {
  heroTitle: 'הסיפור שלנו',
  heroSubtitle: 'מהלב של השכונה — אל הצלחת שלכם',
  story: [
    {
      title: 'ההתחלה',
      text: 'באגט התרנגול נולד מתוך אהבה פשוטה לאוכל טוב ואיכותי. התחלנו כמסעדה קטנה בלב השכונה, עם חלום גדול — להגיש את הבאגטים הכי טריים והכי טעימים בעיר. כל יום אנחנו אופים את הלחם שלנו מאפס, בוחרים את חומרי הגלם הכי טריים, ומכינים הכל בעבודת יד.',
      image: '/images/about/story-1.jpg',
    },
    {
      title: 'המטבח שלנו',
      text: 'במטבח של באגט התרנגול אין קיצורי דרך. כל מנה מוכנת ברגע ההזמנה, מחומרי גלם טריים שמגיעים כל בוקר. הבשר שלנו תמיד טרי, הירקות חתוכים באותו יום, והרטבים — כולם ביתיים. אנחנו מאמינים שאוכל טוב לוקח זמן, ואנחנו לא מפחדים להשקיע אותו.',
      image: '/images/about/story-2.jpg',
    },
    {
      title: 'הקהילה',
      text: 'יותר מסתם מסעדה — אנחנו חלק מהקהילה. מהלקוחות הקבועים שמגיעים כל יום ועד המשפחות שבאות ביום שישי — כל אחד הוא חלק מהמשפחה שלנו. אנחנו גאים בשירות החם, בחיוך שמקבל כל לקוח, ובאוכל שגורם לאנשים לחזור שוב ושוב.',
      image: '/images/about/story-3.jpg',
    },
  ],
  values: [
    {
      icon: 'ChefHat',
      title: 'איכות ללא פשרות',
      description:
        'חומרי גלם טריים, הכנה ברגע ההזמנה, ובישול בעבודת יד. ככה אנחנו עובדים כל יום.',
    },
    {
      icon: 'BadgeCheck',
      title: 'כשרות',
      description:
        'כל המנות שלנו כשרות בהשגחה צמודה. אתם יכולים לאכול בראש שקט.',
    },
    {
      icon: 'Leaf',
      title: 'טריות מקסימלית',
      description:
        'הלחם נאפה כל בוקר, הירקות מגיעים טריים מדי יום, והבשר — תמיד מהיום.',
    },
  ],
};
