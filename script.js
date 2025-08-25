
// CONTAINER - 1
document.addEventListener("DOMContentLoaded", function () {
    const imageButton1 = document.getElementById("imageButton1");
    const imageContainer1 = document.getElementById("imageContainer1");
    const closeButton1 = document.getElementById("closeButton1");

    const documents = [
        { id: 1, imageUrl: "Picture1.jpg" },
        { id: 2, imageUrl: "Picture2.jpg" },
        // { id: 3, imageUrl: "3 Fake.png" },
        // { id: 4, imageUrl: "4.png" },
        // { id: 5, imageUrl: "5 fake.JPG" },
        // { id: 6, imageUrl: "6 fake.png" },
        // { id: 7, imageUrl: "7.jpg" },
        // { id: 8, imageUrl: "8 fake.PNG" },
        // { id: 9, imageUrl: "9 Fake.JPG" },
        // { id: 10, imageUrl: "10.png" }
    ];

    imageButton1.addEventListener("click", function () {
        imageContainer1.innerHTML = '<span id="closeButton1" class="close-button">✖</span>';
        imageContainer1.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer1.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton1").addEventListener("click", function () {
            imageContainer1.style.display = "none";
        });
    });
});



// CONTAINER - 2
document.addEventListener("DOMContentLoaded", function () {
    const imageButton2 = document.getElementById("imageButton2");
    const imageContainer2 = document.getElementById("imageContainer2");
    const closeButton2 = document.getElementById("closeButton2");

    const documents = [
        { id: 3, imageUrl: "Picture3.png" },
        { id: 4, imageUrl: "Picture4.png" },
        { id: 5, imageUrl: "Picture5.png" },

    ];

    imageButton2.addEventListener("click", function () {
        imageContainer2.innerHTML = '<span id="closeButton2" class="close-button">✖</span>';
        imageContainer2.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer2.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton2").addEventListener("click", function () {
            imageContainer2.style.display = "none";
        });
    });
});


// CONTAINER - 3
document.addEventListener("DOMContentLoaded", function () {
    const imageButton3 = document.getElementById("imageButton3");
    const imageContainer3 = document.getElementById("imageContainer3");
    const closeButton3 = document.getElementById("closeButton3");

    const documents = [
        { id: 1, imageUrl: "Picture6.png" },
        { id: 2, imageUrl: "Picture7.jpg" },
        { id: 3, imageUrl: "Picture8.png" },

    ];

    imageButton3.addEventListener("click", function () {
        imageContainer3.innerHTML = '<span id="closeButton3" class="close-button">✖</span>';
        imageContainer3.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer3.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton3").addEventListener("click", function () {
            imageContainer3.style.display = "none";
        });
    });
});


// CONTAINER - 4
document.addEventListener("DOMContentLoaded", function () {
    const imageButton4 = document.getElementById("imageButton4");
    const imageContainer4 = document.getElementById("imageContainer4");
    const closeButton4 = document.getElementById("closeButton4");

    const documents = [
        { id: 1, imageUrl: "Picture9.jpg" },
        { id: 2, imageUrl: "Picture10.jpg" },
        { id: 3, imageUrl: "Picture11.png" },

    ];

    imageButton4.addEventListener("click", function () {
        imageContainer4.innerHTML = '<span id="closeButton4" class="close-button">✖</span>';
        imageContainer4.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer4.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton4").addEventListener("click", function () {
            imageContainer4.style.display = "none";
        });
    });
});


// CONTAINER - 5
document.addEventListener("DOMContentLoaded", function () {
    const imageButton5 = document.getElementById("imageButton5");
    const imageContainer5 = document.getElementById("imageContainer5");
    const closeButton5 = document.getElementById("closeButton5");

    const documents = [
        { id: 1, imageUrl: "Picture12.jpg" },
        { id: 2, imageUrl: "Picture13.png" },

    ];

    imageButton5.addEventListener("click", function () {
        imageContainer5.innerHTML = '<span id="closeButton5" class="close-button">✖</span>';
        imageContainer5.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer5.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton5").addEventListener("click", function () {
            imageContainer5.style.display = "none";
        });
    });
});


// CONTAINER - 6
document.addEventListener("DOMContentLoaded", function () {
    const imageButton6 = document.getElementById("imageButton6");
    const imageContainer6 = document.getElementById("imageContainer6");
    const closeButton6 = document.getElementById("closeButton6");

    const documents = [
        { id: 1, imageUrl: "Picture14.png" },
        { id: 2, imageUrl: "Picture15.png" },

    ];

    imageButton6.addEventListener("click", function () {
        imageContainer6.innerHTML = '<span id="closeButton6" class="close-button">✖</span>';
        imageContainer6.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer6.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton6").addEventListener("click", function () {
            imageContainer6.style.display = "none";
        });
    });
});



// CONTAINER - 7
document.addEventListener("DOMContentLoaded", function () {
    const imageButton7 = document.getElementById("imageButton7");
    const imageContainer7 = document.getElementById("imageContainer7");
    const closeButton7 = document.getElementById("closeButton7");

    const documents = [
        { id: 1, imageUrl: "From Settings Picture.png" },
        { id: 2, imageUrl: "Picture16.png" },

    ];

    imageButton7.addEventListener("click", function () {
        imageContainer7.innerHTML = '<span id="closeButton7" class="close-button">✖</span>';
        imageContainer7.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer7.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton7").addEventListener("click", function () {
            imageContainer7.style.display = "none";
        });
    });
});



