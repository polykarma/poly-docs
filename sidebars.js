module.exports = {
  sidebar: [
    'intro',
    {
      type: 'category',
      label: 'INF2010 - Data Structures and Algorithms',
      items: [
        'inf2010/index',
        {
          type: 'category',
          label: 'Lists, Stacks and Queues',
          items: [
            'inf2010/interface',
            'inf2010/list',
            'inf2010/arraylist',
            'inf2010/linkedlist',
            'inf2010/iterator',
            'inf2010/stacks',
            'inf2010/queues',
          ]
        },
        {
          type: 'category',
          label: 'Hash Tables & Collision Resolution',
          items: [
            'inf2010/hashtable',
            'inf2010/collisions',
          ]
        },
        {
          type: 'category',
          label: 'Sorting Algorithms',
          items: [
            'inf2010/sorting',
            'inf2010/selection',
            'inf2010/bubble',
          ]
        },
        {
          type: 'category',
          label: 'Trees',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Balanced Trees',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Heaps',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Graphs',
          items: ['contribute'],
        },
      ],
    },
    {
      type: 'category',
      label: 'LOG1810 - Discrete Structures',
      items: [
        'log1810/index',
        {
          type: 'category',
          label: 'Propositional Logic',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Quantifiers & Rules of Inference',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Arguments & Proofs',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Sets',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Relations',
          items: [
            'log1810/relations',
            'log1810/representations',
            'log1810/properties',
            {
              type: 'category',
              label: 'Closures',
              items: [
                'log1810/closures',
                'log1810/reflexive-closure',
                'log1810/symmetric-closure',
                'log1810/transitive-closure',
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Algorithm Analysis',
          items: [
            'log1810/complexity',
          ]
        },
        {
          type: 'category',
          label: 'Number Theory & Cryptography',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Induction proofs',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Counting & Combinatorics',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Recurrence Relations',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Graphs',
          items: ['contribute'],
        },
        {
          type: 'category',
          label: 'Trees',
          items: [
            'log1810/trees',
            'log1810/traversal',
            'log1810/mst',
          ],
        }
      ]
    }
  ],
};
