/*
==== Map data
- file: world-50m.json
- remove Antarctica: ids 10 & 260
ISO codes: https://en.wikipedia.org/wiki/ISO_3166-1_numeric

==== My travels
- alphabetical order
- data template:
{
  country_id: ,
  country_name: "",
  visits: [
    {
      year: XXXX,
      month: YY,
      category: "", // "lived" or "traveled" or "todo"
      description: "",
      flickr: "",
      tripline: "",
      // ideas: photo, instagram
    },
  ]
},
*/

var travelCategoryColor = {
  "lived": "#BCD4E6",
  "traveled": "#e5635e",
  "todo": "#88d8b0"
};

// Australia, Austria, Belgium, Canada, CHINA, Croatia, Czech Republic, Denmark, Finland, FRANCE, Germany, Greece, Hong Kong,
// Indonesia, Iran, Ireland, Italy, Japan, Malaysia, Mauritius, Mexico, Morocco, Netherlands, North Korea, SOUTH KOREA, Norway, Poland,
// Saint Lucia, Singapore, Spain, SWITZERLAND, Tunisia, Turkey, United Arab Emirates, United Kingdom, UNITED STATES

var travelData = [
  {
    country_id: 010,
    country_name: "Antarctica",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 36,
    country_name: "Australia",
    visits: [
      {
        year: 2016,
        month: 11,
        category: "traveled",
        description: "2 weeks visiting the East Coast & Tasmania",
        flickr: "",
        tripline: "https://www.tripline.net/trip/Hong-Kong_%2B_Australia_2016-6366172746431012AED3C8455105748B"
      }
    ]
  },
  {
    country_id: 40,
    country_name: "Austria",
    visits: [
      {
        year: 2015,
        month: 11,
        category: "traveled",
        description: "Innsbruck & Vienna"
      }
    ]
  },
  {
    country_id: 56,
    country_name: "Belgium",
    visits: [
      {
        year: 2016,
        month: 01,
        category: "traveled",
        description: "Brussels",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157672622089576"
      }
    ]
  },
  {
    country_id: 124,
    country_name: "Canada",
    visits: [
      {
        year: 2002,
        // month: 01,
        category: "traveled",
        description: "Vancouver"
      }
    ]
  },
  {
    country_id: 156,
    country_name: "China",
    visits: [
      {
        year: 2014,
        // month: 01,
        category: "lived",
        description: "Exchange semester & internship in Shanghai",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157641618995953"
      },
      {
        year: 2013,
        month: 07,
        category: "traveled",
        description: "Beijing for a few days, on the way & back from Pyongyang",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157638446763543"
      }
    ]
  },
  {
    country_id: 191,
    country_name: "Croatia",
    visits: [
      {
        year: 2016,
        month: 05,
        category: "traveled",
        description: "Split, Stari Grad, Hvar & Trogir",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157672712995785",
        tripline: "https://www.tripline.net/trip/Croatia_2016_%284_days%29-154312527613101180BDCE3F9EB2DFFA"
      },
      {
        year: 2010,
        // month: 01,
        category: "traveled",
        description: "& Dubrovnik"
      }
    ]
  },
  {
    country_id: 203,
    country_name: "Czech Republic",
    visits: [
      {
        year: 2007,
        month: 03,
        category: "traveled",
        description: "Prague"
      }
    ]
  },
  {
    country_id: 208,
    country_name: "Denmark",
    visits: [
      {
        year: 2013,
        month: 08,
        category: "traveled",
        description: "Copenhagen",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157638702387725"
      }
    ]
  },
  {
    country_id: 246,
    country_name: "Finland",
    visits: [
      {
        year: 2011,
        month: 07,
        category: "traveled",
        description: "Helsinki & volunteering in Piispala"
      }
    ]
  },
  {
    country_id: 250,
    country_name: "France",
    visits: [
      {
        year: 1991,
        category: "lived",
        description: "born & raised in Grenoble. currently based in Paris"
      }
    ]
  },
  {
    country_id: 276,
    country_name: "Germany",
    visits: [
      {
        year: 2014,
        month: 11, // 10-11
        category: "traveled",
        description: "Frankfurt & Berlin"
      },
      {
        year: 2013,
        month: 12,
        category: "traveled",
        description: "Hamburg & Berlin"
      },
      {
        year: 2012,
        month: 12,
        category: "traveled",
        description: "Stuttgart"
      }
    ]
  },
  {
    country_id: 300,
    country_name: "Greece",
    visits: [
      {
        year: 2006,
        category: "traveled",
        description: "Athens"
      }
    ]
  },
  {
    country_id: 344,
    country_name: "Hong Kong",
    visits: [
      {
        year: 2016,
        category: "traveled",
        description: ""
      },
      {
        year: 2009,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 352,
    country_name: "Iceland",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 360,
    country_name: "Indonesia",
    visits: [
      {
        year: 2009,
        month: 07, // 07-08
        category: "traveled",
        description: "Bali"
      }
    ]
  },
  {
    country_id: 364,
    country_name: "Iran",
    visits: [
      {
        year: 2016,
        month: 03, // 03-04
        category: "traveled",
        description: "2 weeks backpacking & couchsurfing around the country. one of my best trips ever",
        tripline: "https://www.tripline.net/trip/Iran_2016-03374562761310118FDC88869D28E92A",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157668385355601"
      }
    ]
  },
  {
    country_id: 372,
    country_name: "Ireland",
    visits: [
      {
        year: 2015,
        category: "traveled",
        description: "Dublin (& Belfast)",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157649181590593"
      }
    ]
  },
  {
    country_id: 380,
    country_name: "Italy",
    category: "traveled",
    visits: [
      {
        year: 2017,
        month: 05,
        category: "traveled",
        description: "Sicily",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157682130933151",
        tripline: "https://www.tripline.net/trip/Sicily_(5_days)-1241763010551013B66991BBBE0F2A7C"
      },
      {
        year: 2014,
        month: 09,
        category: "traveled",
        description: "Milan for the Red Hook Crit bike race (spectator of course)",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157649182263653"
      },
      {
        year: 2010,
        month: 08,
        category: "traveled",
        description: "Venice"
      },
      {
        year: 2004,
        month: 05,
        category: "traveled",
        description: "Naples, Pompeii & Capri"
      },
      {
        year: 2003,
        month: 12,
        category: "traveled",
        description: "Florence & Rome"
      }
    ]
  },
  {
    country_id: 392,
    country_name: "Japan",
    visits: [
      {
        year: 2013,
        month: 06,
        category: "traveled",
        description: "",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157647327163291",
        tripline: "https://www.tripline.net/trip/Japan_2013_%2811_days%29-77570547670110079DB7B29A5D1180F1"
      }
    ]
  },
  {
    country_id: 404,
    country_name: "Kenya",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 458,
    country_name: "Malaysia",
    visits: [
      {
        year: 2017,
        month: 09,
        category: "traveled",
        description: "Pulau Tinggi",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157687989383421"
      },
      {
        year: 2014,
        month: 08,
        category: "traveled",
        description: "2 weeks backpacking around the country, from paradisiac beaches to humid jungles",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157647167538725",
        tripline: "https://www.tripline.net/trip/Malaysia_2014_%2816_days%29-256000006700100782F4BDEB36A3BA45"
      },
      {
        year: 2009,
        month: 08,
        category: "traveled",
        description: "Kuala Lumpur, Perhentian Islands"
      }
    ]
  },
  {
    country_id: 480,
    country_name: "Mauritius",
    visits: [
      {
        year: 2005,
        month: 07,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 484,
    country_name: "Mexico",
    visits: [
      {
        year: 2001, // ?
        // month: 07,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 504,
    country_name: "Morocco",
    visits: [
      {
        year: 2005,
        // month: ,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 104,
    country_name: "Myanmar",
    visits: [
      {
        year: 2017,
        month: 10,
        category: "traveled",
        description: "",
        flickr: "Mandalay, Bagan, Inle Lake, Kalaw & Yangon in just 9 days",
        tripline: "https://www.tripline.net/trip/Myanmar_2017_(9_days)-2165511653531013B792B3321FB79861"
      }
    ]
  },
  {
    country_id: 516,
    country_name: "Namibia",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 524,
    country_name: "Nepal",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 528,
    country_name: "Netherlands",
    visits: [
      {
        year: 2015,
        month: 03,
        category: "traveled",
        description: "Amsterdam",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157651097004268"
      },
      {
        year: 2013,
        month: 02,
        category: "traveled",
        description: "Amsterdam",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157645284305906"
      }
    ]
  },
  {
    country_id: 408,
    country_name: "North Korea",
    visits: [
      {
        year: 2013,
        month: 07,
        category: "traveled",
        description: "1 week with a tour. a dream come true, and the opportunity to compare with it's South counterpart",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157637205809054"
      }
    ]
  },
  {
    country_id: 410,
    country_name: "South Korea",
    visits: [
      {
        year: 2013,
        // month: 02-06
        category: "lived",
        description: "Exchange semester in Seoul",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157638250966404"
      }
    ]
  },
  {
    country_id: 158,
    country_name: "Taiwan",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 578,
    country_name: "Norway",
    visits: [
      {
        year: 2015,
        month: 08,
        category: "traveled",
        description: "Bergen, fjords & Oslo"
      }
    ]
  },
  {
    country_id: 616,
    country_name: "Poland",
    visits: [
      {
        year: 2015,
        month: 11,
        category: "traveled",
        description: "Warsaw"
      }
    ]
  },
  {
    country_id: 662,
    country_name: "Saint Lucia",
    visits: [
      {
        year: 2007,
        month: 07,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 686,
    country_name: "Senegal",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 702,
    country_name: "Singapore",
    visits: [
      {
        year: "now",
        // month: 08,
        category: "lived",
        description: ""
      },
      {
        year: 2014,
        month: 08,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 724,
    country_name: "Spain",
    visits: [
      {
        year: 2007,
        month: 12,
        category: "traveled",
        description: "Madrid"
      },
      {
        year: 2005,
        month: 03,
        category: "traveled",
        description: "Barcelona, Valencia"
      },
      {
        year: 2004,
        month: 04,
        category: "traveled",
        description: "Balearic Islands"
      }
    ]
  },
  {
    country_id: 756,
    country_name: "Switzerland",
    visits: [
      {
        year: "2010-2011",
        category: "lived",
        description: "EPFL, Lausanne"
      },
      {
        year: 2015,
        month: 09,
        category: "traveled",
        description: "Geneva"
      }
      // {
      //   2012
      // }
    ]
  },
  {
    country_id: 764,
    country_name: "Thailand",
    visits: [
      {
        year: 2017,
        month: 09,
        category: "traveled",
        description: "Bangkok",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157662259193838"
      }
    ]
  },
  {
    country_id: 788,
    country_name: "Tunisia",
    visits: [
      {
        year: 2008,
        month: 12,
        category: "traveled",
        description: ""
      }
    ]
  },
  {
    country_id: 792,
    country_name: "Turkey",
    visits: [
      {
        year: 2013,
        month: 11,
        category: "traveled",
        description: "Istanbul",
        flickr: "https://www.flickr.com/photos/bcd4e6/albums/72157639097561683"
      }
    ]
  },
  {
    country_id: 372,
    country_name: "United Arab Emirates",
    visits: [
      {
        year: 2014,
        month: 02,
        category: "traveled",
        description: "Dubai"
      }
    ]
  },
  {
    country_id: 826,
    country_name: "United Kingdom",
    visits: [
      {
        year: 2015,
        month: 09,
        category: "traveled",
        description: "London & Brighton"
      },
      {
        year: 2010,
        month: 08,
        category: "traveled",
        description: "London, Brighton & Reading Festival"
      },
      {
        year: 2009,
        month: 12,
        category: "traveled",
        description: "London"
      },
      {
        year: 2007,
        month: 08,
        category: "traveled",
        description: "Oxford"
      },
      {
        year: 2006,
        month: 08,
        category: "traveled",
        description: "Isle of Wight"
      }
    ]
  },
  {
    country_id: 840,
    country_name: "United States",
    visits: [
      {
        year: "1998-2000",
        category: "lived",
        description: "2 years in Fort-Collins, Colorado"
      },
      {
        year: 2008,
        category: "traveled",
        description: "New-York & California"
      }
    ]
  },

  // todo
  {
    country_id: 422,
    country_name: "Lebanon",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 356,
    country_name: "India",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 710,
    country_name: "South Africa",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 450,
    country_name: "Madagascar",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  },
  {
    country_id: 152,
    country_name: "Chile",
    visits: [
      {
        category: "todo",
        description: ""
      }
    ]
  }
];
