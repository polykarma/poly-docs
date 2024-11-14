module.exports = {
  sidebar: [
    'intro', // General introduction page
    {
      type: 'category',
      label: 'INF2010 - Data Structures and Algorithms',
      items: [
        'inf2010/index',
        'inf2010/interface',
        'inf2010/list',
        'inf2010/arraylist',
        'inf2010/linkedlist',
        'inf2010/iterator',
        'inf2010/stacks',
        'inf2010/queues',
        'inf2010/hashtable',
        'inf2010/collisions',
        'inf2010/sorting',
        'inf2010/selection',
        'inf2010/bubble',
      ],
    },
    {
      type: 'category',
      label: 'LOG1810 - Discrete Structures',
      items: [
        'log1810/index',
        {
          type: 'category',
          label: 'Cours 5 - Relations',
          items: [
            'log1810/relations',
            'log1810/representations',
            'log1810/properties',
          ]
        },
        'log1810/complexity',
      ]
    }
  ],
};
