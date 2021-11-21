// set copy url
function set_copy_url(score) {
    let location = window.location.href;
    let end_id = location.indexOf("#");
    if (end_id>0)
        location = location.substring(0, end_id);
    let content = "Hi~我在互联网公司财务风险测评网上评估了财务状况，获得了 " + score +" 分. 你也来试一下吧！" + location;
    document.getElementById("share_res").setAttribute("data-clipboard-text", content);
    // cancel repeated show of copy collapse
    document.getElementById("share_res").removeAttribute("data-bs-target");
}

// clear data
document.getElementById("clear_data").addEventListener("click", function () {
    window.location.href = "/";
});

//close copy collapse
function close_collapse() {
    document.getElementById("share_res").setAttribute("data-bs-target", "#copy_tip");
}

// generate exclusive_link
function exe_link() {
    const el = document.getElementById("exclusive_link");
    if (!el.getAttribute("href")) {
        let location = window.location.href;
        let end_id = location.indexOf("#");
        if (end_id>0)
            location = location.substring(0, end_id);
        el.setAttribute("href", location)
    }
}

// INITIALIZATION OF CLIPBOARD
const clipboard = new ClipboardJS('.clipboard')