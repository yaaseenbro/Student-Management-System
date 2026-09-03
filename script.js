/* ==============================
   NOTIFICATION
============================== */

function showNotification() {
    alert("You have 3 new notifications!");
}


/* ==============================
   STUDENT MODAL
============================== */

function openStudentModal() {
    const modal = document.getElementById("studentModal");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeStudentModal() {
    const modal = document.getElementById("studentModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* ==============================
   ADD STUDENT
============================== */

function addStudent(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const id = document.getElementById("studentId").value;
    const email = document.getElementById("studentEmail").value;
    const course = document.getElementById("studentCourse").value;
    const year = document.getElementById("studentYear").value;

    const table = document.querySelector("#studentTable tbody");

    if (!table) {
        return;
    }

    const initials = name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <div class="student-info">
                <div class="student-avatar">${initials}</div>
                <div>
                    <strong>${name}</strong>
                    <small>New Student</small>
                </div>
            </div>
        </td>

        <td>${id}</td>

        <td>${course}</td>

        <td>${email}</td>

        <td>${year}</td>

        <td>
            <span class="badge success">Active</span>
        </td>

        <td>
            <button class="delete-btn" onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    document.querySelector("#studentModal form").reset();

    closeStudentModal();

    alert("Student added successfully!");
}


/* ==============================
   DELETE STUDENT
============================== */

function deleteStudent(button) {

    const confirmation = confirm(
        "Are you sure you want to delete this student?"
    );

    if (confirmation) {

        const row = button.closest("tr");

        if (row) {
            row.remove();
        }

        alert("Student deleted successfully!");
    }
}


/* ==============================
   SEARCH STUDENTS
============================== */

function searchStudents() {

    const input = document.getElementById("studentSearch");

    if (!input) {
        return;
    }

    const searchValue = input.value.toLowerCase();

    const rows = document.querySelectorAll("#studentTable tbody tr");

    rows.forEach(function(row) {

        const text = row.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}


/* ==============================
   GENERAL TABLE SEARCH
============================== */

function searchTable(input) {

    const searchValue = input.value.toLowerCase();

    const table = input.closest(".panel");

    if (!table) {
        return;
    }

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(function(row) {

        const text = row.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}


/* ==============================
   ADD COURSE
============================== */

function addCourse() {

    const courseName = prompt("Enter the new course name:");

    if (courseName && courseName.trim() !== "") {

        alert(
            "Course '" +
            courseName +
            "' added successfully!"
        );

    }

}


/* ==============================
   CLOSE MODAL WHEN CLICKING OUTSIDE
============================== */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("studentModal");

    if (modal && event.target === modal) {
        closeStudentModal();
    }

});