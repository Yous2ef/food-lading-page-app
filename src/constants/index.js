import { appScreen1, appScreen2, appScreen3, meal1, meal2 } from "../assets";

const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#meals", label: "Meals" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Try for free" },
];

const steps = [
    {
        number: "01",
        title: "Tell us what you like (and what not)",
        description:
            "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
        image: appScreen1,
    },
    {
        number: "02",
        title: "Approve your weekly meal plan",
        description:
            "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
        image: appScreen2,
    },
    {
        number: "03",
        title: "Receive meals at convenient time",
        description:
            "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. We can even deliver multiple meals to your family!",
        image: appScreen3,
    },
];

const meals = [
    {
        id: 1,
        name: "Japanese Gyozas",
        image: meal1,
        tags: ["VEGETARIAN"],
        calories: 650,
        nutriScore: 74,
        rating: 4.9,
        reviews: 537,
    },
    {
        id: 2,
        name: "Avocado Salad",
        image: meal2,
        tags: ["VEGAN", "PALEO"],
        calories: 400,
        nutriScore: 92,
        rating: 4.8,
        reviews: 441,
    },
];

const dietTypes = [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Gluten-free",
    "Lactose-free",
    "Keto",
    "Paleo",
    "Low FODMAP",
    "Kid-friendly",
];

export { meals, dietTypes, steps, navLinks };
