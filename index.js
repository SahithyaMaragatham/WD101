const retrieveEntries = () => {
    let entries = localStorage.getItem("user-Entries");
    return entries ? JSON.parse(entries) : [];
};

let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();

    const tableEntries = entries
        .map(
            (entry) => `<tr>
                <td class="border px-4 py-2">${entry.name}</td>
                <td class="border px-4 py-2">${entry.email}</td>
                <td class="border px-4 py-2">${entry.password}</td>
                <td class="border px-4 py-2">${entry.dob}</td>
                <td class="border px-4 py-2">${entry.acceptedTermsAndConditions}</td>
            </tr>`
        )
        .join("\n");

    const table = `<table class="table-auto w-full">
        <thead>
            <tr>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Password</th>
                <th class="px-4 py-2">Dob</th>
                <th class="px-4 py-2">Accepted terms?</th>
            </tr>
        </thead>
        <tbody>${tableEntries}</tbody>
    </table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;
};

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };

    userEntries.push(entry);
    localStorage.setItem("user-Entries", JSON.stringify(userEntries));
    displayEntries();
};

let userForm = document.getElementById("user-form");
userForm.addEventListener("submit", saveUserForm);

displayEntries();
