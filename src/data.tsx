const data = {
  metadata: {
    title: "Krai & Ingrid",
    description: "Join us in celebrating Krai & Ingrid's Wedding!",
  },
  header: {
    title: "Krai & Ingrid",
    date: new Date("October 13, 2023 1:30 pm").toString(),
    showDate: true,
    media: "/media/splash-video.mp4",
  },

  textSections: [
    {
      title: "Unplugged Ceremony",
      description: `We kindly ask our guests to join us in embracing the beauty of the moment by keeping their phones away during the holy matrimony. We want to create a serene atmosphere and request that you kindly refrain from taking pictures or using your devices. Your presence and undivided attention mean the world to us. We appreciate your understanding and cooperation.`,
    },
    {
      title: "Snap & Share @ Our Reception",
      description: `&ensp;Please use the hashtag **#KRAIzy4INGRID** and tag us [@ingridelaine_](https://www.instagram.com/ingridelaine_/) & [@kraiyons](https://www.instagram.com/kraiyons/) to share your photos. Feel free to capture countless memories at our reception using our digital disposable cameras. We'll add the link for that soon!`,
    },
    {
      title: "Gifts",
      description:
        `&ensp;While your presence alone is a treasured gift, we understand that some of our guests may wish to contribute in a more tangible way. In light of this, and with the utmost gratitude and appreciation, we kindly request your support in the form of a monetary contribution. Your generous gift will assist us in turning our dream of owning a home into a reality, providing us with a strong foundation for the next chapter of our lives.` +
        `\n\n&ensp;Please know that your contribution, whether big or small, will make a significant difference and will forever be remembered as an integral part of our journey together.`,
    },
    {
      title: "Dress Code",
      description:
        `Attire - Semi Formal - Champagne, beige (A link to Pinterest will be placed here soon!)` +
        `\n\nGentlemen: Longsleeves, Black Slacks, Black Jeans, Black shoes` +
        `\n\nLadies: Cocktails, Long dresses, Sandals, Heels` +
        `\n\n**DO NOT Wear:** \n\n &ensp;[Perfume]() *(We kindly request our guests' cooperation in creating a fragrance-free environment on our special day. Due to severe allergies, the bride is sensitive to scents. We appreciate your understanding and support)*\n\n&ensp;Maong/Jeans, Rubber Shoes, Slippers, [White]()`,
    },
    {
      title: "Schedule",
      description:
        "We're excited to share more details with you soon! Stay tuned for updates on our upcoming event.",
    },
    {
      title: "Children",
      description: `We hope you will understand our decision to make the wedding children-free, 
      and take the opportunity to let your hair down and celebrate in style!  `,
    },
    {
      title: "RSVP",
      description:
        `&ensp;To help us with the planning process, we kindly request that you RSVP to our wedding by email at [rsvp@kraizy4ingrid.com](mailto:rsvp@kraizy4ingrid.com) or via messenger [here](https://messenger.com/t/krai.alapide) as soon as possible, but no later than **August 30, 2023.**` +
        `\n\n&ensp;Please include the following information in your RSVP email:` +
        `\n\n&ensp;Full Names: Please mention the full names of all attendees (*including any additional guests if applicable*).` +
        `\n\n&ensp;Response: Kindly indicate if you will be attending the wedding or if, unfortunately, you won't be able to make it.` +
        `\n\n&ensp;Dietary Restrictions: If you or any of your guests have any specific dietary restrictions or allergies, please let us know so we can make necessary arrangements.` +
        `\n\n&ensp;Additional Guests: *If you have been granted a plus-one* or if you plan to bring additional guests, please indicate their names in your response.`,
    },
  ],

  hashtag: "#KRAIzy4INGRID",
  events: [
    {
      id: "1",
      name: "Ceremony",
      venue: "St Benedict Parish Church",
      location: "Ayala Westgrove Heights, South Blvd, Silang, Cavite",
      locationUrl: "https://goo.gl/maps/d9SJ4JaGbo28tKNL7",
      date: new Date("October 13, 2023 1:30 pm").toString(),
      showDate: false,
      showTime: true,
    },
    {
      id: "2",
      name: "Reception",
      venue: "Farm Hills Garden",
      location: "Brgy. Ulat, Silang, Cavite",
      locationUrl: "https://goo.gl/maps/Xxg9bWwEqt5oRueF7",
      date: new Date("October 13, 2023 5:30 pm").toString(),
      showDate: false,
      showTime: true,
    },
  ],
};

export default data;
