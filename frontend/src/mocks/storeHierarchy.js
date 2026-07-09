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
                ],
              },
              {
                id: 9,
                name: "California",
                type: "state",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Europe",
        type: "region",
        children: [],
      },
    ],
  },
];

export default storeHierarchy;