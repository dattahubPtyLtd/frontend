import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard{
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id:number;
}

const infoCards: IInfoCard[] = [
{
    title: "Increased Sales", 
    bodyText: "Lorem epsum",
    icon: ArrowDownNarrowWide,
    id:1
},
{
    title: "No time wasted", 
    bodyText: "Lorem epsum 2",
    icon: ArrowUpNarrowWide,
    id:2
},
{
    title: "next work", 
    bodyText: "Lorem epsum 2",
    icon: AlarmClockOff,
    id:2
},

];

export default infoCards;