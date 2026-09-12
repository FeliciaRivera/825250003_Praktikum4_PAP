// Mengambil tombol dari HTML
const tampilButton = document.getElementById("tampilButton");
const hapusButton = document.getElementById("hapusButton");

// Mengambil tempat untuk menampilkan Student ID
const idContainer = document.getElementById("id-container");


// Tombol 1: Menampilkan Student ID
tampilButton.addEventListener("click", function() {

    idContainer.innerHTML = `
        <div class="student-id">
            <h3>STUDENT ID</h3>
            <p><strong>Nama:</strong> Felicia Rivera</p>
            <p><strong>NIM:</strong> 825250003</p>
        </div>
    `;

});


// Tombol 2: Menghapus Student ID
hapusButton.addEventListener("click", function() {

    idContainer.innerHTML = "";

});