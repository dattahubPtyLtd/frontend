import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from "react";

interface IPricingCard {
    price: number;
    title: string; 
    benifits: string[],
    id: number;
    oneliner: string;
};



const pricingCards: IPricingCard[] =  [
    {
        price:44,
        title: "pricing card first",
        benifits: ["so", "does", "all"],
        id:1,
        oneliner: "amaizng support"
    },
    {
        price:24,
        title: "pricing card sec",
        benifits: ["so", "does", "all"],
        id:2,
        oneliner: " support"
    },
    {
        price:4,
        title: "pricing card first",
        benifits: [],
        id:3,
        oneliner: "amaizng"
    },
]

export default pricingCards;