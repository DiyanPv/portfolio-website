import { images } from "../assets/Projects/images";
export const Projects: any[] = [
  {
    name: `Verius`,
    image: images.verius,
    description:
      "Verius is an NFT marketplace demo product. It allows users to send networks to a pre-generated Goerli-only contract and interact with the Giphy API to generate automatic images, which are shown at the bottom.",
    date: "28.12.2022",
    sourceCode: `https://github.com/DiyanPv/VERIUS-Marketplace`,
    liveDemo: "https://verius-web3.vercel.app/",
  },
  {
    name: `Invaders 2.0`,
    image: images.invaders,
    description:
      "Invaders 2.0 is my first attempt for a Javascript-native sidescroller 2D game. It utilizes basic HTML instead of canvas and has basic functionalities like shooting, moving targets and tracking score.",
    date: "14.09.2022",
    sourceCode: `https://github.com/DiyanPv/sidescrolling-game-JS`,
    liveDemo: "https://invaders-2-0.web.app/",
  },
  {
    name: `Food Stop`,
    image: images.reactfood,
    description:
      "Food Stop is one of my first React Projects. It utilizes Firebase as a store of order data and stores context data using the React context API instead of Redux.",
    date: "02.11.2022",
    sourceCode: `https://github.com/DiyanPv/React-Demos/tree/main/ReactFood`,
    liveDemo: "https://diyan-test.web.app/",
  },
  {
    name: `Native NFT`,
    image: images.nativeNFT,
    description:
      "Basic landing page website for my NFT Expo (React Native) app. Expo app currently available for Android-only users due to Apple policies.",
    date: "20.01.2023",
    sourceCode: `https://github.com/DiyanPv/Native_NFTstore`,
    liveDemo: "https://native-nft-marketplace.vercel.app/",
  },

  {
    name: `Expense Tracker`,
    image: images.expenseTracker,
    description:
      "My second React project. This is simply an expense tracker with basic input fields like date/item/price. As soon as submitted, it logs and displays the filtered array at the bottom for the specific year selected. There is also a 12-month breakdown.",
    date: "15.07.2022",
    sourceCode: `https://github.com/DiyanPv/React-Demos/tree/main/my-app`,
    liveDemo: "https://expenses-track-react.web.app/",
  },
];