// CONTAINER - 8
document.addEventListener("DOMContentLoaded", function () {
    const imageButton8 = document.getElementById("imageButton8");
    const imageContainer8 = document.getElementById("imageContainer8");
    const closeButton8 = document.getElementById("closeButton8");

    const documents = [
        { id: 1, imageUrl: "Picture17.png" },
        { id: 2, imageUrl: "Picture18.png" },
        { id: 2, imageUrl: "Picture19.png" },

    ];

    imageButton8.addEventListener("click", function () {
        imageContainer8.innerHTML = '<span id="closeButton8" class="close-button">✖</span>';
        imageContainer8.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer8.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton8").addEventListener("click", function () {
            imageContainer8.style.display = "none";
        });
    });
});


// CONTAINER - 9
document.addEventListener("DOMContentLoaded", function () {
    const imageButton9 = document.getElementById("imageButton9");
    const imageContainer9 = document.getElementById("imageContainer9");
    const closeButton9 = document.getElementById("closeButton9");

    const documents = [
        { id: 1, imageUrl: "Picture22.png" },
        { id: 2, imageUrl: "Picture23.png" },
        { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton9.addEventListener("click", function () {
        imageContainer9.innerHTML = '<span id="closeButton9" class="close-button">✖</span>';
        imageContainer9.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer9.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton9").addEventListener("click", function () {
            imageContainer9.style.display = "none";
        });
    });
});


// CONTAINER - 10
document.addEventListener("DOMContentLoaded", function () {
    const imageButton10 = document.getElementById("imageButton10");
    const imageContainer10 = document.getElementById("imageContainer10");
    const closeButton10 = document.getElementById("closeButton10");

    const documents = [
        { id: 1, imageUrl: "Picture25.png" },
        // { id: 2, imageUrl: "Picture23.png" },
        // { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton10.addEventListener("click", function () {
        imageContainer10.innerHTML = '<span id="closeButton10" class="close-button">✖</span>';
        imageContainer10.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer10.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton10").addEventListener("click", function () {
            imageContainer10.style.display = "none";
        });
    });
});



// CONTAINER - 11
document.addEventListener("DOMContentLoaded", function () {
    const imageButton11 = document.getElementById("imageButton11");
    const imageContainer11 = document.getElementById("imageContainer11");
    const closeButton11 = document.getElementById("closeButton11");

    const documents = [
        { id: 1, imageUrl: "Picture26.png" },
        // { id: 2, imageUrl: "Picture23.png" },
        // { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton11.addEventListener("click", function () {
        imageContainer11.innerHTML = '<span id="closeButton11" class="close-button">✖</span>';
        imageContainer11.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer11.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton11").addEventListener("click", function () {
            imageContainer11.style.display = "none";
        });
    });
});




// CONTAINER - 12
document.addEventListener("DOMContentLoaded", function () {
    const imageButton12 = document.getElementById("imageButton12");
    const imageContainer12 = document.getElementById("imageContainer12");
    const closeButton12 = document.getElementById("closeButton12");

    const documents = [
        { id: 1, imageUrl: "Picture27.jpg" },
        { id: 2, imageUrl: "Picture28.png" },
        // { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton12.addEventListener("click", function () {
        imageContainer12.innerHTML = '<span id="closeButton12" class="close-button">✖</span>';
        imageContainer12.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer12.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton12").addEventListener("click", function () {
            imageContainer12.style.display = "none";
        });
    });
});


// CONTAINER - 13
document.addEventListener("DOMContentLoaded", function () {
    const imageButton13 = document.getElementById("imageButton13");
    const imageContainer13 = document.getElementById("imageContainer13");
    const closeButton13 = document.getElementById("closeButton13");

    const documents = [
        { id: 1, imageUrl: "Picture29.png" },
        { id: 2, imageUrl: "Picture30.png" },
        // { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton13.addEventListener("click", function () {
        imageContainer13.innerHTML = '<span id="closeButton13" class="close-button">✖</span>';
        imageContainer13.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer13.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton13").addEventListener("click", function () {
            imageContainer13.style.display = "none";
        });
    });
});



// CONTAINER - 14
document.addEventListener("DOMContentLoaded", function () {
    const imageButton14 = document.getElementById("imageButton14");
    const imageContainer14 = document.getElementById("imageContainer14");
    const closeButton14 = document.getElementById("closeButton14");

    const documents = [
        { id: 1, imageUrl: "Picture31.png" },
        // { id: 2, imageUrl: "Picture30.png" },
        // { id: 2, imageUrl: "Picture24.png" },

    ];

    imageButton14.addEventListener("click", function () {
        imageContainer14.innerHTML = '<span id="closeButton14" class="close-button">✖</span>';
        imageContainer14.style.display = "block";

        documents.forEach(doc => {
            const img = document.createElement("img");
            img.src = doc.imageUrl;
            img.alt = `Document ${doc.id}`;
            imageContainer14.appendChild(img);
        });

        // Re-bind close button after injecting content
        document.getElementById("closeButton14").addEventListener("click", function () {
            imageContainer14.style.display = "none";
        });
    });
});

