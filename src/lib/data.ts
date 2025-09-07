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

// Business Notifications Data
export const businessNotifications = {
  recent: [
    {
      id: 'notif1',
      title: 'Weekend Promotion',
      message: '50% off all drinks this weekend!',
      recipients: 1250,
      openRate: 78,
      sentAt: '2 hours ago',
      status: 'sent'
    },
    {
      id: 'notif2',
      title: 'New Reward Available',
      message: 'Check out our new loyalty reward!',
      recipients: 980,
      openRate: 65,
      sentAt: '1 day ago',
      status: 'sent'
    },
    {
      id: 'notif3',
      title: 'Store Hours Update',
      message: 'We\'re now open until 9 PM on weekends',
      recipients: 2100,
      openRate: 82,
      sentAt: '3 days ago',
      status: 'sent'
    }
  ],
  scheduled: [
    {
      id: 'sched1',
      title: 'Birthday Special',
      message: 'Happy Birthday! Enjoy a free dessert',
      recipients: 45,
      scheduledFor: 'Tomorrow at 9 AM',
      status: 'scheduled'
    },
    {
      id: 'sched2',
      title: 'Flash Sale Alert',
      message: '24-hour flash sale starting tomorrow!',
      recipients: 1800,
      scheduledFor: 'Dec 25 at 8 AM',
      status: 'scheduled'
    }
  ],
  drafts: [
    {
      id: 'draft1',
      title: 'Holiday Promotion',
      message: 'Special holiday offers coming soon...',
      lastModified: '2 hours ago',
      status: 'draft'
    },
    {
      id: 'draft2',
      title: 'Customer Appreciation',
      message: 'Thank you for being a loyal customer!',
      lastModified: '1 day ago',
      status: 'draft'
    }
  ]
};

// Business Analytics Data
// SaaS Plan System
export const saasPlans = {
  basic: {
    id: 'basic',
    name: 'Basic',
    price: 0,
    billing: 'monthly',
    features: [
      'Store registration & loyalty program setup',
      'Basic dashboard with customer tracking',
      'Up to 100 customers',
      'Basic analytics (purchase data)',
      'Email support',
      'Standard rewards templates'
    ],
    limitations: [
      'Limited to 100 customers',
      'Basic analytics only',
      'Standard support',
      'No AI features',
      'Single store only'
    ]
  },
  advanced: {
    id: 'advanced',
    name: 'Advanced',
    price: 29,
    billing: 'monthly',
    features: [
      'Everything in Basic',
      'Advanced AI-powered analytics',
      'Customer behavior insights',
      'Deep reward customization',
      'Priority support',
      'Up to 1,000 customers',
      'Custom branding'
    ],
    limitations: [
      'Limited to 1,000 customers',
      'No AI chatbot',
      'No multi-store management'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 79,
    billing: 'monthly',
    features: [
      'Everything in Advanced',
      'AI-powered customer chatbot',
      'Advanced AI analytics & forecasting',
      'Multi-store management',
      'Shared analytics dashboard',
      'Unlimited customers',
      'API access',
      'White-label options',
      'Dedicated account manager'
    ],
    limitations: []
  }
};

export const currentUserPlan = 'basic'; // Default to basic plan for demo

export const businessAnalyticsData = {
  totalCustomers: 2847,
  customerGrowth: 12.5,
  engagementRate: 78.3,
  engagementGrowth: 8.2,
  redemptionRate: 45.7,
  redemptionGrowth: 15.1,
  revenueImpact: 12450,
  revenueGrowth: 22.8,
  customerGrowthData: [
    { month: 'Jan', customers: 120 },
    { month: 'Feb', customers: 150 },
    { month: 'Mar', customers: 175 },
    { month: 'Apr', customers: 210 },
    { month: 'May', customers: 250 },
    { month: 'Jun', customers: 300 }
  ],
  revenueData: [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 }
  ],
  engagementData: [
    { date: '2024-07-15', engagement: 65 },
    { date: '2024-07-16', engagement: 72 },
    { date: '2024-07-17', engagement: 68 },
    { date: '2024-07-18', engagement: 75 },
    { date: '2024-07-19', engagement: 78 },
    { date: '2024-07-20', engagement: 82 },
    { date: '2024-07-21', engagement: 79 }
  ],
  engagementByChannel: [
    { name: 'Mobile App', value: 45, color: '#8884d8' },
    { name: 'Website', value: 30, color: '#82ca9d' },
    { name: 'Email', value: 15, color: '#ffc658' },
    { name: 'SMS', value: 10, color: '#ff7300' }
  ],
  redemptionData: [
    { month: 'Jan', redemptions: 45 },
    { month: 'Feb', redemptions: 52 },
    { month: 'Mar', redemptions: 48 },
    { month: 'Apr', redemptions: 61 },
    { month: 'May', redemptions: 67 },
    { month: 'Jun', redemptions: 73 }
  ],
  customerSegments: [
    { name: 'High Value', value: 25, color: '#8884d8' },
    { name: 'Regular', value: 45, color: '#82ca9d' },
    { name: 'Occasional', value: 20, color: '#ffc658' },
    { name: 'New', value: 10, color: '#ff7300' }
  ],
  customerLifetimeValue: [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 48 },
    { month: 'Mar', value: 52 },
    { month: 'Apr', value: 55 },
    { month: 'May', value: 58 },
    { month: 'Jun', value: 62 }
  ],
  topRewards: [
    {
      id: 'reward1',
      title: 'Free Medium Coffee',
      description: 'Most popular reward',
      redemptions: 245,
      conversionRate: 78
    },
    {
      id: 'reward2',
      title: '50% Off Pastry',
      description: 'Great value reward',
      redemptions: 189,
      conversionRate: 65
    },
    {
      id: 'reward3',
      title: '$10 Store Credit',
      description: 'High-value reward',
      redemptions: 156,
      conversionRate: 82
    }
  ]
};