var personalData = {
    mk: {
        Dory: {
            name: "Dory",
            age: 27,
            interest: "玩狗",
        },

        Vill: {
            name: "Vill",
            age: 26,
            interest: "玩水",
        },

        Milly: {
            name: "Milly",
            age: 30,
            interest: "玩小孩",
        }
    },

    ad: {
        Tammy: {
            name: "Tammy",
            age: 30,
            interest: "玩不知道",
        },

        Nobby: {
            name: "Nobby",
            age: 32,
            interest: "玩公仔",
        },

        Aya: {
            name: "Aya",
            age: 36,
            interest: "玩貓",
        }
    },

    design: {
        Estela: {
            name: "Estela",
            age: 25,
            interest: "玩君君",
        },

        Jun: {
            name: "Jun",
            age: 26,
            interest: "玩毛毛扣",
        },

        Peiya: {
            name: "Peiya",
            age: 29,
            interest: "玩飛機",
        }
    },
}

var q1 = prompt("請問您想要執行哪個動作？ \n 1.查詢人員 \n 2.新增人員 \n 3.刪除人員");
if (q1 === 1){
    var q1Search = prompt("請輸入組別名稱(全部小寫)");
    if (q1Search === "mk"){
        var q1SearchName = prompt("請輸入人員姓名(開頭大寫)");
        searchAnswer = console.log(personalData.mk[q1SearchName])
        if (q1SearchName = searchAnswer )
    }
}