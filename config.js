var config = {
    style: 'mapbox://styles/codeforafrica/cjx0q1tdq0hss1dp5mv429yy6',
    accessToken: 'pk.eyJ1IjoiY29kZWZvcmFmcmljYSIsImEiOiJzbUlkVDRNIn0.JUlW50UqJRZ3em2BKUBJIg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            title: 'Howlwadaag, Mogadishu',
            subtitle: '1980',
            image: '',
            description:'Shukri was born in Mogadishu, and spent the early part of her life in a bustling family home at the heart of many far-reaching networks, with goods flowing in and out from Europe to Puntland. She lived with her parents, siblings, grandmother and one maternal aunt, but many people would come in and out. Her uncle played a key role in supporting her and the family. She attended a local school.',
            location: {
                center: [45.32563, 2.04783],
                zoom: 10.54,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: 'Galkayo',
            subtitle: '1980',
            image: '',
            description: 'Her father is ethnically from Galkayo, so there are many relatives and cousins in Puntland they they provide support to.',
            location: {
                center: [47.43074, 6.77016],
                zoom: 11.62,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-bike-network',
                    opacity: 0
                }
            ]
        },
        {
            id: 'indego',
            title: 'Burtinle',
            subtitle: '1980',
            image: '',
            description: '',
            location: {
                center: [47.83098, 7.64224],
                zoom: 13.15,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            title: 'London, UK',
            subtitle: '1980',
            image: '',
            description: 'She has cousins and uncles studying and working in London, who would visit the family home in Mogadishu for celebrations such as Ramadan and Eid, bringing gifts.',
            location: {
                center: [-0.11294, 51.52636],
                zoom: 4.3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            title: 'Rome, Italy',
            subtitle: '1980',
            image: '',
            description: '',
            location: {
                center: [12.47692, 41.89897],
                zoom: 4.3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            title: 'Mogadishu',
            subtitle: '1980',
            image: '',
            description: 'Her father\'s work colleagues were an important professional network for him, and an important social network for the family as a whole, helping get access to imported goods. ',
            location: {
                center: [45.33583, 2.06584],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hawlwadaag',
            title: 'Hawlwadaag, Mogadishu',
            subtitle: '1991',
            image: '',
            description: 'When war came to Mogadishu, Shukri is 11, attending grade 5. With her family, she flees the city with help from family members living there, as well as financial support from kin in London. They take a very difficult journey to Puntland by road, involving many stops and losing a number of family members along the way. Eventually they reach Galkayo, where they can stay with family members.',
            location: {
                center: [45.33583, 2.06584],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'hawlwadaag',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hawlwadaag',
                    opacity: 0
                }
            ]
        },
        {
            id: 'garsoor',
            title: 'Garsoor, Galkayo',
            subtitle: '1991',
            image: '',
            description: 'Shukri is living with her family in Galkayo, away from the fighting further South. Together with her father, mother and siblings they have a relatively good life. The family starts a small business near the family house - a grocery shop. ',
            location: {
                center: [47.423518, 6.767831],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'garsoor',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'garsoor',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mog',
            title: 'Mogadishu',
            subtitle: '1991',
            image: '',
            description: 'Many of Shukri\'s paternal relatives remain in Mogadishu but continue to have close connections with the family in Galkayo, as well as with other parts of the region. They continue to provide financial and material support.',
            location: {
                center: [45.33583, 2.06584],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mog',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mog',
                    opacity: 0
                }
            ]
        },
        {
            id: 'lon',
            title: 'London, UK',
            subtitle: '1991',
            image: '',
            description: 'Shukri\'s maternal relatives live abroad and send financial help through remittances. They send 150 Usd every month. ',
            location: {
                center: [-0.11294, 51.52636],
                zoom: 4.3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'lon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'lon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rome',
            title: 'London, UK',
            subtitle: '1991',
            image: '',
            description: 'Shukri\'s paternal kin lives in Italy  and they have been supporting Shukri and her family even before the war and also befor they arrived in Galkayo. Shukri\'s family lives in Galkayo.',
            location: {
                center: [-0.11294, 51.52636],
                zoom: 4.3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'rome',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rome',
                    opacity: 0
                }
            ]
        },
        {
            id: 'galk',
            title: 'Galkayo southern border ',
            subtitle: '1991',
            image: '',
            description: 'Shukri\'s paternal kin lives in Italy  and they have been supporting Shukri and her family even before the war and also befor they arrived in Galkayo. Shukri\'s family lives in Galkayo.',
            location: {
                center: [47.43074, 6.77016],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'galk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'galk',
                    opacity: 0
                }
            ]
        },
        {
            id: 'masjid',
            title: 'Galkayo, Masjidu Nasrulaahi ',
            subtitle: '1991',
            image: '',
            description: 'The local community in Galkayo, and especially the imam from the local mosque, welcomed Shukri and her family as well as the many other refugees they journeyed with. They are given home utensils, some small money, furniture, food and medicine.',
            location: {
                center: [47.43074, 6.77016],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'galk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'galk',
                    opacity: 0
                }
            ]
        },
        {
            id: 'alqudus',
            title: 'Alqudus Mosque, Burtinle',
            subtitle: '1997',
            image: '',
            description: 'Shukri, her siblings and mother are now living on their own in Burtinle without father or uncle. Shukri\'s maternal grandmother passes away, saddening her mother. They become more vulnerable.  Life in the village is very different from they life they had in Galkayo. Shukri\'s mother continues to run the family business, however.',
            location: {
                center: [47.83098, 7.64224],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'alqudus',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'alquduss',
                    opacity: 0
                }
            ]
        }

    ]
};
