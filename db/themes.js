module.exports = {
  list: {
    finalTheme: {
      id: "999",
      heading: "theme 5",
      attempts: 1,
      attemptsMax: 3,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
      time: 60,
      webinar: false,
      webinarLink: "/",
      link: "/",
      available: true
    },
    themes: [
      {
        id: "1",
        heading: "theme 1",
        num: 1,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        time: 60,
        availability: "done",
        link: "/themes/show/1",
        availableDate: "",
        flag: "disabled",
        person: {
          name: "Todd Howard",
          desc: "Man who sold a best game franchise for nothing",
          image:
            "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
        }
      },
      {
        id: "2",
        heading: "theme 2",
        num: 2,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        time: 60,
        availability: "inprogress",
        link: "/themes/show/1",
        availableDate: "",
        flag: "disabled",
        person: {
          name: "Todd Howard",
          desc: "Man who sold a best game franchise for nothing",
          image:
            "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
        }
      },
      {
        id: "3",
        heading: "theme 3",
        num: 3,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        time: 60,
        availability: "current",
        link: "/themes/show/1",
        availableDate: "",
        flag: "disabled",
        person: {
          name: "Todd Howard",
          desc: "Man who sold a best game franchise for nothing",
          image:
            "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
        }
      },
      {
        id: "4",
        heading: "theme 4",
        num: 4,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        time: 60,
        availability: "closed",
        availableDate: "1 апреля",
        flag: "disabled",
        person: {
          name: "Todd Howard",
          desc: "Man who sold a best game franchise for nothing",
          image:
            "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
        }
      },
      {
        id: "5",
        heading: "theme 5",
        num: 5,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        time: 60,
        availability: "unavailable",
        availableDate: "1 апреля",
        flag: "disabled",
        person: {
          name: "Todd Howard",
          desc: "Man who sold a best game franchise for nothing",
          image:
            "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
        }
      }
    ]
  },
  theme: {
    title: {
      heading: "Theme 1",
      number: 1,
      img: 'https://avatanplus.com/files/resources/original/57ea75fa968a11576bdcdaf9.png',
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus."
    },
    required: [
        {
          link: "/themes",
          img:
            "https://avatanplus.com/files/resources/original/57ea75fa968a11576bdcdaf9.png"
        },
        {
          link: "/themes",
          img:
            "https://avatanplus.com/files/resources/original/57ea75fa968a11576bdcdaf9.png"
        }
    ],
    additional: {
      test: {
        link: "/themes"
      },
      books: [
        {
          img: "https://minireference.com/miniref/lib/tpl/miniref/dist/images/productshots/noBSguide_math_physics_hardcover.png",
          name: "Name of the book",
          type: "pdf",
          size: 1
        },
        {
          img: "https://minireference.com/miniref/lib/tpl/miniref/dist/images/productshots/noBSguide_math_physics_hardcover.png",
          name: "Name of the book",
          type: "pdf",
          size: 1
        },
        {
          img: "https://minireference.com/miniref/lib/tpl/miniref/dist/images/productshots/noBSguide_math_physics_hardcover.png",
          name: "Name of the book",
          type: "pdf",
          size: 1
        }
      ]
    },
    author: {
      name: "Mr. Howard",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
      img: "https://vignette.wikia.nocookie.net/fallout/images/a/a8/Todd_Howard.jpg/revision/latest/scale-to-width-down/250?cb=20120322172240"
    },
    events: [
      {
        type: "webinar",
        heading: "HEADING heading",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        date: "1 april, monday",
        time: "10:00 - 20:00",
        location: "",
        link: "/themes"
      },
      {
        type: "seminar",
        heading: "HEADING heading",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa impedit dicta porro, numquam officiis dolorem! Sapiente possimus molestias sed saepe, harum sit, mollitia ad ipsam hic molestiae doloribus temporibus.",
        date: "1 april, monday",
        time: "10:00 - 20:00",
        location: "Moscow",
        link: "/themes"
      }
    ]
  }
};
