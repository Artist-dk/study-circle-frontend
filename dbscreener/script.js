document.addEventListener('DOMContentLoaded', function() {
    fetchData('/api/users', 'usersTable');
    fetchData('/api/books', 'booksTable');
});

function fetchData(apiUrl, tableId) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector(`#${tableId} tbody`);
            tableBody.innerHTML = ''; // Clear existing data
            
            data.forEach(row => {
                const tr = document.createElement('tr');
                Object.values(row).forEach(value => {
                    const td = document.createElement('td');
                    td.textContent = value;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
