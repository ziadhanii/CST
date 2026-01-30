document.addEventListener("DOMContentLoaded", function () {
    var newsArray = [];

    var newsList = document.getElementById("newsList");

    var addBtn = document.getElementById("addBtn");
    var clearBtn = document.getElementById("clearBtn");

    var searchInput = document.getElementById("searchInput");
    var newsInput = document.getElementById("newsInput");

    addBtn.addEventListener("click", function () {
        var value = newsInput.value.trim();

        if (value === "" || value === null) {
            alert("Enter news first");
            return;
        }

        var types = document.getElementsByName("type");
        var selectedType = "";

        for (var i = 0; i < types.length; i++) {
            if (types[i].checked) {
                selectedType = types[i].value;
            }
        }

        newsArray.push({
            type: selectedType,
            text: value
        });

        newsInput.value = "";
        newsInput.focus();

        render(newsArray);
    });

    searchInput.addEventListener("keyup", function () {

        var term = this.value.toLowerCase();

        var filtered = newsArray.filter(function (item) {
            return item.text.toLowerCase().indexOf(term) !== -1;
        });

        render(filtered);

    });

    clearBtn.addEventListener("click", function () {
        newsArray = [];
        render(newsArray);
    });

    function render(list) {

        newsList.innerHTML = "";

        for (var i = 0; i < list.length; i++) {

            var li = document.createElement("li");

            li.className = list[i].type;

            li.innerHTML = list[i].text;

            newsList.appendChild(li);
        }
    }

});

