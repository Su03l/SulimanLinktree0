function copyToClipboard(event, url) {
    // Prevent the button click from opening the link
    event.stopPropagation();

    // Try modern clipboard API
    navigator.clipboard.writeText(url).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textarea);
    });

    // Show Lordicon attribution in console
    console.log('Icons by Lordicon.com');
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

<script>
const switchToggle = document.getElementById('theme-switch');

switchToggle.addEventListener('change', () => {
    if (switchToggle.checked) {
        // Light Theme
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelectorAll('.link-button').forEach(btn => {
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
        });
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.style.borderColor = "white";
            icon.style.color = "white";
        });
    } else {
        // Dark Theme
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelectorAll('.link-button').forEach(btn => {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        });
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.style.borderColor = "black";
            icon.style.color = "black";
        });
    }
});
</script>

