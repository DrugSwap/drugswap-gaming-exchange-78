import { HomeIcon, InfoIcon, HelpCircleIcon, ShoppingCartIcon, UserPlusIcon, ShieldIcon, GamepadIcon, GiftIcon, UsersIcon, MapIcon, FileTextIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import TokenInfo from "./pages/TokenInfo.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import JoinWaitlist from "./pages/JoinWaitlist.jsx";
import SecurityLegal from "./pages/SecurityLegal.jsx";
import GamificationRewards from "./pages/GamificationRewards.jsx";
import AirdropAnnouncement from "./pages/AirdropAnnouncement.jsx";
import Team from "./pages/Team.jsx";
import WhitepaperRoadmap from "./pages/WhitepaperRoadmap.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Token Info",
    to: "/token-info",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <TokenInfo />,
  },
  {
    title: "How It Works",
    to: "/how-it-works",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <HowItWorks />,
  },
  {
    title: "Marketplace",
    to: "/marketplace",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <Marketplace />,
  },
  {
    title: "Join Waitlist",
    to: "/join-waitlist",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <JoinWaitlist />,
  },
  {
    title: "Security & Legal",
    to: "/security-legal",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <SecurityLegal />,
  },
  {
    title: "Gamification & Rewards",
    to: "/gamification-rewards",
    icon: <GamepadIcon className="h-4 w-4" />,
    page: <GamificationRewards />,
  },
  {
    title: "Airdrop",
    to: "/airdrop",
    icon: <GiftIcon className="h-4 w-4" />,
    page: <AirdropAnnouncement />,
  },
  {
    title: "Team",
    to: "/team",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Team />,
  },
  {
    title: "Whitepaper & Roadmap",
    to: "/whitepaper-roadmap",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <WhitepaperRoadmap />,
  },
];