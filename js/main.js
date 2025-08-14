// alert("연결")
window.addEventListener("load", function () {
  // 각각의 요소를 변수에 담아놓는다.
  const nav = document.querySelector(".nav");
  const headerBg = document.querySelector(".header-bg");
  // nav 마우스 엔터, 즉 호버했을때
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
  //   nav 마우스 리브, 즉 호버를 안 했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});
