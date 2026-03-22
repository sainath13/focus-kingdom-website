import { HelpCircleIcon, Play, AppleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Download",
        href: "/download",
        menu: [
            {
                title: "Android",
                tagline: "Get it on Google PlayStore",
                href: "https://play.google.com/store/games",
                icon: Play,
            },
            {
                title: "iOS",
                tagline: "Get it on Apple App store.",
                href: "https://apps.apple.com/in/app/apple-store/id375380948",
                icon: AppleIcon,
            },
        ]
    },
    {
        title: "Future Plans",
        href: "/changelog",
    },
];
