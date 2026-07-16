const storeHierarchy = [
  {
    id: 1,
    name: "Global",
    type: "global",
    children: [
      {
        id: 2,
        name: "North America",
        type: "region",
        children: [
          {
            id: 3,
            name: "USA",
            type: "country",
            children: [
              {
                id: 4,
                name: "Texas",
                type: "state",
                children: [
                  {
                    id: 5,
                    name: "Houston District",
                    type: "district",
                    children: [
                      {
                        id: 6,
                        name: "Store #1024",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 7,
                        name: "Store #1025",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 8,
                        name: "Store #1026",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: "Dallas District",
                    type: "district",
                    children: [
                      {
                        id: 10,
                        name: "Store #1101",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 11,
                        name: "Store #1102",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                id: 12,
                name: "California",
                type: "state",
                children: [
                  {
                    id: 13,
                    name: "Los Angeles District",
                    type: "district",
                    children: [
                      {
                        id: 14,
                        name: "Store #2001",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 15,
                        name: "Store #2002",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                  {
                    id: 16,
                    name: "San Francisco District",
                    type: "district",
                    children: [
                      {
                        id: 17,
                        name: "Store #2101",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 18,
            name: "Canada",
            type: "country",
            children: [
              {
                id: 19,
                name: "Ontario",
                type: "state",
                children: [
                  {
                    id: 20,
                    name: "Toronto District",
                    type: "district",
                    children: [
                      {
                        id: 21,
                        name: "Store #3001",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "Europe",
        type: "region",
        children: [
          {
            id: 23,
            name: "Germany",
            type: "country",
            children: [
              {
                id: 24,
                name: "Bavaria",
                type: "state",
                children: [
                  {
                    id: 25,
                    name: "Munich District",
                    type: "district",
                    children: [
                      {
                        id: 26,
                        name: "Store #4001",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 27,
            name: "France",
            type: "country",
            children: [
              {
                id: 28,
                name: "Île-de-France",
                type: "state",
                children: [
                  {
                    id: 29,
                    name: "Paris District",
                    type: "district",
                    children: [
                      {
                        id: 30,
                        name: "Store #5001",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 31,
                        name: "Store #5002",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 32,
        name: "Asia",
        type: "region",
        children: [
          {
            id: 33,
            name: "India",
            type: "country",
            children: [
              {
                id: 34,
                name: "Madhya Pradesh",
                type: "state",
                children: [
                  {
                    id: 35,
                    name: "Bhopal District",
                    type: "district",
                    children: [
                      {
                        id: 36,
                        name: "Store #6001",
                        type: "store",
                        children: [],
                      },
                      {
                        id: 37,
                        name: "Store #6002",
                        type: "store",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default storeHierarchy;