function generateObject(attribute) {
            const obj = {};

            document.querySelectorAll(`[${attribute}]`).forEach(el => {
                let target = el.getAttribute(attribute);
                target = target.split('.');
                let currentObj = obj; // 현재 작업할 객체를 담을 변수 currentObj 
                const length = target.length;

                for (let i = 0; i < length; i++) {
                    const key = target[i];
                    if (/\[\d+\]/.test(key)) { // 배열
                        const index = key.match(/\[(\d+)\]/)[1];
                        const arrayKey = key.split('[')[0];

                        if (currentObj[arrayKey] === undefined) {
                            currentObj[arrayKey] = [];
                        }
                        currentObj = currentObj[arrayKey]; // currentObj는 배열이 됨
                        if (i === length - 1) {
                            currentObj[index] = el.value; // ex) test1.test2[0] 일 시 test1 객체 안에 존재하는 test2[0]의 값은 el.value
                        } else {
                            if (currentObj[index] === undefined) {
                                currentObj[index] = {};
                            }
                            currentObj = currentObj[index]; // 다음 i에 사용할 객체를 대입
                        }
                    } else if(key.includes('[]')){ // 빈 배열
                        const arrayKey = key.split('[]')[0];

                        if (currentObj[arrayKey] === undefined) {
                            currentObj[arrayKey] = [];
                        }
                        currentObj = currentObj[arrayKey];
                    } else { // 객체
                        if (currentObj[key] === undefined) {
                            currentObj[key] = {};
                        }
                        if (i === length - 1) {
                            currentObj[key] = el.value;
                        } else {
                            currentObj = currentObj[key]; // 다음 i에 사용할 객체를 대입
                        }
                    }
                }
            });

            return obj;
        }
