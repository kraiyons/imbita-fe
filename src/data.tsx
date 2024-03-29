const data = {
  metadata: {
    title: 'Krai & Ingrid',
    description: "Join us in celebrating Krai & Ingrid's Wedding!",
  },
  header: {
    title: 'Krai & Ingrid',
    date: new Date('October 13, 2023 1:30 pm').toString(),
    showDate: true,
    media: '/media/splash-video.mp4',
  },

  textSections: [
    {
      title: 'Unplugged Ceremony',
      description: `We kindly ask our guests to join us in embracing the beauty of the moment by keeping their phones away during the holy matrimony. We want to create a serene atmosphere and request that you kindly refrain from taking pictures or using your devices. Your presence and undivided attention mean the world to us. We appreciate your understanding and cooperation.`,
    },
    {
      title: 'Snap & Share at Our Reception',
      description:
        `Please use the hashtag **#KRAIzy4INGRID** and tag [@ingridelaine_](https://www.instagram.com/ingridelaine_/) & [@kraiyons](https://www.instagram.com/kraiyons/) to share your photos with us!` +
        `\n\n We've also prepared a virtual disposable camera, equipped with 25 shots in total. We invite you to capture 15 shots based on specific categories, which are listed below. You can access this camera by scanning the QR code provided, no download required. The last 10 shots are entirely up to you to use as you wish, letting your creativity shine freely!` +
        `<QRCodePOV />` +
        ``,
    },
    {
      title: 'Gifts',
      description:
        `While your presence alone is a treasured gift, we understand that some of our guests may wish to contribute in a more tangible way. In light of this, and with the utmost gratitude and appreciation, we kindly request your support in the form of a monetary contribution. Your generous gift will assist us in turning our dream of owning a home into a reality, providing us with a strong foundation for the next chapter of our lives in Singapore.` +
        `\n\nPlease know that your contribution, whether big or small, will make a significant difference and will forever be remembered as an integral part of our journey together.` +
        `\n\n Here's how you can send us your love and wishes:` +
        `<QRCode />` +
        `\n\n or via _PayPal_ at **krai.alapide@gmail.com**`,
    },
    {
      title: 'Dress Code',
      description:
        `**Type** - Semi Formal` +
        `\n\n**Color** - Champagne, Beige, Lighter Shades of Khaki` +
        `\n\n**Ladies** - Cocktails, Long dresses, Sandals, Heels \n([Reference](https://tinyurl.com/k4i-ladies))` +
        `\n\n**Gentlemen** - Longsleeves, Black/Khaki Slacks, Black Jeans, Dress/Formal shoes (Oxford, Loafers, Boat, Espadrilles) \n ([Reference](https://tinyurl.com/k4i-gentlemen))` +
        `\n\n**DO NOT Wear -** \n\n  **Perfume** *(We kindly request our guests' cooperation in creating a fragrance-free environment on our special day. Due to severe allergies, the bride is sensitive to scents. We appreciate your understanding and support)*\n\nMaong/Jeans, Rubber Shoes, Slippers, Sneakers, **Color White**`,
    },
    {
      title: 'Schedule',
      description: '<Schedule />',
    },
    {
      title: 'Children',
      description: `We hope you will understand our decision to make the wedding children-free, 
      and take the opportunity to let your hair down and celebrate in style!  `,
    },
    {
      title: 'Need assistance?',
      description:
        "If you encounter any difficulties, have questions, or need help with directions on the day of the event, please feel free to contact us. We've assigned people to assist you and ensure you have a smooth and enjoyable experience." +
        '\n\nMylene - 09683249693' +
        '\n\nBenedict - 09662566244' +
        "\n\nDon't hesitate to reach out if you have any concerns or need guidance. We want to make your visit as comfortable as possible",
    },
    // {
    //   title: 'RSVP',
    //   description:
    //     `To help us with the planning process, we kindly request that you RSVP to our wedding by email at [rsvp@kraizy4ingrid.com](mailto:rsvp@kraizy4ingrid.com?subject=RSVP%20for%20Krai%20%26%20Ingrid%2Fs%20Wedding) or via messenger [here](https://messenger.com/t/krai.alapide) as soon as possible, but no later than **September 13, 2023.**` +
    //     `\n\nPlease include the following information in your RSVP email:` +
    //     `\n\nFull Names: Please mention the full names of all attendees (*including any additional guests if applicable*).` +
    //     `\n\nResponse: Kindly indicate if you will be attending the wedding or if, unfortunately, you won't be able to make it.` +
    //     `\n\nDietary Restrictions: If you or any of your guests have any specific dietary restrictions or allergies, please let us know so we can make necessary arrangements.` +
    //     `\n\nAdditional Guests: *If you have been granted a plus-one*, please indicate their names in your response.`,
    // },
  ],

  hashtag: '#KRAIzy4INGRID',
  events: [
    {
      id: '1',
      name: 'Ceremony',
      venue: 'St Benedict Parish Church',
      location: 'Ayala Westgrove Heights, South Blvd, Silang, Cavite',
      locationUrl: 'https://goo.gl/maps/d9SJ4JaGbo28tKNL7',
      date: new Date('October 13, 2023 1:30 pm').toString(),
      showDate: false,
      showTime: true,
    },
    {
      id: '2',
      name: 'Reception',
      venue: 'Farm Hills Garden',
      location: 'Brgy. Ulat, Silang, Cavite',
      locationUrl: 'https://goo.gl/maps/Xxg9bWwEqt5oRueF7',
      date: new Date('October 13, 2023 5:30 pm').toString(),
      showDate: false,
      showTime: true,
    },
  ],
};

export default data;
