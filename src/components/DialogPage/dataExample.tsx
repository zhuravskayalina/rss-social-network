import { User } from '../../types/interfaces';

export const users: Array<User> = [
  {
    login: 'meganfox',
    password: 'meganfox',
    id: '0',
    profilePhoto:
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
    name: 'Megan',
    surname: 'Fox',
    location: 'Mozyr, Belarus',
    socialMedia: {
      instagram: 'meganfox',
      twitter: 'meganfox',
      linkedIn: 'anhelinazhuravskaya',
    },
    email: 'meganthebest@gmail.com',
    info: {
      hobbies: 'witchcraft',
      music: 'everything but mgk ;)',
      cinema: 'jennifers body',
      books: 'ninja turtles',
    },
    friends: [
      {
        id: '1',
        name: 'Slim',
        surname: 'Shady',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
      },
      {
        id: '2',
        name: 'Dog',
        surname: 'Patron',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
      },
      {
        id: '3',
        name: 'Biggie',
        surname: 'Smalls',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
      },
    ],
    posts: [
      {
        id: '0',
        user: {
          id: '0',
          name: 'Megan',
          surname: 'Fox',
        },
        date: '1676475021785',
        text: 'Хто тримає цей район? Пес Патрон, пес Патрон!',
        likes: 34,
        isLikedByUser: false,
      },
      {
        id: '1',
        user: {
          id: '0',
          name: 'Megan',
          surname: 'Fox',
        },
        date: '1676488446677',
        text: 'Хто крутіший за iPhone? Пес Патрон, пес Патрон!',
        likes: 42,
        isLikedByUser: false,
      },
      {
        id: '2',
        user: {
          id: '0',
          name: 'Megan',
          surname: 'Fox',
        },
        date: '1673388774477',
        text: 'Хто не ходить на газон? Пес Патрон, пес Патрон!',
        likes: 55,
        isLikedByUser: false,
      },
    ],
    photos: [
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/1.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
    ],
    chat: [
      {
        senderId: '1',
        senderInfo: {
          name: 'Slim',
          surname: 'Shady',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
        },
        history: [
          {
            text: 'Hi Megan how are you.....',
            time: '1673388774477',
            isOwnMessage: false,
          },
          {
            text: 'I think you are not real just government project',
            time: '1673388774477',
            isOwnMessage: false,
          },
          {
            text: 'Ok...',
            time: '1673388774479',
            isOwnMessage: true,
          },
        ],
      },
      {
        senderId: '2',
        senderInfo: {
          name: 'Dog',
          surname: 'Patron',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
        },
        history: [
          {
            text: 'Patron you are the best dog!!!!',
            time: '1673388774477',
            isOwnMessage: true,
          },
          {
            text: 'Дзякуй Меган, ти теж супер!',
            time: '1673388774488',
            isOwnMessage: false,
          },
        ],
      },
      {
        senderId: '3',
        senderInfo: {
          name: 'Biggie',
          surname: 'Smalls',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
        },
        history: [
          {
            text: 'Wanna hang out?',
            time: '1673388774477',
            isOwnMessage: true,
          },
          {
            text: 'Дзякуй Меган, but no',
            time: '1673388774488',
            isOwnMessage: false,
          },
        ],
      },
    ],
  },
  {
    login: 'eminem',
    password: 'eminem',
    id: '1',
    profilePhoto:
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
    name: 'Slim',
    surname: 'Shady',
    location: 'Brest, Belarus',
    socialMedia: {
      instagram: 'eminem',
      twitter: 'eminem',
      linkedIn: null,
    },
    email: 'eminemthebest@gmail.com',
    info: {
      hobbies: 'i love rap',
      music: 'Palina, Doja Cat, Metallica, Placebo, The Kooks, Один в каноэ',
      cinema: '8 mile',
      books: 'cook books',
    },
    friends: [
      {
        id: '0',
        name: 'Megan',
        surname: 'Fox',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
      },
      {
        id: '2',
        name: 'Dog',
        surname: 'Patron',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
      },
      {
        id: '3',
        name: 'Biggie',
        surname: 'Smalls',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
      },
    ],
    posts: [
      {
        id: '3',
        user: {
          id: '1',
          name: 'Slim',
          surname: 'Shady',
        },
        date: '1676475021785',
        text: 'Megan Fox is not real!!',
        likes: 0,
        isLikedByUser: false,
      },
    ],
    photos: [
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/1.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/2.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
    ],
    chat: [
      {
        senderId: '0',
        senderInfo: {
          name: 'Megan',
          surname: 'Fox',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
        },
        history: [
          {
            text: 'Hi Megan how are you.....',
            time: '1673388774477',
            isOwnMessage: true,
          },
          {
            text: 'I think you are not real just government project',
            time: '1673388774488',
            isOwnMessage: true,
          },
          {
            text: 'Ok..',
            time: '1673388774499',
            isOwnMessage: false,
          },
        ],
      },
      {
        senderId: '3',
        senderInfo: {
          name: 'Biggie',
          surname: 'Smalls',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
        },
        history: [
          {
            text: 'Heard Rihanna`s last song?',
            time: '1673388774347',
            isOwnMessage: true,
          },
          {
            text: 'Yes it`s sucks',
            time: '1673388774488',
            isOwnMessage: false,
          },
          {
            text: 'Agree',
            time: '1673388774499',
            isOwnMessage: true,
          },
        ],
      },
      {
        senderId: '2',
        senderInfo: {
          name: 'Dog',
          surname: 'Patron',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
        },
        history: [
          {
            text: 'Heard Rihanna`s last song?',
            time: '1673388774347',
            isOwnMessage: true,
          },
          {
            text: 'No eminem relax she`s better than you anyway..',
            time: '1673388774488',
            isOwnMessage: false,
          },
          {
            text: 'Cruel',
            time: '1673388774499',
            isOwnMessage: true,
          },
        ],
      },
    ],
  },
  {
    login: 'pespatron',
    password: 'pespatron',
    id: '2',
    profilePhoto:
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
    name: 'Dog',
    surname: 'Patron',
    location: 'Kyiv, Ukraine',
    socialMedia: {
      instagram: 'patron_dsns',
      twitter: null,
      linkedIn: null,
    },
    email: 'patronthebest@gmail.com',
    info: {
      hobbies: 'співати пісні наді дорофеєвай, грати на вулиці, гавкати',
      music: 'Надя Дорофеева, Alyona Alyona, Ваня Дорн',
      cinema: 'кішки проти собак',
      books: 'не люблю читати, краще поговорити',
    },
    friends: [
      {
        id: '0',
        name: 'Megan',
        surname: 'Fox',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
      },
      {
        id: '1',
        name: 'Slim',
        surname: 'Shady',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
      },
      {
        id: '3',
        name: 'Biggie',
        surname: 'Smalls',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
      },
    ],
    posts: [
      {
        id: '4',
        user: {
          id: '2',
          name: 'Dog',
          surname: 'Patron',
        },
        date: '1676475021785',
        text: 'кішки sucks',
        likes: 5,
        isLikedByUser: false,
      },
      {
        id: '5',
        user: {
          id: '2',
          name: 'Dog',
          surname: 'Patron',
        },
        date: '1676475021789',
        text: 'I <3 NY',
        likes: 50,
        isLikedByUser: false,
      },
    ],
    photos: [
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/2.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/3.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/4.jpeg',
    ],
    chat: [
      {
        senderId: '0',
        senderInfo: {
          name: 'Megan',
          surname: 'Fox',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
        },
        history: [
          {
            text: 'Patron you are the best dog!!!!',
            time: '1673388774477',
            isOwnMessage: false,
          },
          {
            text: 'Дзякуй Меган, ти теж супер!',
            time: '1673388774488',
            isOwnMessage: true,
          },
        ],
      },
      {
        senderId: '1',
        senderInfo: {
          name: 'Slim',
          surname: 'Shady',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
        },
        history: [
          {
            text: 'Heard Rihanna`s last song?',
            time: '1673388774347',
            isOwnMessage: false,
          },
          {
            text: 'No eminem relax she`s better than you anyway..',
            time: '1673388774488',
            isOwnMessage: true,
          },
          {
            text: 'Cruel',
            time: '1673388774499',
            isOwnMessage: false,
          },
        ],
      },
    ],
  },
  {
    login: 'notorius',
    password: 'notorius',
    id: '3',
    profilePhoto:
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
    name: 'Biggie',
    surname: 'Smalls',
    location: 'Brooklyn, New York',
    socialMedia: {
      instagram: null,
      twitter: null,
      linkedIn: null,
    },
    email: 'big@gmail.com',
    info: {
      hobbies: 'hip-hop and chill',
      music: 'Michael Jackson',
      cinema: 'New York Undercover, Martin',
      books: 'will say later',
    },
    friends: [
      {
        id: '0',
        name: 'Megan',
        surname: 'Fox',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
      },
      {
        id: '1',
        name: 'Slim',
        surname: 'Shady',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
      },
      {
        id: '2',
        name: 'Dog',
        surname: 'Patron',
        profilePhoto:
          'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/patron/1.jpeg',
      },
    ],
    posts: [
      {
        id: '6',
        user: {
          id: '3',
          name: 'Biggie',
          surname: 'Smalls',
        },
        date: '1676475021785',
        text: 'Biggie, Biggie, Biggie, can`t you see? Sometimes your words just hypnotize me.',
        likes: 503,
        isLikedByUser: false,
      },
      {
        id: '7',
        user: {
          id: '3',
          name: 'Biggie',
          surname: 'Smalls',
        },
        date: '1676475021799',
        text: 'And I just love your flashy ways. Guess that`s why they broke, and you`re so paid.',
        likes: 503,
        isLikedByUser: false,
      },
      {
        id: '8',
        user: {
          id: '3',
          name: 'Biggie',
          surname: 'Smalls',
        },
        date: '1676475021799',
        text: 'I love CATS more than dogs =^____^=',
        likes: 83,
        isLikedByUser: false,
      },
    ],
    photos: [
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/1.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/2.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/3.jpeg',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/4.webp',
      'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/notorius/5.jpeg',
    ],
    chat: [
      {
        senderId: '0',
        senderInfo: {
          name: 'Megan',
          surname: 'Fox',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/megan/2.jpeg',
        },
        history: [
          {
            text: 'Wanna hang out?',
            time: '1673388774477',
            isOwnMessage: false,
          },
          {
            text: 'Дзякуй Меган, but no',
            time: '1673388774488',
            isOwnMessage: true,
          },
        ],
      },
      {
        senderId: '1',
        senderInfo: {
          name: 'Slim',
          surname: 'Shady',
          profilePhoto:
            'https://raw.githubusercontent.com/zhuravskayalina/soc-network-photos/main/eminem/3.jpeg',
        },
        history: [
          {
            text: 'Heard Rihanna`s last song?',
            time: '1673388774347',
            isOwnMessage: false,
          },
          {
            text: 'Yes it`s sucks',
            time: '1673388774488',
            isOwnMessage: true,
          },
          {
            text: 'Agree',
            time: '1673388774499',
            isOwnMessage: false,
          },
        ],
      },
    ],
  },
];
