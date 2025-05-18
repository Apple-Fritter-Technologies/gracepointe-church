import { Globe, Heart, Users } from "lucide-react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Beliefs", href: "/beliefs" },
  { name: "Sermons", href: "/sermons" },
  { name: "Contact", href: "/contact" },
  { name: "Giving", href: "/giving" },
  { name: "Visit Our School", href: "/school" },
];

export const heroSlides = [
  {
    id: 1,
    image: "/images/hero-church.png",
    title: "Exciting Expository Bible Preaching",
    description:
      "At Gracepointe, the Bible is preached verse-by-verse, honoring the text and preventing personal biases. Following the example of great preachers like Spurgeon and Calvin, this method is scripturally supported and central to worship, emphasizing the importance of faithful delivery of God's Word.",
    link: "/sermons",
    buttonText: "Listen Sermons",
  },
  {
    id: 2,
    image: "/images/hero-school.png",
    title: "K-12 Christian Academy",
    description:
      "Gracepointe Academy exists to glorify God by sharing Jesus' love and knowledge of His world. We aim to shape young men and women for success in their God-given callings, preparing and guiding them to fulfill their sacred work for the Kingdom of God.",
    link: "/school",
    buttonText: "Visit Our School",
  },
];

export const serviceTimes = [
  {
    title: "Sunday Morning",
    image: "/images/hero-church.png",
    listItems: [
      "Sunday Morning: 8:30am",
      "Men's Class 9:30am",
      "Bible Study 10:45am",
    ],
    caption: "Morning Service",
  },
  {
    title: "Sunday Night",
    image: "/images/hero-church.png",
    listItems: [
      "Service begins at 6pm.",
      "Fellowship Meal",
      "bring a dish to pass!",
    ],
  },
];

export const beliefs = [
  {
    title: "Realizing our purpose",
    tag: "Love God",
    icon: Heart,
    bgColor: "#9B3B22",
    quote:
      "“… Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind” – Lk 10:27",
    description:
      "Our love of God is our drive to serve Him (1 Jn 4:19). In our lives, praise, decisions, occupations, and family we are to show love to God with every fiber of our being. He must be our reason to be.",
  },
  {
    title: "Recognizing true community",
    tag: "Love Others",
    icon: Users,
    bgColor: "#00843D",
    quote:
      "“And the second is like, namely this, Thou shalt love thy neighbor as thyself. There is none other commandment greater than these.” – Mark 12:31",
    description:
      "As a church family, we aim to provide a caring and supportive environment where each person feels valued and welcomed. We believe in building authentic relationships through fellowship, service, and mutual encouragement.",
  },
  {
    title: "Striving to reach the world",
    tag: "Love Loud",
    icon: Globe,
    bgColor: "#1E3A8A",
    quote:
      "“And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost, teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen.” –Matthew 28:18-20",
    description:
      "We are committed to sharing God's love beyond our walls through local outreach initiatives, global missions, and practical service to those in need.",
  },
];
