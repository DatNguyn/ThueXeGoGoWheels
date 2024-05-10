document.addEventListener("DOMContentLoaded", function () {
  const chuyenCuaToi = document.querySelector(".opt1");
  const lichSuChuyen = document.querySelector(".opt2");
  const content1 = document.querySelector(".content1");
  const content2 = document.querySelector(".content2");

  chuyenCuaToi.addEventListener("click", function () {
    content1.style.display = "flex"; // Hiển thị content1
    content2.style.display = "none"; // Ẩn content2
    chuyenCuaToi.style.backgroundColor = "rgba(128, 128, 128, 0.05)";
    chuyenCuaToi.style.borderBottom = "4px #a0153e solid";
    chuyenCuaToi.style.color = "black";
    lichSuChuyen.style.borderBottom = "1px black solid";
    lichSuChuyen.style.backgroundColor = "rgba(128, 128, 128, 0)";
    lichSuChuyen.style.color = "rgba(0, 0, 0, 0.5)";
  });

  lichSuChuyen.addEventListener("click", function () {
    content1.style.display = "none"; // Ẩn content1
    content2.style.display = "block"; // Hiển thị content2
    lichSuChuyen.style.backgroundColor = "rgba(128, 128, 128, 0.05)";
    lichSuChuyen.style.borderBottom = "4px #a0153e solid";
    lichSuChuyen.style.color = "black";
    chuyenCuaToi.style.borderBottom = "1px black solid";
    chuyenCuaToi.style.backgroundColor = "rgba(128, 128, 128, 0)";
    chuyenCuaToi.style.color = "rgba(0, 0, 0, 0.5)";
  });
});
