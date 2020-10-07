var startDateElem = document.getElementById("start-date");
var endDateElem = document.getElementById("end-date");
var adultNumberElem = document.getElementById("adult-number");
var childNumberElem = document.getElementById("child-number");
var fullNameElem = document.getElementById("full-name");
var phoneNumberElem = document.getElementById("phone-number");
var emailElem = document.getElementById("email");
var roomSelectionElem = document.getElementById("room-selection");

Date.prototype.addHours = function (hours) {
    this.setHours(this.getHours() + parseInt(hours));
    return this;
};

var minDate = new Date().addHours(8).toISOString().substring(0, 10);
console.log("minDate:", minDate);

startDateElem.min = minDate;
endDateElem.min = minDate;

startDateElem.addEventListener("change", function () {
    let minDate = new Date(startDateElem.value)
        .addHours(8)
        .toISOString()
        .substring(0, 10);
    endDateElem.min = minDate;
    if (startDateElem.value > endDateElem.value) {
        endDateElem.value = startDateElem.value;
    }
});

document
    .getElementById("book-room")
    .addEventListener("click", function (event) {
        event.preventDefault();
        booking();
    });

function booking() {
    var startDate = startDateElem.value;
    var errorId = "";
    var errorMessage = "";
    var endDate = endDateElem.value;
    var adultNumber = parseInt(adultNumberElem.value);
    var childNumber = parseInt(childNumberElem.value);
    if (!childNumber) {
        childNumber = 0;
    }
    var fullName = fullNameElem.value;
    var phoneNumber = phoneNumberElem.value;
    var email = emailElem.value;
    var selectedRoom = roomSelectionElem.value;
    var check = true;
    if (!startDate) {
        errorId = "error-start-date";
        errorMessage = "Chọn ngày";
        startDateElem.focus();
        check = false;
    } else {
        document.getElementById("error-start-date").innerText = "";
    }

    if (check && !endDate) {
        errorId = "error-end-date";
        errorMessage = "Chọn ngày";
        endDateElem.focus();
        check = false;
    } else {
        document.getElementById("error-end-date").innerText = "";
    }

    if (check && !adultNumber) {
        errorId = "error-adult-number";
        errorMessage = "Chọn số lượng";
        adultNumberElem.focus();
        check = false;
    } else {
        document.getElementById("error-adult-number").innerText = "";
    }

    if (check && !fullName) {
        errorId = "error-full-name";
        errorMessage = "Nhập tên";
        fullNameElem.focus();
        check = false;
    } else {
        document.getElementById("error-full-name").innerText = "";
    }

    if (check && !fullName) {
        errorId = "error-full-name";
        errorMessage = "Nhập tên";
        fullNameElem.focus();
        check = false;
    } else {
        document.getElementById("error-full-name").innerText = "";
    }

    if (check && !phoneNumber) {
        errorId = "error-phone-number";
        errorMessage = "Nhập tên";
        phoneNumberElem.focus();
        check = false;
    } else {
        document.getElementById("error-phone-number").innerText = "";
    }

    if (check && !email) {
        errorId = "error-email";
        errorMessage = "Nhập Mail (Nếu chưa có, gọi điện để đặt phòng)";
        phoneNumberElem.focus();
        check = false;
    } else {
        document.getElementById("error-email").innerText = "";
    }
    if (!check) {
        document.getElementById(errorId).innerText = errorMessage;
    } else {
        fetch(
            `/booking?startDate=${startDate}&endDate=${endDate}&adultNumber=${adultNumber}&childNumber=${childNumber}&fullName=${fullName}&phoneNumber=${phoneNumber}&email=${email}&room=${selectedRoom}`
        )
            .then((response) => response.json())
            .then((data) =>
                alert(
                    "Book room successful! If you not receive a email, please contact us by phone number to support(0964526985)"
                )
            );
    }
}
