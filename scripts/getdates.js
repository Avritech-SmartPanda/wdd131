function getDates() {
    let currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;


    let lastModified = document.lastModified;
    if (lastModified) {
        document.getElementById("lastModified").textContent = lastModified;
    }
}
getDates();