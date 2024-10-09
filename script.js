document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logging in as an Employee or Owner
    const roleSelect = document.getElementById('role');
    const teamSelect = document.getElementById('teamSelect');

    roleSelect.addEventListener('change', function () {
        if (roleSelect.value === 'employee') {
            teamSelect.style.display = 'block';
        } else {
            teamSelect.style.display = 'none';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const role = document.getElementById('role').value;
        const team = document.getElementById('team').value || "";

        if (role === "employee") {
            sessionStorage.setItem('userTeam', team); // Save the team to session storage
            window.location.href = "employee.html";
        } else if (role === "owner") {
            window.location.href = "owner.html";
        }
    });
});
