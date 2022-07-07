var date = moment().format('dddd, MMMM Do YYYY');
var dateCalendar = moment().calendar();

var prevSearch = [];
$('#search').on("click", function(event) {
    event.preventDefault()
    city = $(".searchBtn").val().trim()
    console.log("FUCK")
    if (city === "") {
        return;
    }
    prevSearch.push(city);
    localStorage.setItem("city", JSON.stringify(prevSearch));
    console.log("HELLLLOOOO")
});
