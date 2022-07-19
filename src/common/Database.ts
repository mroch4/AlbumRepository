import IAlbum from "./interfaces/IAlbum";
import { TAGS } from "./Tags";
import { v4 as uuid } from "uuid";

export const database: IAlbum[] = [
  {
    id: uuid(),
    artist: "Deep Purple",
    title: "Made in Japan",
    year: 1972,
    tags: [TAGS[3], TAGS[5]],
    coverUrl: "34tawd",
    spotifyUrl: "4Ju17mkQ4MUnQWBg9auMvk",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Tool",
    title: "Undertow",
    year: 1993,
    tags: [TAGS[2], TAGS[3]],
    coverUrl: "u3clfk",
    spotifyUrl: "3Esn6LoXuWtLZNYq8FCzr0",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Faith No More",
    title: "Angel Dust",
    year: 1992,
    tags: [TAGS[3]],
    coverUrl: "av345b",
    spotifyUrl: "59GwovfBk0Kp2HJw1G7E5Q",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Coma",
    title: "Pierwsze Wyjście z Mroku",
    year: 2004,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "zs3kaj",
    spotifyUrl: "1T92zoilK8o5NP5GD6C7WX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Coma",
    title: "Zaprzepaszczone Siły Wielkiej Armii Świętych Znaków",
    year: 2006,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "hje245",
    spotifyUrl: "4Y25amnFEzgbmBQQ98YqAm",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Nightwish",
    title: "Highest Hopes: The Best of Nightwish",
    year: 2005,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "lvj4vn",
    spotifyUrl: "2wbXOTQaDS9Jnu2bjpHwEd",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "Freaky Styley",
    year: 1985,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "ow1pre",
    spotifyUrl: "10Oqhoq2akSJnurJOPk8xT",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Soundgarden",
    title: "Down on the Upside",
    year: 1996,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "c3lnem",
    spotifyUrl: "1IVa98im1RfxYp6qeOIg2B",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "The Mars Volta",
    title: "Octahedron",
    year: 2009,
    tags: [TAGS[3]],
    coverUrl: "ptrgah",
    spotifyUrl: "63XTF7poLIFIP9YA8XVnET",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Guns N' Roses",
    title: "Chinese Democracy",
    year: 2008,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "llyuo6",
    spotifyUrl: "0suNLpB9xraAv1FcdlITjQ",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Don Broco",
    title: "Automatic",
    year: 2015,
    tags: [TAGS[3], TAGS[8]],
    coverUrl: "a04pyy",
    spotifyUrl: "4XC0gFgH9EqXlh6IcdXOZw",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Soundgarden",
    title: "King Animal",
    year: 2012,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "oiajsv",
    spotifyUrl: "65XXZG2pFzK99xeOuVLHP2",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "I Am Giant",
    title: "Science and Survival",
    year: 2014,
    tags: [TAGS[3], TAGS[8]],
    coverUrl: "8ay3s3",
    spotifyUrl: "1764NzFhMGckdltRzPNiRj",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Don Broco",
    title: "Technology",
    year: 2018,
    tags: [TAGS[3], TAGS[8]],
    coverUrl: "tc4276",
    spotifyUrl: "0R3iUk31drnPKGCdb35Cbw",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "Facelift",
    year: 1990,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "62q0iu",
    spotifyUrl: "5LbHbwejgZXRZAgzVAjkhj",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "Dirt",
    year: 1992,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "dbeh6w",
    spotifyUrl: "58NXIEYqmq5dQHg9nV9duM",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "Jar of Flies",
    year: 1994,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "92penx",
    spotifyUrl: "4FCoFSNIFhK36holxHWCnc",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Audioslave",
    title: "Audioslave",
    year: 2002,
    tags: [TAGS[3], TAGS[5]],
    coverUrl: "0pm7de",
    spotifyUrl: "78guAsers0klWl6RwzgDLd",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Audioslave",
    title: "Out of Exile",
    year: 2005,
    tags: [TAGS[3], TAGS[5]],
    coverUrl: "1eng8t",
    spotifyUrl: "0HQhToIjonHnJRRPN4jeJU",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Audioslave",
    title: "Revelations",
    year: 2006,
    tags: [TAGS[3], TAGS[5]],
    coverUrl: "1fzw5y",
    spotifyUrl: "76fYJtMmnPTOpipCoH1Mgo",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Faith No More",
    title: "Introduce Yourself",
    year: 1987,
    tags: [TAGS[3]],
    coverUrl: "0k7mv2",
    spotifyUrl: "0kBy2KA6BuCWveFo88VmMX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Faith No More",
    title: "Album of the Year",
    year: 1997,
    tags: [TAGS[3]],
    coverUrl: "mfwusj",
    spotifyUrl: "15eiCGvldXlDbIz9ZQLmw6",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pearl Jam",
    title: "Ten",
    year: 1990,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "ux3vun",
    spotifyUrl: "5B4PYA7wNN4WdEXdIJu58a",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Porter Band",
    title: "Helicopters",
    year: 1980,
    tags: [TAGS[1], TAGS[3], TAGS[4]],
    coverUrl: "tm0h1p",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Soundgarden",
    title: "Superunknown",
    year: 1994,
    tags: [TAGS[3]],
    coverUrl: "ndoa1y",
    spotifyUrl: "1xHWwGSoF1DNE4hqgBRkJX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Soundgarden",
    title: "Badmotorfinger",
    year: 1991,
    tags: [TAGS[3], TAGS[7]],
    coverUrl: "3f7n4w",
    spotifyUrl: "6AA5g730FNzwKI08H7rxBk",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Scorpions",
    title: "Face the Heat",
    year: 1995,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "uijzfw",
    spotifyUrl: "4PCVbeHbMHCyZS7Oxl4L31",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Temple of a Dog",
    title: "Temple of a Dog",
    year: 1991,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "ny4uy2",
    spotifyUrl: "63HdXCn0Xz1pRZc2GzMw7k",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "Core",
    year: 1992,
    tags: [TAGS[2], TAGS[3]],
    coverUrl: "nkij15",
    spotifyUrl: "7k1YOwYf369EX0aHeXApWp",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "The Mars Volta",
    title: "Deloused in the Comatorium",
    year: 2004,
    tags: [TAGS[2], TAGS[3]],
    coverUrl: "hnhxdx",
    spotifyUrl: "0CA2EVHhRPR5VPV78KZw89",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "The Dark Side of the Moon",
    year: 1973,
    tags: [TAGS[1]],
    coverUrl: "rnzgzc",
    spotifyUrl: "4LH4d3cOWNNsVw41Gqt2kv",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "Animals",
    year: 1975,
    tags: [TAGS[1]],
    coverUrl: "di4g4k",
    spotifyUrl: "21jUB9RqplD6OqtsTjKBnO",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "Wish You Were Here",
    year: 1977,
    tags: [TAGS[1]],
    coverUrl: "oy21a8",
    spotifyUrl: "6uvBKDGlJAYLH5Vy6RQVsc",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "The Wall",
    year: 1979,
    tags: [TAGS[1]],
    coverUrl: "u9no20",
    spotifyUrl: "6WaIQHxEHtZL0RZ62AuY0g",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Lower Than Atlantis",
    title: "Lower Than Atlantis",
    year: 2014,
    tags: [TAGS[9]],
    coverUrl: "sghr0a",
    spotifyUrl: "25xQevIYTCKcvsw9fyZoDb",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Lower Than Atlantis",
    title: "Safe in Sound",
    year: 2017,
    tags: [TAGS[9]],
    coverUrl: "zhf30k",
    spotifyUrl: "2QEGCBGVqN0WvX2wHeuwMP",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Porter Band",
    title: "Alexandria",
    year: 1993,
    tags: [TAGS[1]],
    coverUrl: "vdqh81",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Porter Band",
    title: "Porter Band '99",
    year: 1999,
    tags: [TAGS[1]],
    coverUrl: "pxmivg",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Porter Band",
    title: "Electric",
    year: 2000,
    tags: [TAGS[1]],
    coverUrl: "umdf0u",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Porter Band",
    title: "Psychodelikatesy",
    year: 2007,
    tags: [TAGS[1]],
    coverUrl: "zwdc23",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "Mother's Milk",
    year: 1989,
    tags: [TAGS[7]],
    coverUrl: "apxgcj",
    spotifyUrl: "27WeSriNUz7qD50tdoZClP",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Soundgarden",
    title: "Louder than Love",
    year: 1989,
    tags: [TAGS[7]],
    coverUrl: "q04iwv",
    spotifyUrl: "4Q1HXCFg84PfQRZlPCA4SH",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rage Against The Machine",
    title: "Rage Against The Machine",
    year: 1992,
    tags: [TAGS[3], TAGS[7]],
    coverUrl: "eax9gl",
    spotifyUrl: "4LaRYkT4oy47wEuQgkLBul",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rage Against The Machine",
    title: "Renegades",
    year: 2000,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "yogokl",
    spotifyUrl: "6iVOwFVjFRoQPgj8GUwSsi",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rage Against The Machine",
    title: "The Battle of Los Angeles",
    year: 1999,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: "etryh3",
    spotifyUrl: "2eia0myWFgoHuttJytCxgX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Mama Selita",
    title: "3, 2, 1...!",
    year: 2011,
    tags: [TAGS[9]],
    coverUrl: "vo9sld",
    spotifyUrl: "0ieZV5SxZ0HA1UoNWVyVq7",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "I Am Giant",
    title: "The Horryfying Truth",
    year: 2011,
    tags: [TAGS[9]],
    coverUrl: "ndhcv7",
    spotifyUrl: "5cF5m1f2MPh099b7kh6mqh",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "I Am Giant",
    title: "Life in Captivity",
    year: 2018,
    tags: [TAGS[9]],
    coverUrl: "ey3ujl",
    spotifyUrl: "3CHKkXkiVHGzTVvOyX4aU2",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rammstein",
    title: "Mutter",
    year: 2001,
    tags: [TAGS[1]],
    coverUrl: "qwocjo",
    spotifyUrl: "7ikuEzL6xeAgu6yT6YVLy7",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rammstein",
    title: "Reise, Reise",
    year: 2004,
    tags: [TAGS[1]],
    coverUrl: "5nt7ac",
    spotifyUrl: "09qHS2BgOLqi3SMkbauxdJ",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Nightwish",
    title: "Once",
    year: 2004,
    tags: [TAGS[2]],
    coverUrl: "xzjfyy",
    spotifyUrl: "0aDCpYtFdQ0S8C3oAtOonk",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Nightwish",
    title: "Century Child",
    year: 2002,
    tags: [TAGS[2]],
    coverUrl: "hb6tx4",
    spotifyUrl: "4FFDudC4xBVF6MYJUynRsN",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Coma",
    title: "Hipertrofia",
    year: 2011,
    tags: [TAGS[2]],
    coverUrl: "mlu0q8",
    spotifyUrl: "2XbZLK8epe8hNnh8fo1ArW",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Proletaryat",
    title: "Prawda",
    year: 2010,
    tags: [TAGS[5]],
    coverUrl: "dbjvsc",
    spotifyUrl: "1IvD11R4ZGTm4rSveWc2Xg",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "Rainer Fog",
    year: 2018,
    tags: [TAGS[9]],
    coverUrl: "kvtdjq",
    spotifyUrl: "4AAPRl8BKlsIVC5aeedlBv",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "The Devil Put the Dinosaurs Here",
    year: 2013,
    tags: [TAGS[2]],
    coverUrl: "bqw23l",
    spotifyUrl: "1NeunhIyCq0jkezLbOyKDM",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Alice In Chains",
    title: "Black Gives Way to Blue",
    year: 2009,
    tags: [TAGS[2]],
    coverUrl: "onot6s",
    spotifyUrl: "2vkLky2qG0rziUk0eOsIZ9",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "Stone Temple Pilots",
    year: 2010,
    tags: [TAGS[2]],
    coverUrl: "f4qs85",
    spotifyUrl: "1kFN0IOnTnmfawj7xrOzKe",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "No. 4",
    year: 1999,
    tags: [TAGS[9]],
    coverUrl: "2ibnda",
    spotifyUrl: "0NgdZp0Z9HGsowYxPBYQSV",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "Shangri-LA DEE DA",
    year: 2001,
    tags: [TAGS[9]],
    coverUrl: "ubwdvf",
    spotifyUrl: "3mSUlhyG7X3ZCekkIi0TiI",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "High Rise",
    year: 2014,
    tags: [TAGS[2]],
    coverUrl: "lee9os",
    spotifyUrl: "61XZkrTQMo602r1e5rgRka",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Stone Temple Pilots",
    title: "Purple",
    year: 1994,
    tags: [TAGS[2]],
    coverUrl: "flw9qk",
    spotifyUrl: "2vi1ddPi3fY7vePMqxUVob",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Velvet Revolver",
    title: "Libertad",
    year: 2007,
    tags: [TAGS[2]],
    coverUrl: "idh6jy",
    spotifyUrl: "6MY4dyk9U9A5bkxEIk22jj",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Velvet Revolver",
    title: "Contraband",
    year: 2004,
    tags: [TAGS[2]],
    coverUrl: "t8t9z0",
    spotifyUrl: "4bCbQx08L6clCZKWu0Jmiq",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "Pulse",
    year: 1995,
    tags: [TAGS[1]],
    coverUrl: "4ppwx9",
    spotifyUrl: "7iLuEbxvxepyHp4yfVfiut",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "The Division Bell",
    year: 1994,
    tags: [TAGS[1]],
    coverUrl: "6tun0a",
    spotifyUrl: "5F0IQXuHfTV7SBvZVnXERl",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Nocny Kochanek",
    title: "Noc z Kochankiem",
    year: 2018,
    tags: [TAGS[2]],
    coverUrl: "995e9n",
    spotifyUrl: "7gk3I4BQABW1GqWOFlanbD",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Tool",
    title: "Aenima",
    year: 1996,
    tags: [TAGS[2]],
    coverUrl: "jal05z",
    spotifyUrl: "6yWMN087PgSimbcVmHLEwG",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Tool",
    title: "Lateralus",
    year: 2001,
    tags: [TAGS[2]],
    coverUrl: "744y3h",
    spotifyUrl: "5l5m1hnH4punS1GQXgEi3T",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Tool",
    title: "10,000 Days",
    year: 2006,
    tags: [TAGS[2]],
    coverUrl: "139wzh",
    spotifyUrl: "1fvWYcbjuycyHpzNPH1Vfk",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Katatonia",
    title: "The Great Cold Distance",
    year: 2006,
    tags: [TAGS[2]],
    coverUrl: "0niojm",
    spotifyUrl: "3FKvu05whTUtsoMwnXEQ10",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Katatonia",
    title: "Night is the New Day",
    year: 2009,
    tags: [TAGS[2]],
    coverUrl: "m5h20n",
    spotifyUrl: "6KqL8MggBekUxqa1GYuVyY",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Katatonia",
    title: "Dead End Kings",
    year: 2012,
    tags: [TAGS[2]],
    coverUrl: "r4fp0s",
    spotifyUrl: "0Rm1Q7jINtrkDbfXfqnlYg",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Houk",
    title: "Extra Pan",
    year: 2000,
    tags: [TAGS[2]],
    coverUrl: "ujq7dv",
    spotifyUrl: "7kCSKMU38mwFl65RCCGBs8",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "KSU",
    title: "XXX lecie - Akustycznie",
    year: 2008,
    tags: [TAGS[2]],
    coverUrl: "g80u2j",
    spotifyUrl: "6tgIXjV7flQReoAB2Hfe2z",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Illusion",
    title: "Opowieści",
    year: 2014,
    tags: [TAGS[2]],
    coverUrl: "cqm1u0",
    spotifyUrl: "7KAoDONaqvs7by4oI1vySY",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Illusion",
    title: "Anhedonia",
    year: 2018,
    tags: [TAGS[9]],
    coverUrl: "z0q2it",
    spotifyUrl: "0ZooQ6tlQjugMQ80vetoo4",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Illusion",
    title: "Illusion 3",
    year: 1995,
    tags: [TAGS[2]],
    coverUrl: "kiyb8d",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Illusion",
    title: "Illusion 2",
    year: 1994,
    tags: [TAGS[2]],
    coverUrl: "dcf0yj",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Florence And The Machine",
    title: "How Big, How Blue, How Beautiful",
    year: 2015,
    tags: [TAGS[3], TAGS[6]],
    coverUrl: "r0yvc1",
    spotifyUrl: "2btszoya78vyT8fwelmVnz",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Rage Against The Machine",
    title: "Live at the Grand Olympic Auditorium",
    year: 2003,
    tags: [TAGS[4]],
    coverUrl: "92hk1k",
    spotifyUrl: "5tQjJRsqTVaK9NZ7Rh02en",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "The Mars Volta",
    title: "Frances the Mute",
    year: 2005,
    tags: [TAGS[3]],
    coverUrl: "1ylujo",
    spotifyUrl: "30iqYID1JMBXLVFfErwTSd",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "The Mars Volta",
    title: "Amputechture",
    year: 2006,
    tags: [TAGS[3]],
    coverUrl: "7v3q7j",
    spotifyUrl: "5OISte8J6DV61Vad0W0Cv9",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "Blood Sugar Sex Magik",
    year: 1991,
    tags: [TAGS[3]],
    coverUrl: "urg7qt",
    spotifyUrl: "1DCI2yWmV4UI7Aga71yx9B",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "One Hot Minute",
    year: 1995,
    tags: [TAGS[2], TAGS[3]],
    coverUrl: "fslsnl",
    spotifyUrl: "74cQBDmkkzRBntR064f0SD",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "Californication",
    year: 1999,
    tags: [TAGS[2], TAGS[3]],
    coverUrl: "mx4vhz",
    spotifyUrl: "0fLhefnjlIV3pGNF9Wo8CD",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "By the Way",
    year: 2002,
    tags: [TAGS[1], TAGS[3]],
    coverUrl: "k8m7jv",
    spotifyUrl: "1jWKVgnHX8nwR551hQNx5K",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "Stadium Arcadium",
    year: 2006,
    tags: [TAGS[3]],
    coverUrl: "fmchz6",
    spotifyUrl: "7xl50xr9NDkd3i2kBbzsNZ",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "I'm with You",
    year: 2011,
    tags: [TAGS[2]],
    coverUrl: "73zuya",
    spotifyUrl: "5wZtSIvijWCMc1vlPFqAyB",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Ataxia",
    title: "Automatic Writing",
    year: 2004,
    tags: [TAGS[2]],
    coverUrl: "mwvjdz",
    spotifyUrl: "2W4FYloQ0s0Fb8lKawb0iC",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Dance Gavin Dance",
    title: "Mothership",
    year: 2016,
    tags: [TAGS[9]],
    coverUrl: "7qkn9u",
    spotifyUrl: "1FSVYIieMIpJCWjucTjrao",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Dance Gavin Dance",
    title: "Artificial Selection",
    year: 2018,
    tags: [TAGS[9]],
    coverUrl: "s0b3hy",
    spotifyUrl: "6rBnEJJUih41OU4AemGs4y",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Dance Gavin Dance",
    title: "Afterburner",
    year: 2020,
    tags: [TAGS[9]],
    coverUrl: "vysn2c",
    spotifyUrl: "7MfryRchXoNRwG5YbbDL1S",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Royal Blood",
    title: "Royal Blood",
    year: 2014,
    tags: [TAGS[9]],
    coverUrl: "zoqn61",
    spotifyUrl: "76fT51C9WtCgCcRJlt3PnG",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Royal Blood",
    title: "Typhoons",
    year: 2021,
    tags: [TAGS[9]],
    coverUrl: "as9v81",
    spotifyUrl: "05aqnnpYVOvsX0SIzmIuxi",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Young Guns",
    title: "Ones and Zeros",
    year: 2015,
    tags: [TAGS[9]],
    coverUrl: "er0zss",
    spotifyUrl: "4HAjhTdm5gC7CnNmFkcssa",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Young Guns",
    title: "Echoes",
    year: 2016,
    tags: [TAGS[9]],
    coverUrl: "yg756g",
    spotifyUrl: "6AGXW6OB1aOpfDX1UM54CX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Brathanki",
    title: "Ano!",
    year: 2000,
    tags: [TAGS[2]],
    coverUrl: "upake5",
    spotifyUrl: "0SgpRABU0OXvl2PjdIWhYX",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Die Antwoord",
    title: "Tension",
    year: 2012,
    tags: [TAGS[2]],
    coverUrl: "cjjjem",
    spotifyUrl: "4P9SBtY51x7tHB0q4YbAQT",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Die Antwoord",
    title: "Donker Mag",
    year: 2014,
    tags: [TAGS[2]],
    coverUrl: "bs53f5",
    spotifyUrl: "5eqhQF3HIVdgwfotwNPMFK",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Terrorvision",
    title: "Regular Urban Survivors",
    year: 1995,
    tags: [TAGS[1]],
    coverUrl: "2sjemp",
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Wardruna",
    title: "Runaljod - gap var Ginnunga",
    year: 2009,
    tags: [TAGS[2]],
    coverUrl: "b05toz",
    spotifyUrl: "6aA7B8RGZOCmQDpKhWPJ3U",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Arctic Monkeys",
    title: "AM",
    year: 2013,
    tags: [TAGS[9]],
    coverUrl: "grtn1a",
    spotifyUrl: "78bpIziExqiI9qztvNFlQu",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Audioslave",
    title: "Covers & Rare",
    year: 2006,
    tags: [TAGS[2]],
    coverUrl: "04oj3y",
    spotifyUrl: "67sfyNkOtMZp01K22w03sl",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Iron Maiden",
    title: "A Matter of Life and Death",
    year: 2006,
    tags: [TAGS[2]],
    coverUrl: "cx8la6",
    spotifyUrl: "5qLvOn0QzAWOqonBc05Ord",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Don Broco",
    title: "Priorities",
    year: 2011,
    tags: [TAGS[2]],
    coverUrl: "89a240",
    spotifyUrl: "3hRE5kwKGasVPXvcIpx2xv",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Pink Floyd",
    title: "Delicate Sound of Thunder",
    year: 1988,
    tags: [TAGS[1]],
    coverUrl: "dsf6ws",
    spotifyUrl: "45uNWPJUtdxscj6QxOizZN",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Avenged Sevenfold",
    title: "Hail to the King",
    year: 2013,
    tags: [TAGS[9]],
    coverUrl: null,
    spotifyUrl: "0ks45m1bsP2JsZpM5D2FFA",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Scorpions",
    title: "Live Bites",
    year: 1995,
    tags: [TAGS[3], TAGS[4]],
    coverUrl: null,
    spotifyUrl: "7CJ59CBDycdjun1rBbSKlK",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Machine Head",
    title: "Hellalive",
    year: 2003,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "6FikZepfzH2DsjVdeVcgu5",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Coma",
    title: "Czerwony Album",
    year: 2011,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "52SGVryzCN8m2dLWNVcH9l",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Art of Anarchy",
    title: "Art of Anarchy",
    year: 2015,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "7LKu5mf0nGzd07fdz3tnEo",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Faith No More",
    title: "The Real Thing",
    year: 1989,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "6LEP3L94jnkqjOxYJWPRP0",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Proletaryat",
    title: "IV",
    year: 1994,
    tags: [TAGS[3]],
    coverUrl: null,
    spotifyUrl: "5PwszPyt6lftGQHIB9VwZ8",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Proletaryat",
    title: "Oko za Oko",
    year: 2015,
    tags: [TAGS[9]],
    coverUrl: null,
    spotifyUrl: "4IOSxtmBjo4eJXwNH4uiOQ",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Proletaryat",
    title: "Zuum",
    year: 1996,
    tags: [TAGS[3]],
    coverUrl: null,
    spotifyUrl: null,
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Proletaryat",
    title: "ReC",
    year: 2003,
    tags: [TAGS[3]],
    coverUrl: null,
    spotifyUrl: "7ngolhYq4Cn2ufiv6pCrzD",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Curcuma",
    title: "Ona",
    year: 2020,
    tags: [TAGS[9]],
    coverUrl: null,
    spotifyUrl: "7GouEj0bD6OztBjv4RTxtB",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Flapjack",
    title: "Keep Your Heads Down",
    year: 2012,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "4RdFUAZucARCFnGjwmJRC0",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Red Hot Chili Peppers",
    title: "The Gateway",
    year: 2016,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "43otFXrY0bgaq5fB3GrZj6",
    clicked: 0,
  },
  {
    id: uuid(),
    artist: "Dawid Podsiadło",
    title: "Annoyance and Disappointment",
    year: 2015,
    tags: [TAGS[2]],
    coverUrl: null,
    spotifyUrl: "2OHeBBlmX51KCY1UTqxDZ4",
    clicked: 0,
  },
];
