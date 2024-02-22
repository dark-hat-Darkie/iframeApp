let inputIndex = 0;
let innerFormHTML = [];
var search = location.search.substring(1);
if (search) {
    const data = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    
    if (data?.data) {
        const formData = JSON.parse(data.data);
        let divIndex = 0;
        formData.fields.forEach(field => {
            const { type } = field;
            if (type === 'radio') {
                let innerRadio = `<div class="div-${divIndex} radio-input input-group">`;
                field?.options?.forEach((option, idx) => {
                    innerRadio += `
                                <input name="${field.name}" type="${field.type}" id="${option.toLowerCase()}" required="${field.required}" value="${option}"></input>
                                <label for="${option.toLowerCase()}">${option}</label>
                    `;
                })
                innerRadio += '<span onclick="handleSlide()">>></span></div>'
                innerFormHTML.push(innerRadio);
            } else if (type === 'select') {
                let innerSelect = `
                    <div class="div-${divIndex} select-input input-group">
                        <label for="${field.name}">${field.label}</label>
                        <select name="${field.name}" id="${field.name}">
                `;
                field?.options?.forEach((option, idx) => {
                    innerSelect += `
                            <option value="${option.toLowerCase()}" ${idx === 0 ? 'selected' : ''}>${option}</option>
                    `;
                })
                innerSelect += '</select><span onclick="handleSlide()">>></span></div>';
                innerFormHTML.push(innerSelect);
            } else if (type === 'checkbox') {
                const innerCheckBox = `
                    <div class="div-${divIndex} checkbox-input input-group">
                        <input type="${field.type}" id="${field.name}" name="${field.name}" value="${field.name}">
                        <label for="${field.name}">${field.label}</label>
                        <span onclick="handleSlide()">>></span>
                    </div>
                `;
                innerFormHTML.push(innerCheckBox);
            } else {
                const innerInput = `
                    <div class="div-${divIndex} text-input input-group">
                        <label for="${field.name}">${field.label}</label>
                        <input name="${field.name}" type="${field.type}" id="${field.name}" required="${field.required}" placeholder="${field.placeholder}"></input>
                        <span onclick="handleSlide()">>></span>
                    </div>
                `;
                innerFormHTML.push(innerInput);
            }
            divIndex++;
        });
        innerFormHTML.push(`<div class="input-group"><input type="submit"></input></div`)
        document.querySelector('form').innerHTML = innerFormHTML.join('');
        window.scroll(0, 30)
    }
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    console.log(inputIndex, innerFormHTML.length - 1);
    if (inputIndex < innerFormHTML.length - 1) {
        nextInput();
    } else {
        const data = new FormData(e.target);
        const entries = [...data.entries()];
        let validated = true;
        for (const entry of entries) {
            if (entry[0] === 'email' && !validateEmail(entry[1])) {
                validated = false;
                break;
            }

            if (entry[0] === 'fullName' && !validateName(entry[1])) {
                validated = false;
                break;
            }

            if (!validateGender(entries)) {
                validated = false;
                break;
            }
        }

        console.log(validated)
        if (validated) {
            let result = '';
            [...data.entries()].forEach(entry => {
                const [key, val] = entry;
                result += `${key}: ${val}\n`;
            })
            window.top.postMessage(result, '*')
        } else {
            resetForm();
        }
    }
});

function handleSlide() {
    nextInput();
}

// email validation using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// at least 3 characters long name
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s']{3,}$/;
    return nameRegex.test(name);
}

// check if gender presents in the entries
function validateGender(entries) {
    for (const entry of entries) {
        const [name, value] = entry;
        if (name === 'gender') {
          return true;
        }
    }
    return false;
}

// helper function to reset form on invalid input data
function resetForm() {
    window.scroll(0, 30);
    inputIndex = 0;
}

// helper function that jumps to next input
function nextInput() {
    window.scroll(0,window.scrollY + 200);
    inputIndex++;
}