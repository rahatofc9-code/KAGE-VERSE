/* =========================================================
   KAGE-VERSE WATCH PAGE
========================================================= */


const animeData = {


    /* =========================
       A SILENT VOICE
    ========================== */

    "silent-voice": {

        title: "A Silent Voice",

        type: "Movie • Drama",

        video:""

    },


    /* =========================
       I WANT TO EAT YOUR PANCREAS
    ========================== */

    "i-want-to-eat-your-pancreas": {

        title: "I Want to Eat Your Pancreas",

        type: "Movie • Romance • Drama",

        video: ""
            

    },


    /* =========================
       THE GARDEN OF WORDS
    ========================== */

    "garden-of-words": {

        title: "The Garden of Words",

        type: "Movie • Romance • Drama",

        video:
            ""

    },


    /* =========================
       HELLO WORLD
    ========================== */

    "hello-world": {

        title: "Hello World",

        type: "Movie • Romance • Sci-Fi",

        video:
            ""

    }

};


/* =========================================================
   GET ANIME NAME FROM URL
========================================================= */


const urlParams =
    new URLSearchParams(window.location.search);


const animeName =
    urlParams.get("anime");


/* =========================================================
   PAGE ELEMENTS
========================================================= */


const videoFrame =
    document.getElementById("videoFrame");


const animeTitle =
    document.getElementById("animeTitle");


const animeType =
    document.getElementById("animeType");


/* =========================================================
   LOAD ANIME
========================================================= */


if (animeData[animeName]) {


    const anime =
        animeData[animeName];


    /* =========================
       TITLE
    ========================== */

    animeTitle.textContent =
        anime.title;


    /* =========================
       TYPE
    ========================== */

    animeType.textContent =
        anime.type;


    /* =========================
       VIDEO
    ========================== */

    videoFrame.src =
        anime.video;


} else {


    /* =========================
       ANIME NOT FOUND
    ========================== */

    animeTitle.textContent =
        "Anime Not Found";


    animeType.textContent =
        "Please select an anime from the Anime page.";


    videoFrame.src =
        "";

}