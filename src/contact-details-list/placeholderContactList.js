import {
  EmailIcon,
  PhoneIcon,
  GridIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../public/assets";

const placeholderContactList = [
  {
    id: 1,
    icon: EmailIcon,
    label: "Email",
    value: "contact@flex.co",
  },
  {
    id: 2,
    icon: PhoneIcon,
    label: "Phone",
    value: "+7-843-672-431",
  },
  {
    id: 3,
    icon: GridIcon,
    label: "Socials",
    value: [
      { icon: PinterestIcon, id: 1 },
      { icon: FacebookIcon, id: 2 },
      { icon: InstagramIcon, id: 3 },
      { icon: TwitterIcon, id: 4 },
      { icon: YoutubeIcon, id: 5 },
    ],
  },
];

export default placeholderContactList;
