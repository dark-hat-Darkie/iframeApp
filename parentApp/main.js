async function handleOpenForm() {
    const response = await fetch('https://mocki.io/v1/77a3df71-02b1-4fb2-b3bc-d006652a36f7');
    const data = await response.json();
    const iframe = document.querySelector('.iframeContent')
    iframe.setAttribute('src', `http://127.0.0.1:5500/childApp/index.html?data=${JSON.stringify(data)}`)
}
window.onmessage = function(e) {
    window.alert(e.data)
};