import { HelpCircleIcon, Play, AppleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Download",
        href: "/download",
        menu: [
            {
                title: "Android",
                tagline: "Get it on Google PlayStore",
                href: "https://play.google.com/store/apps/details?id=com.dualamigo.focuskingdom",
                icon: Play,
            },
            {
                title: "iOS",
                tagline: "Get it on Apple App store.",
                href: "#",
                icon: AppleIcon,
            },
        ]
    },
    {
        title: "Future Plans",
        href: "/changelog",
    },
];
