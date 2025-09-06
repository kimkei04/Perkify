export const consumerData = {
  id: 'user1',
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  rewards: [
    {
      id: 'reward1',
      storeName: 'The Daily Grind',
      title: 'Free Medium Coffee',
      currentPoints: 85,
      targetPoints: 100,
    },
    {
      id: 'reward2',
      storeName: 'Bookworm Haven',
      title: '$5 Off Your Next Purchase',
      currentPoints: 150,
      targetPoints: 200,
    },
    {
      id: 'reward3',
      storeName: 'Fresh Eats',
      title: 'Free Smoothie',
      currentPoints: 50,
      targetPoints: 50,
    },
  ],
  subscribedStores: [
    {
      id: 'store1',
      name: 'The Daily Grind',
      category: 'Coffee Shop',
      imageUrl: 'https://picsum.photos/400/200?random=1',
      imageHint: 'coffee shop',
    },
    {
      id: 'store2',
      name: 'Bookworm Haven',
      category: 'Bookstore',
      imageUrl: 'https://picsum.photos/400/200?random=2',
      imageHint: 'bookstore interior',
    },
    {
      id: 'store3',
      name: 'Fresh Eats',
      category: 'Restaurant',
      imageUrl: 'https://picsum.photos/400/200?random=3',
      imageHint: 'healthy food',
    },
    {
      id: 'store4',
      name: 'Gadget Hub',
      category: 'Electronics',
      imageUrl: 'https://picsum.photos/400/200?random=4',
      imageHint: 'modern electronics',
    },
  ],
  purchaseHistory: [
    {
      id: 'purchase1',
      storeName: 'The Daily Grind',
      date: '2024-07-20',
      items: ['Latte', 'Croissant'],
      amount: 8.5,
      pointsEarned: 9,
    },
    {
      id: 'purchase2',
      storeName: 'Bookworm Haven',
      date: '2024-07-18',
      items: ['"The Final Chapter"'],
      amount: 15.99,
      pointsEarned: 16,
    },
    {
      id: 'purchase3',
      storeName: 'Fresh Eats',
      date: '2024-07-17',
      items: ['Avocado Toast', 'Orange Juice'],
      amount: 12.0,
      pointsEarned: 12,
    },
  ],
};

export const businessData = {
  id: 'business1',
  name: 'The Daily Grind',
  customers: [
    {
      id: 'user1',
      name: 'Alex Doe',
      email: 'alex.doe@example.com',
      subscriptionDate: '2024-01-15',
      totalSpent: 125.5,
      status: 'Active',
    },
    {
      id: 'user2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      subscriptionDate: '2024-02-10',
      totalSpent: 250.75,
      status: 'Active',
    },
    {
      id: 'user3',
      name: 'Peter Jones',
      email: 'peter.jones@example.com',
      subscriptionDate: '2024-03-22',
      totalSpent: 55.2,
      status: 'Inactive',
    },
    {
      id: 'user4',
      name: 'Samantha Lee',
      email: 'samantha.lee@example.com',
      subscriptionDate: '2024-05-01',
      totalSpent: 450.0,
      status: 'Active',
    },
  ],
  rewardsProgram: {
    pointsPerDollar: 1,
    rewards: [
      {
        id: 'reward1',
        title: 'Free Medium Coffee',
        description: 'Enjoy any medium coffee on us.',
        type: 'points',
        pointsRequired: 100,
      },
      {
        id: 'reward2',
        title: '50% Off Any Pastry',
        description: 'Half price on your favorite treat.',
        type: 'coupon',
        pointsRequired: 0,
      },
      {
        id: 'reward3',
        title: '$10 Store Credit',
        description: 'Use it on anything in the store.',
        type: 'points',
        pointsRequired: 500,
      },
    ],
  },
  aiData: {
    customerPurchaseHistory: `
      - User1 (Alex Doe): Total 25 purchases, avg spend $5.02. Frequent items: Latte, Croissant. Last purchase: 2024-07-20.
      - User2 (Jane Smith): Total 40 purchases, avg spend $6.27. Frequent items: Iced Coffee, Muffin. Last purchase: 2024-07-21. Buys in morning.
      - User3 (Peter Jones): Total 5 purchases, avg spend $11.04. Frequent items: Multiple drinks. Last purchase: 2024-04-15.
      - User4 (Samantha Lee): Total 60 purchases, avg spend $7.50. Frequent items: Americano, Bagel. High engagement. Last purchase: 2024-07-22.
    `,
    loyaltyData: `
      - Alex Doe: 125 points, 1 reward redeemed. Active subscriber.
      - Jane Smith: 250 points, 2 rewards redeemed. High-value customer.
      - Peter Jones: 55 points, 0 rewards redeemed. At risk of churn.
      - Samantha Lee: 450 points, 5 rewards redeemed. Power user.
    `,
  },
};

export const businessAnalytics = {
  monthlySignups: [
    { month: 'Jan', signups: 120 },
    { month: 'Feb', signups: 150 },
    { month: 'Mar', signups: 175 },
    { month: 'Apr', signups: 210 },
    { month: 'May', signups: 250 },
    { month: 'Jun', signups: 300 },
  ],
  revenue: [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ]
};

export const allStores = [
  {
    id: 'store5',
    name: 'Pet Paradise',
    category: 'Pet Supplies',
    imageUrl: 'https://picsum.photos/400/200?random=5',
    imageHint: 'pet store',
  },
  {
    id: 'store6',
    name: 'Green Thumb',
    category: 'Gardening',
    imageUrl: 'https://picsum.photos/400/200?random=6',
    imageHint: 'plant nursery',
  },
  {
    id: 'store7',
    name: 'The Art Corner',
    category: 'Arts & Crafts',
    imageUrl: 'https://picsum.photos/400/200?random=7',
    imageHint: 'art supplies',
  },
  {
    id: 'store8',
    name: 'FitLife Gym',
    category: 'Fitness',
    imageUrl: 'https://picsum.photos/400/200?random=8',
    imageHint: 'modern gym',
  }
];
