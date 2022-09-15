//Показ Модал окна
$(".btn").on("click", function () {
  $(".hystmodal").css("display", "flex");
});
$(".hystmodal__close").on("click", function () {
  $(".hystmodal").hide();
  $("#check")[0].checked = 0;
});

//Смена содержимого окна при выборе регистрации/входа
let register = $(".nav-button");
register.on("click", function () {
  if (register.html() === "Регистрация") {
    register.html("Вход");
    $("#nav-text").html("Регистрация");
    $(".login").css("display", "flex");
    $(".modal-button").html("Зарегестрироватся");
    $(".check").show();
  } else if (register.html() === "Вход") {
    register.html("Регистрация");
    $("#nav-text").html("Вход");
    $(".login").hide();
    $(".modal-button").html("Войти");
    $(".check").hide();
    $("#check")[0].checked = 0;
  } else if (register.html() === "Sign Up") {
    register.html("Sign In");
    $("#nav-text").html("Sign Up");
    $(".login").css("display", "flex");
    $(".modal-button").html("Sign Up");
    $(".check").show();
  } else if (register.html() === "Sign In") {
    register.html("Sign Up");
    $("#nav-text").html("Sign In");
    $(".login").hide();
    $(".modal-button").html("Sign In");
    $(".check").hide();
    $("#check")[0].checked = 0;
  }
});

//Выведение алерта при нажатии войти/зарегестрироватся
$(".modal-button").on("click", function () {
  if ($("#nav-text").html() === "Регистрация" && $("#check")[0].checked) {
    alert("Вы зарегестрировались!");
  } else if ($("#nav-text").html() === "Регистрация") {
    alert("Подтвердите согласие");
  } else if ($("#nav-text").html() === "Вход") {
    alert("Вы вошли!");
  }
});

//Смена языка
let RusNameMass = new Array();
let RusValMass = new Array();
let EngNameMass = new Array(
  "Makdak",
  "DimSum",
  "Engine",
  "Nya",
  "Point",
  "Cinnabon",
  "PiZZELOVE",
  "Zyu",
  "Bar"
);
let EngValMass = new Array(
  "₽₽ • Burgers",
  "₽ • Japanise • Chinese • Asian",
  "₽ • American • European",
  "₽₽ • Vietnam",
  "₽₽ • Vietnam",
  "₽ • Bakery • Desserts • Cpacakes",
  "₽₽ • Pizza",
  "₽₽ • Japanise",
  "₽₽₽ • European"
);
let counter = 0;

$(".name").each(function () {
  RusNameMass[counter] = $(this).html();
  counter++;
});

counter = 0;

$(".price").each(function () {
  RusValMass[counter] = $(this).html();
  counter++;
});

counter = 0;

$("#language").change(function () {
  if ($("#language").val() === "russian") {
    $(".btn").html("Войти");
    $(".restaurants").html("Рестораны в Москве");
    $(".input").attr("placeholder", "Поиск по ресторанам и кухням");

    if ($(".nav-button").html() === "Sign In") {
      $(".nav-button").html("Вход");
      $("#nav-text").html("Регистрация");
      $(".modal-button").html("Зарегестрироватся");
    } else {
      $(".nav-button").html("Регистрация");
      $("#nav-text").html("Вход");
      $(".modal-button").html("Войти");
    }

    $(".name").each(function () {
      $(this).html(RusNameMass[counter]);
      counter++;
    });
    counter = 0;
    $(".price").each(function () {
      $(this).html(RusValMass[counter]);
      counter++;
    });
    counter = 0;
  } else if ($("#language").val() === "english") {
    $(".btn").html("Sign In");
    $(".restaurants").html("Restaurants in Moskov");
    $(".input").attr("placeholder", "Search in restaurants and kitchens");

    if ($(".nav-button").html() === "Вход") {
      $(".nav-button").html("Sign In");
      $("#nav-text").html("Sign Up");
      $(".modal-button").html("Sign Up");
    } else {
      $(".nav-button").html("Sign Up");
      $("#nav-text").html("Sign In");
      $(".modal-button").html("Sign In");
    }

    $("#check__text").html();
    $(".name").each(function () {
      $(this).html(EngNameMass[counter]);
      counter++;
    });
    counter = 0;
    $(".price").each(function () {
      $(this).html(EngValMass[counter]);
      counter++;
    });
    counter = 0;
  }
});
