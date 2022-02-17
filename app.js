const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar ipsum sed odio pellentesque, in ultricies sem eleifend. In hac habitasse platea dictumst. Pellentesque tincidunt viverra mauris a efficitur. Etiam eu mi eu dui pulvinar volutpat. Proin quis est id nulla ultrices volutpat. Fusce volutpat justo in urna mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse erat urna, ornare sed aliquet pellentesque, ultrices eget dui. Maecenas metus dolor, sagittis sit amet dignissim vel, posuere et orci. Nunc ac tortor nulla.",

    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar ipsum sed odio pellentesque, in ultricies sem eleifend. In hac habitasse platea dictumst. Pellentesque tincidunt viverra mauris a efficitur. Etiam eu mi eu dui pulvinar volutpat. Proin quis est id nulla ultrices volutpat. Fusce volutpat justo in urna mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse erat urna, ornare sed aliquet pellentesque, ultrices eget dui. Maecenas metus dolor, sagittis sit amet dignissim vel, posuere et orci. Nunc ac tortor nulla.",
        
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar ipsum sed odio pellentesque, in ultricies sem eleifend. In hac habitasse platea dictumst. Pellentesque tincidunt viverra mauris a efficitur. Etiam eu mi eu dui pulvinar volutpat. Proin quis est id nulla ultrices volutpat. Fusce volutpat justo in urna mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse erat urna, ornare sed aliquet pellentesque, ultrices eget dui. Maecenas metus dolor, sagittis sit amet dignissim vel, posuere et orci. Nunc ac tortor nulla.",
        
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar ipsum sed odio pellentesque, in ultricies sem eleifend. In hac habitasse platea dictumst. Pellentesque tincidunt viverra mauris a efficitur. Etiam eu mi eu dui pulvinar volutpat. Proin quis est id nulla ultrices volutpat. Fusce volutpat justo in urna mattis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse erat urna, ornare sed aliquet pellentesque, ultrices eget dui. Maecenas metus dolor, sagittis sit amet dignissim vel, posuere et orci. Nunc ac tortor nulla.",
        
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('prev-btn');
const nextBtn = document.querySelector('next-btn');
const randomBtn = document.querySelector('random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    //console.log("shake and bake");
    /*const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;*/
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.imgContent = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    });

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem)
    showPerson();
});