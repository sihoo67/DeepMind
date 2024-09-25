function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function inviteBot() {
    // 초대 링크로 사용자를 이동시키는 기능
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1284086823533940757"; // 여기에 봇 초대 링크를 입력하세요
}
