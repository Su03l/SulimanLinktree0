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
