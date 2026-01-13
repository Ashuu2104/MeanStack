document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enrollmentForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Sending data:', data);

        try {
            const response = await fetch('http://localhost:3000/api/enrollments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            responseDiv.innerHTML = `<p style="color: green;">Success: ${result.message}</p>`;
            console.log('Success:', result);

        } catch (error) {
            console.error('Full error:', error);
            responseDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    });
});
