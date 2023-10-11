function Book(title, author) {
    this.title = title;
    this.author = author;
}

function UI() {}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("li");
    row.innerHTML = `${book.title} by ${book.author}`;
    list.appendChild(row);
};

UI.prototype.clearFields = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
};

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".book-form");
    container.insertAdjacentElement("beforebegin", div);

    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 3000);
};

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const book = new Book(title, author);
    const ui = new UI();

    if (title === "" || author === "") {
        ui.showAlert("Please fill in all fields", "error");
    } else {
        ui.addBookToList(book);

        ui.clearFields();

        ui.showAlert("Book added successfully", "success");
    }
}
