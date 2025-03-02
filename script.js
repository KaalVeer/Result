function checkForm() {
    let rollCode = document.getElementById("rollCode").value;
    let rollNo = document.getElementById("rollNo").value;
    let captcha = document.getElementById("captcha").value;
    
    if (rollCode === "" || rollNo === "" || captcha === "") {
        alert("Please fill all fields correctly!");
        return;
    }

    // ✅ Popup Open
    document.getElementById("sharePopup").style.display = "flex";
}

// ✅ Close Popup & Load Result After WhatsApp Share
document.getElementById("shareBtn").addEventListener("click", function() {
    let shareUrl = `https://api.whatsapp.com/send?text=Check%20your%20BSEB%20Result%20now!%20Visit%20our%20website.`;
    window.open(shareUrl, "_blank");

    // 🔥 3 Second Wait & Load Result
    setTimeout(() => {
        document.getElementById("sharePopup").style.display = "none";
        window.location.href = "result.html"; // ✅ Result Page Load Karega
    }, 7000);
});

// ✅ Reset Form
function resetForm() {
    document.getElementById("rollCode").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("captcha").value = "";
}