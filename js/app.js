const gallaryItems = document.getElementsByClassName("square");

const bar = document.getElementById("bar");
const title = document.getElementById("title");

console.log(bar);

title.addEventListener("click", () => {
  TweenMax.to(title, {
    duration: 0.6,
    alpha: 0,
    x: -150,
  });
});

title.addEventListener("mouseover", () => {
  TweenMax.to(title, {
    duration: 0.1,
    color: "#080",
    fontSize: 50,
  });
});

title.addEventListener("mouseout", () => {
  TweenMax.to(title, {
    duration: 0.1,
    color: "#05225c",
    fontSize: 32,
  });
});

bar.addEventListener("click", () => {
  TweenMax.to(bar, {
    scaleX: 0,
    scaleY: 0,
    duration: 0.6,
    transformOrigin: "50% 50%",
  });
});

bar.addEventListener("mouseover", () => {
  TweenMax.to(bar, {
    duration: 0.6,
    scaleY: 0.5,
  });
});

bar.addEventListener("mouseout", () => {
  TweenMax.to(bar, {
    duration: 0.6,
    scaleY: 1,
    color: "#05225c",
  });
});

function init() {
  for (let i = 0; i < gallaryItems.length; i++) {
    let square = gallaryItems[i];
    TweenMax.from(gallaryItems[i], {
      duration: 0.7,
      delay: i * 0.2,
      alpha: 0,
    });
    TweenMax.from(gallaryItems[i], {
      duration: 0.7,
      delay: i * 0.2,
      y: -25,
      ease: "bounce",
    });

    square.addEventListener("click", () => {
      TweenMax.to(square, {
        alpha: 0,
        y: 500,
        duration: 0.7,
        ease: "expo.in",
      });
    });

    square.addEventListener("mouseover", () => {
      TweenMax.to(square, {
        backgroundColor: "#059",
        scale: 1.05,
        duration: 0.5,
      });
    });

    square.addEventListener("mouseout", () => {
      TweenMax.to(square, {
        backgroundColor: "#92278f",
        scale: 1,
        duration: 0.5,
      });
    });
  }

  TweenMax.from(title, {
    duration: 0.6,
    alpha: 0,
    x: -150,
  });

  TweenMax.from(bar, {
    duration: 0.6,
    alpha: 0,
    scaleX: 0,
  });
}

init();
