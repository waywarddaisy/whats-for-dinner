export const productsArray = [
    {
        name: "Salad Freak",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686964301/IMG_3239_d73qhs.png',
        price: 30,
        description: "Recipes to feed a healthy obsession.",
        blurb: ["A salad can be a side dish, but it shouldn't get stuck being an afterthought. A spread of seasonal salads can make the most beautiful, colorful, and delicious dinner party table that will leave your guests dreaming of the flavors they enjoyed.",
            "In this book you'll find recipes for salads for breakfast, lunch and dinner; and salads that are healthy enough for a main course, and others that are light, fresh partners to pair with anything else you feel like making.",
            "We are all looking for ways to eat more healthfully without feeling restricted. And with creative approaches, salads offer endless variety.",
            "This isn't a diet cookbook, but it is a guide to eating in a vegetable-forward way without ever getting bored."],
        author: 'Jess Damuck',
        id: 0,
    },
    {
        name: "Ottolenghi Simple",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686963935/IMG_3237_q0w4rk.jpg',
        price: 30,
        description: "Yotam Ottolenghi's revelatory new recipes for busy cooks. Pared-back brilliant in one or more ways.",
        blurb: ["S short on time.",
            "I ingredients: 10 or fewer",
            "M make ahead.",
            "P pantry-led.",
            "L lazy-day dishes.",
            "E easier than you think.",
            "Recipes that give you the time to do everything else."],
        author: 'Yotam Ottolenghi',
        id: 1,
    },
    {
        name: "Nothing Fancy",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686961295/IMG_3236_xix3ut.jpg',
        price: 30,
        description: "Unfussy food for having people over.",
        blurb: ["A casual weeknight meal with a neighbor or an unexpected Saturday night dinner party with lots of friends- either way and everywhere in between, it's unfussy food paired with unstuffy vibes and plenty of wine.",
    "This abundant collection of all-new recipes- heavy on the easy-to-execute evegetables and versatile grains, paying lots of close attention to crunchy, salty snacks and with love for all the meats- is for gatherings big and small, any day of the week.",
"Alison Roman will give you the food your people want (think DIY martini bar, platters of tomatoes dressed in fennel and anchovy, pots of coconut-braised chicken and chickpeas, slices of lemony turmeric tea cake) plus the tips, sass, and confidence to pull it all off."],
        author: 'Alison Roman',
        id: 2,
    },
    {
        name: "A Table for Friends",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686960589/IMG_3235_xbm8e1.jpg',
        price: 30,
        description: "The Art of Cooking for Two or Twenty.",
        blurb: ["Over 100 simple and wonderfully inviting recipes that allow you to relax with your loved ones while the cooking takes care of itself.",
    "Drawing on years of cooking for more people than it ever seemed possible to squeeze into her kitchen, Sunday Times columnist and cookery author Skye McAlpine shares the secrets to her stylish and relaxed way of hosting, setting you up for success whether you're cooking for two or twenty.",
    "A Table for Friends has recipes for every occasion, from last-minute weeknight dinners to large celebratory gatherings. Skye's recipes fall into four chapters, Stars, Sides, Sweets and Extras, which allow you to intuitively plan a simple and impressive menu, and, because juggling oven space is one of the biggest challenges when cooking for a crowd, each chapter is ingeniously organized into Throw Together, On The Hob and In The Oven so your menu works best for your mood, your kitchen and your time. Alongside these beautiful, deliciously do-able recipes comes Skye's practical, fuss-free guidance for hosting a stress-free gathering, from what to cook in advance to how to lay the table beautifully, allowing you to step out of the kitchen and relax with your guests."
],
        author: 'Skye McAlpine',
        id: 3,
    },
    {
        name: "Malibu Farm",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686964142/IMG_3241_p5l5y0.jpg',
        price: 30,
        description: "Receipes from the California Coast.",
        blurb: ["From the beloved restaurant, a cookbook featuring more than 100 recipes that celebrates fresh produce, meals for sharing, and the beauty of coastal California.",
    "Situated at the end of the pier, Malibu Farm is beloved for its spectacular Pacific Ocean views, the freshly sourced ingredients on its ever-changing menu, and its warm vibe. Chef-owner Helene Henderson opened the space after the once-intimate dinners she hosted on the grounds of her home grew too large.",
"Now, in Malibu Farm Cookbook, she invites you honor the shoreline and mountains of Southern California with dishes like Ricotta and Pea Frittata, Butterfly Beef Tenderloin with Horseradish, Seared Fava Beans, and Grilled Chocolate Cake with Caramel Sauce. Helene captures the spirit of her own farm with recipes using the morning’s fresh eggs, the catch of the day, the luscious vegetables that grow all around, honey harvested steps from where it’s enjoyed, and olive oil straight from her grove. Punctuated with luscious, vibrant photography, Malibu Farm Cookbook is a stunning sensory experience that transports you right to the edge of the Pacific."],
        author: 'Helene Henderson',
        id: 4,
    },

    {
        name: "Cook This Book",
        photo: 'https://res.cloudinary.com/dw0mjyoeg/image/upload/v1686962334/IMG_3243_s5axlt.jpg',
        price: 30,
        description: "Techniques that Teach & Recipes to Repeat.",
        blurb: ['A thoroughly modern guide to becoming a smarter, faster, more creative cook.',
            "If you seek out, celebrate and obsess over good food but lack the skills and confidence necessary to make it at home, you've just won a ticket to a life filled with supreme deliciousness.",
            "Cook This Book is a new kind of  foundational cookbook from Molly Baz, who's here to teach you absolutely everything she knows and equip you with the tools to become a better, less stressed, more efficient cook.",],
        author: 'Molly Baz',
        id: 5,
    }

];

export const getProdId = () => {
    if (localStorage.getItem("id") === null) {
        return []
    }
    else {
        return JSON.parse(localStorage.getItem("id"))
    }
};

export const saveProdId = (id) => {
    localStorage.setItem("id", JSON.stringify(id))
};