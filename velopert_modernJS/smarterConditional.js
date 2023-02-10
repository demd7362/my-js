// 특정 값이 여러 값중 하나인지 확인해야 할 때
function isAnimalBefore(text) {
    return (
        text === "고양이" ||
        text === "개" ||
        text === "거북이" ||
        text === "너구리"
    );
}

function isAnimalAfter(name) {
    const animals = ["고양이", "개", "거북이", "너구리"];
    return animals.includes(name);
}

const isAnimalArrowFunc = (name) =>
    ["고양이", "개", "거북이", "너구리"].includes(name);

// 값에 따라 다른 결과물을 반환 해야 할 때

function getSoundIf(animal) {
    if (animal === "개") return "멍멍";
    if (animal === "고양이") return "애옹";
    if (animal === "호랑이") return "캬옹";
    if (animal === "쥐") return "찍찍";
    return "...?";
}

function getSoundSwitch(animal) {
    switch (animal) {
        case "개":
            return "멍멍";
        case "고양이":
            return "애옹";
        case "호랑이":
            return "캬옹";
        case "쥐":
            return "찍찍";
        default:
            return "...?";
    }
}

function getSoundObject(animal) {
    const sounds = {
        개: "멍멍",
        고양이: "애옹",
        호랑이: "캬옹",
        쥐: "찍찍",
    };
    return sounds[animal] || "...?";
}

function makeSound(animal) { // 값에 따라 실행해야하는 코드 구문이 다를 경우
    const tasks = {
        개() {
            console.log("멍멍");
        },
        고양이() {
            console.log("고양이");
        },
        비둘기() {
            console.log("구구 구 구");
        },
    };
    if (!tasks[animal]) {
        console.log("...?");
        return;
    }
    tasks[animal]();
}
