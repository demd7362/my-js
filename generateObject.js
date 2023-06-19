function generateObject(attribute) {
            const obj = {};

            document.querySelectorAll(`[${attribute}]`).forEach(el => {
                let target = el.getAttribute(`${attribute}`);
                target = target.split('.');
                let currentObj = obj;
                const length = target.length;

                for (let i = 0; i < length; i++) {
                    const key = target[i];
                    if (/\[\d+\]/.test(key)) { // 배열
                        const index = key.match(/\[(\d+)\]/)[1];
                        const arrayKey = key.split('[')[0];

                        if (currentObj[arrayKey] === undefined) {
                            currentObj[arrayKey] = [];
                        }
                        currentObj = currentObj[arrayKey];
                        if (i === length - 1) {
                            currentObj[index] = el.value;
                        } else {
                            if (currentObj[index] === undefined) {
                                currentObj[index] = {};
                            }
                            currentObj = currentObj[index];
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
                            currentObj = currentObj[key];
                        }
                    }
                }
            });

            return obj;
        }
