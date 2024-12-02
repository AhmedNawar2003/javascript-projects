var testimonials = [
  {
    paragraph:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    img_Url: "img/97.jpg",
    username: "Veeti Seppanen",
    role: "Director",
  },
  {
    paragraph:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    img_Url: "img/44.jpg",
    username: "June Cha",
    role: "Software Engineer",
  },
  {
    paragraph:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    img_Url: "img/68.jpg",
    username: "Iida Niskanen",
    role: "Data Entry",
  },
  {
    paragraph:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    img_Url: "img/65.jpg",
    username: "Renee Sims",
    role: "Receptionist",
  },
  {
    paragraph:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    img_Url: "img/43.jpg",
    username: "Jonathan Nunfiez",
    role: "Graphic Designer",
  },
  {
    paragraph:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    img_Url: "img/66.jpg",
    username: "Miyah Myles",
    role: "Marketing",
  },
];
let currentIndex = 0;

function displayData() {
  const data = testimonials[currentIndex];
  document.querySelector("#row").innerHTML = `
     <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="progress" id="progress">
              <div
                class="progress-bar"
                role="progressbar"
                
              ></div>
            </div>
            <i class="fa-sharp fa-solid fa-quote-right"></i>
            <p id="testimonial" class="testimonial">
              ${data.paragraph}
            </p>
            <i class="fa-sharp fa-solid fa-quote-left"></i>
          </div>
          <div class="card-img">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="card align-items-end">
                  <img src="${data.img_Url}" alt="" />
                </div>
              </div>
              <div class="col-6">
                <div class="card">
                  <h4 id="name">${data.username}</h4>
                  <p id="role">${data.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
}

function startProgress() {
  let start = 0;
  const progressBar = document.querySelector(".progress-bar");
  const interval = setInterval(() => {
    if (start >= 100) {
      clearInterval(interval);
      currentIndex = (currentIndex + 1) % testimonials.length;
      displayData();
      startProgress();
    } else {
      start++;
      progressBar.style.width = ` ${start}%`;
      progressBar.setAttribute("aria-valuenow", start);
    }
  }, 50);
}
displayData();
startProgress();
